import { useRouter } from 'next/router'
import Image from 'next/image'
import clsx from 'clsx'
import { IProductTab } from '@/pages/api/products'

const contentContainer = clsx(
  'flex flex-col p-0 pt-6 w-20 h-36 font-bold bg-transparent flex-auto items-center font-2xl text-slate-900'
)

export default function ProductTab({ tab, isNew }: any) {
  const list = clsx(
    'first:ml-2 mr-2 text-center relative',
    isNew &&
      'after:z-10 after:absolute  after:top-5 after:right-1 after:rounded-full after:text-sm after:font-bold after:text-white after:bg-red-500 after:content-["N"] after:w-5 after:h-5'
  )

  const router = useRouter()

  const handleTabClick = (tab: IProductTab) => {
    router.push({
      pathname: '/products',
      query: { id: tab.CMN_CD_DTL_ID },
    })
  }
  return (
    <li
      key={tab.CMN_CD_DTL_ID}
      className={list}
      onClick={() => handleTabClick(tab)}
    >
      <div className={contentContainer}>
        <Image
          src={`${process.env.NEXT_PUBLIC_DOMAIN_URL}${tab.CMN_CD_ABRV_NM}`}
          alt="img"
          width="64"
          height="64"
          className="mb-4"
        />
        <span>{tab.CMN_CD_NM}</span>
      </div>
    </li>
  )
}
