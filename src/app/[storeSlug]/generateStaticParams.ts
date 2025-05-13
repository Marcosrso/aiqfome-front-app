import { Store } from "@/interfaces/store";
import { api } from "@/services/api";

export async function generateStaticParams() {
  const stores: Store[] = await api(`stores`);

  return stores.map((store) => ({ slug: store.slug }));
}
