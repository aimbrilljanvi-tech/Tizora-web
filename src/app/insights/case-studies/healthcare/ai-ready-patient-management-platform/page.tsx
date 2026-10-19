import { CaseStudyTemplate, caseStudyMetadata } from "@/components/layout/CaseStudyTemplate";
import { patientManagementCaseStudy } from "@/data/pages/insights/case-studies/aiPatientManagementData";

export const metadata = caseStudyMetadata(patientManagementCaseStudy);

export default function PatientManagementPage() {
  return <CaseStudyTemplate cs={patientManagementCaseStudy} />;
}
