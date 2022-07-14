/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import Layout from "../components/Layout.tsx"

export default function Home() {
  return (
    <Layout>
        <img
          src="/logo.svg"
          height="200px"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class={tw`my-6`}>
          Welcome to `fresh`. From Double Slash //
        </p>
        <a href="/blog/home">BLOG PAGE</a>
        <Counter start={3} />
    </Layout>
  );
}
