import { Store } from "@/interfaces/store";

export async function generateStaticParams() {
  const stores: Store[] = await fetch(`${process.env.API_URL}/stores`).then(
    (res) => res.json()
  );

  return stores.map((store) => ({ slug: store.slug }));
}