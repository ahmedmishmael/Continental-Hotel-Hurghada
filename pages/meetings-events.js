import Head from "next/head";
import { Fragment } from "react";
import usePageGenerator from "../src/hooks/usePageGenerator";

export default function meetingsandevents({ data }) {
  return (
    <Fragment>
      <Head>
        <title>Meetings & Events</title>
      </Head>
      <section>{usePageGenerator(data)}</section>
    </Fragment>
  );
}

export async function getStaticProps() {
  const res = await import("./data/data.json");
  const { meetingsandevents } = res;
  return {
    props: { data: meetingsandevents },
  };
}
