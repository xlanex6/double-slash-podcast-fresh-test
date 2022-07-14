/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Layout({ children }) {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md bg-[#86efac]`}>
      {children}
    </div>
  )
}
