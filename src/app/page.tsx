import Image from "next/image";

import styles from "./page.module.css";
import DeliveryIcon from "@/icons/Delivery";
import StarIcon from "@/icons/Star";
import parseCurrency from "@/utils/currency";
import BikeIcon from "@/icons/Bike";
import Link from "next/link";

interface Store {
  id: number;
  name: string;
  deliveryFee: number;
  rating: number;
  brandImg: string;
  brandImgAlt: string;
  isOpen: boolean;
  url: string;
}

const stores: Store[] = [
  {
    id: 1,
    name: "Matsuri concept",
    deliveryFee: 0,
    rating: 5.0,
    brandImg: "/images/matsuri-branding.png",
    brandImgAlt: "matsuri",
    isOpen: true,
    url: ''
  },
  {
    id: 2,
    name: "Subway - Avenida center",
    deliveryFee: 6,
    rating: 5.0,
    brandImg: "/images/subway-branding.png",
    brandImgAlt: "subway",
    isOpen: true,
    url: ''
  },
  {
    id: 3,
    name: "Burger King - Colombo",
    deliveryFee: 6,
    rating: 5.0,
    brandImg: "/images/bk-branding.png",
    brandImgAlt: "burger king",
    isOpen: true,
    url: ''
  },
  {
    id: 4,
    name: "Burger King - Colombo",
    deliveryFee: 6,
    rating: 5.0,
    brandImg: "/images/bk-branding.png",
    brandImgAlt: "burger king",
    isOpen: false,
    url: ''
  },
];

export default function Home() {
  return (
    <main>
      <section className={styles.container}>
        <h2 className={styles["section-title"]}>abertos</h2>
        <ul className={styles["store-list"]}>
          {stores.filter(({ isOpen }) => isOpen).map((store) => (
            <li key={store.id}>
              <StoreCard {...store} />
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.container}>
        <h2 className={styles["section-title"]}>fechados</h2>
        <ul className={styles["store-list"]}>
          {stores.filter(({ isOpen }) => !isOpen).map((store) => (
            <li key={store.id}>
              <StoreCard {...store} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function StoreCard({
  name,
  deliveryFee,
  rating,
  brandImg,
  brandImgAlt,
  isOpen,
  url
}: Store) {
  const freeDelivery =  deliveryFee === 0;
  return (
    <article className={styles["store-card"]}>
      <Image
        loading="lazy"
        src={brandImg}
        alt={brandImgAlt}
        height={72}
        width={72}
        style={{ opacity: isOpen ? 1 : 0.4}}
      />
      <div className={styles["store-card-box"]}>
        <header>
          <h3><Link href={url}>{name}</Link></h3>
        </header>
        <div className={styles["store-card-content"]}>
          <span
            className={
              freeDelivery
                ? styles["free-delivery-fee-text"]
                : styles["delivery-fee-text"]
            }
          >
            {freeDelivery ? <BikeIcon /> :  <DeliveryIcon />}
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
