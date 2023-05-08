import { useRouter } from 'next/router'
import Image from 'next/image'

import clsx from 'clsx'

import { ICurating } from '@/pages/api/products'
import { getWgtId } from '@/constants/widget'

const container = clsx(
  'gap-4 snap-x snap-mandatory relative w-full flex overflow-x-auto pb-14 scrollbar-hide'
)

const list = clsx(
  'relative block items-center rounded-lg shadow-md shrink-0 snap-center'
)

export default function Curating({
  pdRcmdFavSvrList1,
}: {
  pdRcmdFavSvrList1: ICurating[]
}) {
  return (
    <ul className={container}>
      <SnapEmptyBox />

      {pdRcmdFavSvrList1.map((c: ICurating) => (
        <FrmCard key={c.pdSqn} c={c} />
      ))}

      <SnapEmptyBox />
    </ul>
  )
}

function SnapEmptyBox() {
  return (
    <li className="snap-center shrink-0">
      <div className="shrink-0 w-4 sm:w-48"></div>
    </li>
  )
}

function FrmCard({ c }: { c: ICurating }) {
  const router = useRouter()
  const handleClick = (c: ICurating) => {
    router.push(`/products/${getWgtId(c.menuId as any)}`) // TODO: menuId type 수정
  }
  return (
    <li className={list} key={c.pdSqn} onClick={() => handleClick(c)}>
      <ImgFigure
        pdBgColr={c.pdBgColr}
        imgFile={c.imgFile}
        fnclNm={c.fnclNm}
        crtDesc={c.crtDesc}
        emgFile={c.emgFile}
      />
      <Info fnclNm={c.fnclNm} mktDesc={c.mktDesc} btnNm={c.btnNm} />
    </li>
  )
}

function ImgFigure({
  pdBgColr,
  imgFile,
  fnclNm,
  crtDesc,
  emgFile,
}: Partial<ICurating>) {
  return (
    <div style={{ backgroundColor: pdBgColr }} className="rounded-t-lg">
      <Image
        src={`${process.env.NEXT_PUBLIC_DOMAIN_URL}${imgFile}`}
        alt={fnclNm!}
        width="325"
        height="195"
        className="rounded-t-lg"
      />

      <Tag crtDesc={crtDesc} emgFile={emgFile} />
    </div>
  )
}

function Info({ fnclNm, mktDesc, btnNm }: Partial<ICurating>) {
  return (
    <div className="relative p-6">
      <em className="font-bold block text-lg w-44 overflow-hidden text-ellipsis whitespace-nowrap">
        {fnclNm}
      </em>
      <span className="w-48 block mt-1 text-neutral-500 overflow-hidden text-ellipsis  whitespace-nowrap">
        {mktDesc}
      </span>
      <span className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-20 p-1 h-8 text-blue-900 bg-gray-200 rounded-lg overflow-hidden text-ellipsis whitespace-nowrap">
        {btnNm}
      </span>
    </div>
  )
}

function Tag({ crtDesc, emgFile }: Partial<ICurating>) {
  if (crtDesc == null) return <></>

  return (
    <p className="absolute top-3 left-3 px-3 py-2 bg-black opacity-8 rounded-2xl overflow-hidden text-ellipsis whitespace-nowrap">
      <span className="text-white">{crtDesc}</span>
      {emgFile && <span> {emgFile}</span>}
    </p>
  )
}
