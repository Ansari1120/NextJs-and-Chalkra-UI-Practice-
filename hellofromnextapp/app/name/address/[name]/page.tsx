//https://beta.nextjs.org/docs/data-fetching/generating-static-params
export async function generateStaticParams() {
  const names: string[] = ["zia", "zeeshan", "hira"];

  return names.map((name) => ({
    name: name,
  }));
}

export default function GiveName({
  params,
  searchParams,
}: {
  params: { name: string };
  searchParams: { id: string };
}) {
  return (
    <div>
      <main>
        <h2>The static Page</h2>
        this staic page name is {params.name}.
        <br />
        <br />
        the page created at builtime "satically"
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
