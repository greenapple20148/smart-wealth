import React from 'react';
import BestInvestmentApps from './articles/BestInvestmentApps';
import BestCreditCards from './articles/BestCreditCards';
import WhatIsETF from './articles/WhatIsETF';
import GoodCreditScore from './articles/GoodCreditScore';
import BestRothIRA from './articles/BestRothIRA';
import StartInvesting100 from './articles/StartInvesting100';
import RothIRAExplained from './articles/RothIRAExplained';
import RothIRAVsTraditional from './articles/RothIRAVsTraditional';
import BuildCreditScratch from './articles/BuildCreditScratch';
import Retirement401kVsIRA from './articles/401kVsIRA';
import CompoundInterest from './articles/CompoundInterest';
import BudgetOn40k from './articles/BudgetOn40k';
import SaveFirst10k from './articles/SaveFirst10k';
import MissedPayment from './articles/MissedPayment';
import ImproveCredit50 from './articles/ImproveCredit50';
import EmergencyFund from './articles/EmergencyFund';
import IsStockInvestingRisky from './articles/IsStockInvestingRisky';
import HowTaxesWork from './articles/HowTaxesWork';
import BestCards600 from './articles/BestCards600';
import StudentCreditCards from './articles/StudentCreditCards';
import BestCashBackCards from './articles/BestCashBackCards';
import ZeroAPRCards from './articles/ZeroAPRCards';
import BuildCreditFast from './articles/BuildCreditFast';
import SecuredVsUnsecured from './articles/SecuredVsUnsecured';
import GetApproved from './articles/GetApproved';
import CreditUtilization from './articles/CreditUtilization';
import HowManyCards from './articles/HowManyCards';
import NoAnnualFeeCards from './articles/NoAnnualFeeCards';
import MultipleCardApps from './articles/MultipleCardApps';
import HardInquiries from './articles/HardInquiries';
import SecuredCardGuide from './articles/SecuredCardGuide';
import AmexGoldAnalysis from './articles/AmexGoldAnalysis';
import CandleSpeedReading from './articles/CandleSpeedReading';
import VanguardTargetDate from './articles/VanguardTargetDate';
import CreditScoreDebug from './articles/CreditScoreDebug';
import FourPercentRule from './articles/FourPercentRule';
import HighYieldTactics from './articles/HighYieldTactics';
import CreditCardChurning from './articles/CreditCardChurning';
import SideHustleTaxGuide from './articles/SideHustleTaxGuide';
import CryptoPulse from './articles/CryptoPulse';
import RealEstateCrowdfunding from './articles/RealEstateCrowdfunding';
import StudentLoanStrategy from './articles/StudentLoanStrategy';
import IndexFundRevolution from './articles/IndexFundRevolution';
import HYSAplusCD from './articles/HYSAplusCD';
import TaxLossHarvesting from './articles/TaxLossHarvesting';
import AboutPage from './articles/AboutPage';
import ContactPage from './articles/ContactPage';
import PrivacyPolicyPage from './articles/PrivacyPolicyPage';
import TermsOfServicePage from './articles/TermsOfServicePage';
import AffiliateDisclosurePage from './articles/AffiliateDisclosurePage';
import DefaultArticle from './articles/DefaultArticle';
import BestTravelCards from './articles/BestTravelCards';
import CompareCreditCards from './articles/CompareCreditCards';
import WeeklyMarketRecap from './articles/WeeklyMarketRecap';

// Mortgages
import MortgageBasics from './articles/MortgageBasics';
import FixedVsAdjustable from './articles/FixedVsAdjustable';
import HowMuchHomeAfford from './articles/HowMuchHomeAfford';
import CreditScoreMortgage from './articles/CreditScoreMortgage';
import MortgageMistakes from './articles/MortgageMistakes';
import SaveDownPayment from './articles/SaveDownPayment';
import RefinanceMortgage from './articles/RefinanceMortgage';
import PreApprovalGuide from './articles/PreApprovalGuide';

// Calculators
import FourOneKCalculator from './tools/FourOneKCalculator';
import MortgageCalculator from './tools/MortgageCalculator';
import AutoLoanCalculator from './tools/AutoLoanCalculator';
import CompoundInterestCalculator from './tools/CompoundInterestCalculator';

interface ArticleDispatcherProps {
  article: { title: string; category: string; icon?: string } | null;
  onClose: () => void;
}

