import React from "react";

function Logo({ className }: { className?: string }) {
  return <img className={className} src="logo.jpeg" />;
}

function About({ className }: { className?: string }) {
    return <img className={className} src="about.png" />;
  }

  function BlobIcon({ className }: { className?: string }) {
    return <img className={className} src="blob.svg" />;
  }

  function SwirlyArrow({ className }: { className?: string }) {
    return <img className={className} src="swirlyArrow.svg" />;
  }

  function Bathman({ className }: { className?: string }) {
    return <img className={className} src="bathmanfull.png" />;
  }

export {Logo, About, BlobIcon, SwirlyArrow, Bathman};
