export async function onRequest({ request }) {
  const url = new URL(request.url);

  // Normalize path: remove trailing slashes
  let path = url.pathname.replace(/\/+$/, "");
  
  // Treat root path "/" correctly
  if (path === "") path = "/";

  // Ignore all query parameters so URLs like ?m=1 return 410
  path = path.split("?")[0];

  // Return completely blank 410 for all URLs
  return new Response(null, { status: 410 });
}
