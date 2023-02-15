import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <>
        <main className={styles.main}>
          <h1>This Is next js App with typescript</h1>
          <p>developed by :</p>
          Hey There ! This is web page generated at HP PROBOOK From PIAIC
          STUDENT 171908
          <br />
          <br />
          <Link href="/name">Navigate to author page</Link>
          <br />
          <br />
          <Link href="/name/address">Navigate to address page</Link>
          <br />
          <br />
          <h3>Dynamic paging</h3>
          <p>
            we can create a new named page at bultime by satically adressing
            already rendered url
          </p>
          <Link href="/name/address/zia">Go to zia page</Link>
        </main>
      </>
    </div>
  );
}
