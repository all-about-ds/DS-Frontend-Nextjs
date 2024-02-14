import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const fadeIn = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`;

export const HeaderContentBox = styled.div<{ isSearching: boolean }>`
  width: 210px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  .search-icon {
    margin-top: 4px;

    svg {
      fill: ${(props) => (props.isSearching ? "#FFFFFF" : "#B9B9B9")};
    }
  }

  .home-icon {
    @media screen and (max-width: 630px) {
      display: none;
      width: 150px;
    }
  }

  @media screen and (max-width: 1050px) {
    justify-content: right;
    gap: 10px;
  }

  @media screen and (max-width: 630px) {
    width: 100px;
  }
`;

export const UserProfile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
`;

export const UserName = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  cursor: pointer;
  white-space: nowrap;
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export const SearchBar = styled.div`
  width: 30vw;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2f3031;
  border-radius: 10px;
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  padding: 0 10px;
  gap: 0.5rem;
  box-sizing: border-box;

  @media screen and (max-width: 1050px) {
    width: 41vw;
  }

  @media screen and (max-width: 630px) {
    width: 36vw;

    .input-search-icon {
      display: none;
    }
  }
`;

export const SearchArea = styled.input`
  border: none;
  background: #2f3031;
  height: 30px;
  width: 100%;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.9);

  ::placeholder {
    color: rgba(255, 255, 255, 0.3);
    font-size: 15px;
  }
`;
