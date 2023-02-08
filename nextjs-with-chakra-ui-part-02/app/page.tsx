"use client"
import Practice from "./components/practice";
import { ChakraProvider, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <Practice />
    </ChakraProvider>
  );
}
