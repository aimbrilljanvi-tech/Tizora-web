import { CaseStudyTemplate, caseStudyMetadata } from "@/components/layout/CaseStudyTemplate";
import { digitalKycCaseStudy } from "@/data/pages/insights/case-studies/digitalKycData";

export const metadata = caseStudyMetadata(digitalKycCaseStudy);

export default function DigitalKycPage() {
  return <CaseStudyTemplate cs={digitalKycCaseStudy} />;
}
