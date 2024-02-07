import Image from "next/legacy/image";
import Link from "next/link";
import Hero from "./Components/Hero";
import TrainSection from "./Components/Train";
import HowItWorks from "./Components/HowItWorks";
import StayAhead from "./Components/StayAhead";

export default function Home() {
  return (
<main>
<Hero  />
<TrainSection  />
<HowItWorks  />
<StayAhead  />
<HowItWorks />
  </main>
 


  );
}
