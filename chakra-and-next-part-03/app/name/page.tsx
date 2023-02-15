"use client";

import { useRouter } from "next/navigation";
import styles from "/app/page.module.css";

export default function GiveName() {
  const router = useRouter();
  return (
    <div>
      <main className={styles.main}>
        <h2>This page contains author name</h2>
        My name is AHMED ALI ANSARI
        <br />
        <br />
        <button type="button" onClick={() => router.push("/name/address")}>
          Get Address from address page
        </button>
        <br />
        <br />
        <button type="button" onClick={() => router.push("/")}>
          go back to main page
        </button>
      </main>
    </div>
  );
}

//how to do navigation in server component
//we can do it with Link component used in main home page.
