import Navbar from '../components/Navbar'
import AIWidget from '../components/AIWidget'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 px-4 py-10 max-w-4xl mx-auto space-y-12">
        <section className="text-center">
          <h1 className="text-3xl font-bold mb-2">让小白也能看懂财报</h1>
          <p className="text-gray-600">财明白是一个为新手投资者打造的可视化财报分析与模拟平台</p>
        </section>

        <section className="text-center">
          <div className="bg-gray-200 h-60 rounded-xl flex items-center justify-center text-gray-500 text-lg">
            视频演示占位图
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">适合谁使用？</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>没有财务背景但想学会选股的投资者</li>
            <li>想通过实战训练提升眼光的小白</li>
            <li>热爱学习、希望长期积累分析力的人</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">怎么使用财明白？</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>选择你感兴趣的股票或AI推荐</li>
            <li>查看图表 + 指标 + 白话解读</li>
            <li>一键进入模拟训练，记录并回测</li>
          </ol>
        </section>
      </main>
      <footer className="bg-gray-100 text-gray-500 text-sm text-center p-4">
        本平台仅用于教育演示，不构成投资建议。
      </footer>
      <AIWidget />
    </div>
  )
}
