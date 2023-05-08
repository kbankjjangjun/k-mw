import {
  ColorValue,
  BgColorValue,
  bgColorVariants,
  colorVariants,
} from '@/constants/colors'
import { globalDataContext } from '@/pages/_app'
import clsx from 'clsx'
import { useContext } from 'react'

import { openKbankApp } from '@/utils/link'

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
    openKbankApp("PBKMAN000000", "", "")
  }

  return (
    <div
      onClick={goToAppStore}
      className={clsx('fixed', 'bottom-0', 'w-full', 'text-center')}
    >
      <div
        className={clsx('m-2', 'rounded-md', 'z-10',  'bg-k-lime')}
      >
        <button
          className={clsx('p-3', 'font-bold', 'text-lg', 'text-black')}
        >
          {title}
        </button>
      </div>
    </div>
  )
}
