import LogoImage from '../common/logo-image'
import FacebookIcon from '../icons/facebook'
import InstagramIcon from '../icons/instagram'
import GithubIcon from '../icons/github'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="pt-[3rem] md:pt-[6rem] xl:pt-[10rem] relative overflow-hidden bg-hero">
      <div className="absolute left-0 -top-[0.5rem] md:-top-[1.2rem] xl:-top-[3.5rem] w-full h-auto z-10">
        <Image
          alt="hero shape wave"
          width={0}
          height={0}
          sizes="100vw"
          src="/images/shapes/shape_hero_wave_4.svg"
          className="object-contain w-full h-full dark:hidden block scale-x-[-1] scale-y-[-1]"
        />
        <Image
          alt="hero"
          width={0}
          height={0}
          sizes="100vw"
          src="/images/shapes/shape_hero_wave_4_dark.svg"
          className="object-contain w-full h-full hidden dark:block scale-x-[-1] scale-y-[-1]"
        />
      </div>

      <div className="container">
        <div className="grid grid-cols-12 gap-6 my-6">
          <div className="col-span-12 lg:col-span-4 space-y-4">
            <LogoImage />
            <p className="text-foreground/50">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus facere modi possimus dignissimos, aliquam nobis
              eaque?
            </p>
          </div>

          <div className="col-span-6 lg:col-span-2 flex flex-col gap-3">
            <h5 className="text-lg font-semibold">About</h5>
            <div className="text-default-600">
              <a href="javascript:void(0);">Our Team</a>
            </div>
            <div className="text-default-600">
              <a href="javascript:void(0);">Features</a>
            </div>
            <div className="text-default-600">
              <a href="javascript:void(0);">News</a>
            </div>
            <div className="text-default-600">
              <a href="javascript:void(0);">Services</a>
            </div>
          </div>

          <div className="col-span-6 lg:col-span-2 flex flex-col gap-3">
            <h5 className="text-lg font-semibold">Support</h5>

            <div className="text-default-600">
              <a href="javascript:void(0);">Contact Us</a>
            </div>
            <div className="text-default-600">
              <a href="javascript:void(0);">Accessibility</a>
            </div>
            <div className="text-default-600">
              <a href="javascript:void(0);">FAQs</a>
            </div>
            <div className="text-default-600">
              <a href="javascript:void(0);">Blog</a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <Card className="border-none shadow-1 rounded-xl">
              <CardContent className="p-4 lg:p-6">
                <h5 className="text-sm font-semibold text-primary">
                  Contact Information
                </h5>

                <div className="mb-4 mt-2">
                  <h2 className="text-2xl">Ready to get started?</h2>

                  <p className="text-foreground/50 mt-1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {/* <a href="javascript:void(0);" className="cursor-pointer">
                  <Phone />
                </a>
                <a href="javascript:void(0);" className="cursor-pointer">
                  <Globe />
                </a> */}
                  <a
                    href="javascript:void(0);"
                    className="cursor-pointer text-foreground/60 hover:text-foreground transition-all"
                  >
                    <FacebookIcon className="" />
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="cursor-pointer text-foreground/60 hover:text-foreground transition-all"
                  >
                    <InstagramIcon className="" />
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="cursor-pointer text-foreground/60 hover:text-foreground transition-all"
                  >
                    <GithubIcon className="" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="py-6 border-t border-gray-100 dark:border-white/20 lg:flex hidden">
          <div className="container px-4 m-auto">
            <div className="grid lg:grid-cols-2 items-center gap-6">
              <div>
                <p className="text-default-600">
                  2025 Design crafted
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="heart"
                    className="lucide lucide-heart inline h-4 w-4 text-red-500 fill-red-500"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>{' '}
                  by HieuTTN
                </p>
              </div>

              <div className="flex justify-end gap-6">
                <a
                  href="javascript:void(0)"
                  className="text-default-500 font-medium"
                >
                  Terms
                </a>
                <a
                  href="javascript:void(0)"
                  className="text-default-500 font-medium"
                >
                  Privacy
                </a>
                <a
                  href="javascript:void(0)"
                  className="text-default-500 font-medium"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
