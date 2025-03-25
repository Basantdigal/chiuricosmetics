import { Card, CardContent } from "@/components/ui/card";

export default function BenefitsSection() {
  const skinBenefits = [
    {
      title: "Deep Moisturization",
      description: "Deeply hydrates and moisturizes even the driest skin, leaving it soft and supple."
    },
    {
      title: "Anti-Aging Properties",
      description: "Rich in vitamin E and antioxidants that help reduce fine lines and wrinkles."
    },
    {
      title: "Soothes Irritated Skin",
      description: "Calms inflammation and helps treat conditions like eczema and psoriasis."
    },
    {
      title: "Natural Healing",
      description: "Promotes faster healing of wounds, burns, and other skin injuries."
    }
  ];

  const hairBenefits = [
    {
      title: "Strengthens Hair",
      description: "Nourishes hair follicles and helps prevent breakage and split ends."
    },
    {
      title: "Adds Shine",
      description: "Natural ingredients enhance hair's natural luster and shine."
    },
    {
      title: "Conditions Deeply",
      description: "Works as an excellent natural deep conditioner for all hair types."
    },
    {
      title: "Protects from Damage",
      description: "Creates a protective layer against environmental damage and heat styling."
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-emerald-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-emerald-800">
          Benefits of Chiuri Butter
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Skin Benefits */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-emerald-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              For Your Skin
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skinBenefits.map((benefit, index) => (
                <Card key={index} className="border-emerald-100 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-emerald-800 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Hair Benefits */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-emerald-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              For Your Hair
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hairBenefits.map((benefit, index) => (
                <Card key={index} className="border-emerald-100 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-emerald-800 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Chiuri butter is rich in palmitic acid, oleic acid, stearic acid, linoleic acid, and vitamin E,
            making it comparable to shea or cocoa butter in cosmetic applications. Its composition supports its use
            in anti-aging and skin repair, particularly for burns, wounds, and chapped skin.
          </p>
        </div>
      </div>
    </section>
  );
}
