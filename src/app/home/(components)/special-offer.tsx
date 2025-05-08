import { Wind } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function SpecialOfferSection() {
  const offers = [
    {
      id: 1,
      title: 'Family Discount',
      imageUrl:
        'https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/service1-550x550.jpg'
    },
    {
      id: 2,
      title: 'Couples offer',
      imageUrl:
        'https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/service2-550x550.jpg'
    },
    {
      id: 3,
      title: 'Buy One Get One',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1661766077694-6e3750b0fb97?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]

  return (
    <section className="special-offer pt-10 pb-5 md:pt-20 md:pb-10 relative overflow-hidden">
      <div className="container m-auto px-4 relative">
        <div className="mx-auto max-w-7xl px-0 md:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <span className="inline-flex items-center gap-2 px-4 text-xl text-primary border-b-1 border-primary mb-0 md:mb-2">
              <Wind className="size-5 rotate-180" />
              What we offer
              <Wind className="size-5" />
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold ">
              Get Our Special Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-5 md:pt-10 md:grid-cols-2 lg:grid-cols-3">
            {offers.map((item) => (
              <div key={item.id} className="relative">
                <Image
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  src={item.imageUrl}
                  className="w-full h-[20rem] object-cover"
                />
                <div className="w-3/5 hover:w-full transition-all duration-300 ease-in-out text-xl bg-[#f7f3eecc] dark:bg-[#000000a3] px-4 py-4 absolute left-0 bottom-6">
                  <Link
                    href="/"
                    className="block text-center text-md lg:text-lg"
                  >
                    {item.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOfferSection
