import { CaseStudyTemplate, caseStudyMetadata } from "@/components/layout/CaseStudyTemplate";
import { mobileBankingCaseStudy } from "@/data/pages/insights/case-studies/mobileBankingData";

export const metadata = caseStudyMetadata(mobileBankingCaseStudy);

export default function MobileBankingPage() {
  return <CaseStudyTemplate cs={mobileBankingCaseStudy} />;
}
