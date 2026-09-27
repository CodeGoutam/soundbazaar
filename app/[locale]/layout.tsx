import { getMessages } from "next-intl/server";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";
import { Navbar } from "@/components/NavBar/NavBar";
import MainLayoutWrapper from "@/components/MainLayoutWrapper/MainLayoutWrapper";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Change this to a Promise
}) {
  // Await the params first
  const { locale } = await params;
  const messages = await getMessages({ locale: locale });

  return (
    <>
      <ThemeProviderWrapper messages={messages}>
        <Navbar />
        <MainLayoutWrapper>{children}</MainLayoutWrapper>
      </ThemeProviderWrapper>
    </>
  );
}
