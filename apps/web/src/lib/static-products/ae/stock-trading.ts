import { sid } from "../_helpers";
import { providers } from "../_providers";

export const stockTrading: any[] = [
  {
    id: sid("st", 1),
    category: "stock_trading",
    nameEn: "Baraka Trading",
    nameAr: "بركة للتداول",
    descriptionEn:
      "Commission-free US stock and ETF trading with fractional shares. Built for beginners and experienced investors in the UAE.",
    provider: providers.baraka,
    islamicCompliant: false,
    imageUrl: null,
    features: [
      { en: "Zero-commission US stock trading" },
      { en: "Fractional shares from $1" },
      { en: "Access to 6,000+ US stocks and ETFs" },
      { en: "SCA regulated" },
      { en: "In-app community and insights" },
    ],
    fees: [
      { nameEn: "Trading Commission", amount: 0, type: "fixed" },
      { nameEn: "FX Conversion Fee", amount: 0.5, type: "percentage" },
      { nameEn: "Withdrawal Fee", amount: 0, type: "fixed" },
    ],
  },
  {
    id: sid("st", 2),
    category: "stock_trading",
    nameEn: "Sarwa Trade",
    nameAr: "سروة تريد",
    descriptionEn:
      "Self-directed trading platform by Sarwa offering access to US stocks, ETFs, and options with competitive pricing.",
    provider: providers.sarwa,
    islamicCompliant: false,
    imageUrl: null,
    features: [
      { en: "Access to US stocks, ETFs, and options" },
      { en: "Real-time market data" },
      { en: "Integrated with Sarwa Invest portfolio" },
      { en: "DFSA regulated" },
      { en: "Advanced charting tools" },
    ],
    fees: [
      { nameEn: "Trading Commission", amount: 0, type: "fixed" },
      { nameEn: "FX Conversion Fee", amount: 0.4, type: "percentage" },
    ],
  },
  {
    id: sid("st", 3),
    category: "stock_trading",
    nameEn: "eToro UAE",
    nameAr: "إيتورو الإمارات",
    descriptionEn:
      "Social trading platform with copy-trading features. Trade stocks, ETFs, crypto, and CFDs with a global community.",
    provider: providers.etoro,
    islamicCompliant: false,
    imageUrl: null,
    features: [
      { en: "CopyTrader — replicate top investors" },
      { en: "Stocks, ETFs, crypto, and CFDs" },
      { en: "Social feed and community" },
      { en: "DFSA regulated" },
      { en: "Virtual portfolio for practice" },
    ],
    fees: [
      { nameEn: "Stock Trading Commission", amount: 0, type: "fixed" },
      { nameEn: "FX Conversion Fee", amount: 0.5, type: "percentage" },
      { nameEn: "Withdrawal Fee (USD)", amount: 5, type: "fixed" },
      { nameEn: "Inactivity Fee (after 12 months)", amount: 10, type: "fixed" },
    ],
  },
  {
    id: sid("st", 4),
    category: "stock_trading",
    nameEn: "Interactive Brokers",
    nameAr: "إنتراكتيف بروكرز",
    descriptionEn:
      "Professional-grade brokerage with access to 150+ markets worldwide. Low-cost trading for active and sophisticated investors.",
    provider: providers.ibkr,
    islamicCompliant: false,
    imageUrl: null,
    features: [
      { en: "Access to 150+ markets in 33 countries" },
      { en: "Stocks, options, futures, forex, bonds" },
      { en: "Professional Trader Workstation (TWS)" },
      { en: "DFSA regulated" },
      { en: "Margin accounts available" },
    ],
    fees: [
      { nameEn: "US Stock Commission", amount: 1, type: "fixed" },
      { nameEn: "Minimum Monthly Activity Fee", amount: 0, type: "fixed" },
      { nameEn: "FX Conversion Fee", amount: 0.002, type: "percentage" },
    ],
  },
  {
    id: sid("st", 5),
    category: "stock_trading",
    nameEn: "Saxo Bank UAE",
    nameAr: "ساكسو بنك الإمارات",
    descriptionEn:
      "Premium multi-asset trading platform with 70,000+ instruments across global markets. Suited for serious traders and HNW investors.",
    provider: providers.saxo,
    islamicCompliant: false,
    imageUrl: null,
    features: [
      { en: "70,000+ tradable instruments" },
      { en: "Stocks, bonds, forex, CFDs, options, futures" },
      { en: "SaxoTraderGO and SaxoTraderPRO platforms" },
      { en: "DFSA regulated" },
      { en: "Managed portfolios available" },
    ],
    fees: [
      { nameEn: "US Stock Commission (min)", amount: 3, type: "fixed" },
      { nameEn: "Custody Fee", amount: 0, type: "fixed" },
      { nameEn: "FX Conversion Fee", amount: 0.25, type: "percentage" },
    ],
  },
];
