"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function AnimatedOrb() {
  return (
    <div className="pv-orb-wrap" aria-hidden>
      <div className="pv-orb">
        <DotLottieReact
          src="https://lottie.host/6090245c-90c9-4287-a715-f8fef125978e/xlxxiqSpbW.lottie"
          loop
          autoplay
          style={{ width: "420px", height: "420px", display: "block" }}
        />
      </div>
    </div>
  );
}