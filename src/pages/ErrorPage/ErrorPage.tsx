import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import './styles.scss';

export const ErrorPage = () => {
  return (
    <motion.div
      className="page-not-found-container main-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.3 }}
    >
      <Helmet>
        <title>Alec Johnson | Page Not Found</title>
        <meta
          name="description"
          content="Error 404 Page for Alec Johnson's portfolio."
        />
      </Helmet>
      <section className="page-not-found-content">
        <h1>404 - Page Not Found</h1>
        <p>
          Welcome to Alec Johnson's portfolio. However, it seems like we can't find
          the page you're looking for. Try using the navigation above to return to the site.
        </p>
      </section>
    </motion.div>
  );
};