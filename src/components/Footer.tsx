import Image from 'next/image'
import Link from 'next/link'

const contacts = [
  {
    href: 'tel:1522-1000',
    label: '은행 1522-1000',
  },
  {
    href: 'tel:1522-1155',
    label: '카드 1522-1155',
  },
  {
    href: 'tel:82-2-3778-9111',
    label: '해외 82-2-3778-9111',
  },
]

const etcs = [
  {
    label: '개인정보처리방침',
    href: '/policies/private-info',
    className: 'underline',
  },
  {
    label: '신용정보활용체제',
    href: '/policies/trust-info',
    className: 'underline',
  },
  {
    label: '경영공시',
    href: '/etc/business',
    className: '',
  },
  {
    label: '전자민원접수',
    href: '/etc/customer',
    className: '',
  },
]

const shares = [
  {
    href: 'https://m.facebook.com/kbanknow',
    imgUrl: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/reform/mweb/ic_mw_fb.svg`,
    alt: 'facebook icon',
  },
  {
    href: 'https://blog.naver.com/kbanknow',
    imgUrl: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/reform/mweb/ic_mw_blog.svg`,
    alt: 'naver blog icon',
  },
  {
    href: 'https://youtube.com/kbanknow',
    imgUrl: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource/img/reform/mweb/ic_mw_youtube.svg`,
    alt: 'youtube icon',
  },
]

type FooterType = '01' | '02' | '03'

export default function Footer({ type = '01' }: { type: FooterType }) {
  if (type === '01') {
    return <MainFooter />
  }

  if (type === '02') {
    return <FpmFooter />
  }

  return <></>
}

function FpmFooter() {
  return (
    <div className="footer mwDepth2" style={{ width: '100%' }}>
      <h3 className="footer_logo">
        <Image
          src="https://m.kbanknow.com/resource/img/reform/mweb/footer_logo.png"
          alt="Kbank"
          width="100"
          height="31"
        />
      </h3>
      <div className="csCenter">
        <h3 className="blind">고객센터</h3>
        <ul className="csList">
          <li>은행 1522-1000</li>
          <li>카드 1522-1155</li>
          <li className="overCs">해외 82-2-3778-9111</li>
        </ul>
      </div>
    </div>
  )
}

function MainFooter() {
  return (
    <footer className="pb-10 text-sm">
      <div className="text-gray-400 p-6">
        <h1 className="font-bold text-lg pb-3">고객센터</h1>

        <ul>
          {contacts.map((contact) => (
            <li key={contact.href} className="pb-4">
              <a href={contact.href}>{contact.label}</a>
            </li>
          ))}
        </ul>

        <div className="border-grey-300 border-t py-3"></div>

        <ul>
          {etcs.map(({ href, label, className }) => (
            <li className="pb-3" key={href}>
              <Link href={href} className={`${className}`}>
                <strong>{label}</strong>
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex">
          {shares.map((share) => (
            <li key={share.imgUrl} className="mr-4">
              <Link href={share.href} target="_blank">
                <Image
                  width="36"
                  height="36"
                  src={share.imgUrl}
                  alt={share.alt}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <small>Copyright Kbank. All rights reserved.</small>
        </div>
        <p className="my-4">
          <Image
            width="70"
            height="22"
            src="/images/logo_kbank.png"
            alt="kbank transparent logo"
          />
        </p>
      </div>
    </footer>
  )
}
