"use client";
import { useTicket } from "@/hooks/useTicket";
import styles from "./page.module.css";
import parseCurrency from "@/utils/currency";
import Link from "next/link";
import IntegerInput from "@/components/input-integer/input-integer";

export default function TicketPage() {
  const { ticket } = useTicket();

  const renderSubItem = (itemList: unknown) => {
    if (typeof itemList === "string") {
      return itemList;
    }

    if (Array.isArray(itemList)) {
      return itemList.join(", ");
    }

    if (itemList) {
      return Object.keys(itemList).map((item) => <div key={item}>{item}</div>);
    }
  };

  return (
    <section className={styles["container"]}>
      {ticket.map((item) => (
        <div key={item.id}>
          <div>
            <div className={styles["item-name"]}>
              <h3>{item.name}</h3> <strong>{parseCurrency(item.total)}</strong>
            </div>
            <div className={styles["item-cta"]}>
              <Link href="/">editar</Link>
              <IntegerInput value={item.quantity}/>
            </div>
          </div>
          <ul className={styles["item-list"]}>
            {Object.keys(item.options).map((optionName) => {
              return (
                <li key={optionName}>
                  <strong>• {optionName}</strong>
                  <div className={styles["sub-item"]}>
                    {renderSubItem(item.options[optionName])}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </section>
  );
}
