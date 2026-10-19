// Shown by Next.js while a route transition is in flight (e.g. a dynamic
// blog/trend page whose content hasn't been fetched yet). Same spinner the
// original React Router app showed via <Suspense fallback={<RouteFallback />}>
// for its lazy-loaded routes.
export default function Loading() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-background">
      <div className="w-8 h-8 rounded-full border-2 border-border border-t-accent animate-spin" />
    </div>
  );
}
