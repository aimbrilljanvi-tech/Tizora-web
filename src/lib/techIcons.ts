/**
 * Picks an icon for a tech-stack item by its name, so every tile gets one without hand-mapping.
 * - Known technologies resolve to their brand logo (Simple Icons, or Devicon where Simple Icons
 *   has none, e.g. AWS, Magento, Twilio). Every URL here was checked to return 200.
 * - Concepts (security, audit, payments, KYC, data, APIs...) resolve to a line-icon key
 *   ("line:<name>") that TechStackTabs renders with lucide-react.
 */
const SI = (slug: string) => `https://cdn.simpleicons.org/${slug}`;
const DI = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;

const BRANDS: [RegExp, string][] = [
  [/react native/i, SI('react')],
  [/^react\b/i, SI('react')],
  [/typescript/i, SI('typescript')],
  [/javascript/i, SI('javascript')],
  [/^java\b/i, SI('openjdk')],
  [/spring boot/i, SI('springboot')],
  [/openapi/i, SI('openapiinitiative')],
  [/kafka/i, SI('apachekafka')],
  [/webrtc/i, SI('webrtc')],
  [/pytorch/i, SI('pytorch')],
  [/tensorflow/i, SI('tensorflow')],
  [/^python/i, SI('python')],
  [/fastapi/i, SI('fastapi')],
  [/opencv/i, SI('opencv')],
  [/numpy/i, SI('numpy')],
  [/onnx/i, SI('onnx')],
  [/postgres/i, SI('postgresql')],
  [/mysql/i, SI('mysql')],
  [/mongodb/i, SI('mongodb')],
  [/redis/i, SI('redis')],
  [/kubernetes/i, SI('kubernetes')],
  [/terraform/i, SI('terraform')],
  [/github actions/i, SI('githubactions')],
  [/docker/i, SI('docker')],
  [/keycloak/i, SI('keycloak')],
  [/node\.?js/i, SI('nodedotjs')],
  [/next\.?js/i, SI('nextdotjs')],
  [/kotlin/i, SI('kotlin')],
  [/swift/i, SI('swift')],
  [/firebase/i, SI('firebase')],
  [/^ios\b/i, SI('ios')],
  [/^android\b/i, SI('android')],
  [/bluetooth/i, SI('bluetooth')],
  [/shopify/i, SI('shopify')],
  [/magento/i, DI('magento/magento-original.svg')],
  [/twilio/i, DI('twilio/twilio-original.svg')],
  [/\baws\b|amazon/i, DI('amazonwebservices/amazonwebservices-plain-wordmark.svg')],
];

const CONCEPTS: [RegExp, string][] = [
  [/vapt|penetration/i, 'shield-check'],
  [/mfa|otp|biometric|device binding|session/i, 'fingerprint'],
  [/encrypt|aes-|tls|kms|secure/i, 'lock'],
  [/rbac|access|maker-checker|role/i, 'user-check'],
  [/audit|history|\blogs?\b/i, 'history'],
  [/video|v-cip|turn \/ stun|bitrate/i, 'video'],
  [/ocr|document|esign|digilocker/i, 'file-text'],
  [/face|liveness|selfie|capture/i, 'scan-face'],
  [/\bupi\b|imps|neft|rtgs|payment|biller|transfer/i, 'arrow-left-right'],
  [/kyc|uidai/i, 'badge-check'],
  [/core banking|\bcbs\b|\blos\b|loan|ledger|deposit|accounting|teller|branch/i, 'landmark'],
  [/pharmacy|medication/i, 'pill'],
  [/barcode/i, 'scan-barcode'],
  [/robot|amr|packing|warehouse/i, 'bot'],
  [/storefront|catalog|inventory|commerce/i, 'store'],
  [/plate|segment|detect|concern|confidence|score|model|taxonomy/i, 'sparkles'],
  [/api|integration|middleware|orchestration|idempot|retry|upload/i, 'plug'],
  [/data|pipeline|storage|record|order history/i, 'database'],
  [/dashboard|console/i, 'layout-dashboard'],
  [/chat|communication|message/i, 'message-square'],
  [/cloud|lambda|ec2|hosting|region/i, 'cloud'],
  [/microservice|service|uvicorn|server/i, 'server'],
  [/app|mobile|web/i, 'smartphone'],
];

/** Icon for a tech item: an image URL, a "line:<name>" key, or undefined. */
export function resolveTechIcon(name: string): string | undefined {
  for (const [re, url] of BRANDS) if (re.test(name)) return url;
  for (const [re, key] of CONCEPTS) if (re.test(name)) return `line:${key}`;
  return undefined;
}
