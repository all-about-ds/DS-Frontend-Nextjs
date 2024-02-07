"use client";

import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        *, *::after, *::before {
          box-sizing: border-box;
        }

        @font-face {
          font-family: "AppleSDGothicNeoM00";
          font-style: normal;
          src: url("/font/AppleSDGothicNeoM.woff") format("woff"),
            url("/font/AppleSDGothicNeoM.woff2") format("font-woff2");
        }

        body {
          background-color: #101010;

          * {
            font-family: "AppleSDGothicNeoM00", sans-serif;
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }
        }

        a {
          text-decoration: none;
          color: #ffffff;
        }

        input {
          :focus {
            outline: none;
          }
        }
      `}
    />
  );
}
