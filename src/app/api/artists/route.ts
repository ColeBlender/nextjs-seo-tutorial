import { artists } from "@/artists";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const count = searchParams.get("count");

  const artist = artists.find((artist) => artist.id === id) || null;

  if (artist && count !== null) {
    artist.albums = artist.albums.slice(0, Number(count));
  }

  return Response.json(artist);
}
