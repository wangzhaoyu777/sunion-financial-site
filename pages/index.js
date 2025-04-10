
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sunion Financial</title>
      </Head>
      <div className="navbar bg-base-100 shadow-md">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-orange-600">Sunion Financial</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a href="#about">关于我</a></li>
            <li><a href="#services">服务</a></li>
            <li><a href="#videos">视频</a></li>
            <li><a href="#contact">联系</a></li>
          </ul>
        </div>
      </div>

      <main className="px-4 max-w-5xl mx-auto space-y-16 py-12">
        <section id="home" className="text-center space-y-4">
          <img src="/profile.jpg" alt="头像" className="w-40 h-40 rounded-full mx-auto" />
          <h1 className="text-4xl font-bold text-orange-700">欢迎来到 Sunion Financial</h1>
          <p className="text-gray-600">我们致力于为家庭与个人提供专业、温暖、可靠的理财服务</p>
        </section>

        <section id="about" className="space-y-2">
          <h2 className="text-3xl font-semibold text-orange-600">关于我</h2>
          <p>我是持牌保险理财顾问，专注于教育储蓄、退休规划与财富传承。通过定制化方案，帮助客户实现家庭财务目标。</p>
          <img src="/about.jpg" alt="生活照" className="rounded-xl w-full max-w-md" />
        </section>

        <section id="services" className="space-y-6">
          <h2 className="text-3xl font-semibold text-orange-600">服务内容</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h3 className="card-title">家庭保险规划</h3>
                <p>为家庭成员建立全面保障，解决疾病、意外、失能等风险。</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h3 className="card-title">教育储蓄计划</h3>
                <p>通过RESP等工具，为孩子未来教育储蓄规划。</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h3 className="card-title">退休与财富传承</h3>
                <p>协助客户构建长期稳健的退休金收入与遗产安排。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="videos">
          <h2 className="text-3xl font-semibold text-orange-600 mb-4">往期视频</h2>
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section id="contact">
          <h2 className="text-3xl font-semibold text-orange-600 mb-4">联系我</h2>
          <form className="form-control space-y-4 max-w-xl">
            <input type="text" placeholder="姓名" className="input input-bordered" />
            <input type="email" placeholder="邮箱" className="input input-bordered" />
            <input type="tel" placeholder="电话" className="input input-bordered" />
            <textarea className="textarea textarea-bordered" placeholder="留言内容"></textarea>
            <button type="submit" className="btn btn-primary">发送</button>
          </form>
          <div className="mt-6">
            <p>微信：sunion888</p>
            <p>邮箱：youremail@example.com</p>
            <img src="/wechat.png" className="w-40 mt-2" />
          </div>
        </section>
      </main>
    </>
  );
}
