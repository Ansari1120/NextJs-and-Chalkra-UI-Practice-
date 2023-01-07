"use client";

import { useRouter } from "next/navigation";
import styles from "/app/page.module.css";

export default function GiveName({
  params,
  searchParams,
}: {
  params: { name: string };
  searchParams?: { id?: string };
}) {
  const router = useRouter();
  return (
    <div>
      <main className={styles.main}>
        <h2>The Dynamic Page</h2>
        this dynamic page name is {params.name}.
        <br />
        <br />
        the page created at runtime "dynamically"
        <br />
        <br />
        <button type="button" onClick={() => router.push("/")}>
          go back to main page
        </button>
        <br />
        <br />
        <button type="button" onClick={() => router.push("/name")}>
          go back to name page
        </button>
      </main>
    </div>
  );
}
