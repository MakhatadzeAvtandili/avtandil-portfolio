/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "სატესტო ბლოგ პოსტი 1",
      excerpt:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
    },
    {
      id: 2,
      title: "სატესტო ბლოგ პოსტი 2",
      excerpt:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
    },
    {
      id: 3,
      title: "სატესტო ბლოგ პოსტი 3",
      excerpt:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="grow"
    >
      <div className="bg-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
              My Blog
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Thoughts on technology, design, and development.
            </p>
          </div>

          <div className="mt-16 max-w-3xl mx-auto space-y-12">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="p-8 border border-border rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <h2 className="text-2xl font-bold text-text-primary">
                  {post.title}
                </h2>
                <p className="mt-3 text-text-secondary">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-6 inline-block text-primary font-semibold"
                >
                  Read More &rarr;
                </a>
              </motion.div>
            ))}

            <div className="text-center mt-16">
              <Link
                to="/"
                className="px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-teal-600 transition-colors"
              >
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPage;
