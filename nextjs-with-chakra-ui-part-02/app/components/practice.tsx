"use client";
import React from "react";
import { ChakraProvider, Heading } from "@chakra-ui/react";

export default function Practice() {
  return (
    <div>
      {" "}
      <ChakraProvider>
        <h1 style={{ color: "black", fontSize: "20px" }}>
          Hello nextjs with chakra ui this is normal traditional heading.
        </h1>
        <Heading color="blue">this is default heading by chakra </Heading>
        <Heading as="h3" color="red">
          {" "}
          this is h3 heading by chakra in order to control size of text !
        </Heading>
        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems : "center"
          }}
        >
          <div style={{ backgroundColor: "red", padding: "50px" }}>div1</div>
          <div style={{ backgroundColor: "blue", padding: "50px" }}>div2</div>
          <div style={{ backgroundColor: "orange", padding: "50px" }}>div2</div>
        </div>
      </ChakraProvider>
    </div>
  );
}
