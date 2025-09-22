"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { StatsSection } from "@/components/stats-section"
import { Services } from "@/components/Services"
import { InteractiveQuiz } from "@/components/interactive-quiz"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/footer"
import { SidebarContent } from "@/components/sidebar-content"
import { FloatingCTA } from "@/components/floating-cta"
import { SmoothScroll } from "@/components/smooth-scroll"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SmoothScroll>
        <div className="min-h-screen bg-background">
          <Header />

        <main className="relative max-w-7xl mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main content */}
            <div className="lg:col-span-3 space-y-16 pb-20 lg:pb-0">
              <HeroSection />
              <AboutSection />
              <StatsSection />
              <Services />
              <div className="py-16">
                <div className="text-center mb-12">
                  <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Je PSYCH-K® pro vás?
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Zjistěte to pomocí našeho rychlého testu
                  </p>
                </div>
                <InteractiveQuiz />
              </div>
              <TestimonialsSection />
              <Contact />
            </div>

            {/* Sidebar - Desktop */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
                <SidebarContent />
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <FloatingCTA />
      </div>
    </SmoothScroll>
    </>
  )
}
