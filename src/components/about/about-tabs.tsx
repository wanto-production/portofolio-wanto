'use client';
import { atom, useAtom } from "jotai";
import Link from "next/link";

const tabs = atom('story')

export const NavigationTabs = () => {
  const [activeTab, setActiveTab] = useAtom(tabs);

  const switchTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 z-10 mt-4">
      {['story', 'skills', 'journey', 'interests'].map((tab) => (
        <button
          key={tab}
          onClick={() => switchTab(tab)}
          className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 capitalize ${activeTab === tab
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
            : 'border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white'
            }`}
        >
          {tab}
        </button>
      ))}
    </div>

  )
}

export const SelectionTabs = () => {
  const [activeTab] = useAtom(tabs)
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Story Tab */}
      {activeTab === 'story' && (<StoryTab />)}

      {/* Skills Tab */}
      {activeTab === 'skills' && (<SkillsTab />)}

      {/* Journey Tab */}
      {activeTab === 'journey' && (<JourneyTab />)}

      {/* Interests Tab */}
      {activeTab === 'interests' && (<InterestTab />)}
    </div>
  )
}

export const StoryTab = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-700">
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 p-2">
          My Story
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
            <p>
              My journey started with an old, barely functioning laptop. I first touched programming through Scratch, dragging colorful blocks on screen. Curiosity led me to open VSCode and write my first lines of HTML. Soon, I jumped into React without fully understanding JavaScript — and failed, but kept going.
            </p>
            <p>
              Through persistence and late nights, I gradually built real apps. I fell in love with clean code and fast feedback loops. Today, I proudly craft projects usingTypeScript,NeoVim, and modern frameworks like Nuxt,SvelteKit, andAdonisJS.
            </p>
            <p>
              I’m still learning, still building, and always excited to solve meaningful problems with code.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30">
              Creative Thinker
            </span>
            <span className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm border border-purple-600/30">
              Problem Solver
            </span>
            <span className="px-4 py-2 bg-cyan-600/20 text-cyan-400 rounded-full text-sm border border-cyan-600/30">
              Team Player
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
            <div className="text-center space-y-6">
              <div className="text-6xl">💭</div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                My Philosophy
              </h3>
              <blockquote className="text-gray-300 text-lg italic leading-relaxed">
                "Code is my canvas, and ambition is my fuel."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const SkillsTab = () => {
  const skills = [
    { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-orange-500' },
    { name: 'TypeScript', level: 85, color: 'from-blue-500 to-indigo-500' },
    { name: 'React', level: 75, color: 'from-cyan-500 to-blue-500' },
    { name: 'Qwik', level: 80, color: 'from-purple-500 to-pink-500' },
    { name: 'Svelte', level: 80, color: 'from-orange-500 to-red-500' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'UI/UX Design', level: 70, color: 'from-pink-500 to-purple-500' },
    { name: 'Database', level: 70, color: 'from-indigo-500 to-purple-500' }
  ];

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-700">
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 p-2">
          Skills & Technologies
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Here are the technologies I love working with and my proficiency levels
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={skill.name} className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-white text-lg">{skill.name}</h3>
              <span className="text-gray-400 font-medium">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
              <div
                className={`bg-gradient-to-r ${skill.color} h-full rounded-full transition-all duration-1000 ease-out`}
                style={{
                  width: `${skill.level}%`,
                  animationDelay: `${index * 100}ms`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-gray-700/50">
        <p className="text-gray-300 text-lg">
          🚀 Always learning new technologies and staying up-to-date with the latest trends in web development
        </p>
      </div>
    </div>
  );
}

export const JourneyTab = () => {
  interface Timeline {
    year: string,
    title: string,
    company: string,
    description: string
  }

  const timeline: Timeline[] = [
    // ... data timeline Anda
  ];

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-700">
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 p-2">
          My Journey
        </h2>
        <p className="text-gray-400 text-lg">The path that led me to where I am today</p>
      </div>

      {/* Conditional Rendering */}
      {timeline.length === 0 ? (
        // Empty State
        <div className="max-w-2xl mx-auto text-center py-16">
          <div className="space-y-6">
            {/* Icon */}
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-gray-700 to-gray-600 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            {/* Message */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-300">Journey Coming Soon</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm currently building my professional timeline. Check back soon to see my journey unfold!
              </p>
            </div>

            {/* Optional CTA */}
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.906-1.447l-3.077 1.028a.75.75 0 01-.97-.97l1.028-3.077A8.955 8.955 0 013 12C3 7.582 6.582 4 12 4s8 3.582 8 8z" />
                </svg>
                Let's Connect
              </Link>
            </div>
          </div>
        </div>
      ) : (
        // Timeline Content (existing code)
        <div className="space-y-8 max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-8 group">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                  {item.year}
                </div>
                {index < timeline.length - 1 && (
                  <div className="w-px h-20 bg-gradient-to-b from-gray-600 to-transparent mt-4"></div>
                )}
              </div>
              <div className="flex-1 pb-12">
                <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm group-hover:border-gray-600/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-blue-400 font-semibold mb-3">{item.company}</p>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const InterestTab = () => {
  const interests = [
    { emoji: '🎮', title: 'Gaming', desc: 'Strategy games and indie titles' },
    { emoji: '📚', title: 'Learning', desc: 'Always exploring new tech' },
    { emoji: '☕', title: 'Coffee', desc: 'Fuel for late-night coding' },
    { emoji: '🎵', title: 'Music', desc: 'Lo-fi beats while coding' },
    { emoji: '🌟', title: 'Open Source', desc: 'Contributing to community' },
    { emoji: '🚀', title: 'Innovation', desc: 'Building the future' }
  ];

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-700">
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 p-2">
          Beyond Code
        </h2>
        <p className="text-gray-400 text-lg">What inspires and motivates me outside of programming</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {interests.map((interest) => (
          <div
            key={interest.title}
            className="bg-gray-900/50 rounded-2xl p-6 text-center border border-gray-700/50 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-300 group"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {interest.emoji}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{interest.title}</h3>
            <p className="text-gray-400">{interest.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl p-8 text-center border border-gray-700/50 backdrop-blur-sm">
        <div className="text-4xl mb-4">🎯</div>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Current Focus
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          I'm currently diving deep into performance optimization with Qwik and exploring
          the intersection of AI and web development. Always excited about pushing the
          boundaries of what's possible on the web! 🚀
        </p>
      </div>
    </div>
  );
}
