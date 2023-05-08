import { useRouter } from 'next/router'
import Link from 'next/link'

const navItems = [
  { label: '상품', path: '/products/curating', match: 'products' },
  { label: '혜택', path: '/events', match: 'events' },
]

export default function Navbar() {
  const router = useRouter()

  console.log(router.pathname.slice(1).split('/'))

  // sendAMPForEvent("eventzone/event_list/view", {});

  return (
    <nav className="flex justify-between">
      <ul className="flex items-center">
        {navItems.map((item) => (
          <li key={item.path} className="p-4">
            <Link href={item.path} className="font-bold text-[#0f005f]">
              {item.label}
            </Link>
            {router.pathname.includes(item.match) && (
              <div className="absolute w-7 h-1 bg-lime-300"></div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
