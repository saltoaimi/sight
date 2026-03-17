import type { Country } from "@sight/shared";
import { categoryMap as aeMap } from "./ae-index";
import { categoryMap as saMap } from "./sa-index";

export function getStaticProducts(category: string, country: Country = "ae"): any[] {
  const countryData = country === "sa" ? saMap : aeMap;
  return countryData[category] ?? [];
}
