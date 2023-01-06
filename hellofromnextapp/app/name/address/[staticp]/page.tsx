
//https://beta.nextjs.org/docs/data-fetching/generating-static-params
export async function generateStaticParams() {
  const staticps: string[] = ["zia", "zeeshan", "hira"];

  return staticps.map((staticp) => ({
    staticp: staticp,
  }));
}

export default function Givestaticp({ params, searchParams }: {
  params: { staticp: string },
  searchParams: { id: string },
}) {
    return (
      <div>
            My static page name is {params.staticp}.
            
      </div>
    )
  }