import Image from 'next/image'
import { useRouter } from 'next/router'
import { IRecommend } from '@/pages/api/products'
import { getWgtId } from '@/constants/widget'

import { useOverlay } from '@toss/use-overlay'
import BottomSheet from './BottomSheet'
import { openKbankApp } from '@/utils/link'

export default function Recommend({
  pdRcmdFavSvrList3,
}: {
  pdRcmdFavSvrList3: IRecommend[]
}) {
  return (
    <div className="pb-10 px-8 bg-k-deep-blue-500">
      <div className="py-10">
        <Image
          src={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/mmk/main/products/home/PDhome_logo.svg`}
          alt="make money logo"
          width="150"
          height="30"
        />

        <div className="text-white mt-2 font-bold text-3xl">
          부자되는 금융 습관
        </div>
      </div>

      <ul>
        {pdRcmdFavSvrList3.map((r: IRecommend) => (
          <RecommendItem key={r.fnclNm} r={r} />
        ))}
      </ul>
    </div>
  )
}

function RecommendItem({ r }: { r: IRecommend }) {
  const router = useRouter()

  const overlay = useOverlay()

  const handleClick = async (r: IRecommend) => {
    if (r.mwUseYn === 'Y') {
      // TODO: lnkVal 처리 어떻게 하지?
      router.push(`/products/${getWgtId(r.menuId as any)}`) // TODO: menuId type 수정
    } else {
      overlay.open(({ isOpen, close, exit }) => (
        <BottomSheet isOpen={isOpen} close={close}>
          <div className="header">
            <div className="p-2 py-3">
              <h2 className="font-bold text-2xl">케이뱅크 바로가기</h2>
            </div>
          </div>

          <div className="body">
            <div className="p-2 py-3">
              <p>
                케이뱅크 앱에서 해당 서비스를 이용하실 수 있어요.
                <br />
                앱에서 확인하시겠어요?
              </p>
            </div>
          </div>
          <div className="r2popup_footer">
            <div className="r2popupfoot_btnpanel pt-3">
              <button
                className="w-full bg-[#0f0060] text-white rounded-lg h-12"
                onClick={() => openKbankApp('FPMINV020000', '', '')}
              >
                앱 바로가기
              </button>
            </div>
          </div>
        </BottomSheet>
      ))
    }
  }

  return (
    <li
      key={r.fnclNm}
      className="mb-6 last:mb-0 flex items-center p-4 bg-k-deep-blue-300 rounded-lg"
      onClick={() => handleClick(r)}
    >
      <div className="flex">
        <Image
          src={`${process.env.NEXT_PUBLIC_DOMAIN_URL}${r.imgFile}`}
          alt={`${r.fnclNm} logo`}
          width="20"
          height="25"
        />
        <strong className="ml-4 text-xl text-white">{r.fnclNm}</strong>
      </div>

      <Desc mktDesc={r.mktDesc} />
    </li>
  )
}

function Desc({ mktDesc }: { mktDesc?: string }) {
  if (mktDesc == null) return <></>
  return <span className="text-white font-light ml-auto">{mktDesc}</span>
}
