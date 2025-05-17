'use client'

import { Earth, Mail } from 'lucide-react'
import FacebookIcon from '../icons/facebook'
import InstagramIcon from '../icons/instagram'

export default function FloatingButtons() {
  return (
    <div className="group fixed top-1/2 -translate-y-1/2 right-6  flex items-end justify-end w-24 h-24 z-20">
      <div className="text-white shadow-xl flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-gradient-to-r bg-primary z-50 absolute">
        <Earth className="size-4 sm:size-5 group-hover:rotate-90 transition-all duration-[0.6s]" />
      </div>

      <div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16 flex p-2 hover:p-3 bg-[#0866ff] scale-100 hover:opacity-80 text-white">
        <a href="https://www.facebook.com/" target="_blank">
          <FacebookIcon className="size-5" />
        </a>
      </div>

      <div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16 flex p-2 hover:p-3 bg-[#f7c240] hover:opacity-80  text-white">
        <Mail className="size-5" />
      </div>

      <div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14 flex p-2 hover:p-3 bg-[#f54d46] hover:opacity-80 text-white">
        <InstagramIcon className="size-5" />
      </div>
      {/* <div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-0 group-hover:scale-100 group-hover:translate-x-[-3.5rem] group-hover:translate-y-[3.5rem] flex p-2 hover:p-3 bg-red-300 hover:bg-red-400 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div> */}
    </div>
  )
}
