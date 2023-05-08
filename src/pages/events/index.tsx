import { css } from '@emotion/react'
import Image from 'next/image'
import request from '@/service/http'
import { useRouter } from 'next/router'
import { IEvent } from '@/pages/api/event'
import Layout from '@/components/layout/layout'

export async function getServerSideProps() {
  let data
  try {
    data = await request<IEvent[]>('/event')
  } catch (error: any) {
    return {
      props: {
        error: {
          statusCode: 500,
          message: JSON.stringify(error.message),
        },
      },
    }
  }

  return {
    props: {
      ...data,
    },
  }
}

export default function EventPage({ events }: { events: IEvent[] }) {
  // document.querySelector('body').classList.add('bgWhite');

  const router = useRouter()

  const handleEvntClick = (e: IEvent) => {
    if (e.BIZ_DS_CD === 'SH') {
      router.push(`/products/${e.EVNT_ID}`)
      return
    }

    if (e.IS_USE_LNK) {
      const url = e.LNK_URL.replace(/&amp;/g, '&')
      if (url == null) return

      if (url.startsWith('http') || url.startsWith('https')) {
        window.open(url, '_blank')
        return
      }

      router.push(url)
    }
  }

  return (
    <Layout>
      <div
        id="content"
        css={css`
          margin-top: 0px;
        `}
      >
        <div className="content type-renewal">
          <div
            // className="pb100"
            css={css`
              padding-bottom: 100px !important;
            `}
          >
            <h2
              className="blind"
              css={css`
                visibility: hidden;
                position: absolute;
                left: -9999em;
                width: 1px;
                height: 1px;
                margin: 0;
                padding: 0;
                background: none;
                font-size: 0;
                line-height: 0;
                text-indent: -9999em;
              `}
            >
              혜택존
            </h2>
            <div
              className="component-tab no-space"
              css={css`
                padding: 0;
              `}
            >
              <div
                className="tab-group"
                css={css`
                  padding: 1rem 0 1rem 0;
                `}
              >
                <div
                  className="tab-content-group"
                  css={css`
                    padding: 1.6rem 0;
                  `}
                >
                  <div className="tab-content">
                    <div className="benefit-list-group">
                      <ul>
                        {events
                          .filter((e: IEvent) => e.END_YN === 'N')
                          .map((e: IEvent) => (
                            <li
                              className="list-item"
                              key={e.EVNT_ID}
                              css={css`
                                display: flex;
                                align-items: center;
                                padding: 2.2rem 2.4rem;
                              `}
                              onClick={() => handleEvntClick(e)}
                            >
                              <div
                                className="img-figure"
                                css={css`
                                  position: relative;
                                  width: 6.6rem;
                                  height: 6.6rem;
                                  border-radius: 50%;
                                `}
                              >
                                <div className="label">
                                  <Image
                                    src="/images/sample001.jpg"
                                    alt=""
                                    width="64"
                                    height="64"
                                    css={css`
                                      position: relative;
                                      width: 6.6rem;
                                      height: 6.6rem;
                                      border: 0.1rem solid #ecedee;
                                      border-radius: 50%;
                                    `}
                                  />
                                </div>
                              </div>
                              <a
                                href="javascript:void(0);"
                                className="tap-link"
                                css={css`
                                  display: flex;
                                  flex: 1;
                                  min-height: 6.6rem;
                                  padding-left: 1.2rem;
                                  align-items: center;
                                `}
                              >
                                <div
                                  className="col-cont"
                                  css={css`
                                    flex: 1;
                                    align-items: center;
                                  `}
                                >
                                  <div
                                    className="txt-eyebrow"
                                    css={css`
                                      font-size: 1.4rem;
                                      line-height: 1.42857;
                                      font-weight: 400;
                                      color: #141414;
                                      word-break: keep-all;
                                    `}
                                  >
                                    {e.TTL_CND}
                                  </div>
                                  <div
                                    className="txt-ttl"
                                    css={css`
                                      font-size: 1.8rem;
                                      line-height: 1.38889;
                                      font-weight: bold;
                                      color: #141414;
                                      word-break: keep-all;
                                    `}
                                  >
                                    {e.TTL_BNFS}
                                    {e.EVNT_TAG && (
                                      <div
                                        className="tag positive"
                                        css={css`
                                          background-color: #6e2fff;

                                          display: inline-flex;
                                          align-items: center;
                                          background-color: #eee;
                                          height: 1.9rem;
                                          border-radius: 1.2rem;
                                          padding: 0 0.8rem;
                                          margin-top: 2px;
                                        `}
                                      >
                                        <span
                                          className="txt"
                                          css={css`
                                            font-size: 1.1rem;
                                            line-height: 1;
                                            font-weight: 400;

                                            color: #0050ff;
                                          `}
                                        >
                                          {e.EVNT_TAG}
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div
                                  className="col-state"
                                  css={css`
                                    width: 1.4rem;
                                  `}
                                >
                                  <i
                                    aria-hidden="true"
                                    className="ico-arrow-link"
                                    css={css`
                                      width: 0.7rem;
                                      height: 1.2rem;
                                      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='4 1 7 12'%3E%3Cpath fill='%239b9b9b' d='M5.67 12.5L5 11.81 9.67 7 5 2.19l.67-.69L11 7z' class='ico-arrow-right'/%3E%3C/svg%3E");
                                      background-size: 0.7rem 1.2rem;

                                      display: inline-block;
                                      vertical-align: middle;
                                      background-repeat: no-repeat;
                                      background-position: center center;
                                    `}
                                  ></i>
                                </div>
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="component-btn"
              css={css`
                padding: 0 2.2rem;
              `}
            >
              <div
                className="btn-group"
                css={css`
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                `}
              >
                <button
                  type="button"
                  className="btn-lv01 divider-gray"
                  css={css`
                    background-color: #eee;
                    color: #0f0060;

                    flex: 1; // TODO: 확인

                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    min-width: 12rem;
                    height: 5rem;
                    border-radius: 1rem;
                    border: none;
                  `}
                >
                  <span
                    className="txt"
                    css={css`
                      font-size: 1.6rem;
                    `}
                  >
                    종료된 혜택
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
