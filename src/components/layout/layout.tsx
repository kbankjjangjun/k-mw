import { Header, Footer } from '@/components'
import FixedScrollTopBtn from '@/components/btn/FixedScrollTopBtn'
import { css } from '@emotion/react'

export default function Layout({ children, footerType }: any) {
  return (
    <>
      <Header />
      <main
        css={css`
          padding-top: 60px;
        `}
      >
        {children}
      </main>
      <Footer type={footerType} />
      <FixedScrollTopBtn />
    </>
  )
}
