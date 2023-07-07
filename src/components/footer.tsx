import React from "react";
import { Logo } from "./icons";
import { Montserrat } from "next/font/google";
import { Song_Myung } from "next/font/google";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const songMyung = Song_Myung({
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <div className="py-10 flex flex-row items-center justify-between mx-28">
      <Logo className="h-40 w-40" />
      {footerBlock.map((item: footerBlockType) => {
        return (
          <div
            key={item.header}
            className={`flex flex-col ${montserrat.className} text-base gap-y-2 text-[var(--cream)] mb-auto pt-9`}
          >
            <p>{item.header}</p>
            <ul>
              {item.links.map((link: linkType) => {
                return (
                  <a
                    href={link.href}
                    key={link.name}
                    className="font-extralight text-sm hover:font-semibold duration-300"
                  >
                    <li className="w-36 cursor-pointer">{link.name}</li>
                  </a>
                );
              })}
            </ul>
          </div>
        );
      })}
      <div
        className={`text-center ${songMyung.className} text-[var(--cream)] text-xl flex flex-col items-center justify-center mb-auto py-10`}
      >
        <div>Follow</div>
        <div className="-mt-2 mb-2">us on</div>
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-base h-7 text-center"
        />
      </div>
    </div>
  );
}

type linkType = {
  name: string;
  href: string;
};

type footerBlockType = {
  header: string;
  links: linkType[];
};

const links: linkType[] = [
  {
    name: "Home",
    href: "",
  },
  {
    name: "Shop our Soaps",
    href: "",
  },
  {
    name: "About",
    href: "",
  },
];

const contactLinks: linkType[] = [
  {
    name: "Email",
    href: "",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ms_soapy_suds/",
  },
];

const InfoLinks: linkType[] = [
  {
    name: "FAQ",
    href: "",
  },
  {
    name: "Shipping & Returns",
    href: "",
  },
  {
    name: "Payment Options",
    href: "",
  },
];

const footerBlock: footerBlockType[] = [
  {
    header: "Links",
    links: links,
  },
  {
    header: "Contact Us",
    links: contactLinks,
  },
  {
    header: "Info",
    links: InfoLinks,
  },
];
