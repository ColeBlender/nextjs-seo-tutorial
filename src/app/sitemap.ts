import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { artists } from "@/artists";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

async function getLastModifiedDate(filePath: string): Promise<Date> {
  filePath = path.join(process.cwd(), filePath);
  const stats = await fs.promises.stat(filePath);
  return stats.mtime;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pageRoutes = ["", "about"];
  const staticRoutes = await Promise.all(
    pageRoutes.map(async (pageRoute) => {
      const lastModified = await getLastModifiedDate(
        `src/app/${pageRoute}/page.tsx`
      );
      const page = pageRoute.replace(/\/?\(.*?\)/g, "").replace(/^\/+/, "");
      return {
        url: `${BASE_URL}/${page}`,
        lastModified,
      };
    })
  );

  const artistPageLastModified = await getLastModifiedDate(
    "src/app/artists/[id]/page.tsx"
  );
  const artistRoutes = artists.map(({ id }) => {
    return {
      url: `${BASE_URL}/inventory/${id}`,
      lastModified: artistPageLastModified,
    };
  });

  const sitemap = [...staticRoutes, ...artistRoutes];

  return sitemap;
}
