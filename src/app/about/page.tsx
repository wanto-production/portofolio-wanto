import type { Metadata } from 'next';
import GlareHover from '@/components/react-bits/GlareHover';
import BlurText from '@/components/react-bits/BlurText';
import TextType from '@/components/react-bits/TextType';
import { NavigationTabs, SelectionTabs } from '@/components/about/about-tabs';
import Link from 'next/link';
import Image from "next/image"
import image from "@/assets/nishimiya.jpeg"

export default function Page() {

  return (
    <main className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen text-center flex flex-col items-center justify-center gap-8 bg-[radial-gradient(circle_at_center,_#1a1a1a,_#0c0c0c)] overflow-hidden">

        {/* Profile Image */}
        <div className="relative ">
          <div style={{ position: 'relative' }}>
            <GlareHover
              width='150px'
              height='150px'
              borderRadius='100%'
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
            >
              <Image
                src={image}
                alt="Profile"
                priority
                className="h-[150px] w-[150px] rounded-full object-cover shadow-2xl border-4 border-gray-700/50"
              />
            </GlareHover>
          </div>
        </div>

        {/* Text Block */}
        <div className="flex flex-col items-center gap-6 p-3 z-10">
          <BlurText
            text="About Ikhwan Satrio"
            delay={150}
            animateBy="words"
            direction="top"
            className="font-poppins text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-gray-100 via-gray-400 to-gray-200 bg-clip-text text-transparent"
          />

          <TextType
            className="font-inter text-lg sm:text-xl md:text-2xl text-gray-400"
            text={[
              "Passionate Developer",
              "Problem Solver",
              "Tech Enthusiast",
              "Linux Enthusiast",
            ]}
            typingSpeed={80}
            pauseDuration={1800}
            showCursor
            cursorCharacter="|"
          />
        </div>

        {/* Navigation Tabs */}
        <NavigationTabs />
      </section>

      {/* Content Sections */}
      <section className="w-full min-h-screen flex items-center bg-gradient-to-b from-[#0c0c0c] to-[#1a1a1a]">
        <SelectionTabs />
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c] py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl p-12 backdrop-blur-sm border border-gray-700/50">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 p-2">
              Let's Build Something Amazing
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm always excited to work on interesting projects and collaborate with passionate people.
              Whether it's a challenging technical problem or an innovative idea, let's make it happen!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="min-w-[150px] text-center px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="min-w-[150px] text-center px-8 py-3 rounded-xl border border-gray-600 text-gray-300 font-medium hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Ikhwan Satrio - Young passionate programmer specializing in modern web development with Svelte, and React",
};
