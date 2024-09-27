import React from "react";
import Favorite from "../components/Favorite";

export default function App() {
  return (
    <main>
      <section>
        <h1 className="title">Our reviews</h1>
        <div className="underline"></div>
        <Favorite />
      </section>
    </main>
  );
}
