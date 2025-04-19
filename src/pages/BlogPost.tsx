
import { useParams } from 'react-router-dom';
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === Number(id));

  if (!post) {
    return (
      <Layout>
        <div className="py-12 px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-12 px-4 md:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
            <div className="flex items-center text-sm mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-gray-600">{post.date}</span>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-gray-600">{post.readTime}</span>
            </div>
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-72 object-cover rounded-xl mb-8"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">{post.excerpt}</p>
            {/* Sample blog content - in a real app, this would come from your data */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
            <h2>The Challenge of Content Authenticity</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
            <h2>Understanding the Impact</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            
            <blockquote>
              "Education is not preparation for life; education is life itself." - John Dewey
            </blockquote>
            
            <h2>Looking to the Future</h2>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold mb-4">Share this article</h3>
            <div className="flex gap-4">
              <Button variant="outline">Twitter</Button>
              <Button variant="outline">LinkedIn</Button>
              <Button variant="outline">Facebook</Button>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
