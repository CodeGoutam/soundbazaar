import { Home } from "@/ui/Home/Home";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <Home locale={locale} />;
}
