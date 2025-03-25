import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative h-screen">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/himalaya-landscape.jpg"
          alt="Himalayan landscape"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
          Chiuri Cosmetics
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white mb-8 max-w-3xl">
          Nature&apos;s Gift from the Himalayas
        </p>
        <p className="text-md md:text-lg text-white mb-8 max-w-2xl">
          Discover the nourishing power of this ancient secret
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md text-lg" size="lg">
          Learn More
        </Button>
      </div>
    </div>
  );
}
