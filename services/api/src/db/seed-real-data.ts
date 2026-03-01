/**
 * Real UAE Financial Product Seed Data
 *
 * Sources:
 * - Emirates NBD KFS disclosures (emiratesnbd.com)
 * - Excel Properties mortgage comparison (excelproperties.ae)
 * - Ricadi Mortgages top UAE banks (ricadimortgages.com)
 * - iCartea car loan comparison (icartea.com)
 * - InsuranceMarket car loan guide (insurancemarket.ae)
 * - UAE Expert Hub credit card comparison (uaeexperthub.com)
 * - du / e& / Virgin Mobile official plan pages
 * - Sukoon (Oman Insurance) / Orient Insurance official sites
 *
 * All rates, fees and eligibility data reflect publicly available
 * information as of Q1 2025 / Q1 2026.
 */

import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { providers } from "./schema/providers";
import { products } from "./schema/products";
import { sql } from "drizzle-orm";

async function seed() {
  const client = neon(process.env.DATABASE_URL!);
  const db = drizzle(client);

  console.log("🏦 Seeding real UAE financial product data...\n");

  // ── Clean existing data ────────────────────────────────────────────
  console.log("Clearing existing products and providers...");
  await db.delete(products);
  await db.delete(providers);

  // ══════════════════════════════════════════════════════════════════
  // PROVIDERS
  // ══════════════════════════════════════════════════════════════════
  console.log("Inserting providers...");

  const providerRows = await db
    .insert(providers)
    .values([
      // ── Banks (conventional) ──
      {
        nameEn: "Emirates NBD",
        nameAr: "الإمارات دبي الوطني",
        logoUrl: "/logos/emirates-nbd.png",
        type: "bank" as const,
        website: "https://www.emiratesnbd.com",
        active: true,
      },
      {
        nameEn: "First Abu Dhabi Bank",
        nameAr: "بنك أبوظبي الأول",
        logoUrl: "/logos/fab.png",
        type: "bank" as const,
        website: "https://www.bankfab.com",
        active: true,
      },
      {
        nameEn: "Abu Dhabi Commercial Bank",
        nameAr: "بنك أبوظبي التجاري",
        logoUrl: "/logos/adcb.png",
        type: "bank" as const,
        website: "https://www.adcb.com",
        active: true,
      },
      {
        nameEn: "Mashreq",
        nameAr: "المشرق",
        logoUrl: "/logos/mashreq.png",
        type: "bank" as const,
        website: "https://www.mashreqbank.com",
        active: true,
      },
      {
        nameEn: "RAKBANK",
        nameAr: "بنك رأس الخيمة الوطني",
        logoUrl: "/logos/rakbank.png",
        type: "bank" as const,
        website: "https://www.rakbank.ae",
        active: true,
      },
      {
        nameEn: "Commercial Bank of Dubai",
        nameAr: "بنك دبي التجاري",
        logoUrl: "/logos/cbd.png",
        type: "bank" as const,
        website: "https://www.cbd.ae",
        active: true,
      },
      // ── Banks (Islamic) ──
      {
        nameEn: "Dubai Islamic Bank",
        nameAr: "بنك دبي الإسلامي",
        logoUrl: "/logos/dib.png",
        type: "bank" as const,
        website: "https://www.dib.ae",
        active: true,
      },
      {
        nameEn: "Abu Dhabi Islamic Bank",
        nameAr: "مصرف أبوظبي الإسلامي",
        logoUrl: "/logos/adib.png",
        type: "bank" as const,
        website: "https://www.adib.ae",
        active: true,
      },
      {
        nameEn: "Emirates Islamic",
        nameAr: "الإمارات الإسلامي",
        logoUrl: "/logos/emirates-islamic.png",
        type: "bank" as const,
        website: "https://www.emiratesislamic.ae",
        active: true,
      },
      {
        nameEn: "Sharjah Islamic Bank",
        nameAr: "مصرف الشارقة الإسلامي",
        logoUrl: "/logos/sib.svg",
        type: "bank" as const,
        website: "https://www.sib.ae",
        active: true,
      },
      // ── Insurers ──
      {
        nameEn: "Sukoon Insurance",
        nameAr: "سكون للتأمين",
        logoUrl: "/logos/sukoon.png",
        type: "insurer" as const,
        website: "https://www.sukoon.com",
        active: true,
      },
      {
        nameEn: "Orient Insurance",
        nameAr: "أورينت للتأمين",
        logoUrl: "/logos/orient.svg",
        type: "insurer" as const,
        website: "https://www.orientinsurance.ae",
        active: true,
      },
      {
        nameEn: "AXA Gulf",
        nameAr: "أكسا الخليج",
        logoUrl: "/logos/axa.svg",
        type: "insurer" as const,
        website: "https://www.axa-gulf.com",
        active: true,
      },
      // ── Telcos ──
      {
        nameEn: "du",
        nameAr: "دو",
        logoUrl: "/logos/du.png",
        type: "telco" as const,
        website: "https://www.du.ae",
        active: true,
      },
      {
        nameEn: "e& (Etisalat)",
        nameAr: "اتصالات",
        logoUrl: "/logos/etisalat.png",
        type: "telco" as const,
        website: "https://www.etisalat.ae",
        active: true,
      },
      {
        nameEn: "Virgin Mobile UAE",
        nameAr: "فيرجن موبايل الإمارات",
        logoUrl: "/logos/virgin-mobile.svg",
        type: "telco" as const,
        website: "https://www.virginmobile.ae",
        active: true,
      },
      // ── Additional Banks ──
      {
        nameEn: "Ajman Bank",
        nameAr: "مصرف عجمان",
        logoUrl: "/logos/ajman-bank.png",
        type: "bank" as const,
        website: "https://www.ajmanbank.ae",
        active: true,
      },
      {
        nameEn: "National Bank of Fujairah",
        nameAr: "بنك الفجيرة الوطني",
        logoUrl: "/logos/nbf.svg",
        type: "bank" as const,
        website: "https://www.nbf.ae",
        active: true,
      },
      // ── Fintechs / Digital Banks ──
      {
        nameEn: "Wio Bank",
        nameAr: "بنك ويو",
        logoUrl: "/logos/wio.svg",
        type: "fintech" as const,
        website: "https://www.wio.io",
        active: true,
      },
      {
        nameEn: "Liv",
        nameAr: "ليف",
        logoUrl: "/logos/liv.svg",
        type: "fintech" as const,
        website: "https://www.liv.me",
        active: true,
      },
      {
        nameEn: "Tabby",
        nameAr: "تابي",
        logoUrl: "/logos/tabby.svg",
        type: "fintech" as const,
        website: "https://www.tabby.ai",
        active: true,
      },
      {
        nameEn: "Tamara",
        nameAr: "تمارا",
        logoUrl: "/logos/tamara.svg",
        type: "fintech" as const,
        website: "https://www.tamara.co",
        active: true,
      },
      {
        nameEn: "Sarwa",
        nameAr: "ثروة",
        logoUrl: "/logos/sarwa.svg",
        type: "fintech" as const,
        website: "https://www.sarwa.co",
        active: true,
      },
      // ── Additional Insurers ──
      {
        nameEn: "ADNIC",
        nameAr: "أبوظبي الوطنية للتأمين",
        logoUrl: "/logos/adnic.svg",
        type: "insurer" as const,
        website: "https://www.adnic.ae",
        active: true,
      },
      {
        nameEn: "Salama",
        nameAr: "سلامة للتأمين",
        logoUrl: "/logos/salama.svg",
        type: "insurer" as const,
        website: "https://www.salama.ae",
        active: true,
      },
      {
        nameEn: "Daman",
        nameAr: "ضمان للتأمين الصحي",
        logoUrl: "/logos/daman.svg",
        type: "insurer" as const,
        website: "https://www.damanhealth.ae",
        active: true,
      },
    ])
    .returning({ id: providers.id, nameEn: providers.nameEn });

  // Build a quick lookup map
  const prov = Object.fromEntries(
    providerRows.map((p) => [p.nameEn, p.id])
  ) as Record<string, string>;

  console.log(`  Inserted ${providerRows.length} providers.`);

  // ══════════════════════════════════════════════════════════════════
  // PRODUCTS
  // ══════════════════════════════════════════════════════════════════

  // Helper – standard eligibility object
  const elig = (
    minSalary: number,
    nationals: string[],
    employment: string[],
    extras: Record<string, unknown> = {}
  ) => ({
    minSalary,
    nationalities: nationals,
    employmentTypes: employment,
    ...extras,
  });

  const UAE_EXPAT = ["UAE National", "Expatriate"];
  const UAE_ONLY = ["UAE National"];
  const SALARIED = ["Salaried"];
  const SALARIED_SE = ["Salaried", "Self-Employed"];

  // ── 1  PERSONAL LOANS ────────────────────────────────────────────
  console.log("Inserting personal loans...");

  const personalLoans = [
    // Emirates NBD
    {
      providerId: prov["Emirates NBD"],
      category: "personal_loan",
      subCategory: "personal_loan",
      nameEn: "Emirates NBD Personal Loan – Fixed Rate",
      nameAr: "قرض شخصي من الإمارات دبي الوطني – ثابت",
      descriptionEn:
        "Fixed-rate personal loan up to AED 4 million for UAE Nationals and AED 2 million for expatriates with tenure up to 48 months.",
      descriptionAr:
        "قرض شخصي بسعر فائدة ثابت يصل إلى 4 مليون درهم للمواطنين و2 مليون درهم للمقيمين لمدة تصل إلى 48 شهرًا.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "fixed" as const,
      rateValue: "4.990",
      minAmount: "10000.00",
      maxAmount: "4000000.00",
      minTenureMonths: 12,
      maxTenureMonths: 48,
      processingFeePercent: "1.05",
      earlySettlementFeePercent: "1.05",
      minSalary: "5000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.05, type: "percentage" as const },
        { nameEn: "Early Settlement", nameAr: "تسوية مبكرة", amount: 1.05, type: "percentage" as const },
        { nameEn: "Late Payment", nameAr: "تأخر في السداد", amount: 52.5, type: "fixed" as const },
      ],
      features: [
        { en: "Quick approval in 30 minutes", ar: "موافقة سريعة خلال 30 دقيقة" },
        { en: "Free credit card with salary transfer", ar: "بطاقة ائتمانية مجانية مع تحويل الراتب" },
        { en: "Flexible top-up facility", ar: "تسهيلات مرنة للتمويل الإضافي" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE, {
        maxAmountExpat: 2000000,
        maxAmountNational: 4000000,
      }),
    },
    {
      providerId: prov["Emirates NBD"],
      category: "personal_loan",
      subCategory: "personal_loan",
      nameEn: "Emirates NBD Personal Loan – Variable Rate",
      nameAr: "قرض شخصي من الإمارات دبي الوطني – متغير",
      descriptionEn:
        "Variable-rate personal loan starting from 5.24% p.a. with introductory fixed period, ideal for those expecting rate decreases.",
      descriptionAr:
        "قرض شخصي بسعر متغير يبدأ من 5.24٪ سنويًا مع فترة ثابتة تمهيدية.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "variable" as const,
      rateValue: "5.240",
      minAmount: "10000.00",
      maxAmount: "4000000.00",
      minTenureMonths: 12,
      maxTenureMonths: 48,
      processingFeePercent: "1.05",
      earlySettlementFeePercent: "1.05",
      minSalary: "5000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.05, type: "percentage" as const },
        { nameEn: "Early Settlement", nameAr: "تسوية مبكرة", amount: 1.05, type: "percentage" as const },
      ],
      features: [
        { en: "Introductory fixed period", ar: "فترة ثابتة تمهيدية" },
        { en: "Potential savings if rates decline", ar: "إمكانية التوفير عند انخفاض الأسعار" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    // FAB
    {
      providerId: prov["First Abu Dhabi Bank"],
      category: "personal_loan",
      subCategory: "personal_loan",
      nameEn: "FAB Personal Loan",
      nameAr: "قرض شخصي من بنك أبوظبي الأول",
      descriptionEn:
        "Up to AED 5 million financing with competitive rates starting from 4.99% p.a. and salary transfer benefit.",
      descriptionAr:
        "تمويل يصل إلى 5 مليون درهم بأسعار تنافسية تبدأ من 4.99٪ سنويًا مع ميزة تحويل الراتب.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "reducing" as const,
      rateValue: "4.990",
      minAmount: "10000.00",
      maxAmount: "5000000.00",
      minTenureMonths: 12,
      maxTenureMonths: 48,
      processingFeePercent: "1.00",
      earlySettlementFeePercent: "1.05",
      minSalary: "5000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.0, type: "percentage" as const },
        { nameEn: "Early Settlement", nameAr: "تسوية مبكرة", amount: 1.05, type: "percentage" as const },
      ],
      features: [
        { en: "Loan up to AED 5 million", ar: "قرض يصل إلى 5 مليون درهم" },
        { en: "Salary transfer discount", ar: "خصم عند تحويل الراتب" },
        { en: "No guarantor required", ar: "لا حاجة لكفيل" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE, {
        maxAmountExpat: 3000000,
        maxAmountNational: 5000000,
      }),
    },
    {
      providerId: prov["First Abu Dhabi Bank"],
      category: "personal_loan",
      subCategory: "personal_loan",
      nameEn: "FAB Buyout Personal Loan",
      nameAr: "قرض شراء الدين من بنك أبوظبي الأول",
      descriptionEn:
        "Consolidate existing loans from other banks into a single facility with lower rate starting from 5.49% p.a.",
      descriptionAr:
        "دمج القروض الحالية من بنوك أخرى في تسهيل واحد بمعدل أقل يبدأ من 5.49٪ سنويًا.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "reducing" as const,
      rateValue: "5.490",
      minAmount: "50000.00",
      maxAmount: "5000000.00",
      minTenureMonths: 12,
      maxTenureMonths: 48,
      processingFeePercent: "1.05",
      earlySettlementFeePercent: "1.05",
      minSalary: "8000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.05, type: "percentage" as const },
      ],
      features: [
        { en: "Consolidate multiple loans", ar: "دمج قروض متعددة" },
        { en: "Lower effective rate", ar: "معدل فعلي أقل" },
      ],
      eligibilityCriteria: elig(8000, UAE_EXPAT, SALARIED, {
        existingLoanRequired: true,
      }),
    },
    // ADCB
    {
      providerId: prov["Abu Dhabi Commercial Bank"],
      category: "personal_loan",
      subCategory: "personal_loan",
      nameEn: "ADCB Personal Loan",
      nameAr: "قرض شخصي من بنك أبوظبي التجاري",
      descriptionEn:
        "Personal loan up to AED 600,000 with rates starting from 3.29% p.a. and salary transfer benefit.",
      descriptionAr:
        "قرض شخصي يصل إلى 600,000 درهم بأسعار تبدأ من 3.29٪ سنويًا.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "reducing" as const,
      rateValue: "3.290",
      minAmount: "10000.00",
      maxAmount: "600000.00",
      minTenureMonths: 12,
      maxTenureMonths: 48,
      processingFeePercent: "1.05",
      earlySettlementFeePercent: "1.05",
      minSalary: "5000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.05, type: "percentage" as const },
        { nameEn: "Early Settlement", nameAr: "تسوية مبكرة", amount: 1.05, type: "percentage" as const },
      ],
      features: [
        { en: "Among the lowest rates in UAE", ar: "من أقل الأسعار في الإمارات" },
        { en: "Pre-approval in minutes", ar: "موافقة مبدئية في دقائق" },
        { en: "No salary transfer required for select packages", ar: "لا يلزم تحويل الراتب لبعض الباقات" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Abu Dhabi Commercial Bank"],
      category: "personal_loan",
      subCategory: "personal_loan",
      nameEn: "ADCB Salary Overdraft",
      nameAr: "سحب على الراتب من بنك أبوظبي التجاري",
      descriptionEn:
        "Quick overdraft facility linked to your salary account up to AED 200,000 with flat rate from 2.99% p.a.",
      descriptionAr:
        "تسهيل سحب سريع مرتبط بحسابك الراتبي يصل إلى 200,000 درهم بمعدل ثابت من 2.99٪.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "fixed" as const,
      rateValue: "2.990",
      minAmount: "5000.00",
      maxAmount: "200000.00",
      minTenureMonths: 6,
      maxTenureMonths: 24,
      processingFeePercent: "0.00",
      earlySettlementFeePercent: "0.00",
      minSalary: "8000.00",
      fees: [],
      features: [
        { en: "Zero processing fees", ar: "بدون رسوم معالجة" },
        { en: "Instant access to funds", ar: "وصول فوري للأموال" },
      ],
      eligibilityCriteria: elig(8000, UAE_EXPAT, SALARIED, {
        salaryTransferRequired: true,
      }),
    },
    // Mashreq
    {
      providerId: prov["Mashreq"],
      category: "personal_loan",
      subCategory: "personal_loan",
      nameEn: "Mashreq Personal Loan",
      nameAr: "قرض شخصي من المشرق",
      descriptionEn:
        "Personal loan up to AED 2 million with rate starting from 3.49% p.a. and quick digital application.",
      descriptionAr:
        "قرض شخصي يصل إلى 2 مليون درهم بمعدل يبدأ من 3.49٪ سنويًا مع تقديم رقمي سريع.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "reducing" as const,
      rateValue: "3.490",
      minAmount: "10000.00",
      maxAmount: "2000000.00",
      minTenureMonths: 12,
      maxTenureMonths: 48,
      processingFeePercent: "1.05",
      earlySettlementFeePercent: "1.05",
      minSalary: "5000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.05, type: "percentage" as const },
      ],
      features: [
        { en: "100% digital application", ar: "تقديم رقمي 100٪" },
        { en: "Instant salary credit", ar: "إيداع فوري للراتب" },
        { en: "Free Mashreq Neo debit card", ar: "بطاقة خصم مشرق نيو مجانية" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    // RAKBANK
    {
      providerId: prov["RAKBANK"],
      category: "personal_loan",
      subCategory: "personal_loan",
      nameEn: "RAKBANK Personal Loan",
      nameAr: "قرض شخصي من بنك رأس الخيمة",
      descriptionEn:
        "Flexible personal loan up to AED 500,000 with rate from 4.49% p.a. and option of no salary transfer.",
      descriptionAr:
        "قرض شخصي مرن يصل إلى 500,000 درهم بمعدل من 4.49٪ سنويًا مع خيار عدم تحويل الراتب.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "reducing" as const,
      rateValue: "4.490",
      minAmount: "5000.00",
      maxAmount: "500000.00",
      minTenureMonths: 12,
      maxTenureMonths: 48,
      processingFeePercent: "1.05",
      earlySettlementFeePercent: "1.05",
      minSalary: "5000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.05, type: "percentage" as const },
      ],
      features: [
        { en: "No salary transfer required", ar: "لا يلزم تحويل الراتب" },
        { en: "Quick disbursement", ar: "صرف سريع" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    // DIB (Islamic)
    {
      providerId: prov["Dubai Islamic Bank"],
      category: "personal_loan",
      subCategory: "personal_loan",
      nameEn: "DIB Al Islami Personal Finance",
      nameAr: "تمويل شخصي الإسلامي من بنك دبي الإسلامي",
      descriptionEn:
        "Shariah-compliant personal finance up to AED 3 million for UAE Nationals with profit rate from 4.49% p.a.",
      descriptionAr:
        "تمويل شخصي متوافق مع الشريعة يصل إلى 3 مليون درهم للمواطنين بمعدل ربح من 4.49٪ سنويًا.",
      status: "active" as const,
      islamicCompliant: true,
      rateType: "fixed" as const,
      profitRate: "4.490",
      minAmount: "10000.00",
      maxAmount: "3000000.00",
      minTenureMonths: 12,
      maxTenureMonths: 48,
      processingFeePercent: "1.05",
      earlySettlementFeePercent: "1.05",
      minSalary: "5000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.05, type: "percentage" as const },
      ],
      features: [
        { en: "100% Shariah-compliant", ar: "متوافق 100% مع الشريعة" },
        { en: "Up to AED 3 million for UAE Nationals", ar: "يصل إلى 3 مليون درهم للمواطنين" },
        { en: "Free Takaful insurance", ar: "تأمين تكافل مجاني" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE, {
        maxAmountExpat: 1500000,
        maxAmountNational: 3000000,
      }),
    },
    // ADIB (Islamic)
    {
      providerId: prov["Abu Dhabi Islamic Bank"],
      category: "personal_loan",
      subCategory: "personal_loan",
      nameEn: "ADIB Personal Finance",
      nameAr: "تمويل شخصي من مصرف أبوظبي الإسلامي",
      descriptionEn:
        "Islamic personal finance up to AED 2 million with competitive profit rate from 4.75% p.a. and flexible tenure.",
      descriptionAr:
        "تمويل شخصي إسلامي يصل إلى 2 مليون درهم بمعدل ربح تنافسي من 4.75٪ سنويًا.",
      status: "active" as const,
      islamicCompliant: true,
      rateType: "fixed" as const,
      profitRate: "4.750",
      minAmount: "10000.00",
      maxAmount: "2000000.00",
      minTenureMonths: 12,
      maxTenureMonths: 48,
      processingFeePercent: "1.05",
      earlySettlementFeePercent: "1.05",
      minSalary: "5000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.05, type: "percentage" as const },
      ],
      features: [
        { en: "Shariah-compliant Murabaha structure", ar: "هيكل مرابحة متوافق مع الشريعة" },
        { en: "Competitive profit rates", ar: "معدلات ربح تنافسية" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    // Emirates Islamic
    {
      providerId: prov["Emirates Islamic"],
      category: "personal_loan",
      subCategory: "personal_loan",
      nameEn: "Emirates Islamic Hassad Personal Finance",
      nameAr: "تمويل حصاد الشخصي من الإمارات الإسلامي",
      descriptionEn:
        "Shariah-compliant personal finance with profit rate from 4.99% p.a. and Hassad rewards programme.",
      descriptionAr:
        "تمويل شخصي متوافق مع الشريعة بمعدل ربح من 4.99٪ سنويًا مع برنامج مكافآت حصاد.",
      status: "active" as const,
      islamicCompliant: true,
      rateType: "fixed" as const,
      profitRate: "4.990",
      minAmount: "10000.00",
      maxAmount: "2500000.00",
      minTenureMonths: 12,
      maxTenureMonths: 48,
      processingFeePercent: "1.05",
      earlySettlementFeePercent: "1.05",
      minSalary: "5000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.05, type: "percentage" as const },
      ],
      features: [
        { en: "Hassad loyalty rewards", ar: "مكافآت حصاد الولائية" },
        { en: "Shariah-compliant", ar: "متوافق مع الشريعة" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    // CBD
    {
      providerId: prov["Commercial Bank of Dubai"],
      category: "personal_loan",
      subCategory: "personal_loan",
      nameEn: "CBD Personal Loan",
      nameAr: "قرض شخصي من بنك دبي التجاري",
      descriptionEn:
        "Up to AED 1 million with competitive rate from 4.99% p.a. and instant approval for salary transfer customers.",
      descriptionAr:
        "يصل إلى مليون درهم بمعدل تنافسي من 4.99٪ سنويًا مع موافقة فورية لعملاء تحويل الراتب.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "reducing" as const,
      rateValue: "4.990",
      minAmount: "10000.00",
      maxAmount: "1000000.00",
      minTenureMonths: 12,
      maxTenureMonths: 48,
      processingFeePercent: "1.05",
      earlySettlementFeePercent: "1.00",
      minSalary: "5000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.05, type: "percentage" as const },
      ],
      features: [
        { en: "Instant approval for salary transfer customers", ar: "موافقة فورية لعملاء تحويل الراتب" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
  ];

  // ── 2  CREDIT CARDS ──────────────────────────────────────────────
  console.log("Inserting credit cards...");

  const creditCards = [
    // ── FAB (11 cards) ──────────────────────────────────────────────
    {
      providerId: prov["First Abu Dhabi Bank"],
      category: "credit_card",
      subCategory: "cashback",
      nameEn: "FAB Cashback Credit Card",
      imageUrl: "/products/fab-cashback.svg",
      nameAr: "بطاقة بنك أبوظبي الأول كاش باك",
      descriptionEn:
        "Earn up to 5% cashback on supermarkets, 3% on dining, and 1% on all other spends with an annual fee of AED 300.",
      descriptionAr:
        "احصل على استرداد نقدي يصل إلى 5٪ على السوبرماركت و3٪ على المطاعم و1٪ على جميع المشتريات الأخرى برسوم سنوية 300 درهم.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "300.00",
      annualFeeWaiver: "Waived with AED 5,000/month spend",
      cashbackRate: "5.000",
      rewardType: "cashback" as const,
      rewardRate: "5.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "0.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 300, type: "fixed" as const },
        { nameEn: "Replacement Card", nameAr: "بطاقة بديلة", amount: 50, type: "fixed" as const },
      ],
      features: [
        { en: "5% cashback on supermarkets", ar: "5٪ استرداد نقدي على السوبرماركت" },
        { en: "3% cashback on dining", ar: "3٪ استرداد نقدي على المطاعم" },
        { en: "1% cashback on all other spends", ar: "1٪ استرداد نقدي على جميع المشتريات الأخرى" },
        { en: "Contactless payments", ar: "مدفوعات بدون تلامس" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["First Abu Dhabi Bank"],
      category: "credit_card",
      subCategory: "cashback",
      nameEn: "FAB Cashback Islamic Credit Card",
      imageUrl: null,
      nameAr: "بطاقة بنك أبوظبي الأول كاش باك الإسلامية",
      descriptionEn:
        "Shariah-compliant cashback card offering up to 12% cashback on selected categories with AED 300 annual fee.",
      descriptionAr:
        "بطاقة استرداد نقدي متوافقة مع الشريعة تقدم حتى 12٪ استرداد نقدي على فئات مختارة برسوم سنوية 300 درهم.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "300.00",
      annualFeeWaiver: "Waived with AED 5,000/month spend",
      cashbackRate: "12.000",
      rewardType: "cashback" as const,
      rewardRate: "12.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "0.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 300, type: "fixed" as const },
        { nameEn: "Replacement Card", nameAr: "بطاقة بديلة", amount: 50, type: "fixed" as const },
      ],
      features: [
        { en: "Up to 12% cashback on selected categories", ar: "حتى 12٪ استرداد نقدي على فئات مختارة" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
        { en: "Contactless payments", ar: "مدفوعات بدون تلامس" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["First Abu Dhabi Bank"],
      category: "credit_card",
      subCategory: "rewards",
      nameEn: "FAB Rewards Indulge Credit Card",
      imageUrl: null,
      nameAr: "بطاقة بنك أبوظبي الأول ريواردز إندلج",
      descriptionEn:
        "Free-for-life card with 20% off at over 150 restaurants across the UAE. Perfect for food enthusiasts.",
      descriptionAr:
        "بطاقة مجانية مدى الحياة مع خصم 20٪ في أكثر من 150 مطعم في جميع أنحاء الإمارات.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      rewardType: "points" as const,
      rewardRate: "1.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "Free for life – no annual fee", ar: "مجانية مدى الحياة – بدون رسوم سنوية" },
        { en: "20% off at 150+ restaurants", ar: "خصم 20٪ في أكثر من 150 مطعم" },
        { en: "FAB Rewards points on every spend", ar: "نقاط مكافآت على كل عملية شراء" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["First Abu Dhabi Bank"],
      category: "credit_card",
      subCategory: "lifestyle",
      nameEn: "FAB Z Card",
      imageUrl: null,
      nameAr: "بطاقة بنك أبوظبي الأول زد",
      descriptionEn:
        "A zero-frills card with the lowest interest rate of 1.99% p.a. and no annual fee. Ideal for balance transfers.",
      descriptionAr:
        "بطاقة بدون رسوم سنوية بأقل معدل فائدة 1.99٪ سنوياً. مثالية لتحويل الأرصدة.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      rewardType: "cashback" as const,
      rewardRate: "0.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "1.99% p.a. – lowest rate in UAE", ar: "1.99٪ سنوياً – أقل معدل في الإمارات" },
        { en: "No annual fee", ar: "بدون رسوم سنوية" },
        { en: "Ideal for balance transfers", ar: "مثالية لتحويل الأرصدة" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["First Abu Dhabi Bank"],
      category: "credit_card",
      subCategory: "travel",
      nameEn: "FAB Travel Credit Card",
      imageUrl: null,
      nameAr: "بطاقة بنك أبوظبي الأول للسفر",
      descriptionEn:
        "Premium travel card with a free return flight annually, airport lounge access, and comprehensive travel insurance.",
      descriptionAr:
        "بطاقة سفر مميزة مع رحلة ذهاب وعودة مجانية سنوياً ودخول صالة المطار وتأمين سفر شامل.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "1500.00",
      annualFeeWaiver: "Waived with AED 150,000 annual spend",
      rewardType: "miles" as const,
      rewardRate: "3.000",
      minSalary: "25000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "500.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 1500, type: "fixed" as const },
        { nameEn: "Replacement Card", nameAr: "بطاقة بديلة", amount: 100, type: "fixed" as const },
      ],
      features: [
        { en: "Free return flight annually", ar: "رحلة ذهاب وعودة مجانية سنوياً" },
        { en: "Airport lounge access worldwide", ar: "دخول صالات المطارات حول العالم" },
        { en: "Comprehensive travel insurance", ar: "تأمين سفر شامل" },
      ],
      eligibilityCriteria: elig(25000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["First Abu Dhabi Bank"],
      category: "credit_card",
      subCategory: "premium",
      nameEn: "FAB Rewards Elite Infinite Credit Card",
      imageUrl: null,
      nameAr: "بطاقة بنك أبوظبي الأول ريواردز إيليت إنفينيت",
      descriptionEn:
        "Ultra-premium card with Advantage+ gym membership, concierge services, and accelerated reward earning.",
      descriptionAr:
        "بطاقة فائقة التميز مع عضوية أدفانتج+ للصالات الرياضية وخدمات كونسيرج ومكافآت متسارعة.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "600.00",
      annualFeeWaiver: "Waived with AED 100,000 annual spend",
      rewardType: "points" as const,
      rewardRate: "3.000",
      minSalary: "50000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "300.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 600, type: "fixed" as const },
      ],
      features: [
        { en: "Advantage+ gym membership included", ar: "عضوية أدفانتج+ للصالات الرياضية" },
        { en: "24/7 concierge service", ar: "خدمة كونسيرج على مدار الساعة" },
        { en: "Accelerated reward points", ar: "نقاط مكافآت متسارعة" },
        { en: "Airport lounge access", ar: "دخول صالة المطار" },
      ],
      eligibilityCriteria: elig(50000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["First Abu Dhabi Bank"],
      category: "credit_card",
      subCategory: "premium",
      nameEn: "FAB World Elite Credit Card",
      imageUrl: "/products/fab-world-elite.svg",
      nameAr: "بطاقة بنك أبوظبي الأول وورلد إيليت",
      descriptionEn:
        "Premium card with up to 5x FAB Reward points per AED, unlimited airport lounge access, and concierge service.",
      descriptionAr:
        "بطاقة مميزة مع ما يصل إلى 5 أضعاف نقاط مكافآت لكل درهم ودخول غير محدود لصالات المطار وخدمة كونسيرج.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "1575.00",
      annualFeeWaiver: "Waived with AED 250,000 annual spend",
      rewardType: "points" as const,
      rewardRate: "5.000",
      minSalary: "30000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "525.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 1575, type: "fixed" as const },
      ],
      features: [
        { en: "Unlimited airport lounge access", ar: "دخول غير محدود لصالات المطار" },
        { en: "Complimentary golf rounds", ar: "جولات غولف مجانية" },
        { en: "Priority Pass membership", ar: "عضوية بطاقة الأولوية" },
        { en: "24/7 concierge service", ar: "خدمة كونسيرج على مدار الساعة" },
      ],
      eligibilityCriteria: elig(30000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["First Abu Dhabi Bank"],
      category: "credit_card",
      subCategory: "rewards",
      nameEn: "FAB Rewards Active Credit Card",
      imageUrl: null,
      nameAr: "بطاقة بنك أبوظبي الأول ريواردز أكتيف",
      descriptionEn:
        "A fitness-focused card that rewards your active lifestyle — earn 25 rewards for every 1,000 steps and get a free fitness ring.",
      descriptionAr:
        "بطاقة تركز على اللياقة تكافئ نمط حياتك النشط — اكسب 25 مكافأة لكل 1,000 خطوة واحصل على خاتم لياقة مجاني.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      rewardType: "points" as const,
      rewardRate: "1.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "Free fitness ring included", ar: "خاتم لياقة مجاني" },
        { en: "25 rewards per 1,000 steps", ar: "25 مكافأة لكل 1,000 خطوة" },
        { en: "No annual fee", ar: "بدون رسوم سنوية" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["First Abu Dhabi Bank"],
      category: "credit_card",
      subCategory: "miles",
      nameEn: "FAB Etihad Guest Infinite Credit Card",
      imageUrl: null,
      nameAr: "بطاقة بنك أبوظبي الأول ضيف الاتحاد إنفينيت",
      descriptionEn:
        "Earn Etihad Guest Miles on every purchase with unlimited airport lounge access and complimentary Etihad Silver status.",
      descriptionAr:
        "اكسب أميال ضيف الاتحاد على كل عملية شراء مع دخول غير محدود لصالات المطار وعضوية الاتحاد الفضية.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "1575.00",
      annualFeeWaiver: "Waived with AED 200,000 annual spend",
      rewardType: "miles" as const,
      rewardRate: "3.000",
      minSalary: "30000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "525.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 1575, type: "fixed" as const },
      ],
      features: [
        { en: "Earn Etihad Guest Miles on every spend", ar: "اكسب أميال ضيف الاتحاد على كل عملية شراء" },
        { en: "Unlimited airport lounge access", ar: "دخول غير محدود لصالات المطار" },
        { en: "Complimentary Etihad Silver status", ar: "عضوية الاتحاد الفضية المجانية" },
      ],
      eligibilityCriteria: elig(30000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["First Abu Dhabi Bank"],
      category: "credit_card",
      subCategory: "islamic",
      nameEn: "FAB Heritage Islamic Credit Card",
      imageUrl: null,
      nameAr: "بطاقة بنك أبوظبي الأول هيريتج الإسلامية",
      descriptionEn:
        "Shariah-compliant card designed for the Emirati lifestyle with exclusive benefits and no annual fee.",
      descriptionAr:
        "بطاقة متوافقة مع الشريعة مصممة لنمط الحياة الإماراتي مع مزايا حصرية وبدون رسوم سنوية.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      rewardType: "points" as const,
      rewardRate: "2.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
        { en: "Emirati lifestyle benefits", ar: "مزايا نمط الحياة الإماراتي" },
        { en: "No annual fee", ar: "بدون رسوم سنوية" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["First Abu Dhabi Bank"],
      category: "credit_card",
      subCategory: "rewards",
      nameEn: "Blue FAB Infinite Credit Card (Al-Futtaim)",
      imageUrl: null,
      nameAr: "بطاقة بلو بنك أبوظبي الأول إنفينيت (الفطيم)",
      descriptionEn:
        "Earn 1% cashback across Al-Futtaim brands including IKEA, ACE, and Marks & Spencer with premium benefits.",
      descriptionAr:
        "احصل على 1٪ استرداد نقدي عبر علامات الفطيم بما في ذلك ايكيا وإيس وماركس آند سبنسر مع مزايا مميزة.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "600.00",
      annualFeeWaiver: "Waived with AED 80,000 annual spend",
      cashbackRate: "1.000",
      rewardType: "cashback" as const,
      rewardRate: "1.000",
      minSalary: "15000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "300.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 600, type: "fixed" as const },
      ],
      features: [
        { en: "1% cashback at Al-Futtaim brands", ar: "1٪ استرداد نقدي في علامات الفطيم" },
        { en: "Benefits at IKEA, ACE, Marks & Spencer", ar: "مزايا في ايكيا وإيس وماركس آند سبنسر" },
        { en: "Airport lounge access", ar: "دخول صالة المطار" },
      ],
      eligibilityCriteria: elig(15000, UAE_EXPAT, SALARIED_SE),
    },
    // ── Emirates NBD (15 cards) ────────────────────────────────────
    {
      providerId: prov["Emirates NBD"],
      category: "credit_card",
      subCategory: "cashback",
      nameEn: "Emirates NBD Cashback+ Credit Card",
      imageUrl: "/products/enbd-cashback.svg",
      nameAr: "بطاقة الإمارات دبي الوطني كاش باك بلس",
      descriptionEn:
        "Earn up to 6% cashback on dining, 5% on fuel, and 3% on groceries with no annual fee for the first year.",
      descriptionAr:
        "احصل على استرداد نقدي يصل إلى 6٪ على المطاعم و5٪ على الوقود و3٪ على البقالة بدون رسوم سنوية للسنة الأولى.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "315.00",
      annualFeeWaiver: "First year free; waived with AED 5,000/month spend",
      cashbackRate: "6.000",
      rewardType: "cashback" as const,
      rewardRate: "6.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "0.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 315, type: "fixed" as const },
        { nameEn: "Replacement Card", nameAr: "بطاقة بديلة", amount: 52.5, type: "fixed" as const },
      ],
      features: [
        { en: "6% cashback on dining", ar: "6٪ استرداد نقدي على المطاعم" },
        { en: "5% cashback on fuel", ar: "5٪ استرداد نقدي على الوقود" },
        { en: "3% cashback on groceries", ar: "3٪ استرداد نقدي على البقالة" },
        { en: "Contactless payments", ar: "مدفوعات بدون تلامس" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Emirates NBD"],
      category: "credit_card",
      subCategory: "miles",
      nameEn: "Emirates NBD Skywards Infinite Credit Card",
      imageUrl: null,
      nameAr: "بطاقة الإمارات دبي الوطني سكاي واردز إنفينيت",
      descriptionEn:
        "Earn up to 100,000 Skywards Miles as welcome bonus with unlimited airport lounge access and concierge.",
      descriptionAr:
        "اكسب حتى 100,000 ميل سكاي واردز كمكافأة ترحيبية مع دخول غير محدود لصالات المطار وخدمة كونسيرج.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "1575.00",
      annualFeeWaiver: "Waived with AED 250,000 annual spend",
      rewardType: "miles" as const,
      rewardRate: "4.000",
      minSalary: "30000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "525.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 1575, type: "fixed" as const },
        { nameEn: "Replacement Card", nameAr: "بطاقة بديلة", amount: 100, type: "fixed" as const },
      ],
      features: [
        { en: "Up to 100,000 Skywards Miles welcome bonus", ar: "حتى 100,000 ميل سكاي واردز كمكافأة ترحيبية" },
        { en: "Unlimited airport lounge access", ar: "دخول غير محدود لصالات المطار" },
        { en: "Concierge service", ar: "خدمة كونسيرج" },
      ],
      eligibilityCriteria: elig(30000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Emirates NBD"],
      category: "credit_card",
      subCategory: "miles",
      nameEn: "Emirates NBD Skywards Signature Credit Card",
      imageUrl: null,
      nameAr: "بطاقة الإمارات دبي الوطني سكاي واردز سيجنتشر",
      descriptionEn:
        "Earn 15,000 Skywards Miles as welcome bonus with airport lounge access and travel insurance.",
      descriptionAr:
        "اكسب 15,000 ميل سكاي واردز كمكافأة ترحيبية مع دخول صالة المطار وتأمين سفر.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "735.00",
      annualFeeWaiver: "Waived with AED 100,000 annual spend",
      rewardType: "miles" as const,
      rewardRate: "2.000",
      minSalary: "15000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "367.50",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 735, type: "fixed" as const },
      ],
      features: [
        { en: "15,000 Skywards Miles welcome bonus", ar: "15,000 ميل سكاي واردز كمكافأة ترحيبية" },
        { en: "Airport lounge access", ar: "دخول صالة المطار" },
        { en: "Travel insurance included", ar: "تأمين سفر مشمول" },
      ],
      eligibilityCriteria: elig(15000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Emirates NBD"],
      category: "credit_card",
      subCategory: "travel",
      nameEn: "Emirates NBD Dnata World Credit Card",
      imageUrl: "/products/enbd-dnata.svg",
      nameAr: "بطاقة الإمارات دبي الوطني دناتا وورلد",
      descriptionEn:
        "Earn 3x Dnata points on every purchase with a welcome bonus of AED 2,500 travel voucher and complimentary airport lounge access.",
      descriptionAr:
        "اكسب 3 أضعاف نقاط دناتا على كل عملية شراء مع مكافأة ترحيبية بقيمة 2,500 درهم قسيمة سفر ودخول مجاني لصالة المطار.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "1049.00",
      annualFeeWaiver: "Waived with AED 100,000 annual spend",
      rewardType: "miles" as const,
      rewardRate: "3.000",
      minSalary: "20000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "367.50",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 1049, type: "fixed" as const },
        { nameEn: "Foreign Currency Transaction", nameAr: "معاملات بالعملة الأجنبية", amount: 2.5, type: "percentage" as const },
      ],
      features: [
        { en: "3x Dnata points per AED 1 spent", ar: "3 أضعاف نقاط دناتا لكل درهم" },
        { en: "AED 2,500 welcome travel voucher", ar: "قسيمة سفر ترحيبية بقيمة 2,500 درهم" },
        { en: "Airport lounge access", ar: "دخول صالة المطار" },
      ],
      eligibilityCriteria: elig(20000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Emirates NBD"],
      category: "credit_card",
      subCategory: "premium",
      nameEn: "Emirates NBD Visa Infinite Credit Card",
      imageUrl: null,
      nameAr: "بطاقة الإمارات دبي الوطني فيزا إنفينيت",
      descriptionEn:
        "Ultra-premium card with unlimited airport lounge access, dedicated concierge, and exclusive Visa Infinite privileges.",
      descriptionAr:
        "بطاقة فائقة التميز مع دخول غير محدود لصالات المطار وكونسيرج مخصص وامتيازات فيزا إنفينيت الحصرية.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "1575.00",
      annualFeeWaiver: "Waived with AED 250,000 annual spend",
      rewardType: "points" as const,
      rewardRate: "4.000",
      minSalary: "30000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "525.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 1575, type: "fixed" as const },
      ],
      features: [
        { en: "Unlimited airport lounge access", ar: "دخول غير محدود لصالات المطار" },
        { en: "Dedicated concierge service", ar: "خدمة كونسيرج مخصصة" },
        { en: "Visa Infinite exclusive privileges", ar: "امتيازات فيزا إنفينيت الحصرية" },
      ],
      eligibilityCriteria: elig(30000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Emirates NBD"],
      category: "credit_card",
      subCategory: "rewards",
      nameEn: "Emirates NBD Visa Platinum Credit Card",
      imageUrl: null,
      nameAr: "بطاقة الإمارات دبي الوطني فيزا بلاتينيوم",
      descriptionEn:
        "Earn Plus Points on every purchase redeemable for cashback, air miles, or gift vouchers.",
      descriptionAr:
        "اكسب نقاط بلس على كل عملية شراء قابلة للاسترداد كنقد أو أميال سفر أو قسائم هدايا.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "420.00",
      annualFeeWaiver: "Waived with AED 60,000 annual spend",
      rewardType: "points" as const,
      rewardRate: "2.000",
      minSalary: "12000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "210.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 420, type: "fixed" as const },
      ],
      features: [
        { en: "Earn Plus Points on every purchase", ar: "اكسب نقاط بلس على كل عملية شراء" },
        { en: "Redeem for cashback, miles, or vouchers", ar: "استبدل بنقد أو أميال أو قسائم" },
        { en: "Visa Platinum benefits", ar: "مزايا فيزا بلاتينيوم" },
      ],
      eligibilityCriteria: elig(12000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Emirates NBD"],
      category: "credit_card",
      subCategory: "rewards",
      nameEn: "Emirates NBD Mastercard Titanium Credit Card",
      imageUrl: null,
      nameAr: "بطاقة الإمارات دبي الوطني ماستركارد تيتانيوم",
      descriptionEn:
        "Entry-level card with integrated Nol card for Dubai metro, plus life insurance cover and Plus Points.",
      descriptionAr:
        "بطاقة مبتدئة مع بطاقة نول مدمجة لمترو دبي بالإضافة إلى تأمين على الحياة ونقاط بلس.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "209.00",
      annualFeeWaiver: "Waived with AED 3,000/month spend",
      rewardType: "points" as const,
      rewardRate: "1.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "105.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 209, type: "fixed" as const },
      ],
      features: [
        { en: "Integrated Nol card for Dubai metro", ar: "بطاقة نول مدمجة لمترو دبي" },
        { en: "Earn Plus Points", ar: "اكسب نقاط بلس" },
        { en: "Life insurance cover", ar: "تغطية تأمين على الحياة" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Emirates NBD"],
      category: "credit_card",
      subCategory: "rewards",
      nameEn: "Emirates NBD Go4it Platinum Credit Card",
      imageUrl: null,
      nameAr: "بطاقة الإمارات دبي الوطني جو فور إت بلاتينيوم",
      descriptionEn:
        "Platinum card with integrated Nol card, AED 150,000 life insurance, and Plus Points rewards.",
      descriptionAr:
        "بطاقة بلاتينيوم مع بطاقة نول مدمجة وتأمين على الحياة بقيمة 150,000 درهم ومكافآت نقاط بلس.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "209.00",
      annualFeeWaiver: "Waived with AED 5,000/month spend",
      rewardType: "points" as const,
      rewardRate: "1.500",
      minSalary: "10000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "105.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 209, type: "fixed" as const },
      ],
      features: [
        { en: "Integrated Nol card", ar: "بطاقة نول مدمجة" },
        { en: "AED 150,000 life insurance cover", ar: "تأمين على الحياة بقيمة 150,000 درهم" },
        { en: "Plus Points rewards", ar: "مكافآت نقاط بلس" },
      ],
      eligibilityCriteria: elig(10000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Emirates NBD"],
      category: "credit_card",
      subCategory: "rewards",
      nameEn: "Emirates NBD Go4it Gold Credit Card",
      imageUrl: null,
      nameAr: "بطاقة الإمارات دبي الوطني جو فور إت جولد",
      descriptionEn:
        "Affordable gold card with integrated Nol card, AED 75,000 life insurance, and cashback rewards.",
      descriptionAr:
        "بطاقة ذهبية بأسعار معقولة مع بطاقة نول مدمجة وتأمين على الحياة بقيمة 75,000 درهم واسترداد نقدي.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "104.00",
      annualFeeWaiver: "Waived with AED 2,000/month spend",
      rewardType: "points" as const,
      rewardRate: "1.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "52.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 104, type: "fixed" as const },
      ],
      features: [
        { en: "Integrated Nol card", ar: "بطاقة نول مدمجة" },
        { en: "AED 75,000 life insurance cover", ar: "تأمين على الحياة بقيمة 75,000 درهم" },
        { en: "Low annual fee", ar: "رسوم سنوية منخفضة" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Emirates NBD"],
      category: "credit_card",
      subCategory: "travel",
      nameEn: "Emirates NBD Marriott Bonvoy World Credit Card",
      imageUrl: null,
      nameAr: "بطاقة الإمارات دبي الوطني ماريوت بونفوي وورلد",
      descriptionEn:
        "Earn Marriott Bonvoy points on every purchase with one complimentary hotel night annually and Silver Elite status.",
      descriptionAr:
        "اكسب نقاط ماريوت بونفوي على كل عملية شراء مع ليلة فندقية مجانية سنوياً وعضوية سيلفر إيليت.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "315.00",
      annualFeeWaiver: "Waived with AED 50,000 annual spend",
      rewardType: "points" as const,
      rewardRate: "3.000",
      minSalary: "12000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "157.50",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 315, type: "fixed" as const },
      ],
      features: [
        { en: "1 complimentary hotel night annually", ar: "ليلة فندقية مجانية سنوياً" },
        { en: "Marriott Bonvoy Silver Elite status", ar: "عضوية ماريوت بونفوي سيلفر إيليت" },
        { en: "Points on every purchase", ar: "نقاط على كل عملية شراء" },
      ],
      eligibilityCriteria: elig(12000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Emirates NBD"],
      category: "credit_card",
      subCategory: "travel",
      nameEn: "Emirates NBD Marriott Bonvoy World Elite Credit Card",
      imageUrl: null,
      nameAr: "بطاقة الإمارات دبي الوطني ماريوت بونفوي وورلد إيليت",
      descriptionEn:
        "Premium Marriott card with 100,000 Bonvoy points welcome bonus, Gold Elite status, and complimentary hotel nights.",
      descriptionAr:
        "بطاقة ماريوت المميزة مع 100,000 نقطة بونفوي ترحيبية وعضوية جولد إيليت وليالي فندقية مجانية.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "1575.00",
      annualFeeWaiver: "Waived with AED 200,000 annual spend",
      rewardType: "points" as const,
      rewardRate: "5.000",
      minSalary: "25000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "525.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 1575, type: "fixed" as const },
      ],
      features: [
        { en: "100,000 Bonvoy points welcome bonus", ar: "100,000 نقطة بونفوي ترحيبية" },
        { en: "Marriott Bonvoy Gold Elite status", ar: "عضوية ماريوت بونفوي جولد إيليت" },
        { en: "Complimentary hotel nights", ar: "ليالي فندقية مجانية" },
      ],
      eligibilityCriteria: elig(25000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Emirates NBD"],
      category: "credit_card",
      subCategory: "lifestyle",
      nameEn: "Emirates NBD U by Emaar Visa Infinite Credit Card",
      imageUrl: null,
      nameAr: "بطاقة الإمارات دبي الوطني يو باي إعمار فيزا إنفينيت",
      descriptionEn:
        "Earn U by Emaar rewards at Dubai Mall, Emaar malls, and lifestyle destinations with premium benefits.",
      descriptionAr:
        "اكسب مكافآت يو باي إعمار في دبي مول ومولات إعمار ووجهات نمط الحياة مع مزايا مميزة.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "1575.00",
      annualFeeWaiver: "Waived with AED 200,000 annual spend",
      rewardType: "points" as const,
      rewardRate: "4.000",
      minSalary: "30000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "525.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 1575, type: "fixed" as const },
      ],
      features: [
        { en: "U by Emaar rewards on shopping", ar: "مكافآت يو باي إعمار على التسوق" },
        { en: "Premium Visa Infinite benefits", ar: "مزايا فيزا إنفينيت المميزة" },
        { en: "Airport lounge access", ar: "دخول صالة المطار" },
      ],
      eligibilityCriteria: elig(30000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Emirates NBD"],
      category: "credit_card",
      subCategory: "lifestyle",
      nameEn: "Emirates NBD U by Emaar Visa Signature Credit Card",
      imageUrl: null,
      nameAr: "بطاقة الإمارات دبي الوطني يو باي إعمار فيزا سيجنتشر",
      descriptionEn:
        "Earn U by Emaar rewards at Emaar malls and attractions with Visa Signature privileges.",
      descriptionAr:
        "اكسب مكافآت يو باي إعمار في مولات إعمار والمعالم السياحية مع امتيازات فيزا سيجنتشر.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "735.00",
      annualFeeWaiver: "Waived with AED 80,000 annual spend",
      rewardType: "points" as const,
      rewardRate: "2.000",
      minSalary: "15000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "367.50",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 735, type: "fixed" as const },
      ],
      features: [
        { en: "U by Emaar rewards", ar: "مكافآت يو باي إعمار" },
        { en: "Visa Signature privileges", ar: "امتيازات فيزا سيجنتشر" },
        { en: "Emaar lifestyle benefits", ar: "مزايا نمط حياة إعمار" },
      ],
      eligibilityCriteria: elig(15000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Emirates NBD"],
      category: "credit_card",
      subCategory: "lifestyle",
      nameEn: "Emirates NBD Manchester United Credit Card",
      imageUrl: null,
      nameAr: "بطاقة الإمارات دبي الوطني مانشستر يونايتد",
      descriptionEn:
        "Official Man Utd co-branded card with welcome jersey gift, exclusive match-day offers, and Plus Points.",
      descriptionAr:
        "بطاقة مشتركة رسمية مع مانشستر يونايتد مع هدية ترحيبية قميص وعروض حصرية ليوم المباراة ونقاط بلس.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "104.00",
      annualFeeWaiver: "Waived with AED 3,000/month spend",
      rewardType: "points" as const,
      rewardRate: "1.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "52.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 104, type: "fixed" as const },
      ],
      features: [
        { en: "Man Utd jersey welcome gift", ar: "هدية ترحيبية قميص مانشستر يونايتد" },
        { en: "Exclusive match-day offers", ar: "عروض حصرية ليوم المباراة" },
        { en: "Plus Points rewards", ar: "مكافآت نقاط بلس" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Emirates NBD"],
      category: "credit_card",
      subCategory: "cashback",
      nameEn: "Emirates NBD noon Co-branded Credit Card",
      imageUrl: null,
      nameAr: "بطاقة الإمارات دبي الوطني نون",
      descriptionEn:
        "Earn up to 20% noon credits on purchases at noon.com with no annual fee. Best for online shoppers.",
      descriptionAr:
        "احصل على حتى 20٪ رصيد نون على المشتريات في noon.com بدون رسوم سنوية. الأفضل للتسوق الإلكتروني.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      cashbackRate: "20.000",
      rewardType: "cashback" as const,
      rewardRate: "20.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "Up to 20% noon credits", ar: "حتى 20٪ رصيد نون" },
        { en: "No annual fee", ar: "بدون رسوم سنوية" },
        { en: "Exclusive noon.com offers", ar: "عروض حصرية على noon.com" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    // ── ADCB (12 cards) ───────────────────────────────────────────
    {
      providerId: prov["Abu Dhabi Commercial Bank"],
      category: "credit_card",
      subCategory: "rewards",
      nameEn: "ADCB TouchPoints Titanium Credit Card",
      imageUrl: "/products/adcb-touchpoints.svg",
      nameAr: "بطاقة تاتش بوينتس تيتانيوم من بنك أبوظبي التجاري",
      descriptionEn:
        "Entry-level card earning 1 TouchPoint per AED spent, redeemable for cashback, air miles, or vouchers.",
      descriptionAr:
        "بطاقة أساسية تكسب نقطة واحدة لكل درهم قابلة للاسترداد كنقد أو أميال سفر أو قسائم.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      rewardType: "points" as const,
      rewardRate: "1.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "1 TouchPoint per AED spent", ar: "نقطة واحدة لكل درهم" },
        { en: "Redeem for cashback or miles", ar: "استبدل بنقد أو أميال" },
        { en: "No annual fee", ar: "بدون رسوم سنوية" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED),
    },
    {
      providerId: prov["Abu Dhabi Commercial Bank"],
      category: "credit_card",
      subCategory: "rewards",
      nameEn: "ADCB TouchPoints Platinum Credit Card",
      imageUrl: null,
      nameAr: "بطاقة تاتش بوينتس بلاتينيوم من بنك أبوظبي التجاري",
      descriptionEn:
        "Platinum card earning TouchPoints with 10,000 bonus points monthly and first year free.",
      descriptionAr:
        "بطاقة بلاتينيوم تكسب نقاط تاتش مع 10,000 نقطة مكافأة شهرياً والسنة الأولى مجانية.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      annualFeeWaiver: "First year free",
      rewardType: "points" as const,
      rewardRate: "2.000",
      minSalary: "8000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "100.00",
      fees: [
        { nameEn: "Annual Fee (2nd year)", nameAr: "رسوم سنوية (السنة الثانية)", amount: 399, type: "fixed" as const },
      ],
      features: [
        { en: "10,000 bonus TouchPoints monthly", ar: "10,000 نقطة مكافأة شهرياً" },
        { en: "First year free", ar: "السنة الأولى مجانية" },
        { en: "Higher earning rate", ar: "معدل كسب أعلى" },
      ],
      eligibilityCriteria: elig(8000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Abu Dhabi Commercial Bank"],
      category: "credit_card",
      subCategory: "premium",
      nameEn: "ADCB TouchPoints Infinite Credit Card",
      imageUrl: null,
      nameAr: "بطاقة تاتش بوينتس إنفينيت من بنك أبوظبي التجاري",
      descriptionEn:
        "Premium Infinite card with golf access, 850+ airport lounges worldwide, and accelerated TouchPoints earning.",
      descriptionAr:
        "بطاقة إنفينيت المميزة مع دخول ملاعب الغولف وأكثر من 850 صالة مطار حول العالم ونقاط تاتش متسارعة.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "1050.00",
      annualFeeWaiver: "Waived with AED 200,000 annual spend",
      rewardType: "points" as const,
      rewardRate: "4.000",
      minSalary: "40000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "525.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 1050, type: "fixed" as const },
      ],
      features: [
        { en: "850+ airport lounges worldwide", ar: "أكثر من 850 صالة مطار حول العالم" },
        { en: "Complimentary golf access", ar: "دخول مجاني لملاعب الغولف" },
        { en: "Accelerated TouchPoints earning", ar: "كسب نقاط تاتش متسارع" },
      ],
      eligibilityCriteria: elig(40000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Abu Dhabi Commercial Bank"],
      category: "credit_card",
      subCategory: "cashback",
      nameEn: "ADCB 365 Cashback Credit Card",
      imageUrl: null,
      nameAr: "بطاقة بنك أبوظبي التجاري 365 كاش باك",
      descriptionEn:
        "Earn 6% cashback on dining, 5% on groceries, 3% on fuel, and 1% on all other spends every day.",
      descriptionAr:
        "احصل على 6٪ استرداد نقدي على المطاعم و5٪ على البقالة و3٪ على الوقود و1٪ على جميع المشتريات الأخرى يومياً.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "383.00",
      annualFeeWaiver: "Waived with AED 5,000/month spend",
      cashbackRate: "6.000",
      rewardType: "cashback" as const,
      rewardRate: "6.000",
      minSalary: "8000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "150.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 383, type: "fixed" as const },
        { nameEn: "Replacement Card", nameAr: "بطاقة بديلة", amount: 50, type: "fixed" as const },
      ],
      features: [
        { en: "6% cashback on dining", ar: "6٪ استرداد نقدي على المطاعم" },
        { en: "5% cashback on groceries", ar: "5٪ استرداد نقدي على البقالة" },
        { en: "3% cashback on fuel", ar: "3٪ استرداد نقدي على الوقود" },
      ],
      eligibilityCriteria: elig(8000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Abu Dhabi Commercial Bank"],
      category: "credit_card",
      subCategory: "cashback",
      nameEn: "ADCB Essential Cashback Credit Card",
      imageUrl: null,
      nameAr: "بطاقة بنك أبوظبي التجاري كاش باك الأساسية",
      descriptionEn:
        "Free-for-life everyday cashback card with cashback on all purchases and no minimum spend requirement.",
      descriptionAr:
        "بطاقة استرداد نقدي يومية مجانية مدى الحياة مع استرداد نقدي على جميع المشتريات بدون حد أدنى للإنفاق.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      cashbackRate: "1.000",
      rewardType: "cashback" as const,
      rewardRate: "1.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "Free for life – no annual fee", ar: "مجانية مدى الحياة – بدون رسوم سنوية" },
        { en: "Everyday cashback on all purchases", ar: "استرداد نقدي يومي على جميع المشتريات" },
        { en: "No minimum spend", ar: "بدون حد أدنى للإنفاق" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Abu Dhabi Commercial Bank"],
      category: "credit_card",
      subCategory: "travel",
      nameEn: "ADCB Traveller Credit Card",
      imageUrl: "/products/adcb-traveller.svg",
      nameAr: "بطاقة المسافر من بنك أبوظبي التجاري",
      descriptionEn:
        "Save 10% on flights and hotels, enjoy 0% foreign exchange markup, and earn points on travel bookings.",
      descriptionAr:
        "وفر 10٪ على الرحلات والفنادق مع 0٪ رسوم تحويل عملات أجنبية واكسب نقاط على حجوزات السفر.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "1575.00",
      annualFeeWaiver: "Waived with AED 150,000 annual spend",
      rewardType: "miles" as const,
      rewardRate: "4.000",
      minSalary: "20000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "525.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 1575, type: "fixed" as const },
      ],
      features: [
        { en: "10% off flights and hotels", ar: "خصم 10٪ على الرحلات والفنادق" },
        { en: "0% foreign exchange markup", ar: "0٪ رسوم تحويل عملات" },
        { en: "Airport lounge access", ar: "دخول صالة المطار" },
      ],
      eligibilityCriteria: elig(20000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Abu Dhabi Commercial Bank"],
      category: "credit_card",
      subCategory: "premium",
      nameEn: "ADCB Betaqti Credit Card",
      imageUrl: null,
      nameAr: "بطاقة بنك أبوظبي التجاري بطاقتي",
      descriptionEn:
        "Exclusive card for UAE Nationals with 300,000 welcome TouchPoints, 3x earning rate, and premium lifestyle benefits.",
      descriptionAr:
        "بطاقة حصرية للمواطنين الإماراتيين مع 300,000 نقطة ترحيبية و3 أضعاف معدل الكسب ومزايا نمط حياة مميزة.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "2100.00",
      annualFeeWaiver: "Waived for select customers",
      rewardType: "points" as const,
      rewardRate: "3.000",
      minSalary: "10000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "0.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 2100, type: "fixed" as const },
      ],
      features: [
        { en: "300,000 welcome TouchPoints", ar: "300,000 نقطة ترحيبية" },
        { en: "3x earning rate", ar: "3 أضعاف معدل الكسب" },
        { en: "Premium lifestyle benefits for Emiratis", ar: "مزايا نمط حياة مميزة للإماراتيين" },
      ],
      eligibilityCriteria: elig(10000, UAE_ONLY, SALARIED_SE),
    },
    {
      providerId: prov["Abu Dhabi Commercial Bank"],
      category: "credit_card",
      subCategory: "miles",
      nameEn: "ADCB Etihad Guest Platinum Credit Card",
      imageUrl: null,
      nameAr: "بطاقة بنك أبوظبي التجاري ضيف الاتحاد بلاتينيوم",
      descriptionEn:
        "Earn Etihad Guest Miles with 35,000 welcome miles bonus and airport lounge access.",
      descriptionAr:
        "اكسب أميال ضيف الاتحاد مع 35,000 ميل ترحيبي ودخول صالة المطار.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "525.00",
      annualFeeWaiver: "Waived with AED 60,000 annual spend",
      rewardType: "miles" as const,
      rewardRate: "2.000",
      minSalary: "8000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "262.50",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 525, type: "fixed" as const },
      ],
      features: [
        { en: "35,000 welcome Etihad Guest Miles", ar: "35,000 ميل ترحيبي ضيف الاتحاد" },
        { en: "Earn miles on every spend", ar: "اكسب أميال على كل عملية شراء" },
        { en: "Airport lounge access", ar: "دخول صالة المطار" },
      ],
      eligibilityCriteria: elig(8000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Abu Dhabi Commercial Bank"],
      category: "credit_card",
      subCategory: "miles",
      nameEn: "ADCB Etihad Guest Infinite Credit Card",
      imageUrl: null,
      nameAr: "بطاقة بنك أبوظبي التجاري ضيف الاتحاد إنفينيت",
      descriptionEn:
        "Premium miles card with 60,000 welcome Etihad Guest Miles, unlimited airport lounge access, and concierge.",
      descriptionAr:
        "بطاقة أميال مميزة مع 60,000 ميل ترحيبي ضيف الاتحاد ودخول غير محدود لصالات المطار وكونسيرج.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "2625.00",
      annualFeeWaiver: "Waived with AED 300,000 annual spend",
      rewardType: "miles" as const,
      rewardRate: "4.000",
      minSalary: "30000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "1050.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 2625, type: "fixed" as const },
      ],
      features: [
        { en: "60,000 welcome Etihad Guest Miles", ar: "60,000 ميل ترحيبي ضيف الاتحاد" },
        { en: "Unlimited airport lounge access", ar: "دخول غير محدود لصالات المطار" },
        { en: "Concierge service", ar: "خدمة كونسيرج" },
      ],
      eligibilityCriteria: elig(30000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Abu Dhabi Commercial Bank"],
      category: "credit_card",
      subCategory: "shopping",
      nameEn: "ADCB LuLu Platinum Credit Card",
      imageUrl: null,
      nameAr: "بطاقة بنك أبوظبي التجاري لولو بلاتينيوم",
      descriptionEn:
        "Earn 3.5% LuLu Points on all LuLu Hypermarket purchases with exclusive member-only deals.",
      descriptionAr:
        "اكسب 3.5٪ نقاط لولو على جميع مشتريات لولو هايبرماركت مع عروض حصرية للأعضاء.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      cashbackRate: "3.500",
      rewardType: "cashback" as const,
      rewardRate: "3.500",
      minSalary: "8000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "3.5% LuLu Points on LuLu purchases", ar: "3.5٪ نقاط لولو على مشتريات لولو" },
        { en: "Exclusive member-only deals", ar: "عروض حصرية للأعضاء" },
        { en: "No annual fee", ar: "بدون رسوم سنوية" },
      ],
      eligibilityCriteria: elig(8000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Abu Dhabi Commercial Bank"],
      category: "credit_card",
      subCategory: "shopping",
      nameEn: "ADCB LuLu Titanium Credit Card",
      imageUrl: null,
      nameAr: "بطاقة بنك أبوظبي التجاري لولو تيتانيوم",
      descriptionEn:
        "Lifetime free card earning 3.5% LuLu Points at LuLu Hypermarket with everyday savings.",
      descriptionAr:
        "بطاقة مجانية مدى الحياة تكسب 3.5٪ نقاط لولو في لولو هايبرماركت مع توفير يومي.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      annualFeeWaiver: "Lifetime free",
      cashbackRate: "3.500",
      rewardType: "cashback" as const,
      rewardRate: "3.500",
      minSalary: "5000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "Lifetime free – no annual fee ever", ar: "مجانية مدى الحياة" },
        { en: "3.5% LuLu Points at LuLu", ar: "3.5٪ نقاط لولو في لولو" },
        { en: "Everyday savings", ar: "توفير يومي" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Abu Dhabi Commercial Bank"],
      category: "credit_card",
      subCategory: "premium",
      nameEn: "ADCB ALL Infinite Credit Card",
      imageUrl: null,
      nameAr: "بطاقة بنك أبوظبي التجاري أوول إنفينيت",
      descriptionEn:
        "Ultra-premium card offering Accor Live Limitless hotel rewards with Gold status and premium benefits.",
      descriptionAr:
        "بطاقة فائقة التميز تقدم مكافآت فنادق أكور مع عضوية ذهبية ومزايا مميزة.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "2625.00",
      annualFeeWaiver: "Waived for select customers",
      rewardType: "points" as const,
      rewardRate: "5.000",
      minSalary: "40000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "1050.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 2625, type: "fixed" as const },
      ],
      features: [
        { en: "Accor Live Limitless Gold status", ar: "عضوية أكور الذهبية" },
        { en: "Hotel rewards at Accor properties", ar: "مكافآت فندقية في فنادق أكور" },
        { en: "Unlimited airport lounge access", ar: "دخول غير محدود لصالات المطار" },
      ],
      eligibilityCriteria: elig(40000, UAE_EXPAT, SALARIED_SE),
    },
    // ── Mashreq (7 cards) ──────────────────────────────────────────
    {
      providerId: prov["Mashreq"],
      category: "credit_card",
      subCategory: "cashback",
      nameEn: "Mashreq Cashback Credit Card",
      imageUrl: "/products/mashreq-cashback.svg",
      nameAr: "بطاقة المشرق كاش باك",
      descriptionEn:
        "5% cashback on dining, 2% on international spends, 1% on everything else. Free for life with AED 5,000 salary.",
      descriptionAr:
        "5٪ استرداد نقدي على المطاعم و2٪ على المشتريات الدولية و1٪ على كل شيء آخر. مجانية مدى الحياة.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      cashbackRate: "5.000",
      rewardType: "cashback" as const,
      rewardRate: "5.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "5% cashback on dining", ar: "5٪ استرداد نقدي على المطاعم" },
        { en: "2% on international spends", ar: "2٪ على المشتريات الدولية" },
        { en: "1% on all other spends", ar: "1٪ على جميع المشتريات الأخرى" },
        { en: "Free for life", ar: "مجانية مدى الحياة" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Mashreq"],
      category: "credit_card",
      subCategory: "premium",
      nameEn: "Mashreq Solitaire World Elite Mastercard",
      imageUrl: "/products/mashreq-solitaire.svg",
      nameAr: "بطاقة المشرق سوليتير وورلد إيليت ماستركارد",
      descriptionEn:
        "Premium card with 5% dining cashback, 1000+ airport lounges, Fitness First membership, and concierge service.",
      descriptionAr:
        "بطاقة مميزة مع 5٪ استرداد نقدي على المطاعم وأكثر من 1000 صالة مطار وعضوية فيتنس فيرست وخدمة كونسيرج.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life (salary AED 25,000+)",
      rewardType: "points" as const,
      rewardRate: "5.000",
      minSalary: "25000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "5% cashback on dining", ar: "5٪ استرداد نقدي على المطاعم" },
        { en: "1000+ airport lounges worldwide", ar: "أكثر من 1000 صالة مطار حول العالم" },
        { en: "Fitness First membership included", ar: "عضوية فيتنس فيرست مشمولة" },
        { en: "Concierge service", ar: "خدمة كونسيرج" },
      ],
      eligibilityCriteria: elig(25000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Mashreq"],
      category: "credit_card",
      subCategory: "rewards",
      nameEn: "Mashreq Platinum Elite Credit Card",
      imageUrl: null,
      nameAr: "بطاقة المشرق بلاتينيوم إيليت",
      descriptionEn:
        "5% cashback on dining, airport lounge access, Fitness First membership, and premium lifestyle rewards.",
      descriptionAr:
        "5٪ استرداد نقدي على المطاعم ودخول صالة المطار وعضوية فيتنس فيرست ومكافآت نمط حياة مميزة.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "683.00",
      annualFeeWaiver: "Waived with AED 60,000 annual spend",
      rewardType: "points" as const,
      rewardRate: "3.000",
      minSalary: "7000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "341.50",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 683, type: "fixed" as const },
      ],
      features: [
        { en: "5% cashback on dining", ar: "5٪ استرداد نقدي على المطاعم" },
        { en: "Airport lounge access", ar: "دخول صالة المطار" },
        { en: "Fitness First membership", ar: "عضوية فيتنس فيرست" },
      ],
      eligibilityCriteria: elig(7000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Mashreq"],
      category: "credit_card",
      subCategory: "lifestyle",
      nameEn: "Mashreq Novo Credit Card",
      imageUrl: null,
      nameAr: "بطاقة المشرق نوفو",
      descriptionEn:
        "Lifestyle card with LoungeKey access, 4 free movie tickets monthly, and everyday rewards for AED 300 annual fee.",
      descriptionAr:
        "بطاقة نمط حياة مع دخول LoungeKey و4 تذاكر سينما مجانية شهرياً ومكافآت يومية برسوم سنوية 300 درهم.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "300.00",
      annualFeeWaiver: "Waived with AED 5,000/month spend",
      rewardType: "points" as const,
      rewardRate: "1.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "150.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 300, type: "fixed" as const },
      ],
      features: [
        { en: "LoungeKey airport access", ar: "دخول صالة المطار LoungeKey" },
        { en: "4 free movie tickets monthly", ar: "4 تذاكر سينما مجانية شهرياً" },
        { en: "Everyday lifestyle rewards", ar: "مكافآت نمط حياة يومية" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Mashreq"],
      category: "credit_card",
      subCategory: "cashback",
      nameEn: "Mashreq Gold Cashback Credit Card",
      imageUrl: null,
      nameAr: "بطاقة المشرق جولد كاش باك",
      descriptionEn:
        "Unlimited cashback on all purchases with AED 500 welcome cashback bonus and no annual fee.",
      descriptionAr:
        "استرداد نقدي غير محدود على جميع المشتريات مع مكافأة ترحيبية 500 درهم وبدون رسوم سنوية.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      cashbackRate: "1.000",
      rewardType: "cashback" as const,
      rewardRate: "1.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "Unlimited cashback on all purchases", ar: "استرداد نقدي غير محدود على جميع المشتريات" },
        { en: "AED 500 welcome cashback", ar: "مكافأة ترحيبية 500 درهم" },
        { en: "No annual fee", ar: "بدون رسوم سنوية" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Mashreq"],
      category: "credit_card",
      subCategory: "islamic",
      nameEn: "Mashreq Al Islami Emirati Solitaire Credit Card",
      imageUrl: null,
      nameAr: "بطاقة المشرق الإسلامي سوليتير للإماراتيين",
      descriptionEn:
        "Shariah-compliant premium card for Emiratis with AED 2,000 cashback welcome bonus and 6x Salaam points.",
      descriptionAr:
        "بطاقة مميزة متوافقة مع الشريعة للإماراتيين مع مكافأة ترحيبية 2,000 درهم و6 أضعاف نقاط سلام.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      rewardType: "points" as const,
      rewardRate: "6.000",
      minSalary: "25000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "AED 2,000 cashback welcome bonus", ar: "مكافأة ترحيبية 2,000 درهم" },
        { en: "6x Salaam points on all spends", ar: "6 أضعاف نقاط سلام على جميع المشتريات" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
      ],
      eligibilityCriteria: elig(25000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Mashreq"],
      category: "credit_card",
      subCategory: "islamic",
      nameEn: "Mashreq Al Islami Platinum Elite Credit Card",
      imageUrl: null,
      nameAr: "بطاقة المشرق الإسلامي بلاتينيوم إيليت",
      descriptionEn:
        "Shariah-compliant card with 5x Salaam points on international spends, 3x on dining, and lounge access.",
      descriptionAr:
        "بطاقة متوافقة مع الشريعة مع 5 أضعاف نقاط سلام على المشتريات الدولية و3 أضعاف على المطاعم ودخول صالة المطار.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "683.00",
      annualFeeWaiver: "Waived with AED 60,000 annual spend",
      rewardType: "points" as const,
      rewardRate: "5.000",
      minSalary: "7000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "341.50",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 683, type: "fixed" as const },
      ],
      features: [
        { en: "5x Salaam points on international spends", ar: "5 أضعاف نقاط سلام على المشتريات الدولية" },
        { en: "3x on dining", ar: "3 أضعاف على المطاعم" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
        { en: "Airport lounge access", ar: "دخول صالة المطار" },
      ],
      eligibilityCriteria: elig(7000, UAE_EXPAT, SALARIED_SE),
    },
    // ── RAKBANK (8 cards) ──────────────────────────────────────────
    {
      providerId: prov["RAKBANK"],
      category: "credit_card",
      subCategory: "cashback",
      nameEn: "RAKBANK Titanium Credit Card",
      imageUrl: null,
      nameAr: "بطاقة بنك رأس الخيمة تيتانيوم",
      descriptionEn:
        "Earn 5% cashback on supermarkets and dining, plus 50% off entertainment and movies.",
      descriptionAr:
        "احصل على 5٪ استرداد نقدي على السوبرماركت والمطاعم بالإضافة إلى خصم 50٪ على الترفيه والسينما.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      cashbackRate: "5.000",
      rewardType: "cashback" as const,
      rewardRate: "5.000",
      minSalary: "8000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "5% cashback on supermarkets & dining", ar: "5٪ استرداد نقدي على السوبرماركت والمطاعم" },
        { en: "50% off entertainment", ar: "خصم 50٪ على الترفيه" },
        { en: "Free for life", ar: "مجانية مدى الحياة" },
      ],
      eligibilityCriteria: elig(8000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["RAKBANK"],
      category: "credit_card",
      subCategory: "cashback",
      nameEn: "RAKBANK World Credit Card",
      imageUrl: "/products/rakbank-world.svg",
      nameAr: "بطاقة بنك رأس الخيمة وورلد",
      descriptionEn:
        "Up to 10% cashback on dining, travel, and groceries with AED 1,500 welcome bonus and airport lounge access.",
      descriptionAr:
        "استرداد نقدي يصل إلى 10٪ على المطاعم والسفر والبقالة مع مكافأة ترحيبية 1,500 درهم ودخول صالة المطار.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "950.00",
      annualFeeWaiver: "Waived with AED 100,000 annual spend",
      cashbackRate: "10.000",
      rewardType: "cashback" as const,
      rewardRate: "10.000",
      minSalary: "20000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "475.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 950, type: "fixed" as const },
      ],
      features: [
        { en: "Up to 10% cashback on dining, travel, groceries", ar: "حتى 10٪ استرداد نقدي على المطاعم والسفر والبقالة" },
        { en: "AED 1,500 welcome bonus", ar: "مكافأة ترحيبية 1,500 درهم" },
        { en: "Airport lounge access", ar: "دخول صالة المطار" },
      ],
      eligibilityCriteria: elig(20000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["RAKBANK"],
      category: "credit_card",
      subCategory: "miles",
      nameEn: "RAKBANK Emirates Skywards World Elite Credit Card",
      imageUrl: null,
      nameAr: "بطاقة بنك رأس الخيمة سكاي واردز وورلد إيليت",
      descriptionEn:
        "Earn up to 40,000 Skywards Miles per month with unlimited airport lounge access and premium travel benefits.",
      descriptionAr:
        "اكسب حتى 40,000 ميل سكاي واردز شهرياً مع دخول غير محدود لصالات المطار ومزايا سفر مميزة.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "1499.00",
      annualFeeWaiver: "Waived with AED 200,000 annual spend",
      rewardType: "miles" as const,
      rewardRate: "5.000",
      minSalary: "25000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "750.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 1499, type: "fixed" as const },
      ],
      features: [
        { en: "Up to 40,000 Skywards Miles/month", ar: "حتى 40,000 ميل سكاي واردز شهرياً" },
        { en: "Unlimited airport lounge access", ar: "دخول غير محدود لصالات المطار" },
        { en: "Premium travel insurance", ar: "تأمين سفر مميز" },
      ],
      eligibilityCriteria: elig(25000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["RAKBANK"],
      category: "credit_card",
      subCategory: "travel",
      nameEn: "RAKBANK Air Arabia Platinum Credit Card",
      imageUrl: null,
      nameAr: "بطاقة بنك رأس الخيمة العربية للطيران بلاتينيوم",
      descriptionEn:
        "Earn 15,000 AirRewards points as welcome bonus with free annual fee and Air Arabia flight benefits.",
      descriptionAr:
        "اكسب 15,000 نقطة AirRewards كمكافأة ترحيبية بدون رسوم سنوية ومزايا رحلات العربية للطيران.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      rewardType: "miles" as const,
      rewardRate: "2.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "15,000 AirRewards welcome points", ar: "15,000 نقطة AirRewards ترحيبية" },
        { en: "Air Arabia flight benefits", ar: "مزايا رحلات العربية للطيران" },
        { en: "No annual fee", ar: "بدون رسوم سنوية" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["RAKBANK"],
      category: "credit_card",
      subCategory: "travel",
      nameEn: "RAKBANK High Flyer Platinum Credit Card",
      imageUrl: null,
      nameAr: "بطاقة بنك رأس الخيمة هاي فلاير بلاتينيوم",
      descriptionEn:
        "Travel-focused card with lounge access, travel benefits, and reward points on all purchases.",
      descriptionAr:
        "بطاقة سفر مع دخول صالة المطار ومزايا سفر ونقاط مكافآت على جميع المشتريات.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      rewardType: "miles" as const,
      rewardRate: "1.500",
      minSalary: "5000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "Airport lounge access", ar: "دخول صالة المطار" },
        { en: "Travel benefits included", ar: "مزايا سفر مشمولة" },
        { en: "Reward points on every spend", ar: "نقاط مكافآت على كل عملية شراء" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["RAKBANK"],
      category: "credit_card",
      subCategory: "cashback",
      nameEn: "RAKBANK RED Credit Card",
      imageUrl: null,
      nameAr: "بطاقة بنك رأس الخيمة ريد",
      descriptionEn:
        "Free international money transfers, cashback on all purchases, and no annual fee.",
      descriptionAr:
        "تحويلات دولية مجانية واسترداد نقدي على جميع المشتريات وبدون رسوم سنوية.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      cashbackRate: "1.000",
      rewardType: "cashback" as const,
      rewardRate: "1.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "Free international money transfers", ar: "تحويلات دولية مجانية" },
        { en: "Cashback on all purchases", ar: "استرداد نقدي على جميع المشتريات" },
        { en: "No annual fee", ar: "بدون رسوم سنوية" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["RAKBANK"],
      category: "credit_card",
      subCategory: "lifestyle",
      nameEn: "RAKBANK FC Barcelona Platinum Credit Card",
      imageUrl: null,
      nameAr: "بطاقة بنك رأس الخيمة إف سي برشلونة بلاتينيوم",
      descriptionEn:
        "Official FC Barcelona co-branded card with exclusive Barca perks, lounge access, and reward points.",
      descriptionAr:
        "بطاقة رسمية مشتركة مع إف سي برشلونة مع مزايا برشلونة الحصرية ودخول صالة المطار ونقاط مكافآت.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      rewardType: "points" as const,
      rewardRate: "1.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "Exclusive FC Barcelona perks", ar: "مزايا إف سي برشلونة الحصرية" },
        { en: "Airport lounge access", ar: "دخول صالة المطار" },
        { en: "No annual fee", ar: "بدون رسوم سنوية" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["RAKBANK"],
      category: "credit_card",
      subCategory: "shopping",
      nameEn: "RAKBANK Kalyan Jewellers Credit Card",
      imageUrl: null,
      nameAr: "بطاقة بنك رأس الخيمة كاليان للمجوهرات",
      descriptionEn:
        "Earn Goldback rewards on every purchase at Kalyan Jewellers with exclusive gold savings benefits.",
      descriptionAr:
        "اكسب مكافآت جولد باك على كل عملية شراء في كاليان للمجوهرات مع مزايا ادخار الذهب الحصرية.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      rewardType: "points" as const,
      rewardRate: "2.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 55,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "Goldback rewards at Kalyan Jewellers", ar: "مكافآت جولد باك في كاليان للمجوهرات" },
        { en: "Exclusive gold savings benefits", ar: "مزايا ادخار الذهب الحصرية" },
        { en: "No annual fee", ar: "بدون رسوم سنوية" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    // ── DIB (10 cards — ALL Islamic) ───────────────────────────────
    {
      providerId: prov["Dubai Islamic Bank"],
      category: "credit_card",
      subCategory: "islamic",
      nameEn: "DIB Prime Classic Covered Card",
      imageUrl: null,
      nameAr: "بطاقة بنك دبي الإسلامي برايم كلاسيك",
      descriptionEn:
        "Basic Shariah-compliant covered card with no annual fee and essential banking features.",
      descriptionAr:
        "بطاقة مغطاة أساسية متوافقة مع الشريعة بدون رسوم سنوية ومزايا مصرفية أساسية.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      rewardType: "points" as const,
      rewardRate: "1.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "Shariah-compliant covered card", ar: "بطاقة مغطاة متوافقة مع الشريعة" },
        { en: "No annual fee", ar: "بدون رسوم سنوية" },
        { en: "Essential banking features", ar: "مزايا مصرفية أساسية" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Dubai Islamic Bank"],
      category: "credit_card",
      subCategory: "islamic",
      nameEn: "DIB Prime Gold Covered Card",
      imageUrl: null,
      nameAr: "بطاقة بنك دبي الإسلامي برايم جولد",
      descriptionEn:
        "Shariah-compliant gold card with hotel privileges, credit shield protection, and no annual fee.",
      descriptionAr:
        "بطاقة ذهبية متوافقة مع الشريعة مع امتيازات فندقية وحماية درع الائتمان وبدون رسوم سنوية.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      rewardType: "points" as const,
      rewardRate: "1.500",
      minSalary: "5000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "Hotel privileges", ar: "امتيازات فندقية" },
        { en: "Credit shield protection", ar: "حماية درع الائتمان" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Dubai Islamic Bank"],
      category: "credit_card",
      subCategory: "islamic",
      nameEn: "DIB Prime Platinum Covered Card",
      imageUrl: null,
      nameAr: "بطاقة بنك دبي الإسلامي برايم بلاتينيوم",
      descriptionEn:
        "Shariah-compliant platinum card with 2.5x Wala'a Rewards earning rate and premium lifestyle benefits.",
      descriptionAr:
        "بطاقة بلاتينيوم متوافقة مع الشريعة مع 2.5 ضعف معدل كسب مكافآت ولاء ومزايا نمط حياة مميزة.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      rewardType: "points" as const,
      rewardRate: "2.500",
      minSalary: "15000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "2.5x Wala'a Rewards", ar: "2.5 ضعف مكافآت ولاء" },
        { en: "Premium lifestyle benefits", ar: "مزايا نمط حياة مميزة" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
      ],
      eligibilityCriteria: elig(15000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Dubai Islamic Bank"],
      category: "credit_card",
      subCategory: "premium",
      nameEn: "DIB Prime Visa Infinite Covered Card",
      imageUrl: "/products/dib-prime.svg",
      nameAr: "بطاقة بنك دبي الإسلامي برايم فيزا إنفينيت",
      descriptionEn:
        "Shariah-compliant premium card with 1% cashback on all transactions, airport lounge access, and no annual fee for life.",
      descriptionAr:
        "بطاقة مميزة متوافقة مع الشريعة مع استرداد نقدي 1٪ ودخول صالة المطار وبدون رسوم سنوية مدى الحياة.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      cashbackRate: "1.000",
      rewardType: "cashback" as const,
      rewardRate: "1.000",
      minSalary: "50000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "1% cashback on all transactions", ar: "1٪ استرداد نقدي على جميع المعاملات" },
        { en: "Airport lounge access", ar: "دخول صالة المطار" },
        { en: "No annual fee for life", ar: "بدون رسوم سنوية مدى الحياة" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
      ],
      eligibilityCriteria: elig(50000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Dubai Islamic Bank"],
      category: "credit_card",
      subCategory: "rewards",
      nameEn: "DIB Visa Signature Covered Card",
      imageUrl: "/products/dib-signature.svg",
      nameAr: "بطاقة بنك دبي الإسلامي فيزا سيجنتشر",
      descriptionEn:
        "Earn Mazaya rewards points on every purchase with complimentary Dine-In offers and valet parking.",
      descriptionAr:
        "اكسب نقاط مزايا على كل عملية شراء مع عروض مطاعم وخدمة صف سيارات مجانية.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "525.00",
      annualFeeWaiver: "Waived with AED 60,000 annual spend",
      rewardType: "points" as const,
      rewardRate: "2.000",
      minSalary: "10000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "262.50",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 525, type: "fixed" as const },
      ],
      features: [
        { en: "Mazaya reward points", ar: "نقاط مكافآت مزايا" },
        { en: "Dine-In offers", ar: "عروض المطاعم" },
        { en: "Valet parking", ar: "خدمة صف السيارات" },
      ],
      eligibilityCriteria: elig(10000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Dubai Islamic Bank"],
      category: "credit_card",
      subCategory: "premium",
      nameEn: "DIB SHAMS Infinite Covered Card",
      imageUrl: null,
      nameAr: "بطاقة بنك دبي الإسلامي شمس إنفينيت",
      descriptionEn:
        "Premium Islamic card with first year free, 4 complimentary airport transfers, and unlimited lounge access.",
      descriptionAr:
        "بطاقة إسلامية مميزة مع السنة الأولى مجانية و4 تحويلات مطار مجانية ودخول غير محدود لصالات المطار.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "0.00",
      annualFeeWaiver: "First year free",
      rewardType: "points" as const,
      rewardRate: "3.000",
      minSalary: "20000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "0.00",
      fees: [
        { nameEn: "Annual Fee (2nd year)", nameAr: "رسوم سنوية (السنة الثانية)", amount: 1050, type: "fixed" as const },
      ],
      features: [
        { en: "4 complimentary airport transfers", ar: "4 تحويلات مطار مجانية" },
        { en: "Unlimited airport lounge access", ar: "دخول غير محدود لصالات المطار" },
        { en: "First year free", ar: "السنة الأولى مجانية" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
      ],
      eligibilityCriteria: elig(20000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Dubai Islamic Bank"],
      category: "credit_card",
      subCategory: "islamic",
      nameEn: "DIB SHAMS Platinum Covered Card",
      imageUrl: null,
      nameAr: "بطاقة بنك دبي الإسلامي شمس بلاتينيوم",
      descriptionEn:
        "Shariah-compliant card with SHAMS rewards programme, annual fee waived, and lifestyle benefits.",
      descriptionAr:
        "بطاقة متوافقة مع الشريعة مع برنامج مكافآت شمس ورسوم سنوية معفاة ومزايا نمط الحياة.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "0.00",
      annualFeeWaiver: "Annual fee waived",
      rewardType: "points" as const,
      rewardRate: "2.000",
      minSalary: "8000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "SHAMS rewards programme", ar: "برنامج مكافآت شمس" },
        { en: "Annual fee waived", ar: "رسوم سنوية معفاة" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
      ],
      eligibilityCriteria: elig(8000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Dubai Islamic Bank"],
      category: "credit_card",
      subCategory: "miles",
      nameEn: "Emirates Skywards DIB Infinite Covered Card",
      imageUrl: null,
      nameAr: "بطاقة سكاي واردز بنك دبي الإسلامي إنفينيت",
      descriptionEn:
        "Earn Skywards Miles on every spend with Skywards Silver status, unlimited lounge access, and Shariah compliance.",
      descriptionAr:
        "اكسب أميال سكاي واردز على كل عملية شراء مع عضوية سكاي واردز الفضية ودخول غير محدود لصالات المطار.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "2625.00",
      annualFeeWaiver: "Waived with AED 300,000 annual spend",
      rewardType: "miles" as const,
      rewardRate: "4.000",
      minSalary: "20000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "1050.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 2625, type: "fixed" as const },
      ],
      features: [
        { en: "Skywards Silver status", ar: "عضوية سكاي واردز الفضية" },
        { en: "Unlimited airport lounge access", ar: "دخول غير محدود لصالات المطار" },
        { en: "Earn Skywards Miles on every spend", ar: "اكسب أميال سكاي واردز على كل عملية شراء" },
      ],
      eligibilityCriteria: elig(20000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Dubai Islamic Bank"],
      category: "credit_card",
      subCategory: "miles",
      nameEn: "Emirates Skywards DIB Signature Covered Card",
      imageUrl: null,
      nameAr: "بطاقة سكاي واردز بنك دبي الإسلامي سيجنتشر",
      descriptionEn:
        "Earn Skywards Miles on every purchase with airport lounge access and Shariah-compliant benefits.",
      descriptionAr:
        "اكسب أميال سكاي واردز على كل عملية شراء مع دخول صالة المطار ومزايا متوافقة مع الشريعة.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "1050.00",
      annualFeeWaiver: "Waived with AED 100,000 annual spend",
      rewardType: "miles" as const,
      rewardRate: "2.000",
      minSalary: "15000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "525.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 1050, type: "fixed" as const },
      ],
      features: [
        { en: "Earn Skywards Miles on every spend", ar: "اكسب أميال سكاي واردز على كل عملية شراء" },
        { en: "Airport lounge access", ar: "دخول صالة المطار" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
      ],
      eligibilityCriteria: elig(15000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Dubai Islamic Bank"],
      category: "credit_card",
      subCategory: "women",
      nameEn: "DIB Johara Gold Premium Covered Card",
      imageUrl: null,
      nameAr: "بطاقة بنك دبي الإسلامي جوهرة جولد بريميوم",
      descriptionEn:
        "Shariah-compliant card designed for women with travel and retail rewards, and no annual fee.",
      descriptionAr:
        "بطاقة متوافقة مع الشريعة مصممة للنساء مع مكافآت سفر وتسوق وبدون رسوم سنوية.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      rewardType: "points" as const,
      rewardRate: "2.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "Designed exclusively for women", ar: "مصممة حصرياً للنساء" },
        { en: "Travel and retail rewards", ar: "مكافآت سفر وتسوق" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
        { en: "No annual fee", ar: "بدون رسوم سنوية" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    // ── ADIB (8 cards — ALL Islamic) ───────────────────────────────
    {
      providerId: prov["Abu Dhabi Islamic Bank"],
      category: "credit_card",
      subCategory: "cashback",
      nameEn: "ADIB Cashback Visa Covered Card",
      imageUrl: "/products/adib-covered.svg",
      nameAr: "بطاقة مصرف أبوظبي الإسلامي كاش باك فيزا",
      descriptionEn:
        "Shariah-compliant covered card offering 4% cashback on daily spend categories including groceries and fuel.",
      descriptionAr:
        "بطاقة مغطاة متوافقة مع الشريعة تقدم 4٪ استرداد نقدي على فئات الإنفاق اليومي بما في ذلك البقالة والوقود.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "300.00",
      annualFeeWaiver: "Varies by card tier",
      cashbackRate: "4.000",
      rewardType: "cashback" as const,
      rewardRate: "4.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "150.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 300, type: "fixed" as const },
        { nameEn: "Replacement Card", nameAr: "بطاقة بديلة", amount: 50, type: "fixed" as const },
      ],
      features: [
        { en: "4% cashback on daily spend", ar: "4٪ استرداد نقدي على الإنفاق اليومي" },
        { en: "Shariah-compliant covered card", ar: "بطاقة مغطاة متوافقة مع الشريعة" },
        { en: "Groceries and fuel cashback", ar: "استرداد نقدي على البقالة والوقود" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Abu Dhabi Islamic Bank"],
      category: "credit_card",
      subCategory: "miles",
      nameEn: "ADIB Etihad Guest Visa Infinite Covered Card",
      imageUrl: null,
      nameAr: "بطاقة مصرف أبوظبي الإسلامي ضيف الاتحاد فيزا إنفينيت",
      descriptionEn:
        "Shariah-compliant Infinite card with 100,000 welcome Etihad Guest Miles and lounge access including a guest.",
      descriptionAr:
        "بطاقة إنفينيت متوافقة مع الشريعة مع 100,000 ميل ترحيبي ضيف الاتحاد ودخول صالة المطار مع مرافق.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "1575.00",
      annualFeeWaiver: "Waived with AED 200,000 annual spend",
      rewardType: "miles" as const,
      rewardRate: "4.000",
      minSalary: "25000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "525.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 1575, type: "fixed" as const },
      ],
      features: [
        { en: "100,000 welcome Etihad Guest Miles", ar: "100,000 ميل ترحيبي ضيف الاتحاد" },
        { en: "Lounge access including guest", ar: "دخول صالة المطار مع مرافق" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
      ],
      eligibilityCriteria: elig(25000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Abu Dhabi Islamic Bank"],
      category: "credit_card",
      subCategory: "miles",
      nameEn: "ADIB Etihad Guest Visa Platinum Covered Card",
      imageUrl: null,
      nameAr: "بطاقة مصرف أبوظبي الإسلامي ضيف الاتحاد فيزا بلاتينيوم",
      descriptionEn:
        "Earn 50,000 welcome Etihad Guest Miles with 4 complimentary lounge visits per year.",
      descriptionAr:
        "اكسب 50,000 ميل ترحيبي ضيف الاتحاد مع 4 زيارات مجانية لصالة المطار سنوياً.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "700.00",
      annualFeeWaiver: "Waived with AED 80,000 annual spend",
      rewardType: "miles" as const,
      rewardRate: "2.000",
      minSalary: "10000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "350.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 700, type: "fixed" as const },
      ],
      features: [
        { en: "50,000 welcome Etihad Guest Miles", ar: "50,000 ميل ترحيبي ضيف الاتحاد" },
        { en: "4 complimentary lounge visits/year", ar: "4 زيارات مجانية لصالة المطار سنوياً" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
      ],
      eligibilityCriteria: elig(10000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Abu Dhabi Islamic Bank"],
      category: "credit_card",
      subCategory: "miles",
      nameEn: "ADIB Etihad Guest Visa Gold Covered Card",
      imageUrl: null,
      nameAr: "بطاقة مصرف أبوظبي الإسلامي ضيف الاتحاد فيزا جولد",
      descriptionEn:
        "Shariah-compliant gold card earning Etihad Guest Miles on every purchase with travel benefits.",
      descriptionAr:
        "بطاقة ذهبية متوافقة مع الشريعة تكسب أميال ضيف الاتحاد على كل عملية شراء مع مزايا سفر.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "350.00",
      annualFeeWaiver: "Waived with AED 40,000 annual spend",
      rewardType: "miles" as const,
      rewardRate: "1.500",
      minSalary: "8000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "175.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 350, type: "fixed" as const },
      ],
      features: [
        { en: "Earn Etihad Guest Miles", ar: "اكسب أميال ضيف الاتحاد" },
        { en: "Travel benefits included", ar: "مزايا سفر مشمولة" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
      ],
      eligibilityCriteria: elig(8000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Abu Dhabi Islamic Bank"],
      category: "credit_card",
      subCategory: "miles",
      nameEn: "ADIB Etihad Guest Visa Classic Covered Card",
      imageUrl: null,
      nameAr: "بطاقة مصرف أبوظبي الإسلامي ضيف الاتحاد فيزا كلاسيك",
      descriptionEn:
        "Entry-level Shariah-compliant card earning basic Etihad Guest Miles on every purchase.",
      descriptionAr:
        "بطاقة أساسية متوافقة مع الشريعة تكسب أميال ضيف الاتحاد الأساسية على كل عملية شراء.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "200.00",
      annualFeeWaiver: "Waived with AED 20,000 annual spend",
      rewardType: "miles" as const,
      rewardRate: "1.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "100.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 200, type: "fixed" as const },
      ],
      features: [
        { en: "Earn basic Etihad Guest Miles", ar: "اكسب أميال ضيف الاتحاد الأساسية" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
        { en: "Low annual fee", ar: "رسوم سنوية منخفضة" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Abu Dhabi Islamic Bank"],
      category: "credit_card",
      subCategory: "rewards",
      nameEn: "ADIB SHARE Visa Infinite Covered Card",
      imageUrl: null,
      nameAr: "بطاقة مصرف أبوظبي الإسلامي شير فيزا إنفينيت",
      descriptionEn:
        "Earn 12% SHARE points at Majid Al Futtaim outlets including Mall of the Emirates and Carrefour.",
      descriptionAr:
        "اكسب 12٪ نقاط شير في منافذ مجيد الفطيم بما في ذلك مول الإمارات وكارفور.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "1575.00",
      annualFeeWaiver: "Waived with AED 200,000 annual spend",
      rewardType: "points" as const,
      rewardRate: "12.000",
      minSalary: "25000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "525.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 1575, type: "fixed" as const },
      ],
      features: [
        { en: "12% SHARE points at Majid Al Futtaim", ar: "12٪ نقاط شير في مجيد الفطيم" },
        { en: "Benefits at Mall of the Emirates", ar: "مزايا في مول الإمارات" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
      ],
      eligibilityCriteria: elig(25000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Abu Dhabi Islamic Bank"],
      category: "credit_card",
      subCategory: "rewards",
      nameEn: "ADIB SHARE Visa Platinum Covered Card",
      imageUrl: null,
      nameAr: "بطاقة مصرف أبوظبي الإسلامي شير فيزا بلاتينيوم",
      descriptionEn:
        "Shariah-compliant platinum card earning SHARE points at Majid Al Futtaim outlets with lifestyle perks.",
      descriptionAr:
        "بطاقة بلاتينيوم متوافقة مع الشريعة تكسب نقاط شير في منافذ مجيد الفطيم مع مزايا نمط الحياة.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "700.00",
      annualFeeWaiver: "Waived with AED 80,000 annual spend",
      rewardType: "points" as const,
      rewardRate: "6.000",
      minSalary: "10000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "350.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 700, type: "fixed" as const },
      ],
      features: [
        { en: "SHARE points at Majid Al Futtaim", ar: "نقاط شير في مجيد الفطيم" },
        { en: "Lifestyle perks", ar: "مزايا نمط الحياة" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
      ],
      eligibilityCriteria: elig(10000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Abu Dhabi Islamic Bank"],
      category: "credit_card",
      subCategory: "islamic",
      nameEn: "ADIB Business Gold Covered Card",
      imageUrl: null,
      nameAr: "بطاقة مصرف أبوظبي الإسلامي للأعمال الذهبية",
      descriptionEn:
        "Shariah-compliant business card with expense management tools, travel insurance, and corporate benefits.",
      descriptionAr:
        "بطاقة أعمال متوافقة مع الشريعة مع أدوات إدارة المصروفات وتأمين سفر ومزايا للشركات.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "500.00",
      annualFeeWaiver: "Waived for premium business accounts",
      rewardType: "points" as const,
      rewardRate: "1.000",
      minSalary: "15000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "250.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 500, type: "fixed" as const },
      ],
      features: [
        { en: "Expense management tools", ar: "أدوات إدارة المصروفات" },
        { en: "Travel insurance included", ar: "تأمين سفر مشمول" },
        { en: "Shariah-compliant business card", ar: "بطاقة أعمال متوافقة مع الشريعة" },
      ],
      eligibilityCriteria: elig(15000, UAE_EXPAT, SALARIED_SE),
    },
    // ── Emirates Islamic (12 cards — ALL Islamic) ─────────────────
    {
      providerId: prov["Emirates Islamic"],
      category: "credit_card",
      subCategory: "cashback",
      nameEn: "Emirates Islamic Cashback Credit Card",
      imageUrl: null,
      nameAr: "بطاقة الإمارات الإسلامي كاش باك",
      descriptionEn:
        "Shariah-compliant free-for-life card with cashback on all purchases and no minimum spend.",
      descriptionAr:
        "بطاقة متوافقة مع الشريعة مجانية مدى الحياة مع استرداد نقدي على جميع المشتريات بدون حد أدنى للإنفاق.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      cashbackRate: "1.000",
      rewardType: "cashback" as const,
      rewardRate: "1.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "Cashback on all purchases", ar: "استرداد نقدي على جميع المشتريات" },
        { en: "Free for life", ar: "مجانية مدى الحياة" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Emirates Islamic"],
      category: "credit_card",
      subCategory: "cashback",
      nameEn: "Emirates Islamic Cashback Plus Credit Card",
      imageUrl: null,
      nameAr: "بطاقة الإمارات الإسلامي كاش باك بلس",
      descriptionEn:
        "10% cashback on supermarkets and dining with access to 1,200+ airport lounges worldwide.",
      descriptionAr:
        "10٪ استرداد نقدي على السوبرماركت والمطاعم مع دخول أكثر من 1,200 صالة مطار حول العالم.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "299.00",
      annualFeeWaiver: "Waived with AED 5,000/month spend",
      cashbackRate: "10.000",
      rewardType: "cashback" as const,
      rewardRate: "10.000",
      minSalary: "7500.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "150.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 299, type: "fixed" as const },
      ],
      features: [
        { en: "10% cashback on supermarkets & dining", ar: "10٪ استرداد نقدي على السوبرماركت والمطاعم" },
        { en: "1,200+ airport lounges", ar: "أكثر من 1,200 صالة مطار" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
      ],
      eligibilityCriteria: elig(7500, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Emirates Islamic"],
      category: "credit_card",
      subCategory: "cashback",
      nameEn: "Emirates Islamic Flex Card",
      imageUrl: "/products/emirates-islamic-flex.svg",
      nameAr: "بطاقة فلكس من الإمارات الإسلامي",
      descriptionEn:
        "Shariah-compliant card with up to 10% cashback on selected categories and zero annual fee.",
      descriptionAr:
        "بطاقة متوافقة مع الشريعة مع استرداد نقدي يصل إلى 10٪ على فئات مختارة وبدون رسوم سنوية.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      cashbackRate: "10.000",
      rewardType: "cashback" as const,
      rewardRate: "10.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "Up to 10% cashback on selected categories", ar: "استرداد نقدي يصل إلى 10٪ على فئات مختارة" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
        { en: "Zero annual fee", ar: "بدون رسوم سنوية" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Emirates Islamic"],
      category: "credit_card",
      subCategory: "lifestyle",
      nameEn: "Emirates Islamic Flex Elite Card",
      imageUrl: null,
      nameAr: "بطاقة فلكس إيليت من الإمارات الإسلامي",
      descriptionEn:
        "Premium Flex card with higher cashback rates, travel insurance, and Shariah-compliant financing.",
      descriptionAr:
        "بطاقة فلكس المميزة مع معدلات استرداد نقدي أعلى وتأمين سفر وتمويل متوافق مع الشريعة.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "735.00",
      annualFeeWaiver: "Waived with AED 80,000 annual spend",
      cashbackRate: "5.000",
      rewardType: "cashback" as const,
      rewardRate: "5.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "367.50",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 735, type: "fixed" as const },
      ],
      features: [
        { en: "Premium cashback rates", ar: "معدلات استرداد نقدي مميزة" },
        { en: "Travel insurance included", ar: "تأمين سفر مشمول" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Emirates Islamic"],
      category: "credit_card",
      subCategory: "transport",
      nameEn: "Emirates Islamic RTA Platinum Card",
      imageUrl: null,
      nameAr: "بطاقة الإمارات الإسلامي هيئة الطرق بلاتينيوم",
      descriptionEn:
        "Shariah-compliant card with integrated Nol functionality for seamless Dubai transport and shopping.",
      descriptionAr:
        "بطاقة متوافقة مع الشريعة مع وظيفة نول مدمجة للتنقل والتسوق بسلاسة في دبي.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life",
      rewardType: "points" as const,
      rewardRate: "1.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "Integrated Nol card", ar: "بطاقة نول مدمجة" },
        { en: "Seamless Dubai transport", ar: "تنقل سلس في دبي" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Emirates Islamic"],
      category: "credit_card",
      subCategory: "premium",
      nameEn: "Emirates Islamic Emarati Credit Card",
      imageUrl: null,
      nameAr: "بطاقة الإمارات الإسلامي إماراتي",
      descriptionEn:
        "Premium Shariah-compliant card for UAE Nationals with SmartMiles rewards, valet parking, and exclusive Emirati benefits.",
      descriptionAr:
        "بطاقة مميزة متوافقة مع الشريعة للمواطنين الإماراتيين مع مكافآت سمارت مايلز وخدمة صف السيارات ومزايا إماراتية حصرية.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "0.00",
      annualFeeWaiver: "Free for life for Emiratis",
      rewardType: "miles" as const,
      rewardRate: "3.000",
      minSalary: "15000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "0.00",
      fees: [],
      features: [
        { en: "SmartMiles rewards", ar: "مكافآت سمارت مايلز" },
        { en: "Valet parking", ar: "خدمة صف السيارات" },
        { en: "Exclusive Emirati benefits", ar: "مزايا إماراتية حصرية" },
      ],
      eligibilityCriteria: elig(15000, UAE_ONLY, SALARIED_SE),
    },
    {
      providerId: prov["Emirates Islamic"],
      category: "credit_card",
      subCategory: "miles",
      nameEn: "Emirates Islamic Skywards Black Credit Card",
      imageUrl: "/products/emirates-islamic-skywards.svg",
      nameAr: "بطاقة الإمارات الإسلامي سكاي واردز بلاك",
      descriptionEn:
        "Ultra-premium Shariah-compliant card with unlimited golf access, Skywards Miles, and exclusive black-tier privileges.",
      descriptionAr:
        "بطاقة فائقة التميز متوافقة مع الشريعة مع دخول غير محدود للغولف وأميال سكاي واردز وامتيازات المستوى الأسود الحصرية.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "4000.00",
      annualFeeWaiver: "Waived for select customers",
      rewardType: "miles" as const,
      rewardRate: "6.000",
      minSalary: "25000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "2000.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 4000, type: "fixed" as const },
      ],
      features: [
        { en: "Unlimited golf access", ar: "دخول غير محدود للغولف" },
        { en: "Skywards Miles on every spend", ar: "أميال سكاي واردز على كل عملية شراء" },
        { en: "Black-tier exclusive privileges", ar: "امتيازات المستوى الأسود الحصرية" },
      ],
      eligibilityCriteria: elig(25000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Emirates Islamic"],
      category: "credit_card",
      subCategory: "miles",
      nameEn: "Emirates Islamic Skywards Visa Infinite Card",
      imageUrl: null,
      nameAr: "بطاقة الإمارات الإسلامي سكاي واردز فيزا إنفينيت",
      descriptionEn:
        "Shariah-compliant card with unlimited airport lounge access, Skywards Miles, and premium travel benefits.",
      descriptionAr:
        "بطاقة متوافقة مع الشريعة مع دخول غير محدود لصالات المطار وأميال سكاي واردز ومزايا سفر مميزة.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "2100.00",
      annualFeeWaiver: "Waived with AED 250,000 annual spend",
      rewardType: "miles" as const,
      rewardRate: "4.000",
      minSalary: "25000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "1050.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 2100, type: "fixed" as const },
      ],
      features: [
        { en: "Unlimited airport lounge access", ar: "دخول غير محدود لصالات المطار" },
        { en: "Skywards Miles on every spend", ar: "أميال سكاي واردز على كل عملية شراء" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
      ],
      eligibilityCriteria: elig(25000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Emirates Islamic"],
      category: "credit_card",
      subCategory: "miles",
      nameEn: "Emirates Islamic Skywards Signature Card",
      imageUrl: null,
      nameAr: "بطاقة الإمارات الإسلامي سكاي واردز سيجنتشر",
      descriptionEn:
        "Earn Skywards Miles on every purchase with airport lounge access and Shariah-compliant benefits.",
      descriptionAr:
        "اكسب أميال سكاي واردز على كل عملية شراء مع دخول صالة المطار ومزايا متوافقة مع الشريعة.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "735.00",
      annualFeeWaiver: "Waived with AED 80,000 annual spend",
      rewardType: "miles" as const,
      rewardRate: "2.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "367.50",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 735, type: "fixed" as const },
      ],
      features: [
        { en: "Earn Skywards Miles", ar: "اكسب أميال سكاي واردز" },
        { en: "Airport lounge access", ar: "دخول صالة المطار" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Emirates Islamic"],
      category: "credit_card",
      subCategory: "miles",
      nameEn: "Emirates Islamic Etihad Guest Saqer Card",
      imageUrl: null,
      nameAr: "بطاقة الإمارات الإسلامي ضيف الاتحاد صقر",
      descriptionEn:
        "Shariah-compliant card earning Etihad Guest Miles with golf access and premium travel perks.",
      descriptionAr:
        "بطاقة متوافقة مع الشريعة تكسب أميال ضيف الاتحاد مع دخول ملاعب الغولف ومزايا سفر مميزة.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "1050.00",
      annualFeeWaiver: "Waived with AED 100,000 annual spend",
      rewardType: "miles" as const,
      rewardRate: "3.000",
      minSalary: "10000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "525.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 1050, type: "fixed" as const },
      ],
      features: [
        { en: "Earn Etihad Guest Miles", ar: "اكسب أميال ضيف الاتحاد" },
        { en: "Golf access", ar: "دخول ملاعب الغولف" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
      ],
      eligibilityCriteria: elig(10000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Emirates Islamic"],
      category: "credit_card",
      subCategory: "miles",
      nameEn: "Emirates Islamic Etihad Guest Premium Card",
      imageUrl: null,
      nameAr: "بطاقة الإمارات الإسلامي ضيف الاتحاد بريميوم",
      descriptionEn:
        "Premium Shariah-compliant card earning 10% miles back on Etihad flights with lounge access.",
      descriptionAr:
        "بطاقة مميزة متوافقة مع الشريعة تكسب 10٪ أميال مسترجعة على رحلات الاتحاد مع دخول صالة المطار.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "1575.00",
      annualFeeWaiver: "Waived with AED 150,000 annual spend",
      rewardType: "miles" as const,
      rewardRate: "4.000",
      minSalary: "25000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "525.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 1575, type: "fixed" as const },
      ],
      features: [
        { en: "10% miles back on Etihad flights", ar: "10٪ أميال مسترجعة على رحلات الاتحاد" },
        { en: "Airport lounge access", ar: "دخول صالة المطار" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
      ],
      eligibilityCriteria: elig(25000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Emirates Islamic"],
      category: "credit_card",
      subCategory: "women",
      nameEn: "Emirates Islamic Etihad Guest Ameera Card",
      imageUrl: null,
      nameAr: "بطاقة الإمارات الإسلامي ضيف الاتحاد أميرة",
      descriptionEn:
        "Shariah-compliant card designed for women earning Etihad Guest Miles with exclusive lifestyle benefits.",
      descriptionAr:
        "بطاقة متوافقة مع الشريعة مصممة للنساء تكسب أميال ضيف الاتحاد مع مزايا نمط حياة حصرية.",
      status: "active" as const,
      islamicCompliant: true,
      annualFee: "700.00",
      annualFeeWaiver: "Waived with AED 80,000 annual spend",
      rewardType: "miles" as const,
      rewardRate: "2.000",
      minSalary: "5000.00",
      interestFreeGraceDays: 0,
      supplementaryCardFee: "350.00",
      fees: [
        { nameEn: "Annual Fee", nameAr: "رسوم سنوية", amount: 700, type: "fixed" as const },
      ],
      features: [
        { en: "Designed for women", ar: "مصممة للنساء" },
        { en: "Earn Etihad Guest Miles", ar: "اكسب أميال ضيف الاتحاد" },
        { en: "Exclusive lifestyle benefits", ar: "مزايا نمط حياة حصرية" },
        { en: "Shariah-compliant", ar: "متوافقة مع الشريعة الإسلامية" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
  ];

  // ── 3  MORTGAGES / HOME LOANS ────────────────────────────────────
  console.log("Inserting mortgages...");

  const mortgages = [
    // Emirates NBD
    {
      providerId: prov["Emirates NBD"],
      category: "mortgage",
      subCategory: "home_purchase",
      nameEn: "Emirates NBD Home Loan – Fixed Rate",
      nameAr: "قرض سكني من الإمارات دبي الوطني – ثابت",
      descriptionEn:
        "Fixed-rate home loan starting from 3.75% p.a. for 3 years with up to 80% LTV for expats and 85% for UAE Nationals.",
      descriptionAr:
        "قرض سكني بسعر ثابت يبدأ من 3.75٪ سنويًا لمدة 3 سنوات مع تمويل يصل إلى 80٪ للمقيمين و85٪ للمواطنين.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "fixed" as const,
      rateValue: "3.750",
      minAmount: "200000.00",
      maxAmount: "15000000.00",
      minTenureMonths: 60,
      maxTenureMonths: 300,
      processingFeePercent: "1.05",
      earlySettlementFeePercent: "1.05",
      minSalary: "15000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.05, type: "percentage" as const },
        { nameEn: "Property Valuation", nameAr: "تقييم العقار", amount: 3150, type: "fixed" as const },
      ],
      features: [
        { en: "Fixed rate for 3 years", ar: "سعر ثابت لمدة 3 سنوات" },
        { en: "Up to 85% LTV for UAE Nationals", ar: "تمويل يصل إلى 85٪ للمواطنين" },
        { en: "Online mortgage calculator", ar: "حاسبة القرض السكني أونلاين" },
      ],
      eligibilityCriteria: elig(15000, UAE_EXPAT, SALARIED_SE, {
        ltvExpat: 80,
        ltvNational: 85,
        minAge: 21,
        maxAge: 65,
        minEmploymentMonths: 6,
      }),
    },
    // FAB
    {
      providerId: prov["First Abu Dhabi Bank"],
      category: "mortgage",
      subCategory: "home_purchase",
      nameEn: "FAB Home Loan",
      nameAr: "قرض سكني من بنك أبوظبي الأول",
      descriptionEn:
        "Mortgage starting from 3.95% p.a. fixed for 3 years with processing fee waiver for salary transfer customers.",
      descriptionAr:
        "قرض سكني يبدأ من 3.95٪ سنويًا ثابت لمدة 3 سنوات مع إعفاء من رسوم المعالجة لعملاء تحويل الراتب.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "fixed" as const,
      rateValue: "3.950",
      minAmount: "200000.00",
      maxAmount: "20000000.00",
      minTenureMonths: 60,
      maxTenureMonths: 300,
      processingFeePercent: "1.05",
      earlySettlementFeePercent: "1.05",
      minSalary: "18000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.05, type: "percentage" as const },
        { nameEn: "Valuation Fee", nameAr: "رسوم التقييم", amount: 3000, type: "fixed" as const },
      ],
      features: [
        { en: "Processing fee waiver for salary transfer", ar: "إعفاء من رسوم المعالجة لتحويل الراتب" },
        { en: "Flexible fixed / variable options", ar: "خيارات ثابتة ومتغيرة مرنة" },
      ],
      eligibilityCriteria: elig(18000, UAE_EXPAT, SALARIED_SE, {
        ltvExpat: 80,
        ltvNational: 85,
        minAge: 21,
        maxAge: 65,
      }),
    },
    // ADCB
    {
      providerId: prov["Abu Dhabi Commercial Bank"],
      category: "mortgage",
      subCategory: "home_purchase",
      nameEn: "ADCB Standard Mortgage",
      nameAr: "قرض سكني عادي من بنك أبوظبي التجاري",
      descriptionEn:
        "Home loan starting from 3.69% p.a. fixed for 3 years with LTV up to 85% for nationals.",
      descriptionAr:
        "قرض سكني يبدأ من 3.69٪ سنويًا ثابت لمدة 3 سنوات مع تمويل يصل إلى 85٪ للمواطنين.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "fixed" as const,
      rateValue: "3.690",
      minAmount: "200000.00",
      maxAmount: "15000000.00",
      minTenureMonths: 60,
      maxTenureMonths: 300,
      processingFeePercent: "1.05",
      earlySettlementFeePercent: "1.00",
      minSalary: "12000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.05, type: "percentage" as const },
        { nameEn: "Property Valuation", nameAr: "تقييم العقار", amount: 2625, type: "fixed" as const },
      ],
      features: [
        { en: "Competitive 3.69% fixed rate", ar: "سعر ثابت تنافسي 3.69٪" },
        { en: "Up to 85% LTV for nationals", ar: "تمويل يصل إلى 85٪ للمواطنين" },
      ],
      eligibilityCriteria: elig(12000, UAE_EXPAT, SALARIED_SE, {
        ltvExpat: 80,
        ltvNational: 85,
      }),
    },
    // Mashreq
    {
      providerId: prov["Mashreq"],
      category: "mortgage",
      subCategory: "home_purchase",
      nameEn: "Mashreq Home Loan",
      nameAr: "قرض سكني من المشرق",
      descriptionEn:
        "Fixed-rate home loan from 3.79% p.a. for 2 years with fast approval and dedicated relationship manager.",
      descriptionAr:
        "قرض سكني بسعر ثابت من 3.79٪ سنويًا لمدة سنتين مع موافقة سريعة ومدير علاقات مخصص.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "fixed" as const,
      rateValue: "3.790",
      minAmount: "200000.00",
      maxAmount: "10000000.00",
      minTenureMonths: 60,
      maxTenureMonths: 300,
      processingFeePercent: "1.05",
      earlySettlementFeePercent: "1.05",
      minSalary: "15000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.05, type: "percentage" as const },
      ],
      features: [
        { en: "Fixed for 2 years", ar: "ثابت لمدة سنتين" },
        { en: "Dedicated relationship manager", ar: "مدير علاقات مخصص" },
      ],
      eligibilityCriteria: elig(15000, UAE_EXPAT, SALARIED_SE, {
        ltvExpat: 75,
        ltvNational: 85,
      }),
    },
    // DIB (Islamic)
    {
      providerId: prov["Dubai Islamic Bank"],
      category: "mortgage",
      subCategory: "home_purchase",
      nameEn: "DIB Al Islami Home Finance",
      nameAr: "تمويل سكني الإسلامي من بنك دبي الإسلامي",
      descriptionEn:
        "Shariah-compliant home finance at 3.75% p.a. profit rate with up to 85% financing for UAE Nationals.",
      descriptionAr:
        "تمويل سكني متوافق مع الشريعة بمعدل ربح 3.75٪ سنويًا مع تمويل يصل إلى 85٪ للمواطنين.",
      status: "active" as const,
      islamicCompliant: true,
      rateType: "fixed" as const,
      profitRate: "3.750",
      minAmount: "200000.00",
      maxAmount: "15000000.00",
      minTenureMonths: 60,
      maxTenureMonths: 300,
      processingFeePercent: "1.05",
      earlySettlementFeePercent: "1.05",
      minSalary: "10000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.05, type: "percentage" as const },
      ],
      features: [
        { en: "Shariah-compliant Ijarah / Diminishing Musharakah", ar: "إجارة / مشاركة متناقصة" },
        { en: "Up to 85% financing for nationals", ar: "تمويل يصل إلى 85٪ للمواطنين" },
        { en: "Free Takaful property insurance", ar: "تأمين تكافل عقاري مجاني" },
      ],
      eligibilityCriteria: elig(10000, UAE_EXPAT, SALARIED_SE, {
        ltvExpat: 80,
        ltvNational: 85,
      }),
    },
    // ADIB (Islamic)
    {
      providerId: prov["Abu Dhabi Islamic Bank"],
      category: "mortgage",
      subCategory: "home_purchase",
      nameEn: "ADIB Home Finance",
      nameAr: "تمويل سكني من مصرف أبوظبي الإسلامي",
      descriptionEn:
        "Islamic home finance at 3.99% p.a. fixed for 3 years, then EIBOR+1.79%. Up to 85% LTV.",
      descriptionAr:
        "تمويل سكني إسلامي بمعدل 3.99٪ ثابت لمدة 3 سنوات ثم إيبور + 1.79٪. تمويل يصل إلى 85٪.",
      status: "active" as const,
      islamicCompliant: true,
      rateType: "fixed" as const,
      profitRate: "3.990",
      minAmount: "200000.00",
      maxAmount: "15000000.00",
      minTenureMonths: 60,
      maxTenureMonths: 300,
      processingFeePercent: "1.00",
      earlySettlementFeePercent: "1.05",
      minSalary: "10000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.0, type: "percentage" as const },
      ],
      features: [
        { en: "3-year fixed, then EIBOR+1.79%", ar: "3 سنوات ثابتة ثم إيبور + 1.79٪" },
        { en: "Up to 85% LTV", ar: "تمويل يصل إلى 85٪" },
      ],
      eligibilityCriteria: elig(10000, UAE_EXPAT, SALARIED_SE, {
        ltvExpat: 80,
        ltvNational: 85,
      }),
    },
    // Emirates Islamic
    {
      providerId: prov["Emirates Islamic"],
      category: "mortgage",
      subCategory: "home_purchase",
      nameEn: "Emirates Islamic Manzili Home Finance",
      nameAr: "تمويل منزلي من الإمارات الإسلامي",
      descriptionEn:
        "Shariah-compliant home finance at 3.49% p.a. flat rate fixed for 3 years. Up to 85% for nationals, 80% for expats.",
      descriptionAr:
        "تمويل سكني إسلامي بمعدل 3.49٪ سنويًا ثابت لمدة 3 سنوات. تمويل يصل إلى 85٪ للمواطنين و80٪ للمقيمين.",
      status: "active" as const,
      islamicCompliant: true,
      rateType: "fixed" as const,
      profitRate: "3.490",
      minAmount: "200000.00",
      maxAmount: "15000000.00",
      minTenureMonths: 60,
      maxTenureMonths: 300,
      processingFeePercent: "1.05",
      earlySettlementFeePercent: "1.05",
      minSalary: "10000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.05, type: "percentage" as const },
      ],
      features: [
        { en: "3.49% fixed for 3 years", ar: "3.49٪ ثابت لمدة 3 سنوات" },
        { en: "Manzili programme benefits", ar: "مزايا برنامج منزلي" },
      ],
      eligibilityCriteria: elig(10000, UAE_EXPAT, SALARIED_SE, {
        ltvExpat: 80,
        ltvNational: 85,
      }),
    },
  ];

  // ── 4  AUTO LOANS ────────────────────────────────────────────────
  console.log("Inserting auto loans...");

  const autoLoans = [
    // Emirates NBD
    {
      providerId: prov["Emirates NBD"],
      category: "auto_loan",
      subCategory: "new_car",
      nameEn: "Emirates NBD Auto Loan – New Car",
      nameAr: "قرض سيارة جديدة من الإمارات دبي الوطني",
      descriptionEn:
        "Finance a new car with rates from 2.69% p.a. reducing, up to 80% vehicle value, tenure up to 60 months.",
      descriptionAr:
        "تمويل سيارة جديدة بأسعار من 2.69٪ سنويًا متناقصة، حتى 80٪ من قيمة السيارة، لمدة تصل إلى 60 شهرًا.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "reducing" as const,
      rateValue: "2.690",
      minAmount: "20000.00",
      maxAmount: "1000000.00",
      minTenureMonths: 12,
      maxTenureMonths: 60,
      processingFeePercent: "1.05",
      earlySettlementFeePercent: "1.05",
      minSalary: "5000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.05, type: "percentage" as const },
      ],
      features: [
        { en: "Competitive 2.69% reducing rate", ar: "معدل تنافسي 2.69٪ متناقص" },
        { en: "Up to 80% vehicle financing", ar: "تمويل يصل إلى 80٪ من قيمة السيارة" },
        { en: "Quick approval in 30 minutes", ar: "موافقة سريعة خلال 30 دقيقة" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE, {
        vehicleAge: "New",
        maxFinancing: 80,
      }),
    },
    {
      providerId: prov["Emirates NBD"],
      category: "auto_loan",
      subCategory: "green_auto",
      nameEn: "Emirates NBD Green Auto Loan",
      nameAr: "قرض السيارة الخضراء من الإمارات دبي الوطني",
      descriptionEn:
        "Special rate from 3.75% for electric and hybrid vehicles supporting UAE green mobility initiative.",
      descriptionAr:
        "سعر خاص من 3.75٪ للسيارات الكهربائية والهجينة دعمًا لمبادرة التنقل الأخضر في الإمارات.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "reducing" as const,
      rateValue: "3.750",
      minAmount: "50000.00",
      maxAmount: "1500000.00",
      minTenureMonths: 12,
      maxTenureMonths: 60,
      processingFeePercent: "1.05",
      earlySettlementFeePercent: "1.05",
      minSalary: "8000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.05, type: "percentage" as const },
      ],
      features: [
        { en: "Special EV / Hybrid rate", ar: "سعر خاص للسيارات الكهربائية والهجينة" },
        { en: "Supports UAE Green Mobility", ar: "يدعم التنقل الأخضر في الإمارات" },
      ],
      eligibilityCriteria: elig(8000, UAE_EXPAT, SALARIED_SE, {
        vehicleType: "Electric or Hybrid",
      }),
    },
    // ADCB
    {
      providerId: prov["Abu Dhabi Commercial Bank"],
      category: "auto_loan",
      subCategory: "new_car",
      nameEn: "ADCB Auto Loan – New Car",
      nameAr: "قرض سيارة جديدة من بنك أبوظبي التجاري",
      descriptionEn:
        "New car finance at 3.99% reducing rate with zero processing fees promotion and up to 80% financing.",
      descriptionAr:
        "تمويل سيارة جديدة بمعدل 3.99٪ متناقص مع عرض بدون رسوم معالجة وتمويل يصل إلى 80٪.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "reducing" as const,
      rateValue: "3.990",
      minAmount: "20000.00",
      maxAmount: "750000.00",
      minTenureMonths: 12,
      maxTenureMonths: 60,
      processingFeePercent: "0.00",
      earlySettlementFeePercent: "1.05",
      minSalary: "5000.00",
      fees: [],
      features: [
        { en: "Zero processing fees", ar: "بدون رسوم معالجة" },
        { en: "3.99% reducing rate", ar: "معدل 3.99٪ متناقص" },
        { en: "Up to 80% financing", ar: "تمويل يصل إلى 80٪" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Abu Dhabi Commercial Bank"],
      category: "auto_loan",
      subCategory: "used_car",
      nameEn: "ADCB Auto Loan – Used Car",
      nameAr: "قرض سيارة مستعملة من بنك أبوظبي التجاري",
      descriptionEn:
        "Used car financing up to 5 years old at 4.99% reducing rate with up to 70% vehicle value.",
      descriptionAr:
        "تمويل سيارة مستعملة عمرها حتى 5 سنوات بمعدل 4.99٪ متناقص مع تمويل يصل إلى 70٪ من قيمة السيارة.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "reducing" as const,
      rateValue: "4.990",
      minAmount: "20000.00",
      maxAmount: "500000.00",
      minTenureMonths: 12,
      maxTenureMonths: 48,
      processingFeePercent: "1.05",
      earlySettlementFeePercent: "1.05",
      minSalary: "5000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.05, type: "percentage" as const },
      ],
      features: [
        { en: "Finance for cars up to 5 years old", ar: "تمويل لسيارات عمرها حتى 5 سنوات" },
        { en: "Up to 70% vehicle value", ar: "يصل إلى 70٪ من قيمة السيارة" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE, {
        maxVehicleAge: 5,
        maxFinancing: 70,
      }),
    },
    // FAB
    {
      providerId: prov["First Abu Dhabi Bank"],
      category: "auto_loan",
      subCategory: "new_car",
      nameEn: "FAB Auto Loan",
      nameAr: "قرض سيارة من بنك أبوظبي الأول",
      descriptionEn:
        "Auto financing from 2.80% p.a. reducing rate with 0.25% discount for 5-star AC-rated vehicles.",
      descriptionAr:
        "تمويل سيارة بمعدل يبدأ من 2.80٪ سنويًا متناقص مع خصم 0.25٪ للسيارات ذات تصنيف 5 نجوم.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "reducing" as const,
      rateValue: "2.800",
      minAmount: "20000.00",
      maxAmount: "1000000.00",
      minTenureMonths: 12,
      maxTenureMonths: 60,
      processingFeePercent: "1.00",
      earlySettlementFeePercent: "1.05",
      minSalary: "5000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.0, type: "percentage" as const },
      ],
      features: [
        { en: "0.25% discount for 5-star AC-rated cars", ar: "خصم 0.25٪ للسيارات ذات تصنيف 5 نجوم" },
        { en: "Up to 80% financing", ar: "تمويل يصل إلى 80٪" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    // Mashreq
    {
      providerId: prov["Mashreq"],
      category: "auto_loan",
      subCategory: "new_car",
      nameEn: "Mashreq Auto Loan",
      nameAr: "قرض سيارة من المشرق",
      descriptionEn:
        "Car finance from 4.15% flat with 7-year extended warranty option and flexible repayment up to 60 months.",
      descriptionAr:
        "تمويل سيارة من 4.15٪ ثابت مع خيار ضمان ممتد 7 سنوات وسداد مرن حتى 60 شهرًا.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "fixed" as const,
      rateValue: "4.150",
      minAmount: "20000.00",
      maxAmount: "750000.00",
      minTenureMonths: 12,
      maxTenureMonths: 60,
      processingFeePercent: "1.05",
      earlySettlementFeePercent: "1.05",
      minSalary: "7000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1050, type: "fixed" as const },
      ],
      features: [
        { en: "7-year extended warranty option", ar: "خيار ضمان ممتد 7 سنوات" },
        { en: "Flexible repayment up to 60 months", ar: "سداد مرن حتى 60 شهرًا" },
      ],
      eligibilityCriteria: elig(7000, UAE_EXPAT, SALARIED_SE),
    },
    // DIB (Islamic)
    {
      providerId: prov["Dubai Islamic Bank"],
      category: "auto_loan",
      subCategory: "new_car",
      nameEn: "DIB Al Islami Auto Finance – New Car",
      nameAr: "تمويل سيارة جديدة الإسلامي من بنك دبي الإسلامي",
      descriptionEn:
        "Shariah-compliant auto finance at 4.05% profit rate for new cars, with 0.5% discount for working mothers.",
      descriptionAr:
        "تمويل سيارة جديدة متوافق مع الشريعة بمعدل ربح 4.05٪ مع خصم 0.5٪ للأمهات العاملات.",
      status: "active" as const,
      islamicCompliant: true,
      rateType: "fixed" as const,
      profitRate: "4.050",
      minAmount: "20000.00",
      maxAmount: "750000.00",
      minTenureMonths: 12,
      maxTenureMonths: 60,
      processingFeePercent: "1.05",
      earlySettlementFeePercent: "1.05",
      minSalary: "5000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.05, type: "percentage" as const },
      ],
      features: [
        { en: "Shariah-compliant Murabaha", ar: "مرابحة متوافقة مع الشريعة" },
        { en: "0.5% discount for working mothers", ar: "خصم 0.5٪ للأمهات العاملات" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    {
      providerId: prov["Dubai Islamic Bank"],
      category: "auto_loan",
      subCategory: "used_car",
      nameEn: "DIB Al Islami Auto Finance – Used Car",
      nameAr: "تمويل سيارة مستعملة الإسلامي من بنك دبي الإسلامي",
      descriptionEn:
        "Used car finance at 4.95% profit rate for vehicles up to 5 years old with Shariah-compliant structure.",
      descriptionAr:
        "تمويل سيارة مستعملة بمعدل ربح 4.95٪ لسيارات عمرها حتى 5 سنوات بهيكل متوافق مع الشريعة.",
      status: "active" as const,
      islamicCompliant: true,
      rateType: "fixed" as const,
      profitRate: "4.950",
      minAmount: "20000.00",
      maxAmount: "500000.00",
      minTenureMonths: 12,
      maxTenureMonths: 48,
      processingFeePercent: "1.05",
      earlySettlementFeePercent: "1.05",
      minSalary: "5000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.05, type: "percentage" as const },
      ],
      features: [
        { en: "Used car up to 5 years old", ar: "سيارة مستعملة عمرها حتى 5 سنوات" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE, {
        maxVehicleAge: 5,
      }),
    },
    // Emirates Islamic
    {
      providerId: prov["Emirates Islamic"],
      category: "auto_loan",
      subCategory: "new_car",
      nameEn: "Emirates Islamic Auto Finance",
      nameAr: "تمويل سيارة من الإمارات الإسلامي",
      descriptionEn:
        "New car finance at 3.89% profit rate with Shariah-compliant structure and insurance bundled.",
      descriptionAr:
        "تمويل سيارة جديدة بمعدل ربح 3.89٪ بهيكل متوافق مع الشريعة وتأمين مدرج.",
      status: "active" as const,
      islamicCompliant: true,
      rateType: "fixed" as const,
      profitRate: "3.890",
      minAmount: "20000.00",
      maxAmount: "750000.00",
      minTenureMonths: 12,
      maxTenureMonths: 60,
      processingFeePercent: "1.05",
      earlySettlementFeePercent: "1.05",
      minSalary: "5000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.05, type: "percentage" as const },
      ],
      features: [
        { en: "3.89% competitive profit rate", ar: "معدل ربح تنافسي 3.89٪" },
        { en: "Comprehensive insurance included", ar: "تأمين شامل مدرج" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
    // ADIB
    {
      providerId: prov["Abu Dhabi Islamic Bank"],
      category: "auto_loan",
      subCategory: "new_car",
      nameEn: "ADIB Auto Finance",
      nameAr: "تمويل سيارة من مصرف أبوظبي الإسلامي",
      descriptionEn:
        "Islamic auto finance at 3.95% profit rate for new cars with EV discount at 3.50%.",
      descriptionAr:
        "تمويل سيارة إسلامي بمعدل ربح 3.95٪ للسيارات الجديدة مع خصم 3.50٪ للسيارات الكهربائية.",
      status: "active" as const,
      islamicCompliant: true,
      rateType: "fixed" as const,
      profitRate: "3.950",
      minAmount: "20000.00",
      maxAmount: "750000.00",
      minTenureMonths: 12,
      maxTenureMonths: 60,
      processingFeePercent: "1.05",
      earlySettlementFeePercent: "1.05",
      minSalary: "5000.00",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.05, type: "percentage" as const },
      ],
      features: [
        { en: "3.50% special EV rate", ar: "معدل خاص 3.50٪ للسيارات الكهربائية" },
        { en: "Shariah-compliant Murabaha", ar: "مرابحة متوافقة مع الشريعة" },
      ],
      eligibilityCriteria: elig(5000, UAE_EXPAT, SALARIED_SE),
    },
  ];

  // ── 5  INSURANCE ─────────────────────────────────────────────────
  console.log("Inserting insurance products...");

  const insurance = [
    // Sukoon (Oman Insurance) – Car
    {
      providerId: prov["Sukoon Insurance"],
      category: "car_insurance",
      subCategory: "car_insurance",
      nameEn: "Sukoon Comprehensive Motor Insurance",
      nameAr: "تأمين سيارات شامل من سكون",
      descriptionEn:
        "Comprehensive car insurance covering own damage, theft, third-party liability, and personal accident with 24/7 roadside assistance.",
      descriptionAr:
        "تأمين سيارات شامل يغطي الأضرار الذاتية والسرقة ومسؤولية الطرف الثالث والحوادث الشخصية مع مساعدة على الطريق على مدار الساعة.",
      status: "active" as const,
      islamicCompliant: false,
      premiumMin: "1500.00",
      premiumMax: "8000.00",
      coverageAmount: "500000.00",
      deductible: "500.00",
      fees: [],
      features: [
        { en: "Own damage and theft coverage", ar: "تغطية الأضرار الذاتية والسرقة" },
        { en: "Third-party liability up to AED 500,000", ar: "مسؤولية الطرف الثالث حتى 500,000 درهم" },
        { en: "24/7 roadside assistance", ar: "مساعدة على الطريق على مدار الساعة" },
        { en: "Agency repair for cars under 3 years", ar: "إصلاح وكالة للسيارات تحت 3 سنوات" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, {
        minDriverAge: 18,
        validUAELicense: true,
      }),
    },
    // Sukoon – Health
    {
      providerId: prov["Sukoon Insurance"],
      category: "health_insurance",
      subCategory: "health_insurance",
      nameEn: "Sukoon Health Plus – Enhanced",
      nameAr: "سكون هيلث بلس – محسن",
      descriptionEn:
        "Enhanced health insurance with coverage up to AED 1,000,000 including inpatient, outpatient, maternity, and dental.",
      descriptionAr:
        "تأمين صحي محسّن بتغطية تصل إلى مليون درهم تشمل الإقامة والعيادات الخارجية والأمومة والأسنان.",
      status: "active" as const,
      islamicCompliant: false,
      premiumMin: "4000.00",
      premiumMax: "15000.00",
      coverageAmount: "1000000.00",
      deductible: "0.00",
      networkType: "enhanced" as const,
      coPayPercent: "20.00",
      fees: [],
      features: [
        { en: "Inpatient & outpatient coverage", ar: "تغطية الإقامة والعيادات الخارجية" },
        { en: "Maternity benefit", ar: "تغطية الأمومة" },
        { en: "Dental and optical coverage", ar: "تغطية الأسنان والبصريات" },
        { en: "Worldwide emergency coverage", ar: "تغطية طوارئ عالمية" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, {
        minAge: 18,
        maxAge: 65,
      }),
    },
    // Sukoon – Travel
    {
      providerId: prov["Sukoon Insurance"],
      category: "travel_insurance",
      subCategory: "travel_insurance",
      nameEn: "Sukoon Travel Guard",
      nameAr: "حارس السفر من سكون",
      descriptionEn:
        "Comprehensive travel insurance with medical coverage up to USD 500,000, trip cancellation, and baggage loss.",
      descriptionAr:
        "تأمين سفر شامل مع تغطية طبية تصل إلى 500,000 دولار وإلغاء الرحلة وفقدان الأمتعة.",
      status: "active" as const,
      islamicCompliant: false,
      premiumMin: "50.00",
      premiumMax: "500.00",
      coverageAmount: "1835000.00",
      deductible: "0.00",
      fees: [],
      features: [
        { en: "Medical coverage up to USD 500,000", ar: "تغطية طبية حتى 500,000 دولار" },
        { en: "Trip cancellation protection", ar: "حماية إلغاء الرحلة" },
        { en: "Baggage loss / delay coverage", ar: "تغطية فقدان / تأخر الأمتعة" },
        { en: "24/7 emergency assistance", ar: "مساعدة طوارئ على مدار الساعة" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE),
    },
    // Orient Insurance – Car
    {
      providerId: prov["Orient Insurance"],
      category: "car_insurance",
      subCategory: "car_insurance",
      nameEn: "Orient Motor Plus Insurance",
      nameAr: "تأمين سيارات موتور بلس من أورينت",
      descriptionEn:
        "Comprehensive vehicle coverage with agency repair, GCC coverage, and personal accident benefit. A+-rated insurer.",
      descriptionAr:
        "تغطية شاملة للمركبات مع إصلاح وكالة وتغطية دول الخليج وتعويض الحوادث الشخصية. شركة تأمين بتصنيف A+.",
      status: "active" as const,
      islamicCompliant: false,
      premiumMin: "1200.00",
      premiumMax: "7500.00",
      coverageAmount: "500000.00",
      deductible: "500.00",
      fees: [],
      features: [
        { en: "A+ rated insurer", ar: "شركة تأمين بتصنيف A+" },
        { en: "Agency repair", ar: "إصلاح وكالة" },
        { en: "GCC coverage included", ar: "تغطية دول الخليج مدرجة" },
        { en: "Personal accident benefit", ar: "تعويض الحوادث الشخصية" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, {
        minDriverAge: 18,
        validUAELicense: true,
      }),
    },
    // Orient Insurance – Health
    {
      providerId: prov["Orient Insurance"],
      category: "health_insurance",
      subCategory: "health_insurance",
      nameEn: "Orient Health Shield – Premium",
      nameAr: "درع الصحة بريميوم من أورينت",
      descriptionEn:
        "Premium health insurance with AED 5,000,000 coverage, worldwide protection, zero co-pay on in-network hospitals.",
      descriptionAr:
        "تأمين صحي بريميوم بتغطية 5 مليون درهم وحماية عالمية وبدون مساهمة في المستشفيات المعتمدة.",
      status: "active" as const,
      islamicCompliant: false,
      premiumMin: "8000.00",
      premiumMax: "25000.00",
      coverageAmount: "5000000.00",
      deductible: "0.00",
      networkType: "premium" as const,
      coPayPercent: "0.00",
      fees: [],
      features: [
        { en: "AED 5 million coverage", ar: "تغطية 5 مليون درهم" },
        { en: "Worldwide protection", ar: "حماية عالمية" },
        { en: "Zero co-pay in-network", ar: "بدون مساهمة في الشبكة" },
        { en: "Dental, optical, maternity included", ar: "أسنان وبصريات وأمومة مدرجة" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, {
        minAge: 18,
        maxAge: 65,
      }),
    },
    // Orient – Travel
    {
      providerId: prov["Orient Insurance"],
      category: "travel_insurance",
      subCategory: "travel_insurance",
      nameEn: "Orient Travel Safe",
      nameAr: "أمان السفر من أورينت",
      descriptionEn:
        "Travel insurance with medical emergency cover up to USD 250,000, trip delay, and personal liability.",
      descriptionAr:
        "تأمين سفر مع تغطية طوارئ طبية حتى 250,000 دولار وتأخر الرحلة والمسؤولية الشخصية.",
      status: "active" as const,
      islamicCompliant: false,
      premiumMin: "35.00",
      premiumMax: "350.00",
      coverageAmount: "917500.00",
      deductible: "0.00",
      fees: [],
      features: [
        { en: "Medical emergency up to USD 250,000", ar: "طوارئ طبية حتى 250,000 دولار" },
        { en: "Trip delay coverage", ar: "تغطية تأخر الرحلة" },
        { en: "Personal liability", ar: "المسؤولية الشخصية" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE),
    },
    // AXA Gulf – Car
    {
      providerId: prov["AXA Gulf"],
      category: "car_insurance",
      subCategory: "car_insurance",
      nameEn: "AXA SmartDrive Comprehensive",
      nameAr: "تأمين سمارت درايف الشامل من أكسا",
      descriptionEn:
        "Comprehensive motor insurance with NCD protection, roadside assistance, and off-road cover option.",
      descriptionAr:
        "تأمين سيارات شامل مع حماية خصم عدم المطالبة ومساعدة على الطريق وخيار تغطية الطرق الوعرة.",
      status: "active" as const,
      islamicCompliant: false,
      premiumMin: "1300.00",
      premiumMax: "7000.00",
      coverageAmount: "500000.00",
      deductible: "500.00",
      fees: [],
      features: [
        { en: "No-claim discount protection", ar: "حماية خصم عدم المطالبة" },
        { en: "Roadside assistance included", ar: "مساعدة على الطريق مدرجة" },
        { en: "Optional off-road cover", ar: "تغطية اختيارية للطرق الوعرة" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, {
        minDriverAge: 18,
        validUAELicense: true,
      }),
    },
    // AXA Gulf – Health
    {
      providerId: prov["AXA Gulf"],
      category: "health_insurance",
      subCategory: "health_insurance",
      nameEn: "AXA Health Essential",
      nameAr: "أكسا الصحي الأساسي",
      descriptionEn:
        "Essential health insurance with AED 150,000 coverage, DHA compliant, ideal for visa requirements.",
      descriptionAr:
        "تأمين صحي أساسي بتغطية 150,000 درهم متوافق مع هيئة الصحة بدبي، مناسب لمتطلبات التأشيرة.",
      status: "active" as const,
      islamicCompliant: false,
      premiumMin: "650.00",
      premiumMax: "2500.00",
      coverageAmount: "150000.00",
      deductible: "0.00",
      networkType: "basic" as const,
      coPayPercent: "20.00",
      fees: [],
      features: [
        { en: "DHA compliant", ar: "متوافق مع هيئة الصحة بدبي" },
        { en: "Ideal for visa requirements", ar: "مناسب لمتطلبات التأشيرة" },
        { en: "Basic inpatient & outpatient", ar: "إقامة وعيادات خارجية أساسية" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE),
    },
    // AXA Gulf – Travel
    {
      providerId: prov["AXA Gulf"],
      category: "travel_insurance",
      subCategory: "travel_insurance",
      nameEn: "AXA Travel Easy",
      nameAr: "أكسا ترافل إيزي",
      descriptionEn:
        "Affordable travel insurance with medical cover up to USD 150,000, trip cancellation up to USD 5,000.",
      descriptionAr:
        "تأمين سفر بسعر مناسب مع تغطية طبية حتى 150,000 دولار وإلغاء رحلة حتى 5,000 دولار.",
      status: "active" as const,
      islamicCompliant: false,
      premiumMin: "25.00",
      premiumMax: "200.00",
      coverageAmount: "550500.00",
      deductible: "0.00",
      fees: [],
      features: [
        { en: "Medical cover up to USD 150,000", ar: "تغطية طبية حتى 150,000 دولار" },
        { en: "Trip cancellation up to USD 5,000", ar: "إلغاء رحلة حتى 5,000 دولار" },
        { en: "Affordable premium", ar: "قسط بسعر مناسب" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE),
    },
  ];

  // ── 6  TELECOM ───────────────────────────────────────────────────
  console.log("Inserting telecom products...");

  const telecom = [
    // du
    {
      providerId: prov["du"],
      category: "mobile_plan",
      subCategory: "postpaid",
      nameEn: "du Power Plan 200",
      imageUrl: "/products/du-sim.svg",
      nameAr: "باقة باور 200 من دو",
      descriptionEn:
        "Postpaid plan with 15 GB data, unlimited local calls, and free WiFi UAE access for AED 200/month.",
      descriptionAr:
        "باقة آجلة الدفع مع 15 جيجابايت بيانات ومكالمات محلية غير محدودة ووصول مجاني لشبكة WiFi UAE بسعر 200 درهم/شهر.",
      status: "active" as const,
      islamicCompliant: false,
      dataGb: "15",
      minutes: "unlimited",
      sms: "unlimited",
      priceMonthly: "200.00",
      contractMonths: 12,
      speed: "5G",
      fees: [],
      features: [
        { en: "15 GB national data", ar: "15 جيجابايت بيانات وطنية" },
        { en: "Unlimited local calls", ar: "مكالمات محلية غير محدودة" },
        { en: "Free WiFi UAE", ar: "وصول مجاني لشبكة WiFi UAE" },
        { en: "5G access included", ar: "وصول 5G مدرج" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, {
        validEmiratesId: true,
      }),
    },
    {
      providerId: prov["du"],
      category: "mobile_plan",
      subCategory: "postpaid",
      nameEn: "du Power Plan 300",
      imageUrl: "/products/du-sim.svg",
      nameAr: "باقة باور 300 من دو",
      descriptionEn:
        "Non-stop national data at 10 Mbps with unlimited calls and 5G access for AED 300/month.",
      descriptionAr:
        "بيانات وطنية مستمرة بسرعة 10 ميجابت مع مكالمات غير محدودة ووصول 5G بسعر 300 درهم/شهر.",
      status: "active" as const,
      islamicCompliant: false,
      dataGb: "unlimited",
      minutes: "unlimited",
      sms: "unlimited",
      priceMonthly: "300.00",
      contractMonths: 12,
      speed: "10 Mbps",
      fees: [],
      features: [
        { en: "Non-stop data at 10 Mbps", ar: "بيانات مستمرة بسرعة 10 ميجابت" },
        { en: "Unlimited local calls", ar: "مكالمات محلية غير محدودة" },
        { en: "5G access included", ar: "وصول 5G مدرج" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, {
        validEmiratesId: true,
      }),
    },
    {
      providerId: prov["du"],
      category: "mobile_plan",
      subCategory: "postpaid",
      nameEn: "du Power Plan 500",
      imageUrl: "/products/du-sim.svg",
      nameAr: "باقة باور 500 من دو",
      descriptionEn:
        "Unlimited national 5G data with full speed, unlimited calls, and premium entertainment access for AED 500/month.",
      descriptionAr:
        "بيانات وطنية غير محدودة 5G بسرعة كاملة مع مكالمات غير محدودة وترفيه بريميوم بسعر 500 درهم/شهر.",
      status: "active" as const,
      islamicCompliant: false,
      dataGb: "unlimited",
      minutes: "unlimited",
      sms: "unlimited",
      priceMonthly: "500.00",
      contractMonths: 12,
      speed: "5G Full Speed",
      fees: [],
      features: [
        { en: "Unlimited 5G data at full speed", ar: "بيانات 5G غير محدودة بسرعة كاملة" },
        { en: "Premium entertainment access", ar: "وصول ترفيه بريميوم" },
        { en: "International roaming benefits", ar: "مزايا تجوال دولي" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, {
        validEmiratesId: true,
      }),
    },
    // e& (Etisalat)
    {
      providerId: prov["e& (Etisalat)"],
      category: "mobile_plan",
      subCategory: "postpaid",
      nameEn: "e& Postpaid 250",
      imageUrl: "/products/etisalat-sim.svg",
      nameAr: "باقة آجلة الدفع 250 من اتصالات",
      descriptionEn:
        "20 GB data, unlimited local calls and SMS, STARZPLAY included for AED 250/month with 12-month contract.",
      descriptionAr:
        "20 جيجابايت بيانات ومكالمات محلية ورسائل غير محدودة واشتراك STARZPLAY بسعر 250 درهم/شهر لمدة 12 شهرًا.",
      status: "active" as const,
      islamicCompliant: false,
      dataGb: "20",
      minutes: "unlimited",
      sms: "unlimited",
      priceMonthly: "250.00",
      contractMonths: 12,
      speed: "5G",
      fees: [],
      features: [
        { en: "20 GB data with rollover", ar: "20 جيجابايت مع ترحيل البيانات" },
        { en: "Unlimited local calls & SMS", ar: "مكالمات ورسائل محلية غير محدودة" },
        { en: "STARZPLAY included", ar: "اشتراك STARZPLAY مدرج" },
        { en: "5G access", ar: "وصول 5G" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, {
        validEmiratesId: true,
      }),
    },
    {
      providerId: prov["e& (Etisalat)"],
      category: "mobile_plan",
      subCategory: "postpaid",
      nameEn: "e& Freedom 400",
      imageUrl: "/products/etisalat-sim.svg",
      nameAr: "باقة فريدوم 400 من اتصالات",
      descriptionEn:
        "50 GB data, unlimited national and select international calls, entertainment bundle for AED 400/month.",
      descriptionAr:
        "50 جيجابايت بيانات ومكالمات وطنية ودولية مختارة غير محدودة وحزمة ترفيه بسعر 400 درهم/شهر.",
      status: "active" as const,
      islamicCompliant: false,
      dataGb: "50",
      minutes: "unlimited",
      sms: "unlimited",
      priceMonthly: "400.00",
      contractMonths: 12,
      speed: "5G",
      fees: [],
      features: [
        { en: "50 GB high-speed data", ar: "50 جيجابايت بيانات عالية السرعة" },
        { en: "Select international calls included", ar: "مكالمات دولية مختارة مدرجة" },
        { en: "Entertainment bundle", ar: "حزمة ترفيه" },
        { en: "Smiles rewards", ar: "مكافآت سمايلز" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, {
        validEmiratesId: true,
      }),
    },
    {
      providerId: prov["e& (Etisalat)"],
      category: "mobile_plan",
      subCategory: "postpaid",
      nameEn: "e& Unlimited 1000",
      imageUrl: "/products/etisalat-sim.svg",
      nameAr: "باقة غير محدودة 1000 من اتصالات",
      descriptionEn:
        "Unlimited 5G data at full speed, unlimited international calls to 80+ countries, premium content for AED 1,000/month.",
      descriptionAr:
        "بيانات 5G غير محدودة بسرعة كاملة ومكالمات دولية غير محدودة لأكثر من 80 دولة ومحتوى بريميوم بسعر 1,000 درهم/شهر.",
      status: "active" as const,
      islamicCompliant: false,
      dataGb: "unlimited",
      minutes: "unlimited",
      sms: "unlimited",
      priceMonthly: "1000.00",
      contractMonths: 12,
      speed: "5G Full Speed",
      fees: [],
      features: [
        { en: "Unlimited 5G data at full speed", ar: "بيانات 5G غير محدودة بسرعة كاملة" },
        { en: "International calls to 80+ countries", ar: "مكالمات دولية لأكثر من 80 دولة" },
        { en: "Roam Like Home in 100+ destinations", ar: "تجوال كالمنزل في أكثر من 100 وجهة" },
        { en: "Premium content access", ar: "وصول محتوى بريميوم" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, {
        validEmiratesId: true,
      }),
    },
    // Virgin Mobile
    {
      providerId: prov["Virgin Mobile UAE"],
      category: "mobile_plan",
      subCategory: "postpaid",
      nameEn: "Virgin Mobile 7 GB Plan",
      imageUrl: "/products/virgin-sim.svg",
      nameAr: "باقة 7 جيجابايت من فيرجن موبايل",
      descriptionEn:
        "Flexible monthly plan with 7 GB data, unlimited local calls for AED 75/month. No contract required.",
      descriptionAr:
        "باقة شهرية مرنة مع 7 جيجابايت بيانات ومكالمات محلية غير محدودة بسعر 75 درهم/شهر. بدون عقد.",
      status: "active" as const,
      islamicCompliant: false,
      dataGb: "7",
      minutes: "unlimited",
      sms: "unlimited",
      priceMonthly: "75.00",
      contractMonths: 0,
      speed: "5G",
      fees: [],
      features: [
        { en: "No contract required", ar: "بدون عقد" },
        { en: "Manage everything via app", ar: "إدارة كل شيء عبر التطبيق" },
        { en: "5G access", ar: "وصول 5G" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, {
        validEmiratesId: true,
      }),
    },
    {
      providerId: prov["Virgin Mobile UAE"],
      category: "mobile_plan",
      subCategory: "postpaid",
      nameEn: "Virgin Mobile 15 GB Plan",
      imageUrl: "/products/virgin-sim.svg",
      nameAr: "باقة 15 جيجابايت من فيرجن موبايل",
      descriptionEn:
        "15 GB data, unlimited local calls with app-first experience for AED 120/month. No lock-in.",
      descriptionAr:
        "15 جيجابايت بيانات ومكالمات محلية غير محدودة مع تجربة عبر التطبيق بسعر 120 درهم/شهر. بدون التزام.",
      status: "active" as const,
      islamicCompliant: false,
      dataGb: "15",
      minutes: "unlimited",
      sms: "unlimited",
      priceMonthly: "120.00",
      contractMonths: 0,
      speed: "5G",
      fees: [],
      features: [
        { en: "No lock-in contract", ar: "بدون عقد التزام" },
        { en: "100% digital experience", ar: "تجربة رقمية 100٪" },
        { en: "5G access", ar: "وصول 5G" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, {
        validEmiratesId: true,
      }),
    },
    {
      providerId: prov["Virgin Mobile UAE"],
      category: "mobile_plan",
      subCategory: "postpaid",
      nameEn: "Virgin Mobile VIP Plan",
      imageUrl: "/products/virgin-sim.svg",
      nameAr: "باقة VIP من فيرجن موبايل",
      descriptionEn:
        "Unlimited data and calls with VIP number selection, priority support for AED 300/month.",
      descriptionAr:
        "بيانات ومكالمات غير محدودة مع اختيار رقم VIP ودعم أولوية بسعر 300 درهم/شهر.",
      status: "active" as const,
      islamicCompliant: false,
      dataGb: "unlimited",
      minutes: "unlimited",
      sms: "unlimited",
      priceMonthly: "300.00",
      contractMonths: 12,
      speed: "5G Full Speed",
      fees: [],
      features: [
        { en: "Unlimited 5G data", ar: "بيانات 5G غير محدودة" },
        { en: "VIP number selection", ar: "اختيار رقم VIP" },
        { en: "Priority customer support", ar: "دعم عملاء أولوية" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, {
        validEmiratesId: true,
      }),
    },
  ];

  // ── 7  SAVINGS ACCOUNTS ──────────────────────────────────────────
  console.log("Inserting savings accounts...");

  const savingsAccounts = [
    // Emirates NBD
    {
      providerId: prov["Emirates NBD"],
      category: "savings_account",
      subCategory: "conventional",
      nameEn: "Emirates NBD Savings Account",
      nameAr: "حساب التوفير من الإمارات دبي الوطني",
      descriptionEn:
        "Standard savings account earning 0.25% p.a. interest with a minimum balance of AED 3,000 and free online banking.",
      descriptionAr:
        "حساب توفير قياسي بعائد 0.25٪ سنويًا مع حد أدنى للرصيد 3,000 درهم وخدمات مصرفية إلكترونية مجانية.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "fixed" as const,
      rateValue: "0.250",
      minAmount: "3000.00",
      fees: [
        { nameEn: "Below Min Balance Fee", nameAr: "رسوم الحد الأدنى للرصيد", amount: 25, type: "fixed" as const },
      ],
      features: [
        { en: "0.25% annual interest", ar: "فائدة سنوية 0.25٪" },
        { en: "Free online and mobile banking", ar: "خدمات مصرفية إلكترونية مجانية" },
        { en: "Free debit card", ar: "بطاقة خصم مجانية" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18 }),
    },
    // FAB
    {
      providerId: prov["First Abu Dhabi Bank"],
      category: "savings_account",
      subCategory: "conventional",
      nameEn: "FAB Savings Account",
      nameAr: "حساب التوفير من بنك أبوظبي الأول",
      descriptionEn:
        "FAB savings account with 0.15% p.a. interest, minimum balance AED 3,000 and access to FAB Rewards programme.",
      descriptionAr:
        "حساب توفير من بنك أبوظبي الأول بعائد 0.15٪ سنويًا وحد أدنى للرصيد 3,000 درهم مع إمكانية الوصول لبرنامج مكافآت FAB.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "fixed" as const,
      rateValue: "0.150",
      minAmount: "3000.00",
      fees: [
        { nameEn: "Below Min Balance Fee", nameAr: "رسوم الحد الأدنى للرصيد", amount: 25, type: "fixed" as const },
      ],
      features: [
        { en: "0.15% annual interest", ar: "فائدة سنوية 0.15٪" },
        { en: "FAB Rewards programme access", ar: "الوصول لبرنامج مكافآت FAB" },
        { en: "Free debit card", ar: "بطاقة خصم مجانية" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18 }),
    },
    // ADCB
    {
      providerId: prov["Abu Dhabi Commercial Bank"],
      category: "savings_account",
      subCategory: "conventional",
      nameEn: "ADCB ActiveSaver Account",
      nameAr: "حساب التوفير النشط من بنك أبوظبي التجاري",
      descriptionEn:
        "High-yield savings account earning 0.50% p.a. with low minimum balance of AED 500 and instant fund transfers.",
      descriptionAr:
        "حساب توفير بعائد مرتفع 0.50٪ سنويًا مع حد أدنى منخفض للرصيد 500 درهم وتحويلات فورية.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "fixed" as const,
      rateValue: "0.500",
      minAmount: "500.00",
      fees: [],
      features: [
        { en: "0.50% annual interest", ar: "فائدة سنوية 0.50٪" },
        { en: "Low minimum balance of AED 500", ar: "حد أدنى منخفض للرصيد 500 درهم" },
        { en: "Instant fund transfers", ar: "تحويلات مالية فورية" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18 }),
    },
    // Mashreq
    {
      providerId: prov["Mashreq"],
      category: "savings_account",
      subCategory: "conventional",
      nameEn: "Mashreq Millionaire Savings Account",
      nameAr: "حساب توفير المليونير من المشرق",
      descriptionEn:
        "Savings account with 0.10% p.a. interest and entry into monthly millionaire draw for every AED 5,000 held.",
      descriptionAr:
        "حساب توفير بعائد 0.10٪ سنويًا مع فرصة الدخول في سحب المليونير الشهري عن كل 5,000 درهم.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "fixed" as const,
      rateValue: "0.100",
      minAmount: "1000.00",
      fees: [
        { nameEn: "Below Min Balance Fee", nameAr: "رسوم الحد الأدنى للرصيد", amount: 25, type: "fixed" as const },
      ],
      features: [
        { en: "Monthly millionaire draw entry", ar: "الدخول في سحب المليونير الشهري" },
        { en: "0.10% annual interest", ar: "فائدة سنوية 0.10٪" },
        { en: "Free debit card", ar: "بطاقة خصم مجانية" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18 }),
    },
    // RAKBANK
    {
      providerId: prov["RAKBANK"],
      category: "savings_account",
      subCategory: "conventional",
      nameEn: "RAKBANK High Yield Savings Account",
      nameAr: "حساب التوفير ذو العائد المرتفع من بنك رأس الخيمة",
      descriptionEn:
        "Premium savings account earning 1.00% p.a. on balances above AED 10,000 with no lock-in period.",
      descriptionAr:
        "حساب توفير مميز بعائد 1.00٪ سنويًا على الأرصدة فوق 10,000 درهم بدون فترة حجز.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "fixed" as const,
      rateValue: "1.000",
      minAmount: "10000.00",
      fees: [],
      features: [
        { en: "1.00% annual interest on balances above AED 10,000", ar: "فائدة سنوية 1.00٪ على الأرصدة فوق 10,000 درهم" },
        { en: "No lock-in period", ar: "بدون فترة حجز" },
        { en: "Free online banking", ar: "خدمات مصرفية إلكترونية مجانية" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18 }),
    },
    // DIB (Islamic)
    {
      providerId: prov["Dubai Islamic Bank"],
      category: "savings_account",
      subCategory: "islamic",
      nameEn: "DIB Al Islami Savings Account",
      nameAr: "حساب التوفير الإسلامي من بنك دبي الإسلامي",
      descriptionEn:
        "Sharia-compliant savings account with expected profit rate of 0.30% p.a. based on Mudaraba principle, minimum balance AED 3,000.",
      descriptionAr:
        "حساب توفير متوافق مع الشريعة الإسلامية بمعدل ربح متوقع 0.30٪ سنويًا على أساس المضاربة، حد أدنى للرصيد 3,000 درهم.",
      status: "active" as const,
      islamicCompliant: true,
      rateType: "fixed" as const,
      profitRate: "0.300",
      minAmount: "3000.00",
      fees: [
        { nameEn: "Below Min Balance Fee", nameAr: "رسوم الحد الأدنى للرصيد", amount: 25, type: "fixed" as const },
      ],
      features: [
        { en: "Sharia-compliant (Mudaraba)", ar: "متوافق مع الشريعة (مضاربة)" },
        { en: "Expected profit rate 0.30% p.a.", ar: "معدل ربح متوقع 0.30٪ سنويًا" },
        { en: "Free Islamic debit card", ar: "بطاقة خصم إسلامية مجانية" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18 }),
    },
    // ADIB (Islamic)
    {
      providerId: prov["Abu Dhabi Islamic Bank"],
      category: "savings_account",
      subCategory: "islamic",
      nameEn: "ADIB Savings Account",
      nameAr: "حساب التوفير من مصرف أبوظبي الإسلامي",
      descriptionEn:
        "Islamic savings account with expected profit rate of 0.40% p.a. based on Wakala principle, minimum balance AED 3,000.",
      descriptionAr:
        "حساب توفير إسلامي بمعدل ربح متوقع 0.40٪ سنويًا على أساس الوكالة، حد أدنى للرصيد 3,000 درهم.",
      status: "active" as const,
      islamicCompliant: true,
      rateType: "fixed" as const,
      profitRate: "0.400",
      minAmount: "3000.00",
      fees: [],
      features: [
        { en: "Sharia-compliant (Wakala)", ar: "متوافق مع الشريعة (وكالة)" },
        { en: "Expected profit rate 0.40% p.a.", ar: "معدل ربح متوقع 0.40٪ سنويًا" },
        { en: "ADIB Rewards programme", ar: "برنامج مكافآت مصرف أبوظبي الإسلامي" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18 }),
    },
    // Emirates Islamic (Islamic)
    {
      providerId: prov["Emirates Islamic"],
      category: "savings_account",
      subCategory: "islamic",
      nameEn: "Emirates Islamic Kunooz Savings Account",
      nameAr: "حساب توفير كنوز من الإمارات الإسلامي",
      descriptionEn:
        "Sharia-compliant savings account with expected profit rate of 0.25% p.a. and weekly prize draws for every AED 5,000 maintained.",
      descriptionAr:
        "حساب توفير متوافق مع الشريعة بمعدل ربح متوقع 0.25٪ سنويًا مع سحوبات أسبوعية عن كل 5,000 درهم.",
      status: "active" as const,
      islamicCompliant: true,
      rateType: "fixed" as const,
      profitRate: "0.250",
      minAmount: "1000.00",
      fees: [],
      features: [
        { en: "Weekly Kunooz prize draws", ar: "سحوبات كنوز الأسبوعية" },
        { en: "Sharia-compliant savings", ar: "توفير متوافق مع الشريعة" },
        { en: "Expected profit rate 0.25% p.a.", ar: "معدل ربح متوقع 0.25٪ سنويًا" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18 }),
    },
    // Wio Bank (Digital)
    {
      providerId: prov["Wio Bank"],
      category: "savings_account",
      subCategory: "conventional",
      nameEn: "Wio Bank Savings Account",
      nameAr: "حساب التوفير من بنك ويو",
      descriptionEn:
        "Digital-first savings account earning 2.00% p.a. with no minimum balance, instant account opening via app.",
      descriptionAr:
        "حساب توفير رقمي بعائد 2.00٪ سنويًا بدون حد أدنى للرصيد مع فتح فوري عبر التطبيق.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "fixed" as const,
      rateValue: "2.000",
      minAmount: "0.00",
      fees: [],
      features: [
        { en: "2.00% annual interest", ar: "فائدة سنوية 2.00٪" },
        { en: "No minimum balance required", ar: "بدون حد أدنى للرصيد" },
        { en: "Instant digital account opening", ar: "فتح حساب رقمي فوري" },
        { en: "Free virtual debit card", ar: "بطاقة خصم افتراضية مجانية" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18, validEmiratesId: true }),
    },
    // Liv (Digital)
    {
      providerId: prov["Liv"],
      category: "savings_account",
      subCategory: "conventional",
      nameEn: "Liv Savings Account",
      nameAr: "حساب التوفير من ليف",
      descriptionEn:
        "Youth-focused digital savings account by Emirates NBD offering 1.50% p.a. with no minimum balance and goal-based savings features.",
      descriptionAr:
        "حساب توفير رقمي موجه للشباب من الإمارات دبي الوطني بعائد 1.50٪ سنويًا بدون حد أدنى للرصيد مع ميزات التوفير حسب الأهداف.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "fixed" as const,
      rateValue: "1.500",
      minAmount: "0.00",
      fees: [],
      features: [
        { en: "1.50% annual interest", ar: "فائدة سنوية 1.50٪" },
        { en: "Goal-based savings tools", ar: "أدوات التوفير حسب الأهداف" },
        { en: "No minimum balance", ar: "بدون حد أدنى للرصيد" },
        { en: "Social payments & bill splitting", ar: "مدفوعات اجتماعية وتقسيم الفواتير" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18, validEmiratesId: true }),
    },
  ];

  // ── 8  FIXED DEPOSITS ──────────────────────────────────────────────
  console.log("Inserting fixed deposits...");

  const fixedDeposits = [
    // Emirates NBD
    {
      providerId: prov["Emirates NBD"],
      category: "fixed_deposit",
      subCategory: "conventional",
      nameEn: "Emirates NBD Fixed Deposit",
      nameAr: "وديعة ثابتة من الإمارات دبي الوطني",
      descriptionEn:
        "Fixed deposit offering 4.00% p.a. for 12-month tenure with minimum investment of AED 10,000 and automatic renewal option.",
      descriptionAr:
        "وديعة ثابتة بعائد 4.00٪ سنويًا لمدة 12 شهرًا مع حد أدنى للاستثمار 10,000 درهم وخيار التجديد التلقائي.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "fixed" as const,
      rateValue: "4.000",
      minAmount: "10000.00",
      minTenureMonths: 1,
      maxTenureMonths: 36,
      fees: [
        { nameEn: "Early Withdrawal Penalty", nameAr: "غرامة السحب المبكر", amount: 1.0, type: "percentage" as const },
      ],
      features: [
        { en: "4.00% p.a. for 12-month tenure", ar: "عائد 4.00٪ سنويًا لمدة 12 شهرًا" },
        { en: "Automatic renewal option", ar: "خيار التجديد التلقائي" },
        { en: "Loan against deposit facility", ar: "إمكانية القرض مقابل الوديعة" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18 }),
    },
    // FAB
    {
      providerId: prov["First Abu Dhabi Bank"],
      category: "fixed_deposit",
      subCategory: "conventional",
      nameEn: "FAB Term Deposit",
      nameAr: "وديعة لأجل من بنك أبوظبي الأول",
      descriptionEn:
        "Term deposit with 3.75% p.a. for 12 months, minimum AED 25,000, available in AED and major foreign currencies.",
      descriptionAr:
        "وديعة لأجل بعائد 3.75٪ سنويًا لمدة 12 شهرًا، حد أدنى 25,000 درهم، متاحة بالدرهم والعملات الأجنبية الرئيسية.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "fixed" as const,
      rateValue: "3.750",
      minAmount: "25000.00",
      minTenureMonths: 1,
      maxTenureMonths: 60,
      fees: [
        { nameEn: "Early Withdrawal Penalty", nameAr: "غرامة السحب المبكر", amount: 1.0, type: "percentage" as const },
      ],
      features: [
        { en: "3.75% p.a. for 12-month tenure", ar: "عائد 3.75٪ سنويًا لمدة 12 شهرًا" },
        { en: "Multi-currency options", ar: "خيارات متعددة العملات" },
        { en: "Auto-renewal with updated rates", ar: "تجديد تلقائي بأسعار محدثة" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18 }),
    },
    // ADCB
    {
      providerId: prov["Abu Dhabi Commercial Bank"],
      category: "fixed_deposit",
      subCategory: "conventional",
      nameEn: "ADCB Fixed Deposit",
      nameAr: "وديعة ثابتة من بنك أبوظبي التجاري",
      descriptionEn:
        "Fixed deposit with competitive rate of 4.25% p.a. for 12 months, minimum AED 10,000, with flexible tenure options.",
      descriptionAr:
        "وديعة ثابتة بسعر تنافسي 4.25٪ سنويًا لمدة 12 شهرًا، حد أدنى 10,000 درهم، مع خيارات مرنة للمدة.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "fixed" as const,
      rateValue: "4.250",
      minAmount: "10000.00",
      minTenureMonths: 1,
      maxTenureMonths: 36,
      fees: [
        { nameEn: "Early Withdrawal Penalty", nameAr: "غرامة السحب المبكر", amount: 0.5, type: "percentage" as const },
      ],
      features: [
        { en: "4.25% p.a. for 12-month tenure", ar: "عائد 4.25٪ سنويًا لمدة 12 شهرًا" },
        { en: "Flexible tenure from 1 to 36 months", ar: "مدة مرنة من 1 إلى 36 شهرًا" },
        { en: "Online deposit booking", ar: "حجز الوديعة عبر الإنترنت" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18 }),
    },
    // Mashreq
    {
      providerId: prov["Mashreq"],
      category: "fixed_deposit",
      subCategory: "conventional",
      nameEn: "Mashreq Fixed Deposit",
      nameAr: "وديعة ثابتة من المشرق",
      descriptionEn:
        "Term deposit offering 3.90% p.a. for 12 months with minimum AED 25,000 and option to receive monthly interest payouts.",
      descriptionAr:
        "وديعة لأجل بعائد 3.90٪ سنويًا لمدة 12 شهرًا مع حد أدنى 25,000 درهم وخيار صرف الفوائد الشهرية.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "fixed" as const,
      rateValue: "3.900",
      minAmount: "25000.00",
      minTenureMonths: 1,
      maxTenureMonths: 36,
      fees: [
        { nameEn: "Early Withdrawal Penalty", nameAr: "غرامة السحب المبكر", amount: 1.0, type: "percentage" as const },
      ],
      features: [
        { en: "3.90% p.a. for 12-month tenure", ar: "عائد 3.90٪ سنويًا لمدة 12 شهرًا" },
        { en: "Monthly interest payout option", ar: "خيار صرف الفوائد الشهرية" },
        { en: "Capital guaranteed", ar: "رأس المال مضمون" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18 }),
    },
    // RAKBANK
    {
      providerId: prov["RAKBANK"],
      category: "fixed_deposit",
      subCategory: "conventional",
      nameEn: "RAKBANK Fixed Deposit",
      nameAr: "وديعة ثابتة من بنك رأس الخيمة",
      descriptionEn:
        "High-yield fixed deposit at 4.50% p.a. for 12 months with low minimum of AED 5,000 and online booking.",
      descriptionAr:
        "وديعة ثابتة بعائد مرتفع 4.50٪ سنويًا لمدة 12 شهرًا مع حد أدنى منخفض 5,000 درهم وحجز عبر الإنترنت.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "fixed" as const,
      rateValue: "4.500",
      minAmount: "5000.00",
      minTenureMonths: 1,
      maxTenureMonths: 36,
      fees: [],
      features: [
        { en: "4.50% p.a. for 12-month tenure", ar: "عائد 4.50٪ سنويًا لمدة 12 شهرًا" },
        { en: "Low minimum deposit of AED 5,000", ar: "حد أدنى منخفض للوديعة 5,000 درهم" },
        { en: "Flexible tenure options", ar: "خيارات مرنة للمدة" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18 }),
    },
    // DIB (Islamic)
    {
      providerId: prov["Dubai Islamic Bank"],
      category: "fixed_deposit",
      subCategory: "islamic",
      nameEn: "DIB Wakala Deposit",
      nameAr: "وديعة الوكالة من بنك دبي الإسلامي",
      descriptionEn:
        "Sharia-compliant Wakala deposit with expected profit rate of 3.80% for 12 months, minimum AED 10,000.",
      descriptionAr:
        "وديعة وكالة متوافقة مع الشريعة بمعدل ربح متوقع 3.80٪ لمدة 12 شهرًا، حد أدنى 10,000 درهم.",
      status: "active" as const,
      islamicCompliant: true,
      rateType: "fixed" as const,
      profitRate: "3.800",
      minAmount: "10000.00",
      minTenureMonths: 1,
      maxTenureMonths: 36,
      fees: [
        { nameEn: "Early Withdrawal Penalty", nameAr: "غرامة السحب المبكر", amount: 1.0, type: "percentage" as const },
      ],
      features: [
        { en: "Sharia-compliant (Wakala)", ar: "متوافق مع الشريعة (وكالة)" },
        { en: "Expected profit rate 3.80% for 12 months", ar: "معدل ربح متوقع 3.80٪ لمدة 12 شهرًا" },
        { en: "Capital protection", ar: "حماية رأس المال" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18 }),
    },
    // ADIB (Islamic)
    {
      providerId: prov["Abu Dhabi Islamic Bank"],
      category: "fixed_deposit",
      subCategory: "islamic",
      nameEn: "ADIB Mudaraba Deposit",
      nameAr: "وديعة المضاربة من مصرف أبوظبي الإسلامي",
      descriptionEn:
        "Sharia-compliant Mudaraba deposit with expected profit rate of 3.60% for 12 months, minimum AED 10,000.",
      descriptionAr:
        "وديعة مضاربة متوافقة مع الشريعة بمعدل ربح متوقع 3.60٪ لمدة 12 شهرًا، حد أدنى 10,000 درهم.",
      status: "active" as const,
      islamicCompliant: true,
      rateType: "fixed" as const,
      profitRate: "3.600",
      minAmount: "10000.00",
      minTenureMonths: 1,
      maxTenureMonths: 36,
      fees: [],
      features: [
        { en: "Sharia-compliant (Mudaraba)", ar: "متوافق مع الشريعة (مضاربة)" },
        { en: "Expected profit rate 3.60% for 12 months", ar: "معدل ربح متوقع 3.60٪ لمدة 12 شهرًا" },
        { en: "Flexible tenure options", ar: "خيارات مرنة للمدة" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18 }),
    },
    // CBD
    {
      providerId: prov["Commercial Bank of Dubai"],
      category: "fixed_deposit",
      subCategory: "conventional",
      nameEn: "CBD Fixed Deposit",
      nameAr: "وديعة ثابتة من بنك دبي التجاري",
      descriptionEn:
        "Competitive fixed deposit at 4.10% p.a. for 12 months with minimum AED 10,000 and automatic rollover.",
      descriptionAr:
        "وديعة ثابتة تنافسية بعائد 4.10٪ سنويًا لمدة 12 شهرًا مع حد أدنى 10,000 درهم وتجديد تلقائي.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "fixed" as const,
      rateValue: "4.100",
      minAmount: "10000.00",
      minTenureMonths: 1,
      maxTenureMonths: 36,
      fees: [
        { nameEn: "Early Withdrawal Penalty", nameAr: "غرامة السحب المبكر", amount: 0.5, type: "percentage" as const },
      ],
      features: [
        { en: "4.10% p.a. for 12-month tenure", ar: "عائد 4.10٪ سنويًا لمدة 12 شهرًا" },
        { en: "Automatic rollover", ar: "تجديد تلقائي" },
        { en: "Online booking available", ar: "حجز عبر الإنترنت متاح" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18 }),
    },
  ];

  // ── 9  LIFE INSURANCE ──────────────────────────────────────────────
  console.log("Inserting life insurance...");

  const lifeInsurance = [
    // Sukoon
    {
      providerId: prov["Sukoon Insurance"],
      category: "life_insurance",
      subCategory: "term_life",
      nameEn: "Sukoon Term Life Insurance",
      nameAr: "تأمين سكون على الحياة لأجل",
      descriptionEn:
        "Affordable term life insurance with coverage up to AED 1,000,000, providing financial protection for your family in case of death or total permanent disability.",
      descriptionAr:
        "تأمين على الحياة لأجل بتغطية تصل إلى مليون درهم، يوفر حماية مالية لعائلتك في حالة الوفاة أو العجز الكلي الدائم.",
      status: "active" as const,
      islamicCompliant: false,
      premiumMin: "500.00",
      premiumMax: "5000.00",
      coverageAmount: "1000000.00",
      fees: [],
      features: [
        { en: "Coverage up to AED 1,000,000", ar: "تغطية تصل إلى مليون درهم" },
        { en: "Death and total permanent disability", ar: "تغطية الوفاة والعجز الكلي الدائم" },
        { en: "Flexible premium payment options", ar: "خيارات مرنة لدفع الأقساط" },
        { en: "No medical exam for low sums", ar: "بدون فحص طبي للمبالغ المنخفضة" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18, maxAge: 60 }),
    },
    // Orient
    {
      providerId: prov["Orient Insurance"],
      category: "life_insurance",
      subCategory: "term_life",
      nameEn: "Orient Life Protection Plan",
      nameAr: "خطة حماية الحياة من أورينت",
      descriptionEn:
        "Comprehensive term life plan with coverage up to AED 1,500,000 including critical illness rider and repatriation benefit.",
      descriptionAr:
        "خطة تأمين شاملة على الحياة لأجل بتغطية تصل إلى 1,500,000 درهم تشمل ملحق الأمراض الخطيرة وتكاليف الإعادة للوطن.",
      status: "active" as const,
      islamicCompliant: false,
      premiumMin: "600.00",
      premiumMax: "6000.00",
      coverageAmount: "1500000.00",
      fees: [],
      features: [
        { en: "Coverage up to AED 1,500,000", ar: "تغطية تصل إلى 1,500,000 درهم" },
        { en: "Critical illness rider available", ar: "ملحق الأمراض الخطيرة متاح" },
        { en: "Repatriation of mortal remains", ar: "تكاليف إعادة الرفات للوطن" },
        { en: "Worldwide coverage", ar: "تغطية عالمية" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18, maxAge: 65 }),
    },
    // AXA
    {
      providerId: prov["AXA Gulf"],
      category: "life_insurance",
      subCategory: "term_life",
      nameEn: "AXA Term Life Cover",
      nameAr: "تأمين أكسا على الحياة لأجل",
      descriptionEn:
        "Flexible term life cover with sum assured up to AED 1,000,000, online application and competitive premiums starting from AED 450/year.",
      descriptionAr:
        "تأمين مرن على الحياة لأجل بمبلغ مضمون يصل إلى مليون درهم، تقديم عبر الإنترنت وأقساط تنافسية تبدأ من 450 درهم/سنة.",
      status: "active" as const,
      islamicCompliant: false,
      premiumMin: "450.00",
      premiumMax: "4500.00",
      coverageAmount: "1000000.00",
      fees: [],
      features: [
        { en: "Online application", ar: "تقديم عبر الإنترنت" },
        { en: "Coverage up to AED 1,000,000", ar: "تغطية تصل إلى مليون درهم" },
        { en: "Competitive premiums", ar: "أقساط تنافسية" },
        { en: "Accidental death benefit", ar: "تعويض الوفاة بحادث" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18, maxAge: 60 }),
    },
    // Salama (Islamic)
    {
      providerId: prov["Salama"],
      category: "life_insurance",
      subCategory: "takaful",
      nameEn: "Salama Family Takaful",
      nameAr: "تكافل الأسرة من سلامة",
      descriptionEn:
        "Sharia-compliant family Takaful plan with coverage up to AED 2,000,000, providing protection through Islamic cooperative insurance principles.",
      descriptionAr:
        "خطة تكافل أسرية متوافقة مع الشريعة بتغطية تصل إلى 2,000,000 درهم، توفر الحماية من خلال مبادئ التأمين التعاوني الإسلامي.",
      status: "active" as const,
      islamicCompliant: true,
      premiumMin: "700.00",
      premiumMax: "7000.00",
      coverageAmount: "2000000.00",
      fees: [],
      features: [
        { en: "Sharia-compliant Takaful", ar: "تكافل متوافق مع الشريعة" },
        { en: "Coverage up to AED 2,000,000", ar: "تغطية تصل إلى 2,000,000 درهم" },
        { en: "Surplus sharing with participants", ar: "مشاركة الفائض مع المشتركين" },
        { en: "Family protection plan", ar: "خطة حماية الأسرة" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18, maxAge: 60 }),
    },
  ];

  // ── 10  HOME INSURANCE ─────────────────────────────────────────────
  console.log("Inserting home insurance...");

  const homeInsurance = [
    // Sukoon
    {
      providerId: prov["Sukoon Insurance"],
      category: "home_insurance",
      subCategory: "home_comprehensive",
      nameEn: "Sukoon Home Cover",
      nameAr: "تأمين المنزل من سكون",
      descriptionEn:
        "Comprehensive home insurance covering building structure and contents up to AED 500,000 with personal liability and domestic worker coverage.",
      descriptionAr:
        "تأمين شامل للمنزل يغطي هيكل المبنى والمحتويات حتى 500,000 درهم مع المسؤولية الشخصية وتغطية العمالة المنزلية.",
      status: "active" as const,
      islamicCompliant: false,
      premiumMin: "350.00",
      premiumMax: "2000.00",
      coverageAmount: "500000.00",
      deductible: "500.00",
      fees: [],
      features: [
        { en: "Building and contents cover", ar: "تغطية المبنى والمحتويات" },
        { en: "Personal liability coverage", ar: "تغطية المسؤولية الشخصية" },
        { en: "Domestic worker coverage", ar: "تغطية العمالة المنزلية" },
        { en: "Water damage and natural disasters", ar: "تغطية أضرار المياه والكوارث الطبيعية" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18 }),
    },
    // Orient
    {
      providerId: prov["Orient Insurance"],
      category: "home_insurance",
      subCategory: "home_comprehensive",
      nameEn: "Orient Home Shield",
      nameAr: "درع المنزل من أورينت",
      descriptionEn:
        "Premium home insurance with coverage up to AED 750,000 including building, contents, valuables, and alternative accommodation costs.",
      descriptionAr:
        "تأمين منزل مميز بتغطية تصل إلى 750,000 درهم تشمل المبنى والمحتويات والمقتنيات الثمينة وتكاليف السكن البديل.",
      status: "active" as const,
      islamicCompliant: false,
      premiumMin: "400.00",
      premiumMax: "2500.00",
      coverageAmount: "750000.00",
      deductible: "500.00",
      fees: [],
      features: [
        { en: "Coverage up to AED 750,000", ar: "تغطية تصل إلى 750,000 درهم" },
        { en: "Valuables and jewellery cover", ar: "تغطية المقتنيات الثمينة والمجوهرات" },
        { en: "Alternative accommodation costs", ar: "تكاليف السكن البديل" },
        { en: "Landlord liability", ar: "مسؤولية المالك" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18 }),
    },
    // AXA
    {
      providerId: prov["AXA Gulf"],
      category: "home_insurance",
      subCategory: "home_comprehensive",
      nameEn: "AXA Home Insurance",
      nameAr: "تأمين المنزل من أكسا",
      descriptionEn:
        "Affordable home insurance covering contents and personal belongings up to AED 500,000 with online application and instant policy issuance.",
      descriptionAr:
        "تأمين منزل بأسعار معقولة يغطي المحتويات والممتلكات الشخصية حتى 500,000 درهم مع تقديم إلكتروني وإصدار فوري للوثيقة.",
      status: "active" as const,
      islamicCompliant: false,
      premiumMin: "300.00",
      premiumMax: "1800.00",
      coverageAmount: "500000.00",
      deductible: "250.00",
      fees: [],
      features: [
        { en: "Online application & instant cover", ar: "تقديم إلكتروني وتغطية فورية" },
        { en: "Contents and personal belongings", ar: "تغطية المحتويات والممتلكات الشخصية" },
        { en: "Tenant and landlord options", ar: "خيارات للمستأجر والمالك" },
        { en: "No claim discount", ar: "خصم عدم المطالبات" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18 }),
    },
    // ADNIC
    {
      providerId: prov["ADNIC"],
      category: "home_insurance",
      subCategory: "home_comprehensive",
      nameEn: "ADNIC Home Protection",
      nameAr: "حماية المنزل من أبوظبي الوطنية للتأمين",
      descriptionEn:
        "Premium home insurance with coverage up to AED 1,000,000 including building, contents, personal liability, and worldwide personal belongings coverage.",
      descriptionAr:
        "تأمين منزل مميز بتغطية تصل إلى مليون درهم تشمل المبنى والمحتويات والمسؤولية الشخصية وتغطية الممتلكات الشخصية عالميًا.",
      status: "active" as const,
      islamicCompliant: false,
      premiumMin: "450.00",
      premiumMax: "3000.00",
      coverageAmount: "1000000.00",
      deductible: "500.00",
      fees: [],
      features: [
        { en: "Coverage up to AED 1,000,000", ar: "تغطية تصل إلى مليون درهم" },
        { en: "Worldwide personal belongings", ar: "تغطية الممتلكات الشخصية عالميًا" },
        { en: "Personal liability up to AED 500,000", ar: "المسؤولية الشخصية حتى 500,000 درهم" },
        { en: "Emergency home assistance", ar: "مساعدة طوارئ المنزل" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18 }),
    },
  ];

  // ── 11  BUSINESS LOANS ─────────────────────────────────────────────
  console.log("Inserting business loans...");

  const businessLoans = [
    // Emirates NBD
    {
      providerId: prov["Emirates NBD"],
      category: "business_loan",
      subCategory: "sme_finance",
      nameEn: "Emirates NBD Business Loan",
      nameAr: "قرض تجاري من الإمارات دبي الوطني",
      descriptionEn:
        "SME business loan from AED 100,000 to AED 5,000,000 with competitive rates starting at 6.99% and flexible tenure up to 60 months.",
      descriptionAr:
        "قرض تجاري للمنشآت الصغيرة والمتوسطة من 100,000 إلى 5,000,000 درهم بأسعار تنافسية تبدأ من 6.99٪ ومدة مرنة حتى 60 شهرًا.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "reducing" as const,
      rateValue: "6.990",
      minAmount: "100000.00",
      maxAmount: "5000000.00",
      minTenureMonths: 12,
      maxTenureMonths: 60,
      processingFeePercent: "1.50",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.5, type: "percentage" as const },
        { nameEn: "Early Settlement", nameAr: "تسوية مبكرة", amount: 1.0, type: "percentage" as const },
      ],
      features: [
        { en: "Financing up to AED 5,000,000", ar: "تمويل يصل إلى 5,000,000 درهم" },
        { en: "Flexible tenure up to 60 months", ar: "مدة مرنة حتى 60 شهرًا" },
        { en: "No collateral for loans up to AED 500,000", ar: "بدون ضمانات للقروض حتى 500,000 درهم" },
        { en: "Dedicated relationship manager", ar: "مدير علاقات مخصص" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, {
        businessAge: 2,
        minAnnualRevenue: 1000000,
        validTradeLicense: true,
      }),
    },
    // FAB
    {
      providerId: prov["First Abu Dhabi Bank"],
      category: "business_loan",
      subCategory: "sme_finance",
      nameEn: "FAB SME Business Loan",
      nameAr: "قرض تجاري للمنشآت الصغيرة من بنك أبوظبي الأول",
      descriptionEn:
        "Business financing from AED 50,000 to AED 3,000,000 with rates from 7.49% and quick disbursement for established SMEs.",
      descriptionAr:
        "تمويل تجاري من 50,000 إلى 3,000,000 درهم بأسعار تبدأ من 7.49٪ مع صرف سريع للمنشآت الصغيرة والمتوسطة.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "reducing" as const,
      rateValue: "7.490",
      minAmount: "50000.00",
      maxAmount: "3000000.00",
      minTenureMonths: 12,
      maxTenureMonths: 48,
      processingFeePercent: "1.50",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.5, type: "percentage" as const },
        { nameEn: "Early Settlement", nameAr: "تسوية مبكرة", amount: 1.0, type: "percentage" as const },
      ],
      features: [
        { en: "Quick disbursement", ar: "صرف سريع" },
        { en: "Financing up to AED 3,000,000", ar: "تمويل يصل إلى 3,000,000 درهم" },
        { en: "Flexible repayment options", ar: "خيارات سداد مرنة" },
        { en: "Working capital and expansion", ar: "رأس مال عامل وتوسع" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, {
        businessAge: 2,
        minAnnualRevenue: 500000,
        validTradeLicense: true,
      }),
    },
    // ADCB
    {
      providerId: prov["Abu Dhabi Commercial Bank"],
      category: "business_loan",
      subCategory: "sme_finance",
      nameEn: "ADCB Business Finance",
      nameAr: "تمويل تجاري من بنك أبوظبي التجاري",
      descriptionEn:
        "Comprehensive business financing from AED 100,000 to AED 10,000,000 with rates from 7.25% for medium and large enterprises.",
      descriptionAr:
        "تمويل تجاري شامل من 100,000 إلى 10,000,000 درهم بأسعار تبدأ من 7.25٪ للمنشآت المتوسطة والكبيرة.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "reducing" as const,
      rateValue: "7.250",
      minAmount: "100000.00",
      maxAmount: "10000000.00",
      minTenureMonths: 12,
      maxTenureMonths: 60,
      processingFeePercent: "1.25",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.25, type: "percentage" as const },
        { nameEn: "Early Settlement", nameAr: "تسوية مبكرة", amount: 1.0, type: "percentage" as const },
      ],
      features: [
        { en: "Financing up to AED 10,000,000", ar: "تمويل يصل إلى 10,000,000 درهم" },
        { en: "Flexible tenure up to 60 months", ar: "مدة مرنة حتى 60 شهرًا" },
        { en: "Asset-backed and unsecured options", ar: "خيارات مضمونة وغير مضمونة" },
        { en: "Online business banking", ar: "خدمات مصرفية تجارية إلكترونية" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, {
        businessAge: 3,
        minAnnualRevenue: 2000000,
        validTradeLicense: true,
      }),
    },
    // Mashreq
    {
      providerId: prov["Mashreq"],
      category: "business_loan",
      subCategory: "sme_finance",
      nameEn: "Mashreq Business Loan",
      nameAr: "قرض تجاري من المشرق",
      descriptionEn:
        "Business loan from AED 50,000 to AED 5,000,000 at competitive 6.75% rate with fast approval and minimal documentation for existing customers.",
      descriptionAr:
        "قرض تجاري من 50,000 إلى 5,000,000 درهم بسعر تنافسي 6.75٪ مع موافقة سريعة ومستندات بسيطة للعملاء الحاليين.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "reducing" as const,
      rateValue: "6.750",
      minAmount: "50000.00",
      maxAmount: "5000000.00",
      minTenureMonths: 12,
      maxTenureMonths: 60,
      processingFeePercent: "1.50",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.5, type: "percentage" as const },
        { nameEn: "Early Settlement", nameAr: "تسوية مبكرة", amount: 1.0, type: "percentage" as const },
      ],
      features: [
        { en: "Competitive rate from 6.75%", ar: "سعر تنافسي يبدأ من 6.75٪" },
        { en: "Fast approval process", ar: "عملية موافقة سريعة" },
        { en: "Minimal documentation for existing clients", ar: "مستندات بسيطة للعملاء الحاليين" },
        { en: "Overdraft facility available", ar: "تسهيلات السحب على المكشوف متاحة" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, {
        businessAge: 2,
        minAnnualRevenue: 500000,
        validTradeLicense: true,
      }),
    },
    // DIB (Islamic)
    {
      providerId: prov["Dubai Islamic Bank"],
      category: "business_loan",
      subCategory: "islamic_finance",
      nameEn: "DIB Al Islami Business Finance",
      nameAr: "تمويل تجاري إسلامي من بنك دبي الإسلامي",
      descriptionEn:
        "Sharia-compliant business financing from AED 100,000 to AED 5,000,000 based on Murabaha structure with expected profit rate of 7.50%.",
      descriptionAr:
        "تمويل تجاري متوافق مع الشريعة من 100,000 إلى 5,000,000 درهم على أساس المرابحة بمعدل ربح متوقع 7.50٪.",
      status: "active" as const,
      islamicCompliant: true,
      rateType: "fixed" as const,
      profitRate: "7.500",
      minAmount: "100000.00",
      maxAmount: "5000000.00",
      minTenureMonths: 12,
      maxTenureMonths: 60,
      processingFeePercent: "1.50",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.5, type: "percentage" as const },
        { nameEn: "Early Settlement", nameAr: "تسوية مبكرة", amount: 1.0, type: "percentage" as const },
      ],
      features: [
        { en: "Sharia-compliant (Murabaha)", ar: "متوافق مع الشريعة (مرابحة)" },
        { en: "Financing up to AED 5,000,000", ar: "تمويل يصل إلى 5,000,000 درهم" },
        { en: "No collateral for established businesses", ar: "بدون ضمانات للمنشآت القائمة" },
        { en: "Dedicated Islamic banking advisor", ar: "مستشار مصرفية إسلامية مخصص" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, {
        businessAge: 2,
        minAnnualRevenue: 1000000,
        validTradeLicense: true,
      }),
    },
    // RAKBANK
    {
      providerId: prov["RAKBANK"],
      category: "business_loan",
      subCategory: "sme_finance",
      nameEn: "RAKBANK Business Loan",
      nameAr: "قرض تجاري من بنك رأس الخيمة",
      descriptionEn:
        "SME business loan from AED 50,000 to AED 2,000,000 at 7.99% with simplified documentation and quick turnaround.",
      descriptionAr:
        "قرض تجاري للمنشآت الصغيرة من 50,000 إلى 2,000,000 درهم بسعر 7.99٪ مع مستندات مبسطة وسرعة في الإنجاز.",
      status: "active" as const,
      islamicCompliant: false,
      rateType: "reducing" as const,
      rateValue: "7.990",
      minAmount: "50000.00",
      maxAmount: "2000000.00",
      minTenureMonths: 12,
      maxTenureMonths: 48,
      processingFeePercent: "1.50",
      fees: [
        { nameEn: "Processing Fee", nameAr: "رسوم معالجة", amount: 1.5, type: "percentage" as const },
        { nameEn: "Early Settlement", nameAr: "تسوية مبكرة", amount: 1.0, type: "percentage" as const },
      ],
      features: [
        { en: "Simplified documentation", ar: "مستندات مبسطة" },
        { en: "Quick turnaround time", ar: "سرعة في الإنجاز" },
        { en: "Business current account included", ar: "حساب جاري تجاري مشمول" },
        { en: "RAKvalue programme benefits", ar: "فوائد برنامج RAKvalue" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, {
        businessAge: 1,
        minAnnualRevenue: 500000,
        validTradeLicense: true,
      }),
    },
  ];

  // ── 12  INVESTMENT ACCOUNTS ────────────────────────────────────────
  console.log("Inserting investment accounts...");

  const investments = [
    // FAB
    {
      providerId: prov["First Abu Dhabi Bank"],
      category: "investment_account",
      subCategory: "brokerage",
      nameEn: "FAB Securities Trading Account",
      nameAr: "حساب تداول الأوراق المالية من بنك أبوظبي الأول",
      descriptionEn:
        "Online securities trading account with access to UAE (ADX, DFM) and international stock markets with competitive brokerage fees.",
      descriptionAr:
        "حساب تداول أوراق مالية إلكتروني مع إمكانية الوصول لأسواق الإمارات (سوق أبوظبي، سوق دبي) والأسواق الدولية برسوم وساطة تنافسية.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      fees: [
        { nameEn: "Brokerage Fee (Local)", nameAr: "رسوم الوساطة (محلي)", amount: 0.275, type: "percentage" as const },
        { nameEn: "Brokerage Fee (International)", nameAr: "رسوم الوساطة (دولي)", amount: 0.5, type: "percentage" as const },
      ],
      features: [
        { en: "UAE and international market access", ar: "الوصول لأسواق الإمارات والأسواق الدولية" },
        { en: "Real-time market data", ar: "بيانات السوق الحية" },
        { en: "Online and mobile trading", ar: "تداول عبر الإنترنت والهاتف" },
        { en: "Research and analysis tools", ar: "أدوات البحث والتحليل" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 21, validEmiratesId: true }),
    },
    // ADCB
    {
      providerId: prov["Abu Dhabi Commercial Bank"],
      category: "investment_account",
      subCategory: "brokerage",
      nameEn: "ADCB Investment Account",
      nameAr: "حساب الاستثمار من بنك أبوظبي التجاري",
      descriptionEn:
        "Comprehensive investment account offering access to stocks, bonds, ETFs, and structured products across regional and global markets.",
      descriptionAr:
        "حساب استثمار شامل يوفر الوصول للأسهم والسندات وصناديق المؤشرات والمنتجات المهيكلة عبر الأسواق الإقليمية والعالمية.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      fees: [
        { nameEn: "Brokerage Fee", nameAr: "رسوم الوساطة", amount: 0.25, type: "percentage" as const },
        { nameEn: "Custody Fee", nameAr: "رسوم الحفظ", amount: 0.05, type: "percentage" as const },
      ],
      features: [
        { en: "Stocks, bonds, and ETFs", ar: "أسهم وسندات وصناديق مؤشرات" },
        { en: "Regional and global markets", ar: "أسواق إقليمية وعالمية" },
        { en: "Portfolio advisory services", ar: "خدمات استشارات المحافظ" },
        { en: "Integrated with ADCB banking", ar: "متكامل مع الخدمات المصرفية من ADCB" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 21, validEmiratesId: true }),
    },
    // Sarwa
    {
      providerId: prov["Sarwa"],
      category: "investment_account",
      subCategory: "robo_advisory",
      nameEn: "Sarwa Invest",
      nameAr: "استثمار ثروة",
      descriptionEn:
        "Automated robo-advisory investment platform offering diversified, low-cost portfolios managed by algorithms with no minimum investment.",
      descriptionAr:
        "منصة استثمار آلية تقدم محافظ متنوعة ومنخفضة التكلفة تدار بالخوارزميات بدون حد أدنى للاستثمار.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      fees: [
        { nameEn: "Advisory Fee", nameAr: "رسوم الاستشارات", amount: 0.85, type: "percentage" as const },
      ],
      features: [
        { en: "Robo-advisory diversified portfolios", ar: "محافظ متنوعة بإدارة آلية" },
        { en: "Low-cost ETF-based investing", ar: "استثمار منخفض التكلفة عبر صناديق المؤشرات" },
        { en: "No minimum investment", ar: "بدون حد أدنى للاستثمار" },
        { en: "DFSA regulated", ar: "مرخص من سلطة دبي للخدمات المالية" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18, validEmiratesId: true }),
    },
    // Emirates NBD
    {
      providerId: prov["Emirates NBD"],
      category: "investment_account",
      subCategory: "mutual_funds",
      nameEn: "Emirates NBD Mutual Funds",
      nameAr: "صناديق الاستثمار من الإمارات دبي الوطني",
      descriptionEn:
        "Access to 50+ mutual funds spanning equities, fixed income, multi-asset, and Islamic funds with professional fund management.",
      descriptionAr:
        "الوصول لأكثر من 50 صندوق استثمار يشمل الأسهم والدخل الثابت والأصول المتعددة والصناديق الإسلامية مع إدارة صناديق احترافية.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      fees: [
        { nameEn: "Fund Management Fee", nameAr: "رسوم إدارة الصندوق", amount: 1.5, type: "percentage" as const },
        { nameEn: "Subscription Fee", nameAr: "رسوم الاشتراك", amount: 2.0, type: "percentage" as const },
      ],
      features: [
        { en: "50+ mutual funds available", ar: "أكثر من 50 صندوق استثمار متاح" },
        { en: "Professional fund management", ar: "إدارة صناديق احترافية" },
        { en: "Islamic fund options", ar: "خيارات صناديق إسلامية" },
        { en: "Regular investment plans available", ar: "خطط استثمار منتظمة متاحة" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 21 }),
    },
  ];

  // ── 13  BNPL (BUY NOW PAY LATER) ──────────────────────────────────
  console.log("Inserting BNPL products...");

  const bnpl = [
    // Tabby – Split in 4
    {
      providerId: prov["Tabby"],
      category: "bnpl",
      subCategory: "installments",
      nameEn: "Tabby – Split in 4",
      nameAr: "تابي – قسّمها على 4",
      descriptionEn:
        "Split any purchase into 4 interest-free payments over 6 weeks. No fees, no interest. Works with thousands of stores across the UAE.",
      descriptionAr:
        "قسّم أي عملية شراء على 4 دفعات بدون فوائد خلال 6 أسابيع. بدون رسوم أو فوائد. يعمل مع آلاف المتاجر في الإمارات.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      rewardType: "none" as const,
      fees: [
        { nameEn: "Late Payment Fee", nameAr: "رسوم التأخر في السداد", amount: 15, type: "fixed" as const },
      ],
      features: [
        { en: "4 interest-free payments", ar: "4 دفعات بدون فوائد" },
        { en: "Works with thousands of stores", ar: "يعمل مع آلاف المتاجر" },
        { en: "No annual fees", ar: "بدون رسوم سنوية" },
        { en: "Instant approval via app", ar: "موافقة فورية عبر التطبيق" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18, validEmiratesId: true }),
    },
    // Tamara
    {
      providerId: prov["Tamara"],
      category: "bnpl",
      subCategory: "installments",
      nameEn: "Tamara – Buy Now Pay Later",
      nameAr: "تمارا – اشترِ الآن وادفع لاحقًا",
      descriptionEn:
        "Split purchases into 3 or 4 interest-free instalments. No hidden fees, no interest charges. Available at major online and in-store retailers.",
      descriptionAr:
        "قسّم مشترياتك على 3 أو 4 أقساط بدون فوائد. بدون رسوم مخفية أو فوائد. متاح لدى كبرى المتاجر الإلكترونية والفعلية.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      rewardType: "none" as const,
      fees: [
        { nameEn: "Late Payment Fee", nameAr: "رسوم التأخر في السداد", amount: 15, type: "fixed" as const },
      ],
      features: [
        { en: "Split in 3 or 4 interest-free payments", ar: "قسّم على 3 أو 4 دفعات بدون فوائد" },
        { en: "No hidden fees", ar: "بدون رسوم مخفية" },
        { en: "Available online and in-store", ar: "متاح إلكترونيًا وفي المتاجر" },
        { en: "Easy app-based management", ar: "إدارة سهلة عبر التطبيق" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18, validEmiratesId: true }),
    },
    // Tabby – Pay Later
    {
      providerId: prov["Tabby"],
      category: "bnpl",
      subCategory: "installments",
      nameEn: "Tabby – Pay Later",
      nameAr: "تابي – ادفع لاحقًا",
      descriptionEn:
        "Buy today and pay the full amount in 30 days with zero interest and zero fees. Perfect for managing monthly budgets.",
      descriptionAr:
        "اشترِ اليوم وادفع المبلغ كاملًا خلال 30 يومًا بدون فوائد ورسوم. مثالي لإدارة الميزانية الشهرية.",
      status: "active" as const,
      islamicCompliant: false,
      annualFee: "0.00",
      rewardType: "none" as const,
      fees: [
        { nameEn: "Late Payment Fee", nameAr: "رسوم التأخر في السداد", amount: 15, type: "fixed" as const },
      ],
      features: [
        { en: "Pay in 30 days interest-free", ar: "ادفع خلال 30 يومًا بدون فوائد" },
        { en: "No fees if paid on time", ar: "بدون رسوم عند الدفع في الوقت المحدد" },
        { en: "Budget-friendly shopping", ar: "تسوق ملائم للميزانية" },
        { en: "Instant spending limit", ar: "حد إنفاق فوري" },
      ],
      eligibilityCriteria: elig(0, UAE_EXPAT, SALARIED_SE, { minAge: 18, validEmiratesId: true }),
    },
  ];

  // ── INSERT ALL PRODUCTS ──────────────────────────────────────────
  const allProducts = [
    ...personalLoans,
    ...creditCards,
    ...mortgages,
    ...autoLoans,
    ...insurance,
    ...telecom,
    ...savingsAccounts,
    ...fixedDeposits,
    ...lifeInsurance,
    ...homeInsurance,
    ...businessLoans,
    ...investments,
    ...bnpl,
  ];

  // Batch insert in chunks of 20 to avoid payload limits
  const BATCH_SIZE = 20;
  let inserted = 0;
  for (let i = 0; i < allProducts.length; i += BATCH_SIZE) {
    const batch = allProducts.slice(i, i + BATCH_SIZE);
    await db.insert(products).values(batch as any);
    inserted += batch.length;
    console.log(`  Inserted ${inserted} / ${allProducts.length} products...`);
  }

  console.log(`\n✅ Seed complete!`);
  console.log(`   Providers: ${providerRows.length}`);
  console.log(`   Products : ${allProducts.length}`);
  console.log(
    `   Breakdown: ${personalLoans.length} personal loans, ${creditCards.length} credit cards, ${mortgages.length} mortgages, ${autoLoans.length} auto loans, ${insurance.length} insurance, ${telecom.length} telecom, ${savingsAccounts.length} savings accounts, ${fixedDeposits.length} fixed deposits, ${lifeInsurance.length} life insurance, ${homeInsurance.length} home insurance, ${businessLoans.length} business loans, ${investments.length} investments, ${bnpl.length} BNPL`
  );
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
