# Sight Redesign — Design Document

Date: 2026-02-26

## Overview

Redesign the Sight financial product comparison platform with a TradePay-inspired minimal aesthetic, AI eligibility checker, real scraped UAE product data, and expanded SME product coverage.

## Visual Identity

### Colors

| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#ffffff` | Main background |
| `--bg-secondary` | `#f8fafc` | Section backgrounds (slate-50) |
| `--text-primary` | `#0f172a` | Headings (slate-900) |
| `--text-secondary` | `#64748b` | Body text (slate-500) |
| `--navy` | `#1e3a5f` | Brand color — nav, buttons, accents |
| `--navy-light` | `#f0f4f8` | Hover states, subtle backgrounds |
| `--navy-dark` | `#152e4a` | Hover on navy buttons |
| `--green` | `#059669` | Apply/Pre-Approved actions only (emerald-600) |
| `--green-light` | `#ecfdf5` | Pre-approved badge background |
| `--red-light` | `#fef2f2` | Not-eligible badge background |
| `--border` | `#e2e8f0` | Card/section borders (slate-200) |

### Typography

- **Display font:** Space Grotesk 700 — hero headings only
- **Body font:** Inter 400/600/700 — everything else
- **Hero heading:** 48-56px, Space Grotesk 700, slate-900
- **Section headings:** 32px, Inter 700, slate-900
- **Body text:** 16px, Inter 400, slate-500
- **Small text:** 14px, Inter 400, slate-500

### Spacing & Layout

- Max container: 1200px
- Horizontal padding: 40px (desktop), 20px (mobile)
- Section gaps: 80px between major sections
- Card border-radius: 16px
- Button border-radius: 12px
- Button padding: 12px 24px

### Logo

White wordmark (`sight.png`) on dark backgrounds. Navy-tinted version on white backgrounds.

## Navigation — Mega Menu

Sticky top nav. White background with subtle `border-bottom: 1px solid #e2e8f0` on scroll.

### Layout

- **Left:** Sight logo (navy version)
- **Center:** Two dropdown triggers — "Personal" | "Business"
- **Right:** AR/EN language toggle, "Check Eligibility" navy CTA button

### Personal Mega Menu

| Banking | Insurance | Everyday |
|---|---|---|
| Personal Loans | Car Insurance | Savings Accounts |
| Credit Cards | Health Insurance | Mobile Plans |
| Mortgages | Travel Insurance | Internet Plans |
| Auto Loans | Life Insurance | |

### Business Mega Menu

| Financing | Banking | Payments |
|---|---|---|
| Business Term Loans | Business Accounts | POS Solutions |
| SME Loans | Corporate Cards | Payment Gateway |
| Invoice Financing | Trade Finance | |
| Equipment Financing | Working Capital | |

Each item: Lucide line icon + category name + one-line description in slate-500.

## Homepage

### Hero (Above the Fold)

TradePay-inspired. Centered layout, maximum whitespace.

- 80px+ top padding below nav
- Space Grotesk 700, 48-56px, centered
- Headline: **"Compare every financial product in the UAE"**
- Subtitle: Inter 400, 18px, slate-500: "Loans, cards, insurance, business finance — real rates from real providers."
- Single navy CTA button: "Start Comparing"
- No images, no illustrations, no gradients. Pure typography.

### Featured Categories

- 2 rows x 4 columns grid
- Clean cards: Lucide line icon + category name + "X products" count
- Mix of personal + business categories (8 most active)
- Cards link to `/compare/{category}`
- Card style: white bg, 1px slate-200 border, 16px radius, hover: navy-light bg

### AI Eligibility Section

- Centered section on `--bg-secondary`
- Heading: "Find what you qualify for in 60 seconds"
- Subtitle: "Answer a few questions. We'll match you with pre-approved products."
- Navy CTA: "Check My Eligibility"
- Links to `/eligibility`

### Trust Bar

- Centered, single line
- "X providers · Y products · Real rates, updated weekly"
- slate-500 text, small

## AI Eligibility Checker (`/eligibility`)

### Chat-Style Questionnaire

A structured questionnaire wrapped in a chat-like conversational UI. Not LLM-powered — deterministic questions based on product type selection.

### Question Flow

1. "Are you looking for personal or business products?" → 2 choices
2. "What type of product?" → category selection (loans / cards / insurance / accounts / etc.)
3. Product-specific questions (5-7 total):
   - Monthly salary / annual revenue (for business)
   - UAE national / GCC / resident / non-resident
   - Employment type (salaried / self-employed / business owner)
   - How long at current employer/business?
   - Existing relationship with any UAE bank?
   - Specific to product (e.g., property value for mortgage, car value for auto loan)
4. "Checking your eligibility..." → results

### Results Page

Aggregated product list ranked by match quality. Each product card shows:

