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
import { Container } from "@/components/ui/container"
import { HowWeWork } from "@/components/how-we-work"
import { BlogPreview } from "@/components/blog-preview"
import { PartnersSection } from "@/components/partners-section"
import { QuickContact } from "@/components/quick-contact"
import { FAQSection } from "@/components/faq-section"

export default function Home() {
  return (
    <>
      <SmoothScroll>
        <div className="min-h-screen bg-background">
          <Header />

        <main className="relative py-8">
          <Container>
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main content */}
            <div className="lg:col-span-3 space-y-16 pb-20 lg:pb-0">
              <HeroSection />
              <QuickContact />
              <AboutSection />
              <HowWeWork />
              <StatsSection />
              <Services />
              <PartnersSection />
              <BlogPreview />
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
              <FAQSection />
              <Contact />
            </div>

            {/* Sidebar - Desktop */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
                <SidebarContent />
              </div>
            </div>
          </div>
          </Container>
        </main>

        <Footer />
        <FloatingCTA />
      </div>
    </SmoothScroll>
    </>
  )
}
