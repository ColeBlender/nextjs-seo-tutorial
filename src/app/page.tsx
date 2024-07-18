import Link from "next/link";
import HomeButton from "./components/HomeButton";

function HomePage() {
  return (
    <div>
      <header>
        <nav>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/profile">Profile</Link>
        </nav>
      </header>

      <main>
        <article></article>

        <section></section>

        <HomeButton />
      </main>
    </div>
  );
}

export default HomePage;
