import { personalLoans } from "./ae/personal-loans";
import { creditCards } from "./ae/credit-cards";
import { mortgages } from "./ae/mortgages";
import { autoLoans } from "./ae/auto-loans";
import { savingsAccounts } from "./ae/savings-accounts";
import { carInsurance } from "./ae/car-insurance";
import { healthInsurance } from "./ae/health-insurance";
import { mobilePlans } from "./ae/mobile-plans";
import { fixedDeposits } from "./ae/fixed-deposits";
import { lifeInsurance } from "./ae/life-insurance";
import { travelInsurance } from "./ae/travel-insurance";
import { homeInsurance } from "./ae/home-insurance";
import { bnpl } from "./ae/bnpl";
import { investmentAccounts } from "./ae/investment-accounts";
import { businessLoans } from "./ae/business-loans";
import { smeLoans } from "./ae/sme-loans";
import { invoiceFinancing } from "./ae/invoice-financing";
import { equipmentFinancing } from "./ae/equipment-financing";
import { businessAccounts } from "./ae/business-accounts";
import { corporateCards } from "./ae/corporate-cards";
import { tradeFinance } from "./ae/trade-finance";
import { workingCapital } from "./ae/working-capital";
import { posSolutions } from "./ae/pos-solutions";
import { paymentGateways } from "./ae/payment-gateways";
import { currentAccounts } from "./ae/current-accounts";
import { petInsurance } from "./ae/pet-insurance";
import { businessInsurance } from "./ae/business-insurance";
import { homeInternet } from "./ae/home-internet";
import { tvStreaming } from "./ae/tv-streaming";
import { goldSavings } from "./ae/gold-savings";
import { remittance } from "./ae/remittance";
import { currencyExchange } from "./ae/currency-exchange";
import { creditScore } from "./ae/credit-score";
import { debtManagement } from "./ae/debt-management";
import { roboAdvisors } from "./ae/robo-advisors";
import { stockTrading } from "./ae/stock-trading";
import { cryptoExchanges } from "./ae/crypto-exchanges";
import { goldTrading } from "./ae/gold-trading";
import { realEstateCrowdfunding } from "./ae/real-estate-crowdfunding";
import { forexCards } from "./ae/forex-cards";
import { prepaidCards } from "./ae/prepaid-cards";
import { balanceTransfers } from "./ae/balance-transfers";
import { businessCreditCards } from "./ae/business-credit-cards";
import { educationLoans } from "./ae/education-loans";
import { kidsAccounts } from "./ae/kids-accounts";
import { salaryAdvance } from "./ae/salary-advance";
import { digitalWallets } from "./ae/digital-wallets";
import { loyaltyPrograms } from "./ae/loyalty-programs";
import { domesticHelperInsurance } from "./ae/domestic-helper-insurance";
import { merchantAccounts } from "./ae/merchant-accounts";

export const categoryMap: Record<string, any[]> = {
  personal_loan: personalLoans,
  credit_card: creditCards,
  mortgage: mortgages,
  auto_loan: autoLoans,
  savings_account: savingsAccounts,
  car_insurance: carInsurance,
  health_insurance: healthInsurance,
  mobile_plan: mobilePlans,
  fixed_deposit: fixedDeposits,
  life_insurance: lifeInsurance,
  travel_insurance: travelInsurance,
  home_insurance: homeInsurance,
  bnpl: bnpl,
  investment_account: investmentAccounts,
  business_loan: businessLoans,
  sme_loan: smeLoans,
  invoice_financing: invoiceFinancing,
  equipment_financing: equipmentFinancing,
  business_account: businessAccounts,
  corporate_card: corporateCards,
  trade_finance: tradeFinance,
  working_capital: workingCapital,
  pos_solutions: posSolutions,
  payment_gateway: paymentGateways,
  current_account: currentAccounts,
  pet_insurance: petInsurance,
  business_insurance: businessInsurance,
  home_internet: homeInternet,
  tv_streaming: tvStreaming,
  gold_savings: goldSavings,
  remittance: remittance,
  currency_exchange: currencyExchange,
  credit_score: creditScore,
  debt_management: debtManagement,
  robo_advisor: roboAdvisors,
  stock_trading: stockTrading,
  crypto_exchange: cryptoExchanges,
  gold_trading: goldTrading,
  real_estate_crowdfunding: realEstateCrowdfunding,
  forex_card: forexCards,
  prepaid_card: prepaidCards,
  balance_transfer: balanceTransfers,
  business_credit_card: businessCreditCards,
  education_loan: educationLoans,
  kids_account: kidsAccounts,
  salary_advance: salaryAdvance,
  digital_wallet: digitalWallets,
  loyalty_program: loyaltyPrograms,
  domestic_helper_insurance: domesticHelperInsurance,
  merchant_account: merchantAccounts,
};
