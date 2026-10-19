import { CaseStudyTemplate, caseStudyMetadata } from "@/components/layout/CaseStudyTemplate";
import { lprParkingCaseStudy } from "@/data/pages/insights/case-studies/aiLPRParkingData";

export const metadata = caseStudyMetadata(lprParkingCaseStudy);

export default function LprParkingPage() {
  return <CaseStudyTemplate cs={lprParkingCaseStudy} />;
}
