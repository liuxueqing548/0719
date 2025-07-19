import Navbar from '../components/Navbar'
import AIWidget from '../components/AIWidget'

export default function Report() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-10 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">财报分析展示页</h1>
        <p className="text-gray-600">这里将展示财报图表、简明解读、术语解释与AI辅助。</p>
      </main>
      <footer className="bg-gray-100 text-gray-500 text-sm text-center p-4">
        本平台仅用于教育演示，不构成投资建议。
      </footer>
      <AIWidget />
    </div>
  )
}
