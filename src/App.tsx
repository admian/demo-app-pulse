import { useState } from 'react'

const features = [
  {
    title: 'Smart Workout Plans',
    desc: 'AI adapts your training based on recovery, goals, and performance data.',
    color: 'from-rose-500 to-orange-500',
  },
  {
    title: 'Sleep & Recovery',
    desc: 'Track sleep stages and get personalized rest recommendations.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Nutrition Tracking',
    desc: 'Log meals effortlessly with barcode scan and macro breakdowns.',
    color: 'from-emerald-500 to-teal-500',
  },
]

const testimonials = [
  {
    quote: 'Lost 15 lbs in 3 months. The daily reminders and progress charts kept me accountable.',
    name: 'Sarah M.',
    role: 'Marathon runner',
  },
  {
    quote: 'Finally an app that connects workouts, sleep, and food in one place. Game changer.',
    name: 'James L.',
    role: 'Software engineer',
  },
  {
    quote: 'The interface is beautiful and actually makes me want to open it every morning.',
    name: 'Priya K.',
    role: 'Yoga instructor',
  },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function App() {
  const [toast, setToast] = useState<string | null>(null)

  const showToast = (message: string) => {
    setToast(message)
    window.setTimeout(() => setToast(null), 3200)
  }

  const handleDownload = (store: string) => {
    showToast(`${store} download — This is a portfolio demo. App not available.`)
    scrollTo('download')
  }

  const handleTrialClick = (source: string) => {
    showToast(`Thanks for your interest! (${source}) — This is a portfolio demo.`)
    scrollTo('download')
  }

  const handleFeatureClick = (title: string) => {
    showToast(`${title} — explore this feature in the full app.`)
  }

  return (
    <div className="min-h-screen bg-[#fefefe] text-slate-800">
      {/* Toast */}
      {toast && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-[100] max-w-sm -translate-x-1/2 rounded-xl border border-rose-200 bg-white px-5 py-3 text-sm text-slate-800 shadow-xl"
        >
          {toast}
        </div>
      )}

      {/* Nav */}
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xl font-extrabold tracking-tight"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 text-white">
              P
            </span>
            Pulse
          </button>
          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <button type="button" onClick={() => scrollTo('features')} className="transition hover:text-slate-900">
              Features
            </button>
            <button type="button" onClick={() => scrollTo('reviews')} className="transition hover:text-slate-900">
              Reviews
            </button>
            <button type="button" onClick={() => scrollTo('download')} className="transition hover:text-slate-900">
              Download
            </button>
          </nav>
          <button
            type="button"
            onClick={() => handleDownload('App Store')}
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Get the app
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-28 lg:pt-32">
        <div className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-rose-200/40 blur-[100px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-200/30 blur-[100px]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-xs font-semibold text-rose-600">
              🏆 #1 Health App 2026
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Your body.<br />
              <span className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
                Your data.
              </span>
              <br />
              Your progress.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-slate-600">
              Pulse unifies workouts, nutrition, and recovery into one intelligent companion —
              so you always know what to do next.
            </p>
            <div id="download" className="scroll-mt-24 mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => handleDownload('App Store')}
                className="flex items-center gap-3 rounded-2xl bg-slate-900 px-6 py-3.5 text-white transition hover:bg-slate-800"
              >
                <span className="text-2xl">🍎</span>
                <div className="text-left">
                  <p className="text-[10px] uppercase opacity-70">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </button>
              <button
                type="button"
                onClick={() => handleDownload('Google Play')}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 transition hover:bg-slate-50"
              >
                <span className="text-2xl">▶️</span>
                <div className="text-left">
                  <p className="text-[10px] uppercase text-slate-500">Get it on</p>
                  <p className="text-sm font-semibold text-slate-900">Google Play</p>
                </div>
              </button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {['🧑', '👩', '🧔', '👱'].map((emoji, i) => (
                  <span
                    key={i}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-sm"
                  >
                    {emoji}
                  </span>
                ))}
              </div>
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">500K+</span> active users worldwide
              </p>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative mx-auto w-[280px] rounded-[3rem] border-[8px] border-slate-900 bg-slate-900 p-2 shadow-2xl shadow-rose-500/20 sm:w-[300px]">
              <div className="overflow-hidden rounded-[2.4rem] bg-white">
                <div className="bg-gradient-to-br from-rose-500 to-orange-500 px-6 pb-8 pt-12 text-white">
                  <p className="text-sm opacity-80">Good morning 👋</p>
                  <p className="mt-1 text-2xl font-bold">Ready to move?</p>
                </div>
                <div className="space-y-4 p-5">
                  <div className="rounded-2xl bg-rose-50 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-slate-800">Today&apos;s workout</p>
                      <span className="rounded-full bg-rose-500 px-2 py-0.5 text-xs text-white">45 min</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">Upper body strength</p>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-rose-100">
                      <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-rose-500 to-orange-500" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-slate-50 p-3 text-center">
                      <p className="text-lg font-bold text-slate-900">7.2h</p>
                      <p className="text-[10px] text-slate-500">Sleep</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-3 text-center">
                      <p className="text-lg font-bold text-slate-900">842</p>
                      <p className="text-[10px] text-slate-500">Calories</p>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 p-4">
                    <p className="text-xs font-semibold text-emerald-700">Recovery score</p>
                    <p className="mt-1 text-2xl font-bold text-emerald-600">87%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-24 bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Everything your fitness journey needs
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              One app to plan, track, and optimize — no more juggling five different tools.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {features.map((f) => (
              <button
                key={f.title}
                type="button"
                onClick={() => handleFeatureClick(f.title)}
                className="rounded-3xl bg-white p-8 text-left shadow-sm transition hover:shadow-md"
              >
                <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${f.color} text-xl text-white shadow-lg`}>
                  ✦
                </div>
                <h3 className="text-xl font-bold text-slate-900">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 rounded-3xl bg-gradient-to-r from-rose-500 to-orange-500 px-8 py-12 text-white md:grid-cols-4">
          {[
            { value: '500K+', label: 'Downloads' },
            { value: '4.8★', label: 'App Store' },
            { value: '12M', label: 'Workouts logged' },
            { value: '98%', label: 'Would recommend' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold">{s.value}</p>
              <p className="mt-1 text-sm text-white/80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">Loved by real people</h2>
            <p className="mt-4 text-slate-600">Join half a million users who transformed their habits.</p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm"
              >
                <p className="text-sm leading-relaxed text-slate-600">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-orange-400 text-sm font-bold text-white">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-slate-900 px-8 py-16 text-center text-white">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Start your free 7-day trial</h2>
          <p className="mx-auto mt-4 max-w-md text-slate-400">
            No credit card. Cancel anytime. Your healthier self is one tap away.
          </p>
          <button
            type="button"
            onClick={() => handleTrialClick('CTA')}
            className="mt-8 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 px-10 py-4 text-base font-bold shadow-xl shadow-rose-500/30 transition hover:opacity-90"
          >
            Download Pulse — It&apos;s free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Pulse Health. Portfolio demo project.</p>
          <div className="flex gap-6">
            <button type="button" onClick={() => showToast('Privacy policy — portfolio demo only.')} className="hover:text-slate-900">
              Privacy
            </button>
            <button type="button" onClick={() => showToast('Support — portfolio demo only.')} className="hover:text-slate-900">
              Support
            </button>
            <button type="button" onClick={() => showToast('Follow @pulse_demo — fictional brand.')} className="hover:text-slate-900">
              Twitter
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
