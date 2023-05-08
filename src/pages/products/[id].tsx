import request from "@/service/http";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Layout from "@/components/layout/layout";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

// export async function getServerSideProps(context: any) {
//   const { id } = context.query

//   let data
//   try {
//     data = request(`/api/products/${id}`)
//   } catch (error: any) {
//     return {
//       props: {
//         error: {
//           statusCode: 500,
//           message: JSON.stringify(error.message),
//         },
//       },
//     }
//   }

//   return {
//     props: {
//       ...data,
//     },
//   }
// }

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState<any>(null);

  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (id == null) return;

    fetch(`/datas/products/${id}.json`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, [id]);

  if (error) {
    return (
      <Layout>
        <h1>404 Not Found</h1>
      </Layout>
    );
  }

  return (
    <Layout footerType="02" importKbankCss>
      <div className="mobile">
        <div className="content">

          <div className="comCont">
            {/* lon.js, dpt.js에서 id="div_reSales"을 가지고 show, hide 제어 */}
            {data && data.SALES_STOP_CNTNT && (
              <div
                id="div_reSales"
                style={{ display: "none" }}
                className="fnclPdDetail"
                dangerouslySetInnerHTML={{
                  __html: decodeURIComponent(
                    data.SALES_STOP_CNTNT.replace(/\+/g, " ")
                  ).replace(
                    /data-role="animation-item"/g,
                    'data-role="animation-item" class="active"'
                  ),
                }}
              ></div>
            )}

            {data && data.FNCL_PD_DTL_CNTNT && (
              <div
                className="fnclPdDetail"
                dangerouslySetInnerHTML={{
                  __html: decodeURIComponent(
                    data.FNCL_PD_DTL_CNTNT.replace(/\+/g, " ")
                  ).replace(
                    /data-role="animation-item"/g,
                    'data-role="animation-item" class="active"'
                  ),
                }}
              ></div>
            )}

            {data && data.EVNT_URL && (
              <div className="fnclPdDetail">
                <Link href={data.EVNT_URL} className="banner">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/bim/${data.EVNT_BNNR_FILE_NM}`}
                    width="100"
                    height="100"
                    alt="123"
                  />
                </Link>
              </div>
            )}

            {data && data.OUTP_DATA_CNTNT && (
              <div
                className="fnclPdDetail"
                dangerouslySetInnerHTML={{
                  __html: decodeURIComponent(
                    data.OUTP_DATA_CNTNT.replace(/\+/g, " ")
                  )
                    .replace(
                      /data-role="animation-item"/g,
                      'data-role="animation-item" class="active"'
                    )
                    .replace(/\/resource/g, ''),
                }}
              ></div>
            )}

            {data && data.FNCL_PD_SUPPL_CNTNT && (
              <div
                className="fnclPdDetail"
                dangerouslySetInnerHTML={{
                  __html: decodeURIComponent(
                    data.FNCL_PD_SUPPL_CNTNT.replace(/\+/g, " ")
                  ).replace(
                    /data-role="animation-item"/g,
                    'data-role="animation-item" class="active"'
                  ).replace(/\/resource/g, 'https://m.kbanknow.com/resource'),
                }}
              ></div>
            )}
          </div>

          <div className="prd-detail-wrap icon-list mbshow">
            <div className="component-icon-list no-space">
              <div className="icon-list-group bar prd">
                <a className="item-tap" href="#n" id="footerBtnSNS">
                  <i className="ico-prod-01" aria-hidden="true"></i>
                  <span className="txt">공유하기</span>
                </a>
                <a className="item-tap" href="#">
                  <i className="ico-prod-02" aria-hidden="true"></i>
                  <span className="txt">전화상담</span>
                </a>
                <a className="item-tap" href="#n" id="talkCS">
                  <i className="ico-prod-03" aria-hidden="true"></i>
                  <span className="txt">톡상담</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

ProductDetail.getInitialProps = async (ctx: any) => {
  return {
    importKbankCss: true,
  };
};
