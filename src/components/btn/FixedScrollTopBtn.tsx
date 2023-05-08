import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function FixedScrollTopBtn() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const handldClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      {isVisible && (
        <button
          className="block fixed right-5 bottom-5 w-10 h-10 z-20"
          onClick={handldClick}
        >
          <Image
            // src={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/reform/btn/btn_top.png`} TODO: 원상복구
            src="/images/btn_top.png"
            alt="scroll top button"
            width="88"
            height="88"
          />
        </button>
      )}
    </>
  )
}
