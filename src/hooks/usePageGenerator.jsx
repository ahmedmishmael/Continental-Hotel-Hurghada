import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useCarousel from "./useCarousel";
import styles from "../../styles/PageGenerator.module.css";

const usePageGenerator = (data) => {
  return data.map((e) =>
    e.sn % 2 !== 0 ? (
      <Container key={e.id} className={`${styles.container} my-5`}>
        <Row>
          <Col lg={6} className="p-0">
            {useCarousel(e.images)}
          </Col>
          <Col lg={6} className={styles.content}>
            <h2>{e.title}</h2>
            <p>{e.description}</p>
            <p>{e.text2}</p>
            <p>{e.text3}</p>
            <p>{e.text4}</p>
            <p>{e.text5}</p>
            <p>{e.text6}</p>
          </Col>
        </Row>
      </Container>
    ) : (
      <Container key={e.id} className={`${styles.container} my-5`}>
        <Row>
          <Col lg={6} className={styles.content}>
            <h2>{e.title}</h2>
            <p>{e.description}</p>
            <p>{e.text2}</p>
            <p>{e.text3}</p>
            <p>{e.text4}</p>
            <p>{e.text5}</p>
            <p>{e.text6}</p>
          </Col>
          <Col lg={6} className="p-0">
            {useCarousel(e.images)}
          </Col>
        </Row>
      </Container>
    )
  );
};

export default usePageGenerator;
