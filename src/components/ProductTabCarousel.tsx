import { IProductTab } from '@/pages/api/products'
import clsx from 'clsx'
import ProductTab from './ProductTab'

const container = clsx(
  'z-50 sticky top-14 pt-2 bg-white border-b border-b-gray-100'
)

const ul = clsx('overflow-x-auto', 'flex', 'scroll', 'scrollbar-hide')

export default function ProductTabCarousel({
  tabList,
  newBdg,
}: {
  tabList: IProductTab[]
  newBdg: string[]
}) {
  return (
    <div className={container}>
      <ul className={ul}>
        {tabList.map((tab: IProductTab) => (
          <ProductTab
            tab={tab}
            key={tab.CMN_CD_DTL_ID}
            isNew={newBdg.includes(tab.CMN_CD_DTL_ID)}
          />
        ))}
      </ul>
    </div>
  )
}
