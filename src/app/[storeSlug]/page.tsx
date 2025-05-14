import type { Store } from "@/interfaces/store";
import Image from "next/image";
import Link from "next/link";
import IconButton from "@/components/button-icon/button-icon";

import ShareIcon from "@/icons/Share";
import LikeIcon from "@/icons/Like";

import Accordion from "@/components/accordion/accordion";
import ArrowRightIcon from "@/icons/ArrowRight";

import type {
  StoreDetails,
  StoreDetailsProduct,
} from "@/interfaces/store-details";

import styles from "./page.module.css";
import BikeIcon from "@/icons/Bike";
import parseCurrency from "@/utils/currency";
import StarIcon from "@/icons/Star";
import CurrencyIcon from "@/icons/Currency";
import { api } from "@/services/api";
import { Tag } from "@/components/tag/tag";

interface StoreProps {
  params: Promise<{ storeSlug: string }>;
}

export default async function Store({ params }: StoreProps) {
  const { storeSlug } = await params;
  const store = await getStoreBySlug(storeSlug);

  if (!store) {
    return <div>Loja não encontrada!</div>;
  }

  return (
    <div>
      <section className={styles.container}>
        <div className={styles["store-title-box"]}>
          <Image
            src={store.brandImg}
            alt={store.brandImgAlt}
            height={36}
            width={36}
            className={styles["store-img"]}
            loading="lazy"
          />
          <h2 className={styles["store-title"]}>{store.name}</h2>
        </div>
        <StoreCTA moreInfoUrl={store.moreInfoUrl} />
        <StoreDetails
          delivery={store.delivery}
          minimumOrderValue={store.minimumOrderValue}
          openingHours={store.openingHours}
          rating={store.rating}
        />
      </section>
      <section className={styles["products-section"]}>
        {store.sections.map((section) => (
          <Accordion
            key={section.name}
            title={section.name}
            subTitle={section.description}
          >
            <ul>
              {section.products.map((product) => (
                <ProductItem
                  key={product.name}
                  {...{
                    ...product,
                    slug: `${storeSlug}/produto/${product.slug}`,
                  }}
                />
              ))}
            </ul>
          </Accordion>
        ))}
      </section>
    </div>
  );
}

interface StoreCTAProps {
  moreInfoUrl: StoreDetails["moreInfoUrl"];
}

function StoreCTA({ moreInfoUrl }: StoreCTAProps) {
  return (
    <div className={styles["store-cta-box"]}>
      <span className={styles["store-cta"]}>
        <IconButton size="sm" aria-label="Compartilhar">
          <ShareIcon />
        </IconButton>
        <IconButton size="sm" aria-label="Amei">
          <LikeIcon />
        </IconButton>
      </span>
      <Link
        href={moreInfoUrl}
        className={styles["more-info-link"]}
        title="Mais informações"
      >
        mais infos <ArrowRightIcon width={8} height={8} />
      </Link>
    </div>
  );
}

interface StoreDetailsProps {
  delivery: StoreDetails["delivery"];
  rating: StoreDetails["rating"];
  openingHours: StoreDetails["openingHours"];
  minimumOrderValue: StoreDetails["minimumOrderValue"];
}

function StoreDetails({
  delivery,
  rating,
  openingHours,
  minimumOrderValue,
}: StoreDetailsProps) {
  return (
    <div className={styles["store-details"]}>
      <div className={styles["delivery-details-row"]}>
        <div className={styles["delivery-price"]}>
          <BikeIcon />
          &nbsp;
          {parseCurrency(delivery.fee)}
          &nbsp;
          <ArrowRightIcon width={8} height={8} />
        </div>
        <div className={styles["delivery-details"]}>
          {delivery.deliveryDay}, &nbsp; • &nbsp;
          {delivery.estimatedDeliveryTime}
          &nbsp; • &nbsp;{delivery.distance}
        </div>
      </div>

      <div className={styles["delivery-details-row"]}>
        <Tag type="success">
          entrega grátis acima de &nbsp;
          {parseCurrency(delivery.minOrderValueForFree)}
        </Tag>
      </div>

      <div className={styles["delivery-details-row"]}>
        <div className={styles["rating"]}>
          <StarIcon />
          &nbsp;
          {rating} de 5 &nbsp;
          <ArrowRightIcon width={8} height={8} />
          &nbsp; • &nbsp;
        </div>

        <div className={styles["opening-hours-text"]}>
          {openingHours.Monday}
        </div>
      </div>

      <div className={styles["delivery-details-row"]}>
        pedido mínimo: {parseCurrency(minimumOrderValue)}
      </div>
    </div>
  );
}

function ProductItem({
  name,
  description,
  promotionalValue,
  value,
  type,
  slug,
}: StoreDetailsProduct) {
  return (
    <li key={name} className={styles["product-item-box"]}>
      <Link
        href={slug}
        title="Selecionar produto"
        className={styles["product-item-box-link"]}
      >
        <div>
          <div className={styles["product-item-title"]}>{name}</div>
          <div className={styles["product-item-description"]}>
            {description}
          </div>
        </div>

        <div className={styles["product-item-value-box"]}>
          {promotionalValue > 0 && (
            <div className={styles["product-item-old-value"]}>
              {parseCurrency(value)}
            </div>
          )}

          {type === "COMB" && (
            <span className={styles["product-item-value-combo-text"]}>
              a partir de
            </span>
          )}

          <div
            className={
              promotionalValue > 0
                ? styles["product-item-promo-value"]
                : styles["product-item-value"]
            }
          >
            {promotionalValue > 0 && <CurrencyIcon width={16} height={16} />}
            &nbsp;
            {parseCurrency(promotionalValue || value)}
          </div>
        </div>
      </Link>
    </li>
  );
}

async function getStoreBySlug(slug: string) {
  const stores: StoreDetails[] = await api(`stores-details`);

  return stores.find((store) => store.slug === slug);
}
