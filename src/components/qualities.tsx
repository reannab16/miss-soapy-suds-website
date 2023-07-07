import React from "react";
import Wave from "./wave";
import WaveFlip from "./waveFlip";

export default function Qualities() {
  return (
    <div className="w-full h-[70vh] flex-col flex items-center justify-between relative">
      <WaveFlip />
      <Wave speedy="23s"/>
    </div>
  );
}
