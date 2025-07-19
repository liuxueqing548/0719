import Navbar from '../components/Navbar'
import AIWidget from '../components/AIWidget'

export default function Simulator() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-10 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">模拟训练页面</h1>
        <p className="text-gray-600">此处将支持历史场景回测、策略模拟、AI反馈报告。</p>
      </main>
      <footer className="bg-gray-100 text-gray-500 text-sm text-center p-4">
        本平台仅用于教育演示，不构成投资建议。
      </footer>
      <AIWidget />
    </div>
  )
}
