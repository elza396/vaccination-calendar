import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { Calendar } from "../src/Calendar/Calendar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Календарь вакцинации</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          А это{" "}
          <a href="https://cmpmos.ru/naseleniyu/vaktsinatsiya-detey-i-vzroslyh-v-tsmp/natsionalnyy-kalendar-privivok/">
            Национальный календарь прививок
          </a>
        </h1>

        <Calendar />
      </main>
    </div>
  );
}
