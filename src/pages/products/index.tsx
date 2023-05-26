import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { IProductTab } from '../api/products'

import 'swiper/css'

import { Swiper, SwiperSlide } from 'swiper/react'
import Layout from '@/components/layout/layout'
import { ProductKey, ProductValue } from '@/types/product'
import clsx from 'clsx'
import Head from 'next/head'

interface Temp {
  dtlId: string
  hgNm: string // ProductValue의 중분류 값 타입으로 만들어서 사용해야 함
  pdMngt: ProductValue
  fnclPdDsCd: string
  pdMallList: any[]
}

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
  midPdmngtList,
}: any) {
  const { query } = useRouter()

  const swiperRef = useRef<null | any>(null)

  const [category, setCategory] = useState<ProductKey>(
    (query.id as ProductKey) || '100'
  ) // 대분류 -> "100"(예적금) | "200"(대출) | "300"(카드) | "400"(제휴) | "500"(보험)

  const [categoryDetail, setCategoryDetail] = useState('전체') // 중분류:

  useEffect(() => {
    const swiper = swiperRef.current as any
    swiper.slideTo(Number(category) / 100 - 1)
  }, [category])

  return (
    <Layout>
      <Head>
        <title>상품 리스트 - 케이뱅크</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="expires" content="0" />
        <meta httpEquiv="pragma" content="no-cache" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0"
        />
        <meta
          name="description"
          content="제1금융권 1호 인터넷전문은행 케이뱅크"
        />
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />
        <meta
          property="og:url"
          content="https://m.kbanknow.com/ib20/mnu/MWBMAN020002"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="케이뱅크(Kbank) - make money" />
        <meta
          property="og:description"
          content="우리는 모두 부자가 될 권리가 있다"
        />
        <meta
          property="og:image"
          content="https://m.kbanknow.com/resource/img/bim/Kbank_kakao_og.png"
        />

        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="pt-10">
        <div className="fixed top-14 z-10 bg-white h-12 w-full">
          <ProductCategory
            tabList={tabList}
            category={category}
            setCategory={setCategory}
            setCategoryDetail={setCategoryDetail}
          />
        </div>

        <div className="py-4">
          <ProductCategoryDetail
            midPdmngtList={midPdmngtList}
            category={category}
            categoryDetail={categoryDetail}
            setCategoryDetail={setCategoryDetail}
          />
        </div>

        <Swiper
          autoHeight
          onSlideChange={(s) =>
            setCategory(((s.activeIndex + 1) * 100).toString() as ProductKey)
          }
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
        >
          {topPdmngtList.map((p: any, index: number) => (
            <SwiperSlide key={index}>
              {/* 중분류 필터링 */}
              {getMatchedProducts(p.topPdList, categoryDetail).map(
                (pd: Temp) => (
                  <div className="px-6" key={pd.hgNm}>
                    <div className="pt-4">
                      <div className="mb-0 text-2xl font-bold">{pd.hgNm}</div>
                    </div>

                    <div className="pb-10">
                      <ul>
                        {pd.pdMallList.map((pm: any, index: number) => (
                          <Product pm={pm} key={index} />
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Layout>
  )
}

function ProductCategory({
  category,
  tabList,
  setCategory,
  setCategoryDetail,
}: {
  category: ProductKey
  setCategory: any
  tabList: IProductTab[]
  setCategoryDetail: any
}) {
  const handleTabClick = (id: ProductKey) => {
    setCategory(id)
    setCategoryDetail('전체')
  }

  return (
    <ul className="flex overflow-x-auto scrollbar-hide">
      {tabList.map((tab: IProductTab) => (
        <li
          className={clsx(
            'box-border first:ml-6 pt-0 pr-0 mr-4 relative h-auto text-center flex-shrink-0 border-b-2',
            category === tab.CMN_CD_DTL_ID
              ? 'border-b-black'
              : 'border-b-transparent'
          )}
          onClick={() => handleTabClick(tab.CMN_CD_DTL_ID)}
          key={tab.CMN_CD_DTL_ID}
        >
          <a
            className={clsx(
              'tab-link h-auto text-lg font-medium p-2 flex w-full items-center',
              tab.CMN_CD_DTL_ID === category
                ? 'text-black font-bold'
                : 'text-gray-400'
            )}
            href="#"
            role="button"
          >
            <span>{tab.CMN_CD_NM}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

function ProductCategoryDetail({
  midPdmngtList,
  categoryDetail,
  category,
  setCategoryDetail,
}: any) {
  return (
    <ul className="overflow-x-auto pr-4 w-full flex items-center scrollbar-hide">
      <li
        className={clsx(
          'ml-4 mr-3 flex-shrink-0 rounded-md border-2',
          categoryDetail === '전체'
            ? 'bg-black text-white'
            : 'bg-white text-black border-grey-100'
        )}
        onClick={() => setCategoryDetail('전체')}
      >
        <a
          className={clsx('p-4 h-6 font-semibold flex items-center rounded-md')}
          href="#"
        >
          <span>전체</span>
        </a>
      </li>

      {midPdmngtList.map((p: any, index: number) => (
        <li
          key={index}
          className={clsx(
            'mr-3 flex-shrink-0 rounded-md border-2',
            categoryDetail === p.hgNm
              ? 'bg-black text-white'
              : 'bg-white text-black border-grey-100',
            category === p.dtlId ? 'visible' : 'hidden'
          )}
          onClick={() => setCategoryDetail(p.hgNm)}
        >
          <a className={`p-4 h-6 font-semibold flex items-center`} href="#">
            <span>{p.hgNm}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

function Product({ pm }: any) {
  return (
    <li className="py-4">
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
        </div>
        <div className="flex-1 overflow-hidden">
          <em className="flex items-center">
            <span className="tit-prd font-bold text-2xl">{pm.chnlPdNm}</span>
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
          <div className="txt-lv02 mt-1 text-gray-600">{pm.mainTit}</div>
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
                {pm.intrTppoCntnt != null && pm.rate != null && (
                  <>
                    <span className="text-blue-600 text-sm">
                      {pm.intrTppoCntnt}
                    </span>
                    <span className="text-blue-600 font-bold">{pm.rate}</span>
                  </>
                )}

                {pm.lmtDesc != null && pm.lmtInfo != null && (
                  <>
                    <span
                      className={`text-blue-600 text-sm ${pm.rate && 'ml-4'}`}
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
  )
}

function getMatchedProducts(topPdList: any, categoryDetail: string) {
  return topPdList.filter((pd: any) => {
    if (categoryDetail === '전체') return pd
    else return pd.hgNm === categoryDetail
  })
}
