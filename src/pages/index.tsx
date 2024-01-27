import Image from "next/image";
import { Inter } from "next/font/google";
import { Box, HStack, Text } from "@chakra-ui/react";
import Navbar from "@/src/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
    </>
  );
}
