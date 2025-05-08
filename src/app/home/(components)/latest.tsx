import { clsx } from 'clsx'
import { Wind } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function LatestSection() {
  const products = [
    {
      id: 1,
      title: 'Family Discount',
      price: 1000,
      imageUrl:
        'https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/room-5-600x800.jpg'
    },
    {
      id: 2,
      title: 'Couples offer',
      price: 500,
      imageUrl:
        'https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/about4.jpg'
    },
    {
      id: 3,
      title: 'Tripple Room',
      price: 800,
      imageUrl:
        'https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/room-6-600x800.jpg'
    },
    {
      id: 4,
      title: 'Junior Suite',
      price: 800,
      imageUrl:
        'https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/cta-bg-1100x550.jpg'
    },
    {
      id: 5,
      title: 'Deluxe Room',
      price: 800,
      imageUrl:
        'https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/room-2-1100x550.jpg'
    }
  ]
  return (
    <section className="SpecialOffer py-5 md:py-10 relative overflow-hidden">
      <div className="container m-auto px-4 relative">
        <div className="mx-auto max-w-7xl px-0 md:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <span className="inline-flex items-center gap-2 px-4 text-xl text-primary border-b-1 border-primary mb-0 md:mb-2">
              <Wind className="size-5 rotate-180" />
              Latest
              <Wind className="size-5" />
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Choose Our Top Services
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 pt-5 md:pt-10">
            {products.map((item, index) => (
              <div
                key={item.id}
                className={clsx(
                  "relative after:bg-linear-to-b after:from-[#00000024] after:to-[#0000005c] overflow-hidden after:w-full after:h-full after:absolute after:top-0 after:left-0 after:content-['']",
                  [
                    index < 3 &&
                      'col-span-3 lg:col-span-2 h-[20rem] lg:h-[25rem]',
                    index >= 3 && 'col-span-3 h-[20rem]',
                    index === products.length - 1 && 'hidden lg:block'
                  ]
                )}
              >
                <Image
                  alt="latest"
                  width={0}
                  height={0}
                  sizes="100vw"
                  src={item.imageUrl}
                  className="w-full h-full object-cover"
                />
                <div className="w-full text-right transition-all duration-300 ease-in-out text-xl px-6 absolute z-1 left-0 bottom-6">
                  <Link
                    href="/"
                    className="block text-md lg:text-2xl text-white"
                  >
                    {item.title}
                  </Link>
                  <p className="text-white/80 text-sm">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestSection
