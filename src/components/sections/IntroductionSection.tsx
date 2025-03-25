import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function IntroductionSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:order-1 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-emerald-800">What is Chiuri Butter?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Chiuri butter, derived from the seeds of the chiuri tree (<span className="italic">Diploknema butyracea</span>),
              is a natural product with roots in the Himalayan foothills. This remarkable butter is extracted
              from seeds of thebutter tree, which grows at altitudes between 300-1500 meters.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Rich in palmitic acid, oleic acid, stearic acid, linoleic acid, and vitamin E, chiuri butter
              offers exceptional moisturizing and healing properties, making it a prized ingredient in both
              traditional practices and modern skincare. Its pale grey color and naturally low odor make it
              ideal for a variety of applications.
            </p>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              View Products
            </Button>
          </div>
          <div className="md:order-2 flex justify-center">
            <div className="relative">
              <div className="relative w-full h-auto" style={{ maxHeight: '400px' }}>
                <Image
                  src="/images/chiuri-fruit.jpg"
                  alt="Chiuri fruit on tree"
                  width={400}
                  height={350}
                  className="rounded-lg shadow-xl object-cover"
                  priority
                />
              </div>
              <div className="bg-emerald-100 p-3 rounded-lg shadow-md">
                <div className="relative w-32 h-32">
                  <Image
                    src="/images/chiuri-flower.jpg"
                    alt="Chiuri flowers"
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
