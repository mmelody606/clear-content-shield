import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Understanding Plagiarism: Types, Consequences, and Prevention",
    excerpt: "Explore the different forms of plagiarism, their academic and professional consequences, and effective strategies to maintain content originality.",
    date: "April 15, 2025",
    author: "Dr. Priya Sharma",
    category: "Education",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "The Rise of AI Content and Detection Technologies",
    excerpt: "How artificial intelligence is transforming content creation and the parallel development of technologies designed to identify AI-generated text.",
    date: "April 8, 2025",
    author: "Vikram Patel",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1677442135993-020b45579a8a?auto=format&fit=crop&w=800&q=80",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Academic Integrity in the Digital Age: Challenges and Solutions",
    excerpt: "Examining how technology has transformed academic integrity challenges and the evolving approaches institutions are taking to address them.",
    date: "March 28, 2025",
    author: "Neha Gupta",
    category: "Education",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "How to Properly Cite Sources in Academic Writing",
    excerpt: "A comprehensive guide to citation styles, common mistakes, and best practices for incorporating references in your research papers.",
    date: "March 20, 2025",
    author: "Dr. Aditya Sharma",
    category: "Writing",
    image: "https://images.unsplash.com/photo-1471970394675-613138e45da3?auto=format&fit=crop&w=800&q=80",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "The Ethics of Using AI in Content Creation",
    excerpt: "Exploring the ethical considerations, disclosure requirements, and best practices when leveraging AI tools for writing and content development.",
    date: "March 12, 2025",
    author: "Sarah Johnson",
    category: "Ethics",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    readTime: "9 min read"
  },
  {
    id: 6,
    title: "Paraphrasing vs. Plagiarism: Walking the Fine Line",
    excerpt: "Understanding the difference between effective paraphrasing and accidental plagiarism, with practical examples and techniques.",
    date: "March 5, 2025",
    author: "Rajiv Mehta",
    category: "Writing",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read"
  },
];

const Blog = () => {
  return (
    <Layout>
      <div className="py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Educational articles on plagiarism, AI content, academic integrity, and more
            </p>
          </div>

          {/* Featured Post */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 mb-16">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80"
                  alt="Featured post"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                    Featured
                  </span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-gray-600 text-sm">April 19, 2025</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  The Future of Content Verification in a World of Advanced AI
                </h2>
                <p className="text-gray-600 mb-6">
                  As AI content generation becomes increasingly sophisticated, we explore the evolving technologies and methodologies being developed to maintain content authenticity and the implications for academic and professional environments.
                </p>
                <div className="mt-auto">
                  <Button asChild size="lg">
                    <Link to="/blog/1">Read Article</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-shadow hover:shadow-md animate-fade-in">
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm mb-3">
                    <span className="text-primary font-medium">{post.category}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-gray-600">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-end mt-4 pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Stay updated with the latest articles, tools, and insights on content integrity, plagiarism prevention, and AI detection.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button>Subscribe</Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
