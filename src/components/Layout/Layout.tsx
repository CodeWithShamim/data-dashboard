import { useSession } from "next-auth/react";
import React from "react";
import SideMenu from "@/components/SideMenu";
import styles from "./Layout.module.scss";
import Head from "next/head";
import Header from "@/components/Header";

const Layout = (props: any) => {
  const { data: session } = useSession();

  return (
    <>
      <Header />
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={session ? styles.layout : styles.defaultLayout}>
        {session && <SideMenu />}
        {props.children}
      </main>
    </>
  );
};

export default Layout;
