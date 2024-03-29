import SignOutButton from "./components/signOutButton";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
export default async function Home() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <div className=" justify-center items-center h-screen">
        <h1 className=" bg-orange-300 text-3xl font-bold p-4 rounded-md">
          Hey there ! this is your homepage
        </h1>
        <p>{JSON.stringify(session)}</p>
        <SignOutButton />
      </div>
    </>
  );
}
