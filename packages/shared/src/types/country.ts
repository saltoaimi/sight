export type Country = "ae" | "sa";
export const countries: Country[] = ["ae", "sa"];
export const defaultCountry: Country = "ae";

export const countryConfig: Record<Country, {
  nameEn: string;
  nameAr: string;
  currency: string;
  currencySymbol: string;
  flag: string;
  regulators: string[];
  creditBureau: string;
}> = {
  ae: {
    nameEn: "UAE",
    nameAr: "\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A",
    currency: "AED",
    currencySymbol: "AED",
    flag: "\uD83C\uDDE6\uD83C\uDDEA",
    regulators: ["CBUAE", "SCA", "IA"],
    creditBureau: "AECB",
  },
  sa: {
    nameEn: "Saudi Arabia",
    nameAr: "\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629",
    currency: "SAR",
    currencySymbol: "SAR",
    flag: "\uD83C\uDDF8\uD83C\uDDE6",
    regulators: ["SAMA", "CMA", "CHI"],
    creditBureau: "SIMAH",
  },
};
