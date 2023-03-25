import Head from "next/head";
import { Inter } from "@next/font/google";
import Dashboard from "./dashboard";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>Recycle-Plastic</title>
      </Head>
      <Box>
        <Dashboard />
      </Box>
    </>
  );
}
