import * as S from "./style";
import * as Image from "@/app/_assets/index";

export default function LoggedInHeader() {
  return (
    <>
      <S.SearchBar>
        <div style={{ marginTop: 4 }} className="search">
          <Image.InputSearchIcon />
        </div>
        <S.SearchArea placeholder="찾고 싶은 그룹의 이름을 입력해주세요."></S.SearchArea>
      </S.SearchBar>
      <S.HeaderContentBox isSearching={false}>
        <div className="search">
          <Image.HeaderSearchIcon />
        </div>
        <div className="home">
          <Image.HomeIcon />
        </div>
        <div>
          <Image.MakeGroupIcon />
        </div>
        <div style={{ cursor: "pointer" }}>
          <Image.DefaultProfileImage />
        </div>
        <S.UserName>오종진님</S.UserName>
      </S.HeaderContentBox>
    </>
  );
}
