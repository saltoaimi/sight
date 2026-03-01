export interface Article {
  slug: string;
  title: string;
  titleAr: string;
  excerpt: string;
  excerptAr: string;
  category: "basics" | "loans" | "cards" | "insurance" | "savings" | "investing";
  readTime: number;
  content: string;
  contentAr: string;
}

export const ARTICLE_CATEGORIES = {
  basics: { label: "Financial Basics", labelAr: "أساسيات مالية", color: "bg-blue-50 text-blue-700" },
  loans: { label: "Loans & Mortgages", labelAr: "القروض والرهون", color: "bg-amber-50 text-amber-700" },
  cards: { label: "Credit Cards", labelAr: "بطاقات الائتمان", color: "bg-purple-50 text-purple-700" },
  insurance: { label: "Insurance", labelAr: "التأمين", color: "bg-green-50 text-green-700" },
  savings: { label: "Savings & Deposits", labelAr: "المدخرات والودائع", color: "bg-teal-50 text-teal-700" },
  investing: { label: "Investing", labelAr: "الاستثمار", color: "bg-red-50 text-red-700" },
};

export const articles: Article[] = [
  {
    slug: "what-is-apr",
    title: "What Is APR and Why Does It Matter?",
    titleAr: "ما هو معدل النسبة السنوية ولماذا يهم؟",
    excerpt: "Understanding Annual Percentage Rate — the true cost of borrowing, and how to compare loan offers.",
    excerptAr: "فهم معدل النسبة السنوية — التكلفة الحقيقية للاقتراض وكيفية مقارنة عروض القروض.",
    category: "basics",
    readTime: 5,
    content: `## What is APR?

**Annual Percentage Rate (APR)** is the total yearly cost of borrowing money, expressed as a percentage. Unlike a simple interest rate, APR includes:

- The base interest rate
- Processing fees
- Insurance charges (if mandatory)
- Any other required costs

### Why APR Matters

When comparing two loan offers, the interest rate alone can be misleading. A loan with a lower interest rate but higher fees might actually cost you more.

**Example:**
| | Loan A | Loan B |
|---|---|---|
| Interest Rate | 3.99% | 4.25% |
| Processing Fee | 1.5% | 0% |
| **Effective APR** | **5.49%** | **4.25%** |

Loan B has a higher interest rate but is actually cheaper overall.

### How APR Is Calculated in the UAE

UAE banks are required by the Central Bank to disclose the APR on all loan products. The formula accounts for:

1. **Flat Rate vs. Reducing Balance**: Most UAE banks quote flat rates, which appear lower but the effective rate is roughly double. A 3% flat rate ≈ 5.5-6% reducing balance.

2. **Processing Fees**: Typically 1-2% of the loan amount, charged upfront.

3. **Insurance**: Some banks require life or job-loss insurance, adding 0.5-1% to the cost.

### Tips for UAE Borrowers

- **Always compare APR, not just the interest rate.** Banks may advertise low rates but have high fees.
- **Ask for the reducing balance rate.** This shows the true cost.
- **Factor in salary transfer requirements.** Some lower rates require transferring your salary to that bank.
- **Check early settlement fees.** UAE Central Bank caps this at 1% of the remaining balance or 3 months' interest.

### Flat Rate vs. Reducing Balance

In the UAE, most personal loans use a **flat rate**, meaning interest is calculated on the original loan amount for the entire duration. With a **reducing balance** (or declining balance), interest is calculated on the remaining principal, which decreases over time.

**Key rule of thumb:** Multiply the flat rate by ~1.8 to get the approximate reducing balance rate.

| Flat Rate | Approximate Reducing Rate |
|---|---|
| 2.5% | ~4.5% |
| 3.0% | ~5.4% |
| 3.5% | ~6.3% |
| 4.0% | ~7.2% |`,
    contentAr: `## ما هو معدل النسبة السنوية؟

**معدل النسبة السنوية (APR)** هو التكلفة السنوية الإجمالية لاقتراض المال، معبراً عنها كنسبة مئوية. على عكس سعر الفائدة البسيط، يشمل معدل النسبة السنوية رسوم المعالجة ورسوم التأمين وأي تكاليف أخرى مطلوبة.

### لماذا يهم معدل النسبة السنوية؟

عند مقارنة عرضين للقروض، قد يكون سعر الفائدة وحده مضللاً. القرض ذو سعر الفائدة الأقل ولكن برسوم أعلى قد يكلفك أكثر فعلياً.`,
  },
  {
    slug: "early-settlement-uae",
    title: "Early Loan Settlement in the UAE: What You Need to Know",
    titleAr: "السداد المبكر للقروض في الإمارات: ما تحتاج لمعرفته",
    excerpt: "Learn about your right to pay off loans early, the fees involved, and when it makes financial sense.",
    excerptAr: "تعرف على حقك في سداد القروض مبكراً والرسوم المترتبة ومتى يكون ذلك منطقياً مالياً.",
    category: "loans",
    readTime: 4,
    content: `## Your Right to Early Settlement

Under **UAE Central Bank regulations**, borrowers have the right to settle any personal loan or financing early. However, banks can charge an early settlement fee.

### Early Settlement Fees

The UAE Central Bank caps early settlement fees at the **lower of**:
- **1% of the remaining principal**, or
- **3 months' worth of interest/profit**

### When Early Settlement Makes Sense

Early settlement saves you money when:

1. **You're in the early stages of the loan** — Most of your EMI goes toward interest early on.
2. **You received a windfall** — Bonus, inheritance, or savings.
3. **You want to refinance** — Another bank offers a significantly lower rate.
4. **Your loan has a flat rate** — Savings are more predictable.

### When It Doesn't Make Sense

- **You're near the end of the loan** — Most interest has already been paid.
- **The settlement fee wipes out savings** — Calculate the break-even point.
- **You'd deplete your emergency fund** — Keep 3-6 months of expenses.

### How to Calculate

**Step 1:** Get your outstanding balance from the bank.
**Step 2:** Calculate the early settlement fee (1% of balance or 3 months' interest).
**Step 3:** Compare total cost (balance + fee) vs. remaining EMIs × months left.

### Buyout / Balance Transfer

Instead of settling, you can **transfer your loan to another bank** at a lower rate. The new bank pays off your old loan and you continue paying the new bank. Key considerations:

- New bank charges a processing fee (typically 1-2%)
- Old bank charges the early settlement fee
- But if the rate difference is significant (>1%), it's usually worthwhile`,
    contentAr: `## حقك في السداد المبكر

بموجب لوائح المصرف المركزي الإماراتي، يحق للمقترضين تسوية أي قرض شخصي أو تمويل مبكراً. ومع ذلك، يمكن للبنوك فرض رسوم سداد مبكر.

### رسوم السداد المبكر

يحدد المصرف المركزي الإماراتي رسوم السداد المبكر بالحد الأدنى من: 1% من الرصيد المتبقي أو فائدة 3 أشهر.`,
  },
  {
    slug: "credit-card-types-uae",
    title: "Types of Credit Cards in the UAE: Which One Is Right for You?",
    titleAr: "أنواع بطاقات الائتمان في الإمارات: أيها مناسب لك؟",
    excerpt: "Cashback, miles, rewards, Islamic — understand every type of credit card available in the UAE market.",
    excerptAr: "استرداد نقدي، أميال، مكافآت، إسلامية — افهم كل نوع من بطاقات الائتمان المتاحة في سوق الإمارات.",
    category: "cards",
    readTime: 6,
    content: `## Types of Credit Cards in the UAE

### 1. Cashback Cards

**Best for:** Everyday spenders who prefer cash savings.

Cashback cards return a percentage of your spending back to you. UAE cards typically offer:
- **1-3% on all spending** (general cashback)
- **5-10% on specific categories** (dining, groceries, fuel)

**Top picks:** Emirates NBD Cashback+, FAB Cashback Card, Mashreq Cashback Card.

**Watch out for:** Annual fees that eat into your cashback, monthly caps on cashback earned.

### 2. Travel / Miles Cards

**Best for:** Frequent travelers and Emirates Skywards / Etihad Guest members.

Miles cards earn airline miles for every AED spent. The value depends on how you redeem:
- **1 AED = 1-3 miles** (typical earn rate)
- **Economy flight ≈ 25,000-40,000 miles**
- **Business class ≈ 60,000-120,000 miles**

**Top picks:** Emirates NBD Skywards, FAB World Elite, ADCB Traveller Card.

### 3. Rewards / Points Cards

**Best for:** Flexible spenders who want choice in redemption.

Points cards earn reward points redeemable for:
- Gift vouchers
- Electronics
- Cash credit
- Airline miles (at a conversion rate)

### 4. Islamic Credit Cards

**Best for:** Those who require Shariah-compliant banking.

Islamic cards don't charge interest. Instead, they use:
- **Murabaha**: Bank buys goods and sells to you at a markup
- **Tawarruq**: A commodity-based transaction to provide credit

The cost may be similar to conventional cards, but the structure is different.

### 5. Premium / Luxury Cards

**Best for:** High earners seeking airport lounges and concierge.

Cards like Visa Infinite, World Elite Mastercard, and Amex Platinum offer:
- Unlimited airport lounge access
- Personal concierge service
- Comprehensive travel insurance
- Higher earn rates on spending

**Typical requirement:** AED 30,000-50,000+ monthly salary.

### How to Choose

| Priority | Best Card Type |
|---|---|
| Save money on everyday purchases | Cashback |
| Travel frequently | Miles / Travel |
| Want flexibility | Rewards Points |
| Need Shariah compliance | Islamic |
| Want premium perks | Premium / Luxury |

### Key Metrics to Compare

1. **Annual fee** vs. benefits value
2. **Earn rate** (cashback %, miles per AED)
3. **Welcome bonus** (often worth AED 500-2,000)
4. **Interest rate** (if you carry a balance)
5. **Minimum salary requirement**`,
    contentAr: `## أنواع بطاقات الائتمان في الإمارات

### 1. بطاقات الاسترداد النقدي
الأفضل للمنفقين اليوميين الذين يفضلون التوفير النقدي. تعيد بطاقات الاسترداد النقدي نسبة من إنفاقك.

### 2. بطاقات السفر والأميال
الأفضل للمسافرين الدائمين وأعضاء سكاي واردز الإمارات.

### 3. بطاقات المكافآت والنقاط
الأفضل للمنفقين المرنين الذين يريدون خيارات في الاسترداد.

### 4. بطاقات الائتمان الإسلامية
للذين يحتاجون إلى خدمات مصرفية متوافقة مع الشريعة الإسلامية.`,
  },
  {
    slug: "uae-motor-insurance-guide",
    title: "Motor Insurance in the UAE: Comprehensive vs. Third-Party",
    titleAr: "التأمين على السيارات في الإمارات: شامل مقابل ضد الغير",
    excerpt: "Understand the difference between comprehensive and third-party car insurance, and what the law requires.",
    excerptAr: "افهم الفرق بين التأمين الشامل والتأمين ضد الغير وما يتطلبه القانون.",
    category: "insurance",
    readTime: 5,
    content: `## Car Insurance in the UAE

Car insurance is **mandatory** in the UAE. You cannot register or renew your vehicle without valid insurance. But which type do you need?

### Third-Party Only (TPO)

**What it covers:** Damage you cause to OTHER people's vehicles and property.

**What it doesn't cover:** Damage to YOUR vehicle.

**Cost:** AED 500-1,500/year depending on your car.

**Best for:**
- Older cars (5+ years) with low market value
- Budget-conscious drivers
- Cars worth less than the premium difference

### Comprehensive Insurance

**What it covers:** Everything TPO covers, PLUS:
- Damage to your own vehicle (accident, theft, fire, natural disaster)
- Personal accident cover for driver/passengers
- Windscreen damage
- Off-road assistance
- Agency repair (new cars under warranty)

**Cost:** 2-5% of vehicle value per year.

**Best for:**
- New or financed cars (banks usually require comprehensive)
- Expensive vehicles
- Drivers who want full peace of mind

### Key Terms to Know

- **Excess/Deductible**: Amount you pay per claim (AED 250-1,000 typical)
- **Agency Repair**: Repairs done at the authorized dealer
- **Non-Agency Repair**: Repairs at independent garages (cheaper premium)
- **No-Claims Discount (NCD)**: Up to 50% off after claim-free years
- **GCC Cover**: Extension for driving in other Gulf countries

### How Premiums Are Calculated

1. **Car value**: Higher value = higher premium
2. **Driver's age**: Under 25 = higher premium
3. **Driving history**: Claims increase your rate
4. **Car make/model**: Sports cars cost more to insure
5. **Coverage type**: Agency vs. non-agency repair
6. **Deductible amount**: Higher deductible = lower premium

### Tips to Save

- **Compare multiple providers** (use Sight!)
- **Increase your deductible** if you can afford it
- **Bundle with home/health insurance** for discounts
- **Drive claim-free** to build your NCD
- **Consider non-agency repair** for older vehicles
- **Pay annually** instead of monthly to avoid installment charges`,
    contentAr: `## التأمين على السيارات في الإمارات

التأمين على السيارات إلزامي في الإمارات. لا يمكنك تسجيل أو تجديد سيارتك بدون تأمين ساري المفعول.

### التأمين ضد الغير فقط
يغطي الأضرار التي تسببها لسيارات وممتلكات الآخرين. لا يغطي الأضرار التي تلحق بسيارتك.

### التأمين الشامل
يغطي كل ما يغطيه التأمين ضد الغير بالإضافة إلى الأضرار التي تلحق بسيارتك.`,
  },
  {
    slug: "savings-vs-fixed-deposit",
    title: "Savings Account vs. Fixed Deposit: Where to Put Your Money",
    titleAr: "حساب التوفير مقابل الوديعة الثابتة: أين تضع أموالك",
    excerpt: "Compare the pros and cons of savings accounts and fixed deposits to find the best option for your goals.",
    excerptAr: "قارن إيجابيات وسلبيات حسابات التوفير والودائع الثابتة للعثور على أفضل خيار لأهدافك.",
    category: "savings",
    readTime: 4,
    content: `## Savings Account vs. Fixed Deposit

### Savings Accounts

**How they work:** Your money earns interest while remaining fully accessible.

**UAE rates (2025):**
- Conventional banks: 0.1% – 2.0% p.a.
- Digital banks (Wio, Liv): 1.5% – 3.0% p.a.
- Islamic (profit-sharing): 0.2% – 1.5% p.a.

**Pros:**
- Access your money anytime
- No lock-in period
- Good for emergency funds
- Some accounts have zero minimum balance

**Cons:**
- Lower returns than fixed deposits
- Rates can change at any time
- Interest may be subject to minimum balance

### Fixed Deposits (FDs)

**How they work:** You lock your money for a set period (1 month to 5 years) at a guaranteed rate.

**UAE rates (2025):**
- 3 months: 3.0% – 4.0% p.a.
- 6 months: 3.5% – 4.25% p.a.
- 12 months: 3.75% – 4.50% p.a.
- 24 months: 3.50% – 4.25% p.a.

**Pros:**
- Higher returns than savings
- Guaranteed rate for the entire tenure
- Low risk
- No market fluctuation

**Cons:**
- Money is locked — penalty for early withdrawal
- Minimum deposit usually AED 5,000-25,000
- Rates may not beat inflation over long periods

### Decision Framework

| Factor | Savings Account | Fixed Deposit |
|---|---|---|
| Liquidity need | High — need money anytime | Low — can lock for months/years |
| Risk appetite | Very low | Very low |
| Goal | Emergency fund, short-term | Medium-term savings goal |
| Amount | Any amount | AED 5,000+ typically |
| Best rate | ~2% (digital banks) | ~4.5% (12-month) |

### Pro Tip: The Ladder Strategy

Instead of putting all your money in one FD, split it across multiple tenures:
- 25% in 3-month FD
- 25% in 6-month FD
- 25% in 12-month FD
- 25% in savings account

This gives you both higher returns and regular access to your money.`,
    contentAr: `## حساب التوفير مقابل الوديعة الثابتة

### حسابات التوفير
أموالك تكسب فائدة بينما تبقى متاحة بالكامل. معدلات الإمارات: 0.1% - 2.0% سنوياً للبنوك التقليدية.

### الودائع الثابتة
تقفل أموالك لفترة محددة بمعدل مضمون. معدلات الإمارات: 3.75% - 4.50% لمدة 12 شهراً.`,
  },
  {
    slug: "what-is-bnpl",
    title: "Buy Now, Pay Later (BNPL) in the UAE: Tabby, Tamara & More",
    titleAr: "اشتر الآن وادفع لاحقاً في الإمارات: تابي وتمارا والمزيد",
    excerpt: "How BNPL services work, the hidden costs, and whether they're a smart financial choice.",
    excerptAr: "كيف تعمل خدمات اشتر الآن وادفع لاحقاً، والتكاليف الخفية، وهل هي خيار مالي ذكي.",
    category: "basics",
    readTime: 4,
    content: `## What Is Buy Now, Pay Later?

BNPL services like **Tabby** and **Tamara** let you split purchases into installments — usually 4 payments over 6-8 weeks — with no interest or fees (if you pay on time).

### How It Works

1. Shop online or in-store at a participating merchant
2. Choose BNPL at checkout
3. Pay the first installment immediately (25% of total)
4. Pay the remaining 3 installments every 2 weeks
5. No interest if you pay on time

### BNPL Providers in the UAE

| Provider | Split Options | Late Fee | Max Amount |
|---|---|---|---|
| **Tabby** | 4 payments / Pay in 30 days | AED 15 | Varies by merchant |
| **Tamara** | 3-4 payments | AED 15 | AED 5,000+ |
| **Postpay** | 3 payments | AED 10 | Varies |
| **Cashew** | 4 payments | AED 25 | AED 5,000 |

### The Hidden Costs

While advertised as "interest-free," watch for:
- **Late payment fees**: AED 10-25 per missed installment
- **Multiple late fees**: Can add up to AED 60-100 per purchase
- **Spending temptation**: Easy installments encourage overspending
- **No AECB impact**: Doesn't build your credit score

### When BNPL Makes Sense

- **One-off large purchase** you've planned and budgeted for
- **You have the full amount** but prefer cash flow management
- **Emergency purchase** when cash is temporarily tight

### When to Avoid BNPL

- **Multiple active BNPL plans** at once
- **Using BNPL for everyday purchases** (groceries, coffee)
- **No budget** — if you can't afford it in 4 payments, you can't afford it
- **Already carrying credit card debt**

### BNPL vs. Credit Card

| | BNPL | Credit Card |
|---|---|---|
| Interest | None (if on time) | 2.5-3.5% monthly |
| Credit limit | Per purchase | Revolving |
| Builds credit? | No | Yes |
| Late fee | AED 15-25 | Higher + interest |
| Best for | Short-term splits | Ongoing spending |`,
    contentAr: `## ما هو اشتر الآن وادفع لاحقاً؟

خدمات مثل تابي وتمارا تتيح لك تقسيم مشترياتك إلى أقساط — عادة 4 دفعات على مدى 6-8 أسابيع — بدون فائدة أو رسوم إذا دفعت في الوقت المحدد.`,
  },
  {
    slug: "islamic-banking-explained",
    title: "Islamic Banking in the UAE: How It Works",
    titleAr: "الخدمات المصرفية الإسلامية في الإمارات: كيف تعمل",
    excerpt: "Murabaha, Ijara, Takaful — understand the principles and products of Islamic finance.",
    excerptAr: "المرابحة، الإجارة، التكافل — افهم مبادئ ومنتجات التمويل الإسلامي.",
    category: "basics",
    readTime: 6,
    content: `## Islamic Banking in the UAE

The UAE has one of the world's largest Islamic banking sectors, with several fully Islamic banks (DIB, ADIB, Emirates Islamic) and Islamic windows at conventional banks.

### Core Principles

1. **No Riba (Interest)**: Charging or paying interest is prohibited
2. **No Gharar (Uncertainty)**: Contracts must be clear and transparent
3. **No Maysir (Gambling)**: Speculative transactions are not allowed
4. **Asset-Backed**: Every transaction must involve a real asset or service
5. **Profit & Loss Sharing**: Risk should be shared between parties

### Common Islamic Banking Products

#### Murabaha (Cost-Plus Financing)
**Used for:** Personal finance, auto finance, home finance

The bank buys an asset and sells it to you at a disclosed markup. You pay in installments.

**Example:** You want to buy a car for AED 100,000. The bank buys it, adds a profit margin (e.g., AED 15,000), and sells it to you for AED 115,000, payable in installments.

#### Ijara (Leasing)
**Used for:** Home finance, equipment

The bank buys the asset and leases it to you. At the end of the lease, ownership transfers to you.

#### Wakala (Agency Investment)
**Used for:** Savings, fixed deposits

You give the bank money to invest on your behalf. The bank acts as your agent and charges a fee. Profits (if any) are shared according to agreed ratios.

#### Takaful (Islamic Insurance)
**How it differs:** Participants contribute to a shared pool. Claims are paid from this pool. Any surplus is distributed back to participants.

### Comparing Islamic vs. Conventional

| Feature | Islamic | Conventional |
|---|---|---|
| Interest | Profit rate (no interest) | Interest rate |
| Structure | Asset-based transactions | Money lending |
| Risk sharing | Yes | No |
| Late payment | Charity donation (no penalty to bank) | Penalty interest |
| Supervision | Shariah board required | Standard board |
| Cost | Often similar | Often similar |

### Is Islamic Banking More Expensive?

Not necessarily. While the structure is different, the cost is often competitive. Compare the **effective cost** (total amount repaid ÷ amount borrowed) rather than the rate label.

### Islamic Banks in the UAE

- **Dubai Islamic Bank (DIB)** — Largest Islamic bank in UAE
- **Abu Dhabi Islamic Bank (ADIB)** — Second largest
- **Emirates Islamic** — Part of Emirates NBD group
- **Sharjah Islamic Bank (SIB)** — Regional Islamic bank
- **Ajman Bank** — Islamic bank based in Ajman`,
    contentAr: `## الخدمات المصرفية الإسلامية في الإمارات

تمتلك الإمارات أحد أكبر قطاعات الخدمات المصرفية الإسلامية في العالم، مع عدة بنوك إسلامية بالكامل ونوافذ إسلامية في البنوك التقليدية.

### المبادئ الأساسية
لا ربا، لا غرر، لا ميسر، ومعاملات مدعومة بأصول حقيقية.`,
  },
  {
    slug: "mortgage-guide-uae",
    title: "Buying Property in the UAE: Mortgage Guide for Residents & Expats",
    titleAr: "شراء العقارات في الإمارات: دليل الرهن العقاري للمقيمين والوافدين",
    excerpt: "Everything you need to know about getting a mortgage in the UAE — eligibility, LTV ratios, and costs.",
    excerptAr: "كل ما تحتاج لمعرفته عن الحصول على رهن عقاري في الإمارات — الأهلية ونسب القرض إلى القيمة والتكاليف.",
    category: "loans",
    readTime: 7,
    content: `## Getting a Mortgage in the UAE

### Who Can Buy Property?

- **UAE Nationals**: Can buy anywhere
- **GCC Nationals**: Can buy in most areas
- **Expats**: Can buy in designated freehold areas (common in Dubai, Abu Dhabi)

### Maximum Loan-to-Value (LTV)

The UAE Central Bank sets maximum LTV ratios:

| Buyer Type | First Property | Second Property |
|---|---|---|
| UAE National | 80% (up to AED 5M) | 65% |
| Expat | 75% (up to AED 5M) | 60% |
| Off-plan | 50% | 50% |

This means you need a **minimum 20-25% down payment** plus closing costs.

### Costs Beyond the Mortgage

1. **DLD Registration Fee**: 4% of property value (Dubai)
2. **Agent Commission**: 2% of property value
3. **Bank Processing Fee**: 0.25-1% of loan amount
4. **Valuation Fee**: AED 2,500-3,500
5. **Mortgage Registration**: 0.25% of loan amount
6. **Life Insurance**: Required by most banks

**Total additional costs: ~7-8% of property value**

### Fixed vs. Variable Rate

- **Fixed Rate**: Locked for 1-5 years, then reverts to variable
- **Variable Rate**: Linked to EIBOR (Emirates Interbank Offered Rate)
- **Islamic**: Uses profit rate structures (often competitive)

**Current rates (2025):**
- Fixed (3 years): 4.25-5.50% p.a.
- Variable: EIBOR + 1.5-2.5% (total ~5.5-7%)
- Islamic: 4.50-6.00% profit rate

### Eligibility

Most banks require:
- **Minimum salary**: AED 10,000-15,000/month
- **Employment**: 6+ months with current employer
- **Age**: 21-65 (loan must be repaid by age 65/70)
- **DBR**: Maximum 50% Debt Burden Ratio (all EMIs / salary ≤ 50%)

### Tips

- **Get pre-approved** before house hunting — gives you bargaining power
- **Compare 5+ banks** — rates and fees vary significantly
- **Factor in service charges** — annual building maintenance fees
- **Consider off-plan carefully** — higher down payment, construction risk
- **Review the SPA** (Sales & Purchase Agreement) with a lawyer`,
    contentAr: `## الحصول على رهن عقاري في الإمارات

### من يمكنه شراء العقارات؟
المواطنون الإماراتيون يمكنهم الشراء في أي مكان. مواطنو دول مجلس التعاون يمكنهم الشراء في معظم المناطق. الوافدون يمكنهم الشراء في مناطق التملك الحر المخصصة.`,
  },
  {
    slug: "debt-burden-ratio",
    title: "Debt Burden Ratio (DBR): Why Banks Reject Your Application",
    titleAr: "نسبة عبء الدين: لماذا ترفض البنوك طلبك",
    excerpt: "Understanding DBR — the single most important number that determines your loan eligibility in the UAE.",
    excerptAr: "فهم نسبة عبء الدين — الرقم الأهم الذي يحدد أهليتك للقروض في الإمارات.",
    category: "basics",
    readTime: 4,
    content: `## What Is Debt Burden Ratio?

**Debt Burden Ratio (DBR)** is the percentage of your monthly income that goes toward debt repayments. In the UAE, the Central Bank caps this at **50%**.

### How It's Calculated

**DBR = (Total Monthly Debt Payments ÷ Monthly Income) × 100**

**Example:**
- Monthly salary: AED 15,000
- Car loan EMI: AED 2,000
- Credit card minimum: AED 500
- Personal loan EMI: AED 1,500
- **Total debt payments: AED 4,000**
- **DBR: 4,000 ÷ 15,000 = 26.7%**

### What Counts as "Debt"

| Included | Not Included |
|---|---|
| Loan EMIs | Rent |
| Credit card minimum payment (5% of limit) | Utilities |
| Financing installments | Groceries |
| Mortgage EMI | Insurance premiums |
| BNPL (sometimes) | School fees |

**Important:** Banks count **5% of your total credit card limit** as a monthly obligation — even if you pay in full every month.

### Why Your Application Gets Rejected

If you earn AED 20,000 and have:
- Credit card limit: AED 50,000 → counted as AED 2,500/month
- Car loan: AED 3,000/month
- **Existing DBR: 27.5%**
- **Remaining capacity: AED 4,500** (up to 50% = AED 10,000)

This means the maximum new EMI you can take is ~AED 4,500.

### How to Improve Your DBR

1. **Close unused credit cards** — Reduces the 5% limit counting
2. **Reduce credit card limits** — Ask your bank to lower limits
3. **Pay off smaller loans** — Clears DBR capacity
4. **Get a salary increase** — Directly improves the ratio
5. **Consolidate debt** — One loan may have a lower total EMI

### DBR by Salary

| Monthly Salary | Max Monthly Debt (50%) | Approximate Max Loan |
|---|---|---|
| AED 10,000 | AED 5,000 | ~AED 200,000 |
| AED 20,000 | AED 10,000 | ~AED 400,000 |
| AED 30,000 | AED 15,000 | ~AED 600,000 |
| AED 50,000 | AED 25,000 | ~AED 1,000,000 |`,
    contentAr: `## ما هي نسبة عبء الدين؟

نسبة عبء الدين هي النسبة المئوية من دخلك الشهري التي تذهب لسداد الديون. في الإمارات، يحدد المصرف المركزي هذه النسبة بحد أقصى 50%.`,
  },
  {
    slug: "health-insurance-uae-guide",
    title: "Health Insurance in the UAE: Mandatory Coverage Explained",
    titleAr: "التأمين الصحي في الإمارات: شرح التغطية الإلزامية",
    excerpt: "What the law requires, how to choose between plans, and what copay and network really mean.",
    excerptAr: "ما يتطلبه القانون وكيفية الاختيار بين الخطط وماذا يعني الدفع المشترك والشبكة فعلياً.",
    category: "insurance",
    readTime: 5,
    content: `## Health Insurance in the UAE

Health insurance is **mandatory** in the UAE. In Abu Dhabi, it's been required since 2006. In Dubai, since 2014. Other emirates have followed suit.

### Who Pays?

- **Employers** must provide health insurance for employees
- **Sponsors** must cover dependents (spouse, children)
- **UAE Nationals** receive government-funded coverage

### Key Terms

- **Copay**: The percentage you pay per visit (e.g., 20% copay = you pay AED 20 on a AED 100 consultation)
- **Network**: The list of hospitals/clinics your plan covers
- **Pre-authorization**: Approval needed before certain treatments
- **Waiting period**: Time before certain benefits activate (maternity: typically 12 months)
- **Annual limit**: Maximum coverage per year

### Plan Tiers

| Tier | Monthly Cost | Network | Annual Limit | Copay |
|---|---|---|---|---|
| Basic | AED 200-500 | Basic clinics | AED 150,000 | 20% |
| Enhanced | AED 500-1,000 | Most hospitals | AED 500,000 | 10-20% |
| Premium | AED 1,000-3,000 | All hospitals | AED 1M+ | 0-10% |

### What's Usually Covered

- Doctor visits and consultations
- Hospital stays and surgeries
- Emergency treatment
- Prescription medication
- Lab tests and diagnostics
- Maternity (after waiting period)

### What's Usually NOT Covered

- Cosmetic surgery
- Dental (unless added)
- Vision/optical (unless added)
- Pre-existing conditions (may have waiting period)
- Experimental treatments

### Tips for Choosing

1. **Check the network** — Make sure your preferred hospital/doctor is included
2. **Compare copay** — Lower copay = higher premium, but less out-of-pocket per visit
3. **Consider your family** — Family plans are often cheaper than individual plans per person
4. **Maternity needs** — If planning a family, check the waiting period and coverage limit
5. **Chronic conditions** — Ensure ongoing medication and treatment is covered`,
    contentAr: `## التأمين الصحي في الإمارات

التأمين الصحي إلزامي في الإمارات. يجب على أصحاب العمل توفير التأمين الصحي للموظفين ويجب على الكفلاء تغطية المعالين.`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((a) => a.category === category);
}
