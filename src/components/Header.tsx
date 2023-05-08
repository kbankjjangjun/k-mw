import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="z-10 fixed left-0 w-full h-16 bg-white">
      <div className="px-6 h-full">
        <div className="h-full flex justify-between items-center">
          <Link href="/">
            <Image
              width={0}
              height={0}
              alt="kbank logo"
              src="/images/Kbank_logo.svg"
              className="w-16 h-auto"
            ></Image>
          </Link>

          <Navbar />
        </div>
      </div>
    </header>
  )
}
