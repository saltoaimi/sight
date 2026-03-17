import { sid } from "../_helpers";
import { providers } from "../_providers";

export const tvStreaming: any[] = [
  {
    id: sid("tv", 1),
    category: "tv_streaming",
    nameEn: "du TV Basic Package",
    nameAr: "باقة دو تي في الأساسية من دو",
    descriptionEn: "Entry-level TV package from du with local and international channels, on-demand content, and a set-top box.",
    provider: providers.du,
    islamicCompliant: false,
    imageUrl: null,
    priceMonthly: "49",
    features: [
      { en: "100+ local and international channels" },
      { en: "On-demand movies and series" },
      { en: "Free set-top box" },
      { en: "7-day catch-up TV" },
    ],
    fees: [
      { nameEn: "Monthly Subscription", amount: 49, type: "fixed" },
    ],
  },
  {
    id: sid("tv", 2),
    category: "tv_streaming",
    nameEn: "du TV Premium Package",
    nameAr: "باقة دو تي في المميزة من دو",
    descriptionEn: "Premium TV entertainment from du with 300+ channels, OSN streaming, and sports content.",
    provider: providers.du,
    islamicCompliant: false,
    imageUrl: null,
    priceMonthly: "149",
    features: [
      { en: "300+ premium channels" },
      { en: "OSN streaming included" },
      { en: "beIN Sports channels" },
      { en: "4K content available" },
      { en: "Multi-room viewing option" },
    ],
    fees: [
      { nameEn: "Monthly Subscription", amount: 149, type: "fixed" },
    ],
  },
  {
    id: sid("tv", 3),
    category: "tv_streaming",
    nameEn: "e& eLife TV Entertainment",
    nameAr: "باقة إي لايف تي في الترفيهية من اتصالات",
    descriptionEn: "All-in-one TV entertainment from e& (Etisalat) with live channels, streaming apps, and voice-controlled remote.",
    provider: providers.etisalat,
    islamicCompliant: false,
    imageUrl: null,
    priceMonthly: "99",
    features: [
      { en: "200+ live TV channels" },
      { en: "Built-in Netflix, Shahid, and StarzPlay" },
      { en: "Voice-controlled Android TV box" },
      { en: "Recording and pause live TV" },
      { en: "Parental controls" },
    ],
    fees: [
      { nameEn: "Monthly Subscription", amount: 99, type: "fixed" },
    ],
  },
];
