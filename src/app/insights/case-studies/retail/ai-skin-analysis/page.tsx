import { CaseStudyTemplate, caseStudyMetadata } from "@/components/layout/CaseStudyTemplate";
import { skinAnalysisCaseStudy } from "@/data/pages/insights/case-studies/aiSkinAnalysisData";

export const metadata = caseStudyMetadata(skinAnalysisCaseStudy);

export default function AISkinAnalysisPage() {
  return <CaseStudyTemplate cs={skinAnalysisCaseStudy} />;
}
