import { StaticImageData } from "next/image";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";
import project7 from "../assets/images/project7.png";
import project8 from "../assets/images/project8.png";

const projects: {
  id: number;
  name: string;
  role: string;
  duties: string;
  image: StaticImageData;
  url: string | null;
  description: string;
}[] = [
  {
    id: 1,
    name: "Wewire — Cross border payments for businesses",
    role: "Product Designer",
    duties: "Product Design, User research, Usability Testing",
    image: project1,
    url: "https://www.wewire.com/",
    description:
      "Enables businesses to send and receive payments internationally quickly and securely, supporting multiple currencies and countries.",
  },
  {
    id: 2,
    name: "BuddyVotes — Modern online and offline e-voting",
    role: "Lead, Product",
    duties: "Design Strategy, Product Design, Branding",
    image: project2,
    url: "https://buddyvotes.io/",
    description:
      "Provides secure, transparent voting solutions that work both online and offline for paid polls.",
  },
  {
    id: 3,
    name: "Amlin — EHR software that does more",
    role: "UI/UX Designer",
    duties: "Design System, Product Design, Userflows",
    image: project3,
    url: "https://ehr-website.vercel.app/",
    description:
      "Electronic Health Record system that streamlines patient data management and clinical workflows for healthcare providers.",
  },
  {
    id: 4,
    name: "MiStore — Storefronts for Modern Sellers",
    role: "UI/UX Designer",
    duties: "Design Strategy, Product Design, Branding",
    image: project4,
    url: "https://www.figma.com/design/5RpDmvLjxrpDo9EqB1GI6u/STOREFRONT-%C2%A9-2025-nick?node-id=0-1&t=2VuraLrbN7ObZF3z-1",
    description:
      "Offers easy-to-launch online storefronts tailored for small and medium sellers to manage products and sales effortlessly.",
  },
  {
    id: 5,
    name: "Pasco — AI for Smarter Exam Preparation",
    role: "PM, User Research, Product Design",
    duties: "",
    image: project5,
    url: "https://apps.apple.com/gh/app/passco/id6737412182",
    description:
      "Provides AI-driven past question practice and personalized study tools to help students prepare effectively for exams.",
  },
  {
    id: 6,
    name: "Ogateway — Seamless Collections & Payouts",
    role: "PM, User Research, Product Design",
    duties: "",
    image: project6,
    url: "https://dash.ogateway.io/auth/login",
    description:
      "Simplifies collections and payouts for businesses with a secure and fast payment infrastructure.",
  },
  {
    id: 7,
    name: "BeyondSend — SMS, USSD & OTP Made Easy",
    role: "UI/UX Designer",
    duties: "Design Strategy, Product Design, Branding",
    image: project7,
    url: null, // No link provided
    description:
      "A communication platform offering SMS, USSD, and OTP services to enable secure and reliable messaging and authentication.",
  },
  {
    id: 8,
    name: "Oseinick.com — Archived Portfolio (2022)",
    role: "PM, User Research, Product Design",
    duties: "UI/UX Designer & Developer",
    image: project8,
    url: "https://oseinick.com/",
    description:
      "Personal portfolio showcasing design projects and professional achievements from 2022.",
  },
];

export default projects;
