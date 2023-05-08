import Image from 'next/image'
import { IBanner } from '@/pages'

export default function ImageCard({ banner }: { banner: IBanner }) {
  const handleClick = () => {
    alert('명시한 메뉴로 이동이거나 이벤트로 이동')
  }
  return (
    <div className="relative" onClick={handleClick}>
      <Image
        className="relative w-full"
        src={banner.backgroundImgUrl}
        priority
        width="360"
        height="340"
        alt="배너"
      />

      <div className="absolute bottom-8 left-8 w-44">
        <span className="text-2xl font-bold text-white">
          {banner.title}{' '}
          <span className="text-[#c8f03c]">{banner.titleKeyword} </span>
          <Image
            className="inline-block align-middle w-2 h-auto"
            src={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/reform/mweb/arrow.svg`}
            width={0}
            height={0}
            alt="banner"
          />
        </span>
        <div className="text-white mt-4">{banner.subTitle}</div>
      </div>
    </div>
  )
}
