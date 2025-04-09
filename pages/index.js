
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sunion Financial</title>
      </Head>
      <header className="bg-yellow-100 text-orange-800 py-4 shadow-md sticky top-0 z-50">
        <nav className="max-w-5xl mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-bold">Sunion Financial</h1>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-orange-600">关于我</a></li>
            <li><a href="#services" className="hover:text-orange-600">产品服务</a></li>
            <li><a href="#videos" className="hover:text-orange-600">视频展示</a></li>
            <li><a href="#contact" className="hover:text-orange-600">联系我</a></li>
          </ul>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10 space-y-16">
        <section className="text-center" id="home">
          <img src="/profile.jpg" alt="头像" className="mx-auto rounded-full w-32 h-32 mb-4" />
          <h2 className="text-3xl font-bold mb-2">您好，我是您的保险理财顾问</h2>
          <p className="text-gray-600">帮助家庭规划保障、储蓄与财富传承</p>
        </section>

        <section id="about">
          <h3 className="text-2xl font-semibold mb-2">关于我</h3>
          <p className="text-gray-700">
            我是 Sunion Financial 的持牌顾问，擅长家庭风险保障、教育储蓄、退休金安排与资产传承服务。多年来为众多客户提供定制化方案，深受信赖。
          </p>
          <img src="/about.jpg" alt="生活照" className="rounded-xl mt-4 w-full max-w-md" />
        </section>

        <section id="services">
          <h3 className="text-2xl font-semibold mb-4">产品服务</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white shadow-md rounded-xl p-4">
              <h4 className="font-bold text-orange-700">家庭保险规划</h4>
              <p className="text-sm text-gray-600 mt-2">为家庭成员建立全面保障，应对疾病、意外等风险。</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-4">
              <h4 className="font-bold text-orange-700">教育储蓄计划</h4>
              <p className="text-sm text-gray-600 mt-2">通过 RESP、保险储蓄为孩子教育铺路。</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-4">
              <h4 className="font-bold text-orange-700">退休与传承</h4>
              <p className="text-sm text-gray-600 mt-2">协助构建稳定退休收入与财富延续方案。</p>
            </div>
          </div>
        </section>

        <section id="videos">
          <h3 className="text-2xl font-semibold mb-4">往期视频</h3>
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="视频"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section id="contact">
          <h3 className="text-2xl font-semibold mb-4">联系我</h3>
          <form className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="姓名" className="border rounded p-2" />
            <input type="email" placeholder="邮箱" className="border rounded p-2" />
            <input type="tel" placeholder="电话" className="border rounded p-2" />
            <textarea placeholder="留言内容" className="border rounded p-2 h-32"></textarea>
            <button type="submit" className="bg-orange-500 text-white py-2 rounded hover:bg-orange-600">发送</button>
          </form>
          <div className="mt-6">
            <p>微信：sunion888</p>
            <p>邮箱：youremail@example.com</p>
          </div>
        </section>
      </main>
    </>
  )
}
