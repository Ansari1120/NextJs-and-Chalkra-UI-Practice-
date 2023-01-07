"use client";

import { useRouter } from "next/navigation";
import styles from "/app/page.module.css";

export default function GiveAddress() {
  const router = useRouter();
  return (
    <div>
      <main className={styles.main}>
        <h2>this page contains Address Details:</h2>
        I live in orangi town Karachi, Pakistan
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
