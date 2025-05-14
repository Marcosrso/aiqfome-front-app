"use client";
import { useTicket } from "@/hooks/useTicket";
import styles from "./footer.module.css";
import { usePathname } from "next/navigation";
import Button from "@/components/button/button";
import { useRouter } from "next/navigation";
import parseCurrency from "@/utils/currency";

export default function Footer() {
  const { ticket } = useTicket();
  const pathName = usePathname();
  const router = useRouter();

  const isProductPage = pathName.includes("produto/");
  const isTicketPage = pathName.includes("ticket");

  return (
    <footer className={styles.wrapper}>
      {!isTicketPage && ticket && (
        <p className={styles["signature-paragraph"]}>
          feito com 💜 em maringá-PR
        </p>
      )}
      {isProductPage && ticket && (
        <Button
          skin="primary"
          fullWidth
          onClick={() => {
            router.push("/ticket");
          }}
          className={styles["ticket-button"]}
        >
          ver ticket
        </Button>
      )}
      {isTicketPage && ticket && (
        <div className={styles["payment-box"]}>
          <span className={styles["payment-info-box"]}>
            <strong className={styles["payment-subtitle"]}>subtotal</strong>
            {parseCurrency(ticket.reduce((acc, value) => acc + value.total, 0))}
          </span>
          <Button
            skin="primary"
            fullWidth
            onClick={() => {
              router.push("/ticket");
            }}
            className={styles["ticket-button"]}
          >
            ir para pagamento
          </Button>
        </div>
      )}
      {!isProductPage && !isTicketPage && <Copyright />}
    </footer>
  );
}

function Copyright() {
  return (
    <>
      <p>aiqfome.com © 2007-2023 aiqfome LTDA.</p>
      <span>CNPJ: 09.186.786/0001-58</span>
    </>
  );
}
