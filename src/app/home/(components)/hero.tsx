import { Star } from 'lucide-react'

function HeroSection() {
  return (
    <section className="hero relative after:bg-linear-to-b after:from-[#000000] after:to-[#00000024] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:content-['']">
      <div className="bg-[url(https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/slider-3.jpg)]">
        <div className="container m-auto px-4 relative z-2">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative flex items-center gap-2 px-3 py-2 text-lg">
                  <div className="flex items-center">
                    <Star className="size-5" fill="#fff" />
                    <Star className="size-5" fill="#fff" />
                    <Star className="size-5" fill="#fff" />
                    <Star className="size-5" fill="#fff" />
                    <Star className="size-5" fill="#fff" />
                  </div>
                  <span className="uppercase tracking-widest text-white/80">
                    1000+ happy clients
                  </span>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                  Best Service In the world.
                </h1>
                <p className="mt-8 text-lg font-medium text-white/80 sm:text-xl/8">
                  Discover the ultimate comfort and luxury with our handpicked
                  selection of hotels designed to make your stay unforgettable.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
