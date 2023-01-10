import Head from "next/head";
import { Fragment } from "react";
import usePageGenerator from "../src/hooks/usePageGenerator";

export default function healthclub({ data }) {
  return (
    <Fragment>
      <Head>
        <title>Health Club</title>
      </Head>
      <section>{usePageGenerator(data)}</section>
    </Fragment>
  );
}
export async function getStaticProps() {
  const res = await import("./data/data.json");
  const { health_club } = res;
  return {
    props: { data: health_club },
  };
}
