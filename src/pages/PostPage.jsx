import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { postsData } from "../data/posts";

const PostPage = () => {
  const { t, i18n } = useTranslation("common");
  const { slug } = useParams();

  const post = postsData.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const category = i18n.language === "ka" ? post.category_ka : post.category_en;
  const title = i18n.language === "ka" ? post.title_ka : post.title_en;
  const content = i18n.language === "ka" ? post.content_ka : post.content_en;

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
          <div className="max-w-3xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Link
                to="/blog"
                className="inline-flex items-center text-text-secondary hover:text-primary font-semibold transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                {t("blog.backToBlog")}
              </Link>
            </div>

            {/* Post Header */}
            <div className="text-center mb-12">
              <span className="text-primary font-semibold">{category}</span>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-text-primary">
                {title}
              </h1>
              <p className="mt-4 text-text-secondary">
                {t("blog.publishedOn")} {post.date}
              </p>
            </div>

            {/* Post Content */}
            <div className="prose prose-lg lg:prose-xl max-w-none text-text-secondary text-lg leading-relaxed space-y-6">
              {content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PostPage;
