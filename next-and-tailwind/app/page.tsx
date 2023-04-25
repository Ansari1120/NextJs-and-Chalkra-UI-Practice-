import Image from "next/image";
import { Inter } from "next/font/google";
import Cards from "./Components/Cards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Cards />
    </>
  );
}
