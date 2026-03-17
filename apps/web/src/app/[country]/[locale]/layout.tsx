import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { getDirection, type Locale } from "@sight/i18n";
import { countryConfig, type Country } from "@sight/shared";
import { CountryProvider } from "@/lib/country-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "../../globals.css";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; locale: string }>;
}): Promise<Metadata> {
  const { country } = await params;
  const config = countryConfig[country as Country] || countryConfig.ae;
  return {
    title: `Sight — Compare Financial Products in ${config.nameEn}`,
    description: `Compare loans, credit cards, insurance, and more across ${config.nameEn} banks and providers.`,
  };
}

export default async function CountryLocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ country: string; locale: string }>;
}) {
  const { country, locale } = await params;
  const messages = await getMessages();
  const dir = getDirection(locale as Locale);

  return (
    <html lang={locale} dir={dir} className={comfortaa.variable}>
      <body className={`font-body bg-white ${dir === "rtl" ? "font-arabic" : ""}`}>
        <NextIntlClientProvider messages={messages}>
          <CountryProvider country={country as Country}>
            <Navbar country={country as Country} />
            <main className="min-h-screen">{children}</main>
            <Footer country={country as Country} />
          </CountryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
