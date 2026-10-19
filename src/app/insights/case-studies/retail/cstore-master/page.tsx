import { CaseStudyTemplate, caseStudyMetadata } from "@/components/layout/CaseStudyTemplate";
import { cstoreMasterCaseStudy } from "@/data/pages/insights/case-studies/cstoreMasterData";

export const metadata = caseStudyMetadata(cstoreMasterCaseStudy);

export default function CStoreMasterPage() {
  return <CaseStudyTemplate cs={cstoreMasterCaseStudy} />;
}
