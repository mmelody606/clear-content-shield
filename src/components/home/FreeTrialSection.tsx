import { Button } from "@/components/ui/button";

const FreeTrialSection = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 animate-fade-up">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Try It For Free</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Test our plagiarism and AI content checker with up to 500 words, no credit card required
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow">
          <div className="mb-6">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              Paste your content (max 500 words for free trial)
            </label>
            <textarea
              id="content"
              rows={6}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Paste your text here to check for plagiarism or AI generation..."
            ></textarea>
            <p className="text-sm text-gray-500 mt-2">
              0/500 words used
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <Button size="lg" className="hover:scale-105 transition-transform">Check Plagiarism</Button>
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform">Detect AI Content</Button>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            For documents larger than 500 words, please sign up for our full service
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTrialSection;
