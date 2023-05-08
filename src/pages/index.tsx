import Head from 'next/head'
import ImageCard from '@/components/card/ImageCard'
import FixedBottomCTA from '@/components/btn/FixedBottomCTA'
import Layout from '@/components/layout/layout'

interface Props {
  mweb_bdu: string
  mweb_sid: string
  banners: IBanner[]
}

export interface IBanner {
  key: string
  title: string
  titleKeyword: string
  subTitle: string
  backgroundImgUrl: string
}

export async function getServerSideProps() {
  const datas = require('/public/datas/main.json')

  return {
    props: {
      ...datas,
    },
  }
}

export default function Home({ mweb_bdu, mweb_sid, banners }: Props) {
  return (
    <Layout>
      <Head>
        <title>케이뱅크</title>
        <meta charSet="utf-8" />
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
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta
          property="og:url"
          content="https://m.kbankcorp.co.kr/ib20/mnu/MWBMAN000000" // TODO: 수정
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="케이뱅크(Kbank) - make money" />
        <meta
          property="og:description"
          content="우리는 모두 부자가 될 권리가 있다"
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/bim/Kbank_kakao_og.png`}
        />
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/favicon_16px.png`}
          sizes="16x16"
        />
        <link rel="icon" href="/resource/img/favicon_96px.png" sizes="96x96" />
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/favicon_120px.png`}
          sizes="120x120"
        />
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/favicon_256px.png`}
          sizes="256x256"
        />
      </Head>

      {banners.map((banner: IBanner) => (
        <ImageCard key={banner.key} banner={banner} />
      ))}

      <FixedBottomCTA title="앱 다운로드" color="black" bgColor="lime" />
    </Layout>
  )
}
