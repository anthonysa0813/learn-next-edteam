import Head from "next/head";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <Head>
        <title>About | </title>
      </Head>
      <h1>About jeje</h1>
      <Image
        alt="auto mazda"
        src="/images/auto.png"
        width={700}
        height={300}
        placeholder="blur"
        blurDataURL="/images/auto_peque.webp"
      />
    </div>
  );
};

export default About;
