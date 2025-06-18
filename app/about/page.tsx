"use client";

import { NextPage } from "next";
import NickImage from "../assets/images/nick.jpg";
import Brolly from "../assets/images/brolly.png";
import BeyondSend from "../assets/images/beyond-send.png";
import WeWire from "../assets/images/wewire.png";
import BuddyVotes from "../assets/images/buddy-votes.png";
import Xharp from "../assets/images/xharp.png";
import Signature from "../assets/images/nick-sign.png";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {}

const About: NextPage<Props> = ({}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="px-5 pt-10 flex flex-col gap-2 md:px-25 lg:px-70 transition-all">
        <Image
          className="w-[97px] h-[97px] object-cover object-top rounded-4xl md:w-[130px] md:h-[130px] transition-all"
          src={NickImage.src}
          alt="nick.png"
          width={NickImage.width}
          height={NickImage.height}
        />
        <div className="flex flex-col gap-5">
          <span className="font-normal md:font-medium text-3xl md:w-[400px] md:text-4xl">
            Hey, I'm Nicholas K. Osei Dreamer & Designer
          </span>
          <span className="font-[Inter] font-light">
            I specialize in crafting intuitive, user-centric digital experiences
            that drive real business results. With a track record spanning
            early-stage startups to enterprise-level products, I've led
            impactful design projects across AI, FinTech, Blockchain, SaaS,
            Web3, Healthcare, E-commerce and more.
          </span>
          <span className="font-[Inter] font-light">
            My approach combines design thinking, data-informed decisions, and a
            deep understanding of business goals—merging aesthetics with
            strategy to build products that don't just look great, but perform
            exceptionally.
          </span>
        </div>
        <span className="text-[color:var(--color-primary-color)] pt-6 pb-1">
          I've worked for
        </span>
        <div className="relative">
          {/* Fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[color:var(--color-scaffold-color)] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[color:var(--color-scaffold-color)] to-transparent z-10" />

          {/* Scrollable content */}
          <div className="flex flex-row overflow-x-scroll scrollbar-hidden whitespace-nowrap relative z-0 pb-10 scroll-smooth">
            {[Brolly, BeyondSend, WeWire, BuddyVotes, Xharp].map(
              (image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt="image"
                  className="w-[150px] md:w-[200px] md:h-[30px] h-[25px] pr-[15px] transition"
                  width={image.width}
                  height={image.height}
                />
              )
            )}
          </div>
        </div>
        <div className=" flex justify-center pb-10">
          <Image
            src={Signature.src}
            alt="image"
            className="w-[150px] md:w-[190px] transition"
            width={Signature.width}
            height={Signature.height}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
