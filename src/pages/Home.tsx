
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import PricingSection from "@/components/home/PricingSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import ComparisonSection from "@/components/home/ComparisonSection";
import FreeTrialSection from "@/components/home/FreeTrialSection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <PricingSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ComparisonSection />
      <TestimonialsSection />
      <FreeTrialSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Home;
