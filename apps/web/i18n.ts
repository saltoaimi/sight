import { getRequestConfig } from "next-intl/server";
import { messages, defaultLocale, type Locale } from "@sight/i18n";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = ((await requestLocale) || defaultLocale) as Locale;

  return {
    locale,
    messages: messages[locale],
  };
});
