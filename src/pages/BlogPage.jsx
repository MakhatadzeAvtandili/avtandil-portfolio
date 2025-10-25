import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { postsData } from "../data/posts";
import SEO from "../components/SEO";

const BlogPage = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="grow"
    >
      <SEO
        title={t("seo.blog_title")}
        description={t("seo.blog_description")}
      />
      <div className="bg-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
              {t("blog.title")}
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              {t("blog.subtitle")}
            </p>
          </div>

          <div className="mt-16 max-w-3xl mx-auto space-y-16">
            {postsData.map((post, index) => {
              const category =
                i18n.language === "ka" ? post.category_ka : post.category_en;
              const title =
                i18n.language === "ka" ? post.title_ka : post.title_en;
              const excerpt =
                i18n.language === "ka" ? post.excerpt_ka : post.excerpt_en;

              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.slug}`} className="block group">
                    <div className="overflow-hidden rounded-xl border border-border mb-6 shadow-sm group-hover:shadow-lg transition-shadow">
                      <img
                        src={post.coverImage}
                        alt={title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center gap-4 text-sm text-text-secondary">
                      <span className="font-semibold text-primary">
                        {category}
                      </span>
                      <span>&bull;</span>
                      <span>{post.date}</span>
                    </div>
                    <h2 className="mt-3 text-3xl font-bold text-text-primary group-hover:text-primary transition-colors">
                      {title}
                    </h2>
                    <p className="mt-3 text-lg text-text-secondary leading-relaxed">
                      {excerpt}
                    </p>
                    <div className="mt-6 inline-flex items-center text-primary font-semibold">
                      {t("blog.readMore")}
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
                        className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPage;
