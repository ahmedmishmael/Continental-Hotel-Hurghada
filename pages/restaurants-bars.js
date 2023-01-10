import Head from "next/head";
import { Fragment } from "react";
import usePageGenerator from "../src/hooks/usePageGenerator";

export default function restaurantsandbars({ data }) {
  return (
    <Fragment>
      <Head>
        <title>Restaurants & Bars</title>
      </Head>
      <section>{usePageGenerator(data)}</section>
    </Fragment>
  );
}
export async function getStaticProps() {
  const res = await import("./data/data.json");
  const { restaurantsandbars } = res;
  return {
    props: { data: restaurantsandbars },
  };
}
