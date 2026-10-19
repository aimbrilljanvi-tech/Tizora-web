import { CaseStudyTemplate, caseStudyMetadata } from "@/components/layout/CaseStudyTemplate";
import { coreBankingCaseStudy } from "@/data/pages/insights/case-studies/coreBankingData";

export const metadata = caseStudyMetadata(coreBankingCaseStudy);

export default function CoreBankingPage() {
  return <CaseStudyTemplate cs={coreBankingCaseStudy} />;
}
