import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import { ImageSlider, ProjectLink } from '../../components';
import { Project } from '../../globals/rawProjectData';
import './styles.scss';

export const ProjectDetails = ({ singleProject }: { singleProject: Project}) => {
  //settings for simple-react-lightbox
  const options = {
    buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showCloseButton: true,
      showNextButton: true,
      showPrevButton: true,
      showThumbnailsButton: false,
    },
    settings: {
      overlayColor: 'rgba(0, 0, 0, 0.9)',
      lightboxTransitionTimingFunction: 'easeInOut',
      slideTransitionTimingFunction: 'easeInOut',
      disableWheelControls: true,
    },
  };

  return (
    <section
      className='single-project-content'
    >
      <Helmet>
        <title>Alec Johnson | {singleProject.title}</title>
        <meta
          name="description"
          content="A project detail page to show Alec Johnson's web development project. It includes the summary of the individual project, tools used and design/development process."
        />
      </Helmet>
      <SimpleReactLightbox>
        {/* Banner image */}
        <div className="banner-wrapper">
          {/* Responsive images */}
          <picture>
            <source
              media="(max-width: 499px)"
              srcSet={singleProject.mobileBanner}
            />
            <motion.img
              className="banner-img"
              src={singleProject.banner}
              alt={`banner of ${singleProject.title}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 0.3, delay: 0.2 }}
            />
          </picture>
        </div>
        {/* Project info */}
        <div className="single-project-basic-info">
          <h1 data-aos="fade-up">{singleProject.title}</h1>
          <div className="overview-wrapper">
            <h2>Overview</h2>
            <p>
              {singleProject.overview
                ? singleProject.overview
                : 'Overview coming soon...'}
            </p>
          </div>
          <div className="external-links">
            {singleProject.live && (
              <ProjectLink
                url={singleProject.live}
                name="View Live"
              />
            )}
            {singleProject.github && (
              <ProjectLink
                url={singleProject.github}
                name="View GitHub"
              />
            )}
          </div>
        </div>
        <SRLWrapper options={options}>
          {/* Development Process */}
          {singleProject.development && (
            <div className="development-info">
              <h2>Development</h2>
              {singleProject.development.map((devBlock, i) => {
                return (
                  <div className="development-block" key={i}>
                    <div className="development-block-text">
                      <h3>{devBlock.title}</h3>
                      <p>{devBlock.description}</p>
                    </div>
                    {devBlock.devImg && (
                      <img
                        className="block-img"
                        src={devBlock.devImg}
                        alt={devBlock.title}
                        loading="lazy"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </SRLWrapper>
        <ImageSlider imgSlider={singleProject.imgSlider} />
        {/* Project Reflection */}
        {singleProject.reflection && (
          <article className="reflection-info">
            <h2>Reflection</h2>
            {singleProject.reflection.map((paragraph, i) => {
              return <p key={i}>{paragraph}</p>;
            })}
          </article>
        )}
      </SimpleReactLightbox>
    </section>
  );
};