import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

async function getArticles() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.enviroment}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=article`
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const articles = await getArticles();
  console.log(articles);
  return (
    <>
      <ul>
        {articles.items.map((item: any) => (
          <><li key={item.sys.id}>{item.fields.title}</li><li>{documentToReactComponents(item.fields.articleBody)}</li></>
        ))}
      </ul>
    </>
  );
}
