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

  function Natural({ className }: { className?: string }) {
    return <img className={className} src="1.svg" />;
  }

  function Entrep({ className }: { className?: string }) {
    return <img className={className} src="2.svg" />;
  }
  
  function Gift({ className }: { className?: string }) {
    return <img className={className} src="3.svg" />;
  }

  function Rejuv({ className }: { className?: string }) {
    return <img className={className} src="4.svg" />;
  }
  

export {Logo, About, BlobIcon, SwirlyArrow, Bathman};
