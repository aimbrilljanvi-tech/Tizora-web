// To add a new ebook:
//   1. Create a file in this folder, e.g. ./my-new-ebook.ts, exporting `ebook: Ebook`
//      (see ../ebookTypes.ts for the shape and any file here for a full example).
//   2. Put its PDF at public/ebooks/<slug>.pdf and its card, hero and share images on Cloudinary.
//   3. Import it below and add it to the array.
// The listing, the ebook page, the Insights menu and the sitemap pick it up automatically.

import type { Ebook } from '../ebookTypes';
import { ebook as aiReadyHealthcareSoftwareGuide } from './ai-ready-healthcare-software-guide';
import { ebook as aircraftTurnaroundDelayGuide } from './aircraft-turnaround-delay-guide';

export const books: Ebook[] = [aiReadyHealthcareSoftwareGuide, aircraftTurnaroundDelayGuide];
