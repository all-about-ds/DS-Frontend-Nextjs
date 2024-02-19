import { Metadata } from "next";
import GlobalStyle from "./global-style";
import RecoilRootWrapper from "./recoil-root-wrapper";
import ToastProvider from "./toast-provider";
import QueryProvider from "./query-provider";

export const metadata: Metadata = {
  title: "DS | 홈",
  description:
    "다양한 사람들과 간단하게 스터디를 맺고 동기부여를 주고 받으며 함께 성장하는 그룹 스터디 웹 서비스입니다.",
  icons: "/ds.ico",
  openGraph: {
    title: "DS | 홈",
    description:
      "다양한 사람들과 간단하게 스터디를 맺고 동기부여를 주고 받으며 함께 성장하는 그룹 스터디 웹 서비스입니다.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <RecoilRootWrapper>
        <GlobalStyle />
        <body>
          <QueryProvider>
            <ToastProvider>{children}</ToastProvider>
          </QueryProvider>
        </body>
      </RecoilRootWrapper>
    </html>
  );
}
