import { sid } from "../_helpers";
import { providers } from "../_providers";

export const cryptoExchanges: any[] = [
  {
    id: sid("ce", 1),
    category: "crypto_exchange",
    nameEn: "Binance UAE",
    nameAr: "بينانس الإمارات",
    descriptionEn:
      "World's largest crypto exchange by volume, fully licensed in the UAE under VARA. Access 350+ cryptocurrencies with deep liquidity.",
    provider: providers.binance,
    islamicCompliant: false,
    imageUrl: null,
    features: [
      { en: "350+ cryptocurrencies available" },
      { en: "Spot, futures, and margin trading" },
      { en: "AED deposits via bank transfer and card" },
      { en: "VARA regulated" },
      { en: "Earn products (staking, savings)" },
    ],
    fees: [
      { nameEn: "Maker Fee", amount: 0.1, type: "percentage" },
      { nameEn: "Taker Fee", amount: 0.1, type: "percentage" },
      { nameEn: "AED Deposit (bank transfer)", amount: 0, type: "fixed" },
    ],
  },
  {
    id: sid("ce", 2),
    category: "crypto_exchange",
    nameEn: "OKX UAE",
    nameAr: "أو كيه إكس الإمارات",
    descriptionEn:
      "Global crypto exchange with advanced trading tools, Web3 wallet, and NFT marketplace. VARA licensed for UAE operations.",
    provider: providers.okx,
    islamicCompliant: false,
    imageUrl: null,
    features: [
      { en: "300+ cryptocurrencies" },
      { en: "Spot, derivatives, and copy trading" },
      { en: "Built-in Web3 wallet and DeFi access" },
      { en: "VARA regulated" },
      { en: "NFT marketplace" },
    ],
    fees: [
      { nameEn: "Maker Fee", amount: 0.08, type: "percentage" },
      { nameEn: "Taker Fee", amount: 0.1, type: "percentage" },
      { nameEn: "AED Deposit Fee", amount: 0, type: "fixed" },
    ],
  },
  {
    id: sid("ce", 3),
    category: "crypto_exchange",
    nameEn: "Rain",
    nameAr: "رين",
    descriptionEn:
      "Middle East-focused crypto exchange based in Bahrain and licensed in the UAE. Simple interface ideal for beginners.",
    provider: providers.rain,
    islamicCompliant: false,
    imageUrl: null,
    features: [
      { en: "70+ supported cryptocurrencies" },
      { en: "AED and USD deposits" },
      { en: "Simple buy/sell interface for beginners" },
      { en: "VARA regulated" },
      { en: "Institutional-grade custody" },
    ],
    fees: [
      { nameEn: "Maker Fee", amount: 0.1, type: "percentage" },
      { nameEn: "Taker Fee", amount: 0.15, type: "percentage" },
      { nameEn: "AED Bank Transfer Fee", amount: 0, type: "fixed" },
    ],
  },
  {
    id: sid("ce", 4),
    category: "crypto_exchange",
    nameEn: "BitOasis",
    nameAr: "بت واحة",
    descriptionEn:
      "UAE-founded crypto exchange trusted since 2016. Offers spot trading and recurring buys with seamless AED on-ramp.",
    provider: providers.bitoasis,
    islamicCompliant: false,
    imageUrl: null,
    features: [
      { en: "50+ cryptocurrencies" },
      { en: "Instant AED deposits via bank transfer" },
      { en: "Recurring buy feature" },
      { en: "VARA regulated" },
      { en: "OTC desk for large trades" },
    ],
    fees: [
      { nameEn: "Maker Fee", amount: 0.1, type: "percentage" },
      { nameEn: "Taker Fee", amount: 0.2, type: "percentage" },
      { nameEn: "AED Deposit Fee", amount: 0, type: "fixed" },
    ],
  },
  {
    id: sid("ce", 5),
    category: "crypto_exchange",
    nameEn: "CoinMENA",
    nameAr: "كوين مينا",
    descriptionEn:
      "Bahrain and UAE-licensed crypto exchange focused on the MENA region. Supports AED, SAR, and BHD fiat on-ramp.",
    provider: providers.coinmena,
    islamicCompliant: false,
    imageUrl: null,
    features: [
      { en: "30+ cryptocurrencies" },
      { en: "AED, SAR, and BHD deposits" },
      { en: "Shariah-screened asset labels" },
      { en: "VARA regulated" },
      { en: "No minimum trade amount" },
    ],
    fees: [
      { nameEn: "Maker Fee", amount: 0.15, type: "percentage" },
      { nameEn: "Taker Fee", amount: 0.25, type: "percentage" },
      { nameEn: "AED Deposit Fee", amount: 0, type: "fixed" },
    ],
  },
];
