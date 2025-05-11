import Image from "next/image";

import styles from "./page.module.css";
import DeliveryIcon from "@/icons/Delivery";
import StarIcon from "@/icons/Star";
import parseCurrency from "@/utils/currency";
import BikeIcon from "@/icons/Bike";
import Link from "next/link";
import { Store } from "@/interfaces/store";

export default async function Home() {
  const stores: Store[] = await fetch(`http://localhost:3001/stores`).then(
    (res) => res.json()
  );

  return (
    <>
      <section className={styles.container}>
        <h2 className={styles["section-title"]}>abertos</h2>
        <ul className={styles["store-list"]}>
          {stores
            .filter(({ isOpen }) => isOpen)
            .map((store) => (
              <li key={store.id}>
                <StoreCard {...store} />
              </li>
            ))}
        </ul>
      </section>
      <section className={styles.container}>
        <h2 className={styles["section-title"]}>fechados</h2>
        <ul className={styles["store-list"]}>
          {stores
            .filter(({ isOpen }) => !isOpen)
            .map((store) => (
              <li key={store.id}>
                <StoreCard {...store} />
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}

function StoreCard({
  name,
  deliveryFee,
  rating,
  brandImg,
  brandImgAlt,
  isOpen,
  slug,
}: Store) {
  const freeDelivery = deliveryFee === 0;
  return (
    <article className={styles["store-card"]}>
      <Image
        loading="lazy"
        src={brandImg}
        alt={brandImgAlt}
        height={72}
        width={72}
        style={{ opacity: isOpen ? 1 : 0.4 }}
      />
      <div className={styles["store-card-box"]}>
        <header>
          <h3>
            <Link href={slug}>{name}</Link>
          </h3>
        </header>
        <div className={styles["store-card-content"]}>
          <span
            className={
              freeDelivery
                ? styles["free-delivery-fee-text"]
                : styles["delivery-fee-text"]
            }
          >
            {freeDelivery ? <BikeIcon /> : <DeliveryIcon />}
            {freeDelivery ? "grátis" : parseCurrency(deliveryFee)}
          </span>
          &nbsp;
          <span className={styles["rating-text"]}>
            <StarIcon />
            {rating}
          </span>
        </div>
      </div>
    </article>
  );
}
