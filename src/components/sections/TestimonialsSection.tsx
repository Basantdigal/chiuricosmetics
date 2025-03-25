import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "I've been using chiuri butter in my skincare routine for a month, and my skin has never felt softer or more nourished. It's truly a game-changer!",
      author: "Sarah K.",
      location: "Bhubaneswar, Indial"
    },
    {
      quote: "As someone with sensitive skin that reacts to almost everything, chiuri butter has been a blessing. It's gentle, yet effective, and I love that it supports local communities.",
      author: "David L.",
      location: "London, UK"
    },
    {
      quote: "The deep conditioning hair mask I make with chiuri butter has transformed my dry, damaged curls. Plus, knowing that it's sustainably sourced makes me feel good about using it.",
      author: "Priya M.",
      location: "Mumbai, India"
    },
    {
      quote: "My grandmother used chiuri butter for everything - cooking, skincare, even candles. I'm happy to see this traditional ingredient getting the recognition it deserves.",
      author: "Ankit S.",
      location: "New York, USA"
    },
    {
      quote: "As a formulator of natural skincare products, I've found chiuri butter to be an exceptional ingredient for balms and creams, providing both ethical sourcing and superior performance.",
      author: "Emma R.",
      location: "Sydney, Australia"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-800">
            What People Are Saying
          </h2>
          <p className="text-lg text-gray-700">
            Discover why people around the world are falling in love with chiuri butter and its amazing benefits.
          </p>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-2">
                  <Card className="border-emerald-100 h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-200" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      <p className="text-gray-700 flex-grow mb-4 italic">
                        "{testimonial.quote}"
                      </p>
                      <div className="mt-auto">
                        <p className="font-semibold text-emerald-700">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            <CarouselPrevious className="relative" />
            <CarouselNext className="relative" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
