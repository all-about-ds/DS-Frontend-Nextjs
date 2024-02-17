"use client";

import * as S from "./style";
import * as Image from "@/app/_assets";
import { useEffect, useRef, useState } from "react";
import { Unsubscribe, off, onValue, ref, set } from "@firebase/database";
import { useRecoilState, useRecoilValue } from "recoil";
import { GroupDataAtom, UserDataAtomFamily, UserIdAtom } from "@/app/_atoms";
import { db } from "@/app/_shared/firebase";
import { ChatMessageType } from "@/app/_types/chat.type";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { GroupInformationType } from "@/app/_types/group.type";
import GroupPageHeader from "@/app/_components/common/header/group-page";

export default function GroupChattingPage({ groupId }: { groupId: number }) {
  const [userChat, setUserChat] = useState<string>("");
  const [chat, setChat] = useState<ChatMessageType[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [userId] = useRecoilState(UserIdAtom);
  const [userName] = useRecoilState(UserDataAtomFamily("name"));
  const [userImage] = useRecoilState(UserDataAtomFamily("image"));
  const groupData = useRecoilValue(GroupDataAtom);
  const [data, setData] = useState<GroupInformationType>();
  const [endNum, setEndNum] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const checkServerClientSync = () => {
      if (
        groupData?.name !== "" &&
        !groupData?.memberList.some((member) => member.name === userName) &&
        !groupData?.head.name === userName
      ) {
        router.replace("/");
        toast.error("잘못된 접근입니다");
      } else if (groupData.name !== "") {
        setData(groupData);
      }
    };

    checkServerClientSync();
  }, [groupData]);

  function formatTime(timestamp: number): string {
    const date = new Date(timestamp);
    const now = new Date();
    const timeDiff = now.getTime() - date.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysDiff === 0) {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "오후" : "오전";
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes.toString().padStart(2, "0");
      return `${ampm} ${formattedHours}:${formattedMinutes}`;
    } else if (daysDiff === 1) {
      return "어제";
    } else {
      return `${daysDiff}일 전`;
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserChat(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (userChat !== "") {
        set(ref(db, `chattings/${groupData?.name}/chat/` + `${endNum + 1}`), {
          img: userImage ? userImage : null,
          name: userName,
          chat: userChat,
          createdAt: Date.now(),
          userId,
        });
        setUserChat("");
      }
    }
  };

  const sendChat = () => {
    if (userChat !== "") {
      set(ref(db, `chattings/${groupData?.name}/chat/` + `${endNum + 1}`), {
        img: userImage ? userImage : null,
        name: userName,
        chat: userChat,
        createdAt: Date.now(),
        userId,
      });
      setUserChat("");
    }
  };

  useEffect(() => {
    const chatRef = ref(db, `chattings/${groupData?.name}/chat`);

    const unscribe: Unsubscribe = onValue(chatRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messages: ChatMessageType[] = Object.values(data);
        setEndNum(messages.length);
        setChat(messages);
      }
    });

    return () => {
      off(chatRef, "value", unscribe);
    };
  }, []);

  useEffect(() => {
    scrollRef.current!.scrollTop = scrollRef.current!.scrollHeight;
  }, [chat]);

  return (
    <>
      <S.GroupChattingLayout>
        <S.ChattingLayout>
          <GroupPageHeader idx={groupId} />
          <S.ChattingWrapper ref={scrollRef}>
            {chat &&
              chat.map((data: ChatMessageType, idx) => (
                <div key={idx}>
                  {data.userId !== userId && (
                    <S.ChatWrapper>
                      <S.MemberWrapper>
                        <S.MemberBox>
                          {!data.img && <Image.ChattingDefaultProfileImage />}
                          {data.img && <S.MemberProfile src={data.img} />}
                          <S.MemberName>{data.name}</S.MemberName>
                        </S.MemberBox>
                        <S.ChattingBox>
                          <S.Chatting>
                            <S.ChattingText>{data.chat}</S.ChattingText>
                          </S.Chatting>
                          <S.Time>{formatTime(data.createdAt)}</S.Time>
                        </S.ChattingBox>
                      </S.MemberWrapper>
                      <div></div>
                    </S.ChatWrapper>
                  )}
                  {data.userId === userId && (
                    <S.ChatWrapper>
                      <div></div>
                      <S.MyChatBox>
                        <S.MyChatting>
                          <S.MyChatText>{data.chat}</S.MyChatText>
                        </S.MyChatting>
                        <S.MyChatTime>
                          {formatTime(data.createdAt)}
                        </S.MyChatTime>
                      </S.MyChatBox>
                    </S.ChatWrapper>
                  )}
                </div>
              ))}
          </S.ChattingWrapper>
          <S.InputBox>
            <S.InputInnerBox>
              <Image.LongRectengleIcon />
              <S.Input
                onChange={onChange}
                onKeyPress={handleKeyPress}
                value={userChat}
                autoFocus={true}
              />
              <div style={{ cursor: "pointer" }} onClick={sendChat}>
                <Image.SubmitArrowIcon />
              </div>
            </S.InputInnerBox>
          </S.InputBox>
        </S.ChattingLayout>
      </S.GroupChattingLayout>
    </>
  );
}
