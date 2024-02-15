import { SearchAtom, UserDataAtomFamily } from "@/app/_atoms";
import { useRecoilState } from "recoil";
import * as S from "./style";
import * as Image from "@/app/_assets/index";
import { useEffect, useState } from "react";
import userRequest from "@/app/_api/request/user.request";
import { usePathname, useRouter } from "next/navigation";

export default function LoggedInHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const [isSearching, setIsSearching] = useState(false);
  const [searchValues, setSearchValues] = useRecoilState(SearchAtom);
  const [userName, setUserName] = useRecoilState(UserDataAtomFamily("name"));
  const [userImage, setUserImage] = useRecoilState(UserDataAtomFamily("image"));

  const getUser = async () => {
    try {
      const response: any = await userRequest.getHeaderData();

      setUserName(response.data.name);
      setUserImage(response.data.img);
    } catch (e) {
      Promise.reject(e);
    }
  };

  useEffect(() => {
    getUser();
  }, [pathname]);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValues((oldValue) => ({
      ...oldValue,
      keyword: e.target.value,
    }));
  };

  const onPressEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      if (!e.nativeEvent.isComposing) {
        e.preventDefault();
        setSearchValues((oldValue) => ({
          ...oldValue,
          isSearchRequested: true,
        }));
      }
    }
  };

  return (
    <>
      {isSearching && (
        <S.SearchBar>
          <div style={{ marginTop: 4 }} className="input-search-icon">
            <Image.InputSearchIcon />
          </div>
          <S.SearchArea
            placeholder="찾고 싶은 그룹의 이름을 입력해주세요."
            onChange={onSearch}
            value={searchValues.keyword}
            onKeyDown={onPressEnterKey}
            autoFocus={true}
          ></S.SearchArea>
        </S.SearchBar>
      )}
      <S.HeaderContentBox isSearching={isSearching}>
        <div
          className="search-icon"
          onClick={() => setIsSearching(!isSearching)}
        >
          <Image.HeaderSearchIcon />
        </div>
        <div className="home-icon" onClick={() => router.replace("/")}>
          <Image.HomeIcon />
        </div>
        <div onClick={() => router.replace("/group/create")}>
          <Image.MakeGroupIcon />
        </div>
        {!userImage && (
          <div
            onClick={() => router.push("/my-page")}
            style={{ cursor: "pointer" }}
          >
            <Image.DefaultProfileImage />
          </div>
        )}
        {userImage && (
          <S.UserProfile
            src={userImage}
            alt="유저 프로필"
            onClick={() => router.push("/my-page")}
          />
        )}
        <S.UserName>{userName}님</S.UserName>
      </S.HeaderContentBox>
    </>
  );
}
