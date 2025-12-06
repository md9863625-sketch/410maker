export async function onRequest() {
  return new Response("Gone", { status: 410 });
}