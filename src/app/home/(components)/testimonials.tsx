import { Star, Wind } from 'lucide-react'
import Image from 'next/image'

function TestimonialsSection() {
  return (
    <section className="testimonials py-5 md:py-10">
      <div className="container m-auto px-4">
        <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-4 lg:pb-15 pb-10">
          <div className="lg:max-w-[510px] ">
            <span className="inline-flex items-center gap-2 px-4 text-xl text-primary border-b-1 border-primary mb-0 md:mb-2">
              <Wind className="size-5 rotate-180" />
              Testimonials
              <Wind className="size-5" />
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              What They Say About Us
            </h2>
          </div>

          <p className="mt-6 text-gray-400 dark:text-gray-300/60 lg:max-w-[410px]">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>

        <div className="relative overflow-hidden after:absolute after:left-0 after:top-0 after:lg:max-w-[calc(100%-410px)] after:md:max-w-[calc(100%-310px)] after:max-w-[calc(100%-100px)] after:w-full after:h-full after:bg-[url('https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/cta1.jpg')] after:bg-cover after:bg-center after:bg-no-repeat after:z-[-1]">
          <div className="py-10 grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="relative overflow-hidden swiper-wapper lg:col-start-2 border border-[#F2F2F2] dark:border-white/20 lg:p-15 md:p-5 p-3 max-w-[630px] w-full ml-auto shadow-[0px_0px_60px_0px_rgba(0,0,0,0.05)]">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-12">
                  <Image
                    alt="Blog"
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="w-[70px] h-[70px] object-contain border-2 border-primary flex-none rounded-full bg-gray-50"
                  />
                  <div className="flex-auto">
                    <p className="md:text-2xl text-xl font-semibold md:leading-[140%]">
                      Leslie Alexander
                    </p>
                    <p className="truncate text-gray-500 dark:text-gray-200/70">
                      Marketing Manager
                    </p>
                  </div>
                </div>

                <div className="relative px-12">
                  <div className="absolute -top-5 start-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-lucide="quote"
                      className="lucide lucide-quote h-8 w-8 text-primary/50 fill-primary/50 rotate-180"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <div className="absolute -bottom-5 end-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-lucide="quote"
                      className="lucide lucide-quote h-8 w-8 text-primary/50 fill-primary/50"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <p className="text-gray-400 dark:text-gray-300/60">
                    Food is the best. Besides the many and delicious meals, the
                    service is also very good, especially in the very fast
                    delivery. I highly recommend Food to you.
                  </p>
                </div>

                <ul className="flex items-center gap-1 lg:pt-10 pt-5">
                  <li>
                    <Star
                      className="size-6 text-amber-300 fill-amber-300"
                      aria-hidden="true"
                    />
                  </li>
                  <li>
                    <Star
                      className="size-6 text-amber-300 fill-amber-300"
                      aria-hidden="true"
                    />
                  </li>
                  <li>
                    <Star
                      className="size-6 text-amber-300"
                      aria-hidden="true"
                    />
                  </li>
                  <li>
                    <Star
                      className="size-6 text-amber-300"
                      aria-hidden="true"
                    />
                  </li>
                  <li>
                    <Star
                      className="size-6 text-amber-300"
                      aria-hidden="true"
                    />
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-black/20 backdrop-blur-sm absolute top-0 left-0 w-full h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
