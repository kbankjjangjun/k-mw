import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { IProductTab } from '../api/products'

import 'swiper/css'

import { Swiper, SwiperSlide } from 'swiper/react'
import Layout from '@/components/layout/layout'

export async function getServerSideProps() {
  let data

  // try {
  //   data = await request<any>('/products-list')
  // } catch (error: any) {
  //   return {
  //     props: {
  //       error: {
  //         statusCode: 500,
  //         message: JSON.stringify(error.message),
  //       },
  //     },
  //   }
  // }

  const datas = require('/public/datas/products.json') // 스테이징 모웹 데이터 뽑아낸 것

  return {
    props: {
      ...datas,
    },
  }
}

export default function ProductsList({
  tabList,
  topPdmngtList,
  MnPdMngtList,
  midPdmngtList,
}: any) {
  const router = useRouter()

  const swiperRef = useRef<null | any>(null)

  const [type, setType] = useState(router.query.id || '100')

  const [midType, setMidType] = useState('전체')

  const handleTabClick = (id: string) => {
    setType(id)
    setMidType('전체')
  }

  const handleMidTypeClick = (id: string) => {
    setMidType(id)
  }

  useEffect(() => {
    const swiper = swiperRef.current as any
    swiper.slideTo(Number(type) / 100 - 1)
  }, [type])

  return (
    <Layout>
      <div className="pt-10">
        <div className="fixed top-14 z-10 h-12 border-b-2 border-b-gray-100">
          <ul className="bg-white overflow-x-auto flex scrollbar-hide">
            {tabList.map((tab: IProductTab) => (
              <li
                className={`box-border tab-item first:ml-6 pt-0 pr-0 mr-4 relative h-auto text-center flex-shrink-0 border-b-2 ${
                  type === tab.CMN_CD_DTL_ID
                    ? 'border-b-black'
                    : 'border-b-transparent'
                }`}
                onClick={() => handleTabClick(tab.CMN_CD_DTL_ID)}
                slide-tab-item=""
                key={tab.CMN_CD_DTL_ID}
              >
                <a
                  className={`tab-link h-auto text-lg  font-medium p-2 flex w-full items-center ${
                    tab.CMN_CD_DTL_ID === type
                      ? 'text-black font-bold'
                      : 'text-gray-400'
                  }`}
                  href="#none"
                  role="button"
                  id="pdList100"
                  data-tab-cd="100"
                  data-index="0"
                >
                  <span className="txt">{tab.CMN_CD_NM}</span>
                </a>
              </li>
            ))}
            <li
              className="tabline"
              aria-hidden="true"
              style={{ left: '145px', width: '44px' }}
            ></li>
          </ul>
        </div>
        <div className="component-tab no-space type-extend mt-3 p-0 flex">
          <div className="tab-group ui-tab p-0 overflow-hidden">
            <div className="tab-round-group relative w-full h-auto">
              <div className="tab-list-type ui-tab-nav sort-navi pl-0 overflow-visible py-4 h-auto flex flex-nowrap flex-row items-start">
                <ul
                  className="tab-list-col overflow-x-auto pr-4 w-full flex items-center scrollbar-hide"
                  role="tablist"
                  id="midList"
                >
                  <li
                    className="list-item ml-4 mr-3 pt-0 relative h-auto text-center flex-shrink-0"
                    onClick={() => handleMidTypeClick('전체')}
                  >
                    <a
                      className={`tab-link  padding px-4 py-4 h-6 rounded-md font-semibold flex flex-auto w-full items-center ${
                        midType === '전체'
                          ? 'bg-black text-white'
                          : 'text-black border-2 border-grey-100'
                      }`}
                      href="#"
                    >
                      <span className="txt">전체</span>
                    </a>
                  </li>

                  {midPdmngtList.map((p: any, index: number) => (
                    <li
                      key={index}
                      className={`list-item pt-0 mr-3 relative h-auto text-center flex-shrink-0 rounded-md ${
                        type !== p.dtlId ? 'hidden' : ''
                      } ${
                        midType === p.hgNm
                          ? 'bg-black text-white'
                          : 'text-black border-2 border-grey-100'
                      }`}
                      data-top-cd={p.dtlId}
                      data-mid-hgnm={p.hgNm}
                      onClick={() => handleMidTypeClick(p.hgNm)}
                    >
                      <a
                        className={`px-4 py-4 h-6 font-semibold flex flex-auto items-center`}
                        href="#"
                        role="button"
                      >
                        <span>{p.hgNm}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          autoHeight
          onSlideChange={(s) => setType(((s.activeIndex + 1) * 100).toString())}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
        >
          {topPdmngtList.map((p: any, index: number) => (
            <SwiperSlide key={index}>
              {p.topPdList
                .filter((pd1: any) => {
                  if (midType === '전체') return pd1
                  else return pd1.hgNm === midType
                })
                .map((pd: any) => (
                  <div className="block padding px-6" key={pd.hgNm}>
                    <div className="row-cont pt-4">
                      <div className="title-group">
                        <div className="mb-0 text-2xl font-bold">{pd.hgNm}</div>
                      </div>
                    </div>
                    <div className="prd-data-list pb-10">
                      <ul>
                        {pd.pdMallList.map((pm: any, index: number) => (
                          <li key={index} className="py-4">
                            <a className="flex py-4 border-b-2 border-b-gray-100">
                              <div
                                className={`img-figure relative pr-8`} // fnclPdDsCd가 '04'이면 card-type 추가
                              >
                                {pm.rprsImgFileNm && (
                                  <Image
                                    src={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/${pm.rprsImgFileNm}`}
                                    width={48}
                                    height={48}
                                    alt=""
                                  />
                                )}
                                {/* // TODO:쓸모 없는 듯? */}
                                <div className="bg-panel"></div>
                              </div>
                              <div className="title-field-01 flex-1 overflow-hidden">
                                <em className="flex  items-center">
                                  <span className="tit-prd font-bold text-2xl">
                                    {pm.chnlPdNm}
                                  </span>
                                  {pm.pdListBdg1 && (
                                    <span className="ico-new inline-block text-sm ml-2 p-1 text-white bg-blue-600 rounded-full">
                                      {pm.pdListBdg1}
                                    </span>
                                  )}

                                  {pm.pdListBdg2 && (
                                    <div className="ico-new-line ml-2 text-sm text-blue-600 border-2 p-1 border-blue-600 inline-block rounded-2xl">
                                      {pm.pdListBdg2}
                                    </div>
                                  )}
                                </em>
                                <div className="txt-lv02 mt-1 text-gray-600">
                                  {pm.mainTit}
                                </div>
                                <div className="txt-lv02 mt-1 text-gray-600 ">
                                  {pm.fnclPdDsCd === '01' ? (
                                    <>
                                      <span className="text-blue-500 pr-1 align-middle">
                                        {pm.intrTppoCntnt}
                                      </span>
                                      <span className="text-blue-500 font-bold text-lg pr-1 align-middle">
                                        {pm.maxRate}
                                      </span>
                                      <span className="period ml-0 text-blue-600 align-middle">
                                        {pm.rtTrmInfo}
                                      </span>
                                    </>
                                  ) : pm.fnclPdDsCd === '02' ? (
                                    <>
                                      {pm.intrTppoCntnt != null &&
                                        pm.rate != null && (
                                          <>
                                            <span className="text-blue-600 text-sm">
                                              {pm.intrTppoCntnt}
                                            </span>
                                            <span className="text-blue-600 font-bold">
                                              {pm.rate}
                                            </span>
                                          </>
                                        )}

                                      {pm.lmtDesc != null &&
                                        pm.lmtInfo != null && (
                                          <>
                                            <span
                                              className={`text-blue-600 text-sm ${
                                                pm.rate && 'ml-4'
                                              }`}
                                            >
                                              {pm.lmtDesc}
                                            </span>
                                            <span className="text-blue-600 font-bold">
                                              {pm.lmtInfo}
                                            </span>
                                          </>
                                        )}
                                    </>
                                  ) : (
                                    <>
                                      <span>{pm.intrTppoCntnt}</span>
                                      {pm.rtInfo && <span>{pm.rtInfo}</span>}
                                    </>
                                  )}
                                </div>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Layout>
  )
}
