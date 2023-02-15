"use client";
import { useRouter } from "next/navigation";
export default function GiveAddress() {
  const router = useRouter();

  return (
    <div>
      my full name is ahmed ali ansari this is route group
      <br />
      <button onClick={() => router.push("/")}>Go back to home page</button>
      route names are unique
    </div>
  );
}

//route groups