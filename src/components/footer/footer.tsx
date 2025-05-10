import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <p className={styles["signature-paragraph"]}>
        feito com 💜 em maringá-PR
      </p>
      <p>aiqfome.com © 2007-2023 aiqfome LTDA.</p>
      <span>CNPJ: 09.186.786/0001-58</span>
    </footer>
  );
}
