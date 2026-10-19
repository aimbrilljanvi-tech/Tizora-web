import { CaseStudyTemplate, caseStudyMetadata } from "@/components/layout/CaseStudyTemplate";
import { weightManagementCaseStudy } from "@/data/pages/insights/case-studies/aiWeightManagementData";

export const metadata = caseStudyMetadata(weightManagementCaseStudy);

export default function WeightManagementPage() {
  return <CaseStudyTemplate cs={weightManagementCaseStudy} />;
}
