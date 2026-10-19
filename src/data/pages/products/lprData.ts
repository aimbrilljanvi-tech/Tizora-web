export const LPR_URL = "https://www.tizora.ai/products/license-plate-recognition";
// Public recognition server behind the demo (not a secret). The site proxies to it from
// /api/lpr-demo/recognize so the browser only ever talks to our own origin.
export const LPR_API_BASE = "https://alpr.parking.tizorainnovations.in";

export const LPR_GITHUB_URL = "https://github.com/Tizora-ai/license-plate-recognition-api-parking";
export const LPR_MODIFIED = "2026-09-30";

export const LPR_SEO = {
  // 58 characters with the brand; primary keyword first.
  title: "License Plate Recognition Demo – Free ALPR & ANPR | Tizora",
  // 155 characters.
  description:
    "Free online license plate recognition (ALPR/ANPR) demo. Upload a car photo and AI reads the number plate in seconds, with confidence scores. Open-source API.",
  // The page's own hero photo, cropped to the 1200x630 share size.
  ogImage:
    "https://res.cloudinary.com/cjzo6qye/image/upload/f_jpg,q_80,w_1200,h_630,c_fill,g_east/v1790231425/ChatGPT_Image_Sep_24_2026_11_59_32_AM.png",
  ogImageAlt: "White car on a road with its license plate being detected by AI license plate recognition",
};

export const LPR_FAQS = [
  {
    q: "What is license plate recognition (LPR)?",
    a: "License plate recognition (LPR), also called automatic license plate recognition (ALPR) or automatic number plate recognition (ANPR), is a computer vision technology that detects a vehicle's plate in an image or video and converts it into text. It is used for parking, tolling, access control, fleet tracking and law enforcement.",
  },
  {
    q: "What is the difference between LPR, ALPR and ANPR?",
    a: "They describe the same technology. LPR and ALPR are the common terms in the US, while ANPR (automatic number plate recognition) is used in the UK, India and much of Europe. All read vehicle registration plates using cameras and AI.",
  },
  {
    q: "How does AI license plate recognition work?",
    a: "An object-detection model first finds each plate in the frame, the plate is cropped and enhanced, and an OCR model reads the characters. A confidence score is returned for every plate so downstream systems can accept, review or reject the read.",
  },
  {
    q: "How accurate is this ALPR demo?",
    a: "Accuracy is highest on sharp, well-lit photos where the whole plate is visible. Blur, glare, extreme angles and partial occlusion lower the confidence score. Each result shows its confidence so you can judge the read.",
  },
  {
    q: "Is the license plate recognition demo free?",
    a: "Yes. The demo is free to use with no sign-up, within a daily allowance of scans. Upload a JPG, PNG or WEBP photo of up to 15 MB and the plate is read in seconds.",
  },
  {
    q: "What does the license plate recognition API return?",
    a: "For every plate it finds, the API returns the plate text, a detection confidence score, the plate's bounding box and a cropped image of the plate. It also returns an annotated copy of the photo with each plate marked, the number of plates and the processing time.",
  },
  {
    q: "Is my image stored?",
    a: "The demo processes your image only to return a result. Avoid uploading images you don't have the right to share or that contain personal data you want kept private.",
  },
  {
    q: "Can I use this LPR API in production?",
    a: "Yes. The recognition API behind this demo is open source on GitHub, and Tizora builds production LPR for parking-enforcement workflows. We can adapt and deploy it for parking, tolling, fleet, gated-community and access-control systems.",
  },
];

export const LPR_USE_CASES = [
  { title: "Parking management", text: "Ticketless entry and exit, permit validation and pay-by-plate.", href: "/industries/parking" },
  { title: "Parking enforcement", text: "Faster mobile scans and fewer re-reads for enforcement officers.", href: "/insights/case-studies/parking/ai-lpr-parking-enforcement" },
  { title: "Tolling & smart cities", text: "Automated ANPR for toll lanes, low-emission zones and traffic analytics." },
  { title: "Access control", text: "Gated communities, campuses and logistics yards with allow-list matching." },
  { title: "Fleet & logistics", text: "Vehicle check-in, dock scheduling and yard visibility." },
  { title: "Law enforcement", text: "Plate lookups against watch-lists with auditable confidence scores." },
];
