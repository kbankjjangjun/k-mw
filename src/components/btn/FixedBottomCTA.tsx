import {
  ColorValue,
  BgColorValue,
  bgColorVariants,
  colorVariants,
} from '@/constants/colors'
import { globalDataContext } from '@/pages/_app'
import clsx from 'clsx'
import { useContext } from 'react'

interface FixedBottomCTAProps {
  title: string
  color?: ColorValue
  bgColor?: BgColorValue
}

export default function FixedBottomCTA({
  title,
  color = 'black',
  bgColor = 'white',
}: FixedBottomCTAProps) {
  const { bdu, sid } = useContext(globalDataContext)
  const goToAppStore = () => {
    console.log(bdu, sid) // TODO: bdu, sid 이용해서 app 설치 이동 url 만들어야 함
    window.open('market://details?id=com.android.chrome', '_blank')
  }

  return (
    <div
      onClick={goToAppStore}
      className={clsx('fixed', 'bottom-0', 'w-full', 'text-center')}
    >
      <div
        className={clsx('m-2', 'rounded-md', 'z-10', bgColorVariants[bgColor])}
      >
        <button
          className={clsx('p-3', 'font-bold', 'text-lg', colorVariants[color])}
        >
          {title}
        </button>
      </div>
    </div>
  )
}
