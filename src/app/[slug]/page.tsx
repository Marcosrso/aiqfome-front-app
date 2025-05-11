import type { Store } from "@/interfaces/store";

interface StoreProps {
  params: Promise<{ slug: string }>;
}

export default async function Store({ params }: StoreProps) {
  const { slug } = await params;
  const store = await getStoreBySlug(slug);

  if (!store) {
    return <div>Loja não encontrada!</div>;
  }

  return (
    <div>
      <h2>{store.name}</h2>
    </div>
  );
}

async function getStoreBySlug(slug: string) {
  const stores: Store[] = await fetch(`http://localhost:3001/stores`).then(
    (res) => res.json()
  );

  return stores.find((store) => store.slug === slug);
}

export async function generateStaticParams() {
  const stores: Store[] = await fetch(`http://localhost:3001/stores`).then(
    (res) => res.json()
  );

  return stores.map((store) => ({ slug: store.slug }));
}
