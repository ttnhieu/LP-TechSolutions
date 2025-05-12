import Image from 'next/image'
import Link from 'next/link'

function LogoImage() {
  return (
    <Link href="/" className="w-fit">
      <span className="sr-only">Your Company</span>

      <Image
        src="/images/logo.svg"
        alt="logo"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[2rem] object-contain block dark:hidden"
      />

      <Image
        src="/images/logo-dark.svg"
        alt="logo"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[2rem] object-contain hidden dark:block"
      />
    </Link>
  )
}

export default LogoImage
