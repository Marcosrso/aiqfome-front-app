import { Store } from "@/interfaces/store";
import { api } from "@/services/api";

export async function generateStaticParams() {
  const stores: Store[] = await api<Store[]>(`stores`);

  return stores.map((store) => ({ slug: store.slug }));
}
