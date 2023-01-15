import type { NextPage } from "next";
import { VStack, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <VStack padding="10">
      <Button
        backgroundColor="brand.100"
        type="button"
        onClick={() => router.push("/name/address/zia")}
      >
        navigate to zia page
      </Button>
      <br />
      <br />
      <Button
        backgroundColor="brand.200"
        type="button"
        onClick={() => router.push("/pages/zeeshan")}
      >
        navigate to zeeshan page
      </Button>
      <br />
      <br />
      <Button
        backgroundColor="brand.300"
        type="button"
        onClick={() => router.push("/pages/hira")}
      >
        navigate to hira page
      </Button>
      <br />
      <br />
      <Link href="">Go to Zia page</Link>
    </VStack>
  );
};

export default Home;
