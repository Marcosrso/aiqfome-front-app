import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" title="Início">
      <Image
        src="/images/aiq-branding.png"
        alt="aiqfome-logo"
        width={32}
        height={32}
      />
    </Link>
  );
}
