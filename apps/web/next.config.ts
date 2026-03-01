import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const nextConfig = {
  transpilePackages: [
    "@sight/shared",
    "@sight/i18n",
    "@sight/ui",
    "@sight/validators",
  ],
};

export default withNextIntl(nextConfig);
