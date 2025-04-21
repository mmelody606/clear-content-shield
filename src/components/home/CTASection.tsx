
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { constants } from "buffer";

const CTASection = () => {
  const whatsappLink = "https://wa.me/+231777477409"; // Replace with your WhatsApp number
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-primary text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to ensure your academic paper or document is 100% original?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
          Join thousands of students, researchers, and content creators who trust PlagLab for maintaining integrity and originality.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" variant="secondary" className="text-primary font-bold px-8">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Get Service Now
            </a>
          </Button>
          
        </div>
        <p className="mt-8 text-white/80">
          Try us — No credit card required! 
        </p>
      </div>
    </section>
  );
};

export default CTASection;
