import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import MainPart1 from "@/components/MainPart1";
import { FEATURES } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <MainPart1/>
      <Camp/>
      <Guide/>
      <Features/>
      <GetApp/>
      
    </div>
  );
}
