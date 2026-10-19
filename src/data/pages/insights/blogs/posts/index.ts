// To add a new blog post:
//   1. Create a new file in this folder, e.g. ./my-new-post.ts, exporting a
//      single `post: BlogPost` (see blogTypes.ts for the shape, and any
//      existing file here for a full example).
//   2. Import it below and add it to the array.
// Newest-first is just a convention here, not enforced — Blogs.tsx and the
// grid views sort by date themselves.

import { BlogPost } from '../blogTypes';
import { post as howDoesLicensePlateRecognitionWork } from './how-does-license-plate-recognition-work';

export const posts: BlogPost[] = [
  howDoesLicensePlateRecognitionWork,
];
