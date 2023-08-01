// import { options } from "./api/auth/[...nextauth].ts/options";
import { getServerSession } from "next-auth/next";
import UserCard from "./components/card";

export default async function Home() {
  // const session = await getServerSession(options);

  return <div>hey there</div>;
}
