import Image from "next/image";
import TextRevealCardPreview from "@/components/Textrevel";
import Astor from "@/components/Astor";
import { SparklesPreview } from "@/components/Sparkel";
import InfiniteMovingCardsDemo from "@/components/Review";
import { GoogleGeminiEffectDemo } from "@/components/Gemini";
import AppleCardsCarouselDemo from "@/components/Glimsump";
export default function Home() {
  return (
    <>
      <SparklesPreview />
      <Astor/>
      <GoogleGeminiEffectDemo />
      
      <InfiniteMovingCardsDemo />
      <AppleCardsCarouselDemo/>
        </>
    
  );
}