const ArticleDispatcher: React.FC<ArticleDispatcherProps> = ({ article, onClose }) => {
  if (!article) return null;

  const titleLower = article.title.toLowerCase();

  // Tools & Calculators
  if (titleLower.includes('401k calculator')) return <FourOneKCalculator onClose={onClose} />;
  if (titleLower.includes('mortgage calculator')) return <MortgageCalculator onClose={onClose} />;
  if (titleLower.includes('auto loan calculator')) return <AutoLoanCalculator onClose={onClose} />;
  if (titleLower.includes('compound interest calculator')) return <CompoundInterestCalculator onClose={onClose} />;

  // Meta Pages
  if (titleLower === 'about smart wealth') return <AboutPage onClose={onClose} />;
  if (titleLower === 'contact us') return <ContactPage onClose={onClose} />;
  if (titleLower === 'privacy policy') return <PrivacyPolicyPage onClose={onClose} />;
  if (titleLower === 'terms of service') return <TermsOfServicePage onClose={onClose} />;
  if (titleLower === 'affiliate disclosure') return <AffiliateDisclosurePage onClose={onClose} />;

  // Market News
  if (titleLower.includes('weekly market recap')) return <WeeklyMarketRecap onClose={onClose} />;

  // Investing
  if (titleLower.includes('best investment apps') || titleLower.includes('investment apps for the next-gen')) {
    return <BestInvestmentApps onClose={onClose} />;
  }
  if (titleLower.includes('start investing with $100')) {
    return <StartInvesting100 onClose={onClose} />;
  }
  if (titleLower.includes('compound interest builds wealth')) {
    return <CompoundInterest onClose={onClose} />;
  }
  if (titleLower.includes('what is an etf')) {
    return <WhatIsETF onClose={onClose} />;
  }
  if (titleLower.includes('investing in stocks risky')) {
    return <IsStockInvestingRisky onClose={onClose} />;
  }
  if (titleLower.includes('how taxes work on investments')) {
    return <HowTaxesWork onClose={onClose} />;
  }
  if (titleLower.includes('candle speed-reading')) {
    return <CandleSpeedReading onClose={onClose} />;
  }
  if (titleLower.includes('index fund revolution')) {
    return <IndexFundRevolution onClose={onClose} />;
  }

  // Credit
  if (titleLower.includes('compare credit cards')) {
    return <CompareCreditCards onClose={onClose} />;
  }
  if (titleLower.includes('best travel credit cards for beginners')) {
    return <BestTravelCards onClose={onClose} />;
  }
  if (titleLower.includes('best credit cards for beginners') || titleLower.includes('credit hack: first-time cards')) {
    return <BestCreditCards onClose={onClose} />;
  }
  if (titleLower.includes('what is a good credit score')) {
    return <GoodCreditScore onClose={onClose} />;
  }
  if (titleLower.includes('build credit from scratch')) {
    return <BuildCreditScratch onClose={onClose} />;
  }
  if (titleLower.includes('miss a credit card payment')) {
    return <MissedPayment onClose={onClose} />;
  }
  if (titleLower.includes('improve your credit score by 50 points')) {
    return <ImproveCredit50 onClose={onClose} />;
  }
  if (titleLower.includes('best credit cards for a 600 credit score')) {
    return <BestCards600 onClose={onClose} />;
  }
  if (titleLower.includes('best credit cards for students with no credit')) {
    return <StudentCreditCards onClose={onClose} />;
  }
  if (titleLower.includes('best cash back credit cards for beginners')) {
    return <BestCashBackCards onClose={onClose} />;
  }
  if (titleLower.includes('best 0% apr credit cards for large purchases')) {
    return <ZeroAPRCards onClose={onClose} />;
  }
  if (titleLower.includes('best credit cards for building credit fast')) {
    return <BuildCreditFast onClose={onClose} />;
  }
  if (titleLower.includes('secured vs unsecured credit cards explained')) {
    return <SecuredVsUnsecured onClose={onClose} />;
  }
  if (titleLower.includes('how to get approved for your first credit card')) {
    return <GetApproved onClose={onClose} />;
  }
  if (titleLower.includes('credit utilization: what percentage is best')) {
    return <CreditUtilization onClose={onClose} />;
  }
  if (titleLower.includes('how many credit cards should you have')) {
    return <HowManyCards onClose={onClose} />;
  }
  if (titleLower.includes('best no-annual-fee credit cards')) {
    return <NoAnnualFeeCards onClose={onClose} />;
  }
  if (titleLower.includes('can you apply for multiple credit cards at once')) {
    return <MultipleCardApps onClose={onClose} />;
  }
  if (titleLower.includes('how hard inquiries affect your credit score')) {
    return <HardInquiries onClose={onClose} />;
  }
  if (titleLower.includes('what is a secured credit card and who needs one')) {
    return <SecuredCardGuide onClose={onClose} />;
  }
  if (titleLower.includes('amex gold')) {
    return <AmexGoldAnalysis onClose={onClose} />;
  }
  if (titleLower.includes('credit score debug')) {
    return <CreditScoreDebug onClose={onClose} />;
  }
  if (titleLower.includes('credit card churning')) {
    return <CreditCardChurning onClose={onClose} />;
  }

  // Mortgages
  if (titleLower.includes('what is a mortgage and how does it work')) {
    return <MortgageBasics onClose={onClose} />;
  }
  if (titleLower.includes('fixed vs adjustable rate mortgages')) {
    return <FixedVsAdjustable onClose={onClose} />;
  }
  if (titleLower.includes('home can you afford on $50k salary')) {
    return <HowMuchHomeAfford onClose={onClose} />;
  }
  if (titleLower.includes('how credit score affects mortgage approval')) {
    return <CreditScoreMortgage onClose={onClose} />;
  }
  if (titleLower.includes('5 common mortgage mistakes')) {
    return <MortgageMistakes onClose={onClose} />;
  }
  if (titleLower.includes('save for a down payment quickly')) {
    return <SaveDownPayment onClose={onClose} />;
  }
  if (titleLower.includes('how to refinance your mortgage')) {
    return <RefinanceMortgage onClose={onClose} />;
  }
  if (titleLower.includes('get pre-approved for a mortgage')) {
    return <PreApprovalGuide onClose={onClose} />;
  }

  // Retirement
  if (titleLower === 'best roth ira accounts' || titleLower.includes('roth ira: tax-free alpha')) {
    return <BestRothIRA onClose={onClose} />;
  }
  if (titleLower.includes('roth ira vs traditional ira')) {
    return <RothIRAVsTraditional onClose={onClose} />;
  }
  if (titleLower.includes('what is a roth ira and how does it work')) {
    return <RothIRAExplained onClose={onClose} />;
  }
  if (titleLower.includes('401(k) vs ira')) {
    return <Retirement401kVsIRA onClose={onClose} />;
  }
  if (titleLower.includes('vanguard strategies')) {
    return <VanguardTargetDate onClose={onClose} />;
  }
  if (titleLower.includes('the 4% rule')) {
    return <FourPercentRule onClose={onClose} />;
  }

  // Budgeting
  if (titleLower.includes('budget on a $40,000 salary')) {
    return <BudgetOn40k onClose={onClose} />;
  }
  if (titleLower.includes('save your first $10,000')) {
    return <SaveFirst10k onClose={onClose} />;
  }
  if (titleLower.includes('emergency fund: how much')) {
    return <EmergencyFund onClose={onClose} />;
  }

  // Savings / Tax / Crypto / Real Estate / Other Articles
  if (titleLower.includes('high-yield tactics')) {
    return <HighYieldTactics onClose={onClose} />;
  }
  if (titleLower.includes('side hustle tax guide')) {
    return <SideHustleTaxGuide onClose={onClose} />;
  }
  if (titleLower.includes('crypto pulse')) {
    return <CryptoPulse onClose={onClose} />;
  }
  if (titleLower.includes('real estate micro-investing')) {
    return <RealEstateCrowdfunding onClose={onClose} />;
  }
  if (titleLower.includes('student loan strategy')) {
    return <StudentLoanStrategy onClose={onClose} />;
  }
  if (titleLower.includes('hysa vs. cd')) {
    return <HYSAplusCD onClose={onClose} />;
  }
  if (titleLower.includes('tax-loss harvesting')) {
    return <TaxLossHarvesting onClose={onClose} />;
  }

  /* Default fallback for any other selections */
  return <DefaultArticle article={article} onClose={onClose} />;
};

export default ArticleDispatcher;