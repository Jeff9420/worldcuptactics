"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-green-950 flex flex-col items-center justify-center px-6 text-center">
      {/* Pitch texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_60px,#fff_60px,#fff_61px)]" />

      <div className="relative z-10 max-w-2xl">
        {/* Badge */}
        <span className="inline-block mb-6 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-green-400 border border-green-700 rounded-full">
          Launching June 2026
        </span>

        {/* Logo / Title */}
        <h1 className="text-5xl sm:text-6xl font-black text-white mb-4 leading-tight">
          World Cup<br />
          <span className="text-green-400">Tactics</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-green-200 mb-3 font-medium">
          AI-powered tactical analysis for every World Cup match — 1930 to 2026.
        </p>
        <p className="text-green-400 text-base mb-10">
          Every goal broken down. Every formation explained. Every story told.
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 text-sm">
          {[
            "⚽ 900+ Match Archive",
            "🧠 AI Tactical Analysis",
            "🎯 Animated Diagrams",
            "⚡ Live 2026 Coverage",
          ].map((f) => (
            <span
              key={f}
              className="px-4 py-2 bg-green-900/60 border border-green-700 rounded-full text-green-200"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Email capture */}
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 rounded-lg bg-green-900/50 border border-green-700 text-white placeholder-green-600 focus:outline-none focus:border-green-400"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-green-400 text-green-950 font-bold rounded-lg hover:bg-green-300 transition-colors whitespace-nowrap"
          >
            Notify Me
          </button>
        </form>
        <p className="mt-3 text-green-700 text-xs">
          No spam. One email when we launch.
        </p>
      </div>
    </main>
  );
}
