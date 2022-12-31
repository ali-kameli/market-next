import Head from "next/head";
import React, { Component } from "react"; 

export default class Home extends Component {
  render() {
    return (
      <>
        <Head>
          <title></title>
        </Head>
        hello
      </>
    );
  }
};

export async function getServerSideProps(context) {
  return {
    props: {}
  };
};