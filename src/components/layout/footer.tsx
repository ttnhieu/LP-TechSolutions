import { Globe, Phone } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-white/20">
      <div className="container px-4 m-auto">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-6 my-6">
          <div className="flex flex-col gap-3">
            <h5 className="mb-3 font-semibold text-default-950">About</h5>
            <div className="text-default-600">
              <a href="javascript:void(0);">About Us</a>
            </div>
            <div className="text-default-600">
              <a href="javascript:void(0);">Features</a>
            </div>
            <div className="text-default-600">
              <a href="javascript:void(0);">News</a>
            </div>
            <div className="text-default-600">
              <a href="javascript:void(0);">Careers</a>
            </div>
            <div className="text-default-600">
              <a href="javascript:void(0);">Services</a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h5 className="mb-3 font-semibold text-default-950">Company</h5>
            <div className="text-default-600">
              <a href="javascript:void(0);">Our Team</a>
            </div>
            <div className="text-default-600">
              <a href="javascript:void(0);">Partner with Us</a>
            </div>
            <div className="text-default-600">
              <a href="javascript:void(0);">FAQs</a>
            </div>
            <div className="text-default-600">
              <a href="javascript:void(0);">Blog</a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h5 className="mb-3 font-semibold text-default-950">Support</h5>
            <div className="text-default-600">
              <a href="javascript:void(0);">About</a>
            </div>
            <div className="text-default-600">
              <a href="javascript:void(0);">Support Center</a>
            </div>
            <div className="text-default-600">
              <a href="javascript:void(0);">Feedback</a>
            </div>
            <div className="text-default-600">
              <a href="javascript:void(0);">Contact Us</a>
            </div>
            <div className="text-default-600">
              <a href="javascript:void(0);">Accessibility</a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h5 className="mb-3 font-semibold text-default-950">
              Get in touch
            </h5>
            <div className="text-default-600">
              <a href="javascript:void(0);">(+123) 456 789 123</a>
            </div>
            <div className="text-default-600">
              <a href="javascript:void(0);">example@mail.com</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#!" className="cursor-pointer">
                <Phone />
              </a>
              <a href="#!" className="cursor-pointer">
                <Globe />
              </a>
              <a href="#!" className="cursor-pointer">
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
                  data-lucide="instagram"
                  className="lucide lucide-instagram h-6 w-6 transition-all text-default-600 hover:text-primary"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#!" className="cursor-pointer">
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
                  data-lucide="twitter"
                  className="lucide lucide-twitter h-6 w-6 transition-all text-default-600 hover:text-primary"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="py-6 border-t border-gray-100 dark:border-white/20 lg:flex hidden">
          <div className="container px-4 m-auto">
            <div className="grid lg:grid-cols-2 items-center gap-6">
              <div>
                <p className="text-default-600">
                  2025 Design crafted{' '}
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
