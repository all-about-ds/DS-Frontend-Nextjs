import styled from "@emotion/styled";

export const LoadingAnimation = styled.div<{ isLoading: boolean }>`
  .spinner {
    display: ${(e) => (e.isLoading ? "inline-block" : "none")};
    position: absolute;
    width: 80px;
    height: 80px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -135%);
  }

  .spinner div {
    animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  .spinner div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #7848de;
    margin: -4px 0 0 -4px;
  }

  .spinner div:nth-of-type(1) {
    animation-delay: -0.036s;
  }
  .spinner div:nth-of-type(1):after {
    top: 63px;
    left: 63px;
  }
  .spinner div:nth-of-type(2) {
    animation-delay: -0.072s;
  }
  .spinner div:nth-of-type(2):after {
    top: 68px;
    left: 56px;
  }
  .spinner div:nth-of-type(3) {
    animation-delay: -0.108s;
  }
  .spinner div:nth-of-type(3):after {
    top: 71px;
    left: 48px;
  }
  .spinner div:nth-of-type(4) {
    animation-delay: -0.144s;
  }
  .spinner div:nth-of-type(4):after {
    top: 72px;
    left: 40px;
  }
  .spinner div:nth-of-type(5) {
    animation-delay: -0.18s;
  }
  .spinner div:nth-of-type(5):after {
    top: 71px;
    left: 32px;
  }
  .spinner div:nth-of-type(6) {
    animation-delay: -0.216s;
  }
  .spinner div:nth-of-type(6):after {
    top: 68px;
    left: 24px;
  }
  .spinner div:nth-of-type(7) {
    animation-delay: -0.252s;
  }
  .spinner div:nth-of-type(7):after {
    top: 63px;
    left: 17px;
  }
  .spinner div:nth-of-type(8) {
    animation-delay: -0.288s;
  }
  .spinner div:nth-of-type(8):after {
    top: 56px;
    left: 12px;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
