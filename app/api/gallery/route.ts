import manifest from "./manifest.json";

export async function GET(request: Request) {
  return new Response(JSON.stringify(manifest), {
    headers: { "Content-Type": "application/json" },
  });
}
