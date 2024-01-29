import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
<main>
  <h1>Sam fitness app</h1>
  <h2>home page</h2>
  <Link href="/Pages/About">
  <p>Im about</p>
  </Link>

  <button className="btn btn-primary">Button</button>
</main>
  );
}
