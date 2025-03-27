import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";

export default function UsageSection() {
  const usageData = [
    {
      productType: "Lotions & Creams",
      recommendedUsage: "5 - 20%",
      benefits: "Creates smooth, moisturizing formulations with easy absorption"
    },
    {
      productType: "Balms",
      recommendedUsage: "5 - 100%",
      benefits: "Provides rich barrier protection and deep moisturizing"
    },
    {
      productType: "Bar Soaps",
      recommendedUsage: "5 - 20%",
      benefits: "Adds moisturizing properties to cleansing products"
    },
    {
      productType: "Hair Conditioners",
      recommendedUsage: "1 - 5%",
      benefits: "Improves manageability and adds shine without weighing hair down"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-emerald-800">
          How to Use Chiuri Butter
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 mb-6 md:mb-0">
            <div className="bg-emerald-50 p-6 rounded-xl h-full">
              <div className="relative w-full h-64 mb-6">
                <Image
                  src="public/images/chiuri-butter-raw.jpg"
                  alt="Raw Chiuri Butter"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-emerald-700">Raw Chiuri Butter</h3>
              <p className="text-gray-700 mb-4">
                In its pure form, chiuri butter has a pale grey color and a naturally
                low odor. It melts at body temperature, making it ideal for direct application.
              </p>
              <p className="text-gray-700">
                This natural product is highly versatile and can be used alone or as an
                ingredient in various homemade and commercial formulations.
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <Tabs defaultValue="skin" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="skin">Skin Care</TabsTrigger>
                <TabsTrigger value="hair">Hair Care</TabsTrigger>
                <TabsTrigger value="formulations">Formulations</TabsTrigger>
              </TabsList>

              <TabsContent value="skin" className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-700">Skin Care Applications</h3>
                <ul className="space-y-3 ml-6 mb-4">
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-emerald-100 rounded-full flex-shrink-0 mr-2 mt-1"></span>
                    <span><strong>Daily Moisturizer:</strong> Apply a small amount directly to skin after bathing for deep hydration.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-emerald-100 rounded-full flex-shrink-0 mr-2 mt-1"></span>
                    <span><strong>Lip Balm:</strong> Use as a natural lip balm to heal chapped lips.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-emerald-100 rounded-full flex-shrink-0 mr-2 mt-1"></span>
                    <span><strong>Skin Treatments:</strong> Apply to areas affected by eczema, psoriasis, or dermatitis.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-emerald-100 rounded-full flex-shrink-0 mr-2 mt-1"></span>
                    <span><strong>Wound Healing:</strong> Gently apply to minor cuts, burns, or skin irritations.</span>
                  </li>
                </ul>
                <p className="text-gray-600 italic">For best results, apply to slightly damp skin to lock in moisture.</p>
              </TabsContent>

              <TabsContent value="hair" className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-700">Hair Care Applications</h3>
                <ul className="space-y-3 ml-6 mb-4">
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-emerald-100 rounded-full flex-shrink-0 mr-2 mt-1"></span>
                    <span><strong>Deep Conditioning Mask:</strong> Melt a small amount and apply to damp hair. Cover with a shower cap for 30 minutes before rinsing.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-emerald-100 rounded-full flex-shrink-0 mr-2 mt-1"></span>
                    <span><strong>Anti-Frizz Treatment:</strong> Rub a tiny amount between palms and apply to hair ends to control frizz.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-emerald-100 rounded-full flex-shrink-0 mr-2 mt-1"></span>
                    <span><strong>Scalp Treatment:</strong> Massage melted butter into the scalp to address dryness and flaking.</span>
                  </li>
                </ul>
                <p className="text-gray-600 italic">Start with small amounts to avoid weighing down hair, especially for fine hair types.</p>
              </TabsContent>

              <TabsContent value="formulations" className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-700">Recommended Usage in Formulations</h3>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/3">Product Type</TableHead>
                        <TableHead className="w-1/3">Recommended Usage</TableHead>
                        <TableHead className="w-1/3">Benefits</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {usageData.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.productType}</TableCell>
                          <TableCell>{item.recommendedUsage}</TableCell>
                          <TableCell>{item.benefits}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <p className="text-gray-600 italic mt-4">These percentages are guidelines. Adjust based on desired consistency and properties.</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
