import { Artist, artists } from "@/artists";
import { Metadata } from "next";
// import { cache } from "react";

type Props = {
  params: { id: string };
  searchParams: {
    count: string;
  };
};

// const fetchData = cache(() => {

// })

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { id } = params;
  const { count } = searchParams;

  const url = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/api/artists/`);
  url.searchParams.set("id", id);
  if (count) {
    url.searchParams.set("count", count);
  }
  const { href: route } = url;

  const artist: Artist | null = await fetch(route).then((res) => res.json());

  return {
    title: `${artist?.name || "Product Details"}`,
  };
}

export async function generateStaticParams() {
  return artists.map((artist) => ({
    id: artist.id,
  }));
}

async function ArtistPage({ params, searchParams }: Props) {
  const { id } = params;
  const { count } = searchParams;

  const url = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/api/artists/`);
  url.searchParams.set("id", id);
  if (count) {
    url.searchParams.set("count", count);
  }
  const { href: route } = url;

  const artist: Artist | null = await fetch(route).then((res) => res.json());

  return (
    <main className="w-full min-h-screen justify-center items-center flex flex-col">
      <h1 className="mb-8 text-2xl font-bold">ArtistPage</h1>

      <h2 className="text-lg font-semibold mb-2">Artist: {artist?.name}</h2>

      <h3 className="font-semibold">Albums</h3>
      <ol className="text-sm list-decimal">
        {artist?.albums.map((album) => (
          <li key={album}>{album}</li>
        ))}
      </ol>
    </main>
  );
}

export default ArtistPage;
