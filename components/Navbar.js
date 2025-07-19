import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const { pathname } = useRouter()
  const active = (path) => pathname === path ? 'text-blue-500 font-bold' : 'text-white'

  return (
    <header className="bg-gradient-to-r from-blue-800 to-gray-800 text-white p-4 shadow">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-xl font-semibold">财明白</div>
        <div className="space-x-6">
          <Link href="/" className={active('/')}>首页</Link>
          <Link href="/report" className={active('/report')}>财报分析</Link>
          <Link href="/simulator" className={active('/simulator')}>模拟训练</Link>
        </div>
      </nav>
    </header>
  )
}
