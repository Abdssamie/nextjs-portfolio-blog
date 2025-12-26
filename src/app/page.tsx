import { SiteHeader } from "@/components/header";
import { Hero } from "@/components/hero";
import { LottieAnimation } from "@/components/lottie-animation";
import { AboutSection } from "@/components/about-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { ContactCTA } from "@/components/contact-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <LottieAnimation />
        <AboutSection />
        <TechStackSection />
        <FeaturedProjects />
        <ContactCTA />
      </main>
      <SiteFooter />
    </div>
  );
}