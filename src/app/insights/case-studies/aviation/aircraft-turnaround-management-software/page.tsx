import { CaseStudyTemplate, caseStudyMetadata } from "@/components/layout/CaseStudyTemplate";
import { turnaroundManagementCaseStudy } from "@/data/pages/insights/case-studies/turnaroundManagementData";

export const metadata = caseStudyMetadata(turnaroundManagementCaseStudy);

export default function TurnaroundManagementPage() {
  return <CaseStudyTemplate cs={turnaroundManagementCaseStudy} />;
}
