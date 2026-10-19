import type { BreadcrumbItem } from "@/components/common/Breadcrumb";

const BASE_URL = "https://www.tizora.ai";

/** Visible "Home › Industries › {label}" trail. Without a label it ends at Industries (the hub page). */
export function industryBreadcrumbItems(label?: string): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries" },
  ];
  return label ? [...items, { label }] : items;
}

/** BreadcrumbList schema matching `industryBreadcrumbItems`. `path` is the page path, e.g. "/industries/fintech". */
export function industryBreadcrumbSchema(label?: string, path?: string) {
  const list = [
    { name: "Home", item: `${BASE_URL}/` },
    { name: "Industries", item: `${BASE_URL}/industries` },
    ...(label && path ? [{ name: label, item: `${BASE_URL}${path}` }] : []),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${list[list.length - 1].item}#breadcrumb`,
    itemListElement: list.map((l, i) => ({ "@type": "ListItem", position: i + 1, ...l })),
  };
}
