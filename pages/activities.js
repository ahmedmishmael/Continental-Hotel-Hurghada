import Head from "next/head";
import { Fragment } from "react";
import usePageGenerator from "../src/hooks/usePageGenerator";

export default function activities({ data }) {
  return (
    <Fragment>
      <Head>
        <title>Activities</title>
      </Head>
      <section>{usePageGenerator(data)}</section>
    </Fragment>
  );
}

export async function getStaticProps() {
  const res = await import("./data/data.json");
  const { activities } = res;
  return {
    props: { data: activities },
  };
}
