import { Product } from "@/interfaces/product";
import { api } from "@/services/api";
import Image from "next/image";

import styles from "./page.module.css";
import parseCurrency from "@/utils/currency";
import FormAddProduct from "./form-add-product";

interface ProductPageProps {
  params: Promise<{ productSlug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productSlug } = await params;
  const product = await getProductBySlug(productSlug);

  if (!product) {
    return <div>Produto não encontrada!</div>;
  }

  return (
    <div>
      <Image
        src={product.img}
        alt={product.altImg}
        width={100}
        height={50}
        className={styles.banner}
      />
      <section className={styles.container}>
        <h2>{product.name}</h2>
        <strong>A partir de {parseCurrency(product.value)}</strong>
        <p>{product.description}</p>
        <FormAddProduct product={product}/>
      </section>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getProductBySlug(_slug: string): Promise<Product> {
  const res = await api<Product[]>("product");
  const product = res.find((product) => product.slug === "ceviche-de-salmao");
  if (!product) throw new Error("Product not found");
  return product;
}
