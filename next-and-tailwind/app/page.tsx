import Image from "next/image";
import { Inter } from "next/font/google";
import Tweet from "./Components/Tweet"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
   <Tweet />
   </>
  );
}
