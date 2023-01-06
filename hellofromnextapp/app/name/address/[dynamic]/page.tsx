export default function GiveName({
  params,
  searchParams,
}: {
  params: { dynamic: string };
  searchParams: { id: string };
}) {
  return <div>This dynamic page name is : {params.dynamic}.</div>;
}
