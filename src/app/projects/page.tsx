import type { Metadata } from 'next';
import BlurText from '@/components/react-bits/BlurText';
import LightRays from '@/components/react-bits/LightRays';
import { ProjectGrid, ToggleFilter } from '@/components/projects/filter-container';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen text-center flex flex-col items-center justify-center gap-8 bg-[radial-gradient(circle_at_center,_#1a1a1a,_#0c0c0c)] overflow-hidden">
        {/* Background Rays */}
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, zIndex: 1 }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffff"
            raysSpeed={1.0}
            lightSpread={0.5}
            rayLength={0.8}
            followMouse
            mouseInfluence={0.06}
            noiseAmount={0.15}
            distortion={0.02}
            className="custom-rays pointer-events-none"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-8">
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <BlurText
              text="My Projects"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-poppins text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-gray-100 via-gray-400 to-gray-200 bg-clip-text text-transparent p-3"
            />

            <p className="font-inter text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A collection of projects I've worked on, from web applications to mobile apps and everything in between
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                3+
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">
                Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                6+
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">
                Technologies
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                2+
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">
                Years Experience
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-gray-400 text-sm mb-2">Explore Projects</span>
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="w-full bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              All Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Browse through all my projects by category
            </p>
          </div>

          {/* Category Filter */}
          <ToggleFilter />

          {/* Projects Grid */}
          <ProjectGrid />
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-b from-[#0c0c0c] to-[#1a1a1a] py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl p-12 backdrop-blur-sm border border-gray-700/50">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm always excited to work on interesting projects and collaborate with passionate people.
              Let's bring your ideas to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Start a Project
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 border border-gray-600 text-gray-300 rounded-xl font-medium hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore the portfolio of Ikhwan Satrio - Frontend Developer. Showcasing web applications, mobile apps, and open-source projects built with modern technologies like React, and TypeScript.",
};
