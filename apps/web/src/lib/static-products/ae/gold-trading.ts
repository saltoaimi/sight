import { sid } from "../_helpers";
import { providers } from "../_providers";

export const goldTrading: any[] = [
  {
    id: sid("gt", 1),
    category: "gold_trading",
    nameEn: "Mashreq Gold & Silver Edge",
    nameAr: "حساب الذهب والفضة من مشرق",
    descriptionEn:
      "Trade physical gold and silver directly from your Mashreq account. Linked to LBMA spot prices with AED settlement.",
    provider: providers.mashreq,
    islamicCompliant: false,
    imageUrl: null,
    minAmount: "500",
    features: [
      { en: "Buy/sell gold and silver in real time" },
      { en: "LBMA spot price linked" },
      { en: "No storage fees — held in allocated account" },
      { en: "Convert to physical gold bars on request" },
      { en: "Manage via Mashreq Online or app" },
    ],
    fees: [
      { nameEn: "Trading Spread", amount: 0.5, type: "percentage" },
      { nameEn: "Physical Delivery Fee", amount: 100, type: "fixed" },
    ],
  },
  {
    id: sid("gt", 2),
    category: "gold_trading",
    nameEn: "Emirates NBD Gold Account",
    nameAr: "حساب الذهب من بنك الإمارات دبي الوطني",
    descriptionEn:
      "Digital gold account by Emirates NBD allowing you to buy, sell, and hold gold in grams. No physical storage needed.",
    provider: providers.enbd,
    islamicCompliant: false,
    imageUrl: null,
    minAmount: "1000",
    features: [
      { en: "Buy gold in fractions of a gram" },
      { en: "Real-time gold price tracking" },
      { en: "No storage or insurance fees" },
      { en: "Option to convert to physical gold" },
      { en: "Integrated with ENBD mobile banking" },
    ],
    fees: [
      { nameEn: "Trading Spread", amount: 0.6, type: "percentage" },
      { nameEn: "Account Maintenance Fee", amount: 0, type: "fixed" },
    ],
  },
  {
    id: sid("gt", 3),
    category: "gold_trading",
    nameEn: "Equiti Gold CFD",
    nameAr: "تداول الذهب عبر إكويتي",
    descriptionEn:
      "Trade gold (XAU/USD) as a CFD with leverage up to 1:20. Suited for active traders seeking exposure to gold price movements.",
    provider: providers.equiti,
    islamicCompliant: false,
    imageUrl: null,
    minAmount: "500",
    features: [
      { en: "Gold CFD trading with leverage up to 1:20" },
      { en: "Tight spreads from 0.3 pips" },
      { en: "MetaTrader 5 platform" },
      { en: "SCA regulated" },
      { en: "Swap-free Islamic account option" },
    ],
    fees: [
      { nameEn: "Spread (Gold)", amount: 0.3, type: "fixed" },
      { nameEn: "Overnight Swap Fee", amount: 0, type: "fixed" },
      { nameEn: "Deposit Fee", amount: 0, type: "fixed" },
    ],
  },
  {
    id: sid("gt", 4),
    category: "gold_trading",
    nameEn: "Sarwa Trade — Gold ETF",
    nameAr: "سروة تريد — صندوق الذهب",
    descriptionEn:
      "Invest in gold through SPDR Gold Shares (GLD) ETF via Sarwa Trade. Low-cost exposure to gold prices without physical ownership.",
    provider: providers.sarwa,
    islamicCompliant: false,
    imageUrl: null,
    minAmount: "100",
    features: [
      { en: "Invest in SPDR Gold Shares (GLD) ETF" },
      { en: "Fractional shares available" },
      { en: "No storage or insurance costs" },
      { en: "DFSA regulated" },
      { en: "Liquid — trade during US market hours" },
    ],
    fees: [
      { nameEn: "Trading Commission", amount: 0, type: "fixed" },
      { nameEn: "ETF Expense Ratio (GLD)", amount: 0.4, type: "percentage" },
      { nameEn: "FX Conversion Fee", amount: 0.4, type: "percentage" },
    ],
  },
];
