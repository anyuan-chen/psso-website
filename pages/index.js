import Head from "next/head";
import Layout from "../Components/layout";
import Navbar from "../components/navbar";
import Intro from "../components/intro";

export default function Home() {
  return (
    <Layout>
      <Intro></Intro>
    </Layout>
  );
}
