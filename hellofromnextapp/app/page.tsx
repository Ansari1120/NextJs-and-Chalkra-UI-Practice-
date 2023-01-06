import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>This Is next js App with typescript</h1>
      <p>developed by :</p>
      Hey There ! This is web page generated at HP PROBOOK From PIAIC STUDENT
      171908
      <br />
      <Link href="/name">Navigate to name page</Link>
      <br />
      <Link href="/name/address">Navigate to address page</Link>
      <br />
      <h3>Dynamic paging</h3>
      <p>
        we can create a new named page at runtime by dynamically adressing new
        url
      </p>
      <Link href="/name/address/xyz">Go to xyz page</Link>
      <br />
      <h3>static paging </h3>
      <p>
        The primary benefit of the generateStaticParams function is its smart
        retrieval of data. If content is fetched within the generateStaticParams
        function using a fetch request, the requests are automatically
        deduplicated. This means a fetch request with the same arguments across
        multiple generateStaticParams, Layouts, and Pages will only be made
        once, which decreases build times.
      </p>
      <Link href="/name/address/zeeshan">
        Go to static defined page options
      </Link>
    </div>
  );
}
