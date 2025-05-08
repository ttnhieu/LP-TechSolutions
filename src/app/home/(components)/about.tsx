import { Button } from '@/components/ui/button'
import { CircleCheckBig, Wind } from 'lucide-react'
import Image from 'next/image'

function AboutSection() {
  // const features = [
  //   {
  //     name: 'Fast Foods',
  //     description: 'Healthy Foods are nutrient-Dense Foods'
  //   },
  //   {
  //     name: 'Healthy Foods',
  //     description: 'Healthy Foods are nutrient-Dense Foods'
  //   },
  //   {
  //     name: 'Fast Delivery',
  //     description: 'Healthy Foods are nutrient-Dense Foods'
  //   },
  //   {
  //     name: 'Considerations',
  //     description:
  //       'Made from natural materials. Grain and color vary with each item.'
  //   }
  // ]

  return (
    <section className="about py-5 md:py-10 bg-[url('https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/image-93.png')] bg-right-bottom bg-no-repeat">
      <div className="container m-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 col-span-1">
            <div className="mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 px-4 text-xl text-primary  border-b-1 border-primary mb-0 md:mb-2">
                <Wind className="size-5 rotate-180" />
                About Us
                <Wind className="size-5" />
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Discover Comfort in Every Booking
              </h2>

              <p className="mt-8 text-xl max-w-md">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots
              </p>

              <p className="mt-6 text-foreground/50">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire.
              </p>

              <div className="mt-8">
                <p className="flex items-center gap-2">
                  <CircleCheckBig className="size-4" /> Introduce best the Hotel
                </p>
                <p className="flex items-center gap-2">
                  <CircleCheckBig className="size-4" /> Booking & their services
                  Booking mission statement or Luxury
                </p>
                <p className="flex items-center gap-2">
                  <CircleCheckBig className="size-4" /> hotel Highlight featured
                  on Booking project
                </p>
                <Button className="mt-10 px-8 py-7 text-lg rounded-none">
                  About more
                </Button>
              </div>
            </div>

            {/* <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-gray-200 dark:border-white/20 pt-4"
                >
                  <dt className="font-semibold">{feature.name}</dt>
                  <dd className="mt-2 text-sm dark:text-white/80">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl> */}
          </div>
          <div className="lg:col-span-5 col-span-1 relative flex">
            <div className="w-full flex items-center justify-end">
              <Image
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                src="https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/about3-550x550.jpg"
                className="w-full lg:w-2/3 h-[18rem] border-10 border-[#f5f5f5] dark:border-[#181818] object-cover"
              />
            </div>
            <div className="hidden lg:block w-1/2 h-[18rem] absolute -z-1 top-[25%] left-[25%] border border-foreground/40 dark:border-white/20"></div>
            <div className="hidden lg:block w-full absolute top-1/2">
              <Image
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                src="https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/about4.jpg"
                className="w-2/3 h-[18rem] border-10 border-[#f5f5f5] dark:border-[#181818] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
