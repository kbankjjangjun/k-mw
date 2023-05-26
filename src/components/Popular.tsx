import { getWgtId } from '@/constants/widget'
import { IPopular } from '@/pages/api/products'
import clsx from 'clsx'
import { useRouter } from 'next/router'

const content = {
  0: 'before:content-["0"]',
  1: 'before:content-["1"]',
  2: 'before:content-["2"]',
  3: 'before:content-["3"]',
  4: 'before:content-["4"]',
  5: 'before:content-["5"]',
  6: 'before:content-["6"]',
  7: 'before:content-["7"]',
  8: 'before:content-["8"]',
  9: 'before:content-["9"]',
  10: 'before:content-["10"]',
} as const

export default function Popular({
  pdRcmdFavSvrList2: pdRcmdFavSvrList2,
}: {
  pdRcmdFavSvrList2: IPopular[]
}) {
  const router = useRouter()
  const handleClick = (p: IPopular) => {
    router.push(`/products/${getWgtId(p.menuId as any)}`) // TODO: menuId type 수정
  }
  return (
    <>
      <div className="px-10 pt-8 pb-4">
        <div className="text-2xl font-bold">인기상품 TOP 5</div>
      </div>

      <ul className="px-10 pb-10">
        {pdRcmdFavSvrList2.map((p: IPopular, index: number) => (
          <li
            key={p.pdSqn}
            className="border-t-slate-300  border-t first:border-none"
            onClick={() => handleClick(p)}
          >
            <a
              className={clsx(
                `relative flex items-center px-4 py-6`,
                `before:absolute before:top-6 before:-left-4 before:w-6 before:h-6 before:font-bold before:text-2xl before:text-center before:text-blue-600`,
                content[index + 1]
              )}
            >
              <em className="w-full min-w-0">
                <span className="mt-0 text-lg font-bold block w-full whitespace-nowrap overflow-hidden text-ellipsis">
                  {p.fnclNm}
                </span>
                <span className="block mt-1 w-full text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                  {p.mktDesc}
                </span>
              </em>

              {p.btnNm && (
                <span className="ml-auto flex-shrink-0 block p-1.5 text-xs text-[#0050ff] bg-blue-100 rounded-2xl">
                  {p.btnNm}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