- Provider logo + name
- Product name + key metrics (rate, fees, etc.)
- **Status badge + action button:**
  - **"Pre-Approved"** — green badge (`#059669` on `#ecfdf5`) — user meets all criteria → green "Apply Now" button
  - **"Likely Eligible"** — navy badge — user meets most criteria → navy "Apply" button
  - **"Not Eligible"** — gray badge + reason ("Minimum salary AED 15,000 required") → disabled button
  - **"Apply"** — neutral navy button — for products without eligibility gates (SIM cards, internet, etc.)

### Eligibility Criteria (Database Schema)

Each product stores eligibility rules:
- `min_salary` / `min_revenue` (AED)
- `nationality_requirement` (any / uae_gcc / uae_only)
- `employment_types` (salaried / self_employed / business_owner)
- `min_employment_months`
- `min_age` / `max_age`
- `existing_bank_relationship_required` (boolean)
- Product-specific fields as needed

The matching engine compares user answers against these rules and returns a match status + unmet criteria list.

## Category / Comparison Page (`/compare/{category}`)

### Header

- Breadcrumb: Home / Personal / Credit Cards
- h1: category name, Inter 700, 32px
- Product count + "Updated [date]"
- Filter bar: Provider dropdown, Islamic/Conventional toggle, Sort (rate, popularity)

### Product Cards

Full-width list layout by default.

- White card, 1px slate-200 border, 16px radius, no shadow
- **Left:** Provider logo (small) + provider name in slate-500
- **Center:** Product name (Inter 600, 18px) + hero metric bold (e.g., "From 3.99% APR")
- **Right:** 3-4 secondary specs in compact row + navy "Compare" button + green "Apply" button
- Islamic badge: subtle navy outline badge with crescent icon

## Product Taxonomy

### Consumer Categories

| Slug | Display Name |
|---|---|
| `personal_loan` | Personal Loans |
| `credit_card` | Credit Cards |
| `mortgage` | Mortgages |
| `auto_loan` | Auto Loans |
| `savings_account` | Savings Accounts |
| `car_insurance` | Car Insurance |
| `health_insurance` | Health Insurance |
| `travel_insurance` | Travel Insurance |
| `life_insurance` | Life Insurance |
| `mobile_plan` | Mobile Plans |
| `internet_plan` | Internet Plans |

### Business Categories

| Slug | Display Name |
|---|---|
| `business_loan` | Business Term Loans |
| `sme_loan` | SME Loans |
| `invoice_financing` | Invoice Financing |
| `equipment_financing` | Equipment Financing |
| `business_account` | Business Accounts |
| `corporate_card` | Corporate Cards |
| `trade_finance` | Trade Finance |
| `working_capital` | Working Capital |
| `pos_solutions` | POS Solutions |
| `payment_gateway` | Payment Gateway |

## Real Data — UAE Provider Scraping

### Target Providers

**Banks (15+):**
Emirates NBD, First Abu Dhabi Bank (FAB), ADCB, Mashreq, Dubai Islamic Bank (DIB), RAKBank, Commercial Bank of Dubai (CBD), Abu Dhabi Islamic Bank (ADIB), Ajman Bank, United Arab Bank (UAB), National Bank of Fujairah (NBF), Al Hilal Bank, Sharjah Islamic Bank, Emirates Islamic, Wio Bank

**Insurance:**
Oman Insurance, AXA Gulf, Orient Insurance, Sukoon (formerly National Health Insurance), Daman, Al Wathba National Insurance, Watania

**Telecom:**
du, e& (Etisalat), Virgin Mobile UAE

### Scraping Strategy

1. Build provider-specific scrapers that parse public product pages
2. Extract: product name, rates, fees, limits, eligibility criteria, Islamic compliance
3. Store structured data in the existing products table (extend schema for eligibility fields)
4. Start with top 5 banks (ENBD, FAB, ADCB, Mashreq, DIB) → expand to all
5. Manual verification pass after scraping to ensure data quality

### Data Per Product

- Provider ID (FK)
- Product name (EN + AR where available)
- Category slug
- Rate/APR (min, max, or flat)
- Fees (annual, processing, early settlement)
- Min/max amounts or coverage
- Eligibility criteria (min salary, nationality, employment type, etc.)
- Islamic compliant flag
- Source URL
- Last verified date

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, categories, eligibility CTA, trust bar |
| `/compare/{category}` | Product listing with filters |
| `/eligibility` | AI eligibility checker (chat questionnaire) |
| `/eligibility/results` | Matched products with pre-approved/not-eligible status |

## Not In Scope (For Now)

- LLM-powered conversation (structured questionnaire first, LLM layer later)
- User accounts / saved comparisons
- Lender dashboard
- Apply flow / lead generation tracking
- Arabic content scraping (English first)
