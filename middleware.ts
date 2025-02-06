import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define the protected route matcher
const isProtectedRoute = createRouteMatcher(['/payment']);

export default clerkMiddleware(async (auth, req) => {
  // If the current request matches the protected route, ensure the user is authenticated
  if (isProtectedRoute(req)) {
    await auth.protect();  // Protect the route with Clerk authentication
  }
});

// Define the config for the matcher
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
