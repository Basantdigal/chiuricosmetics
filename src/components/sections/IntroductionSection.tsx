import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function IntroductionSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-background text-foreground">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">What is Chiuri Butter?</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Chiuri butter, derived from the seeds of the chiuri tree (<span className="italic">Diploknema butyracea</span>),
              is a natural product with roots in the Himalayan foothills. This remarkable butter is extracted
              from seeds of the butter tree, which grows at altitudes between 300-1500 meters.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Rich in palmitic acid, oleic acid, stearic acid, linoleic acid, and vitamin E, chiuri butter
              offers exceptional moisturizing and healing properties, making it a prized ingredient in both
              traditional practices and modern skincare. Its pale grey color and naturally low odor make it
              ideal for a variety of applications.
            </p>
            <Button size="lg">
              View Products
            </Button>
          </div>
          {/* Image Layout */}
          <div className="md:order-2 flex justify-center items-center">
            <div className="relative w-[400px] h-[350px]">
              {/* Main Image - Use simplified src */}
              <Image
                // --- CHANGE THIS LINE ---
                src="/images/chiuri-fruit.jpg"
                // --- END CHANGE ---
                alt="Chiuri fruit on tree"
                fill
                className="rounded-lg shadow-xl object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              />
              {/* Smaller Image - Use simplified src */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 z-10 border-4 border-background rounded-md shadow-lg">
                <Image 
                src="/chiuricosmetics/images/chiuri-flower.jpg"
                alt="Chiuri flowers"
                fill
                className="rounded-sm object-cover"
                sizes="128px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
