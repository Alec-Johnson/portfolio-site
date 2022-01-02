import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { Contact, Thumbnail, FilterButtons } from '../../components';
import { ReactComponent as DownArrow } from '../../assets/icons/DownArrowIcon.svg';
import { rawProjectData, Project } from '../../globals/rawProjectData';
import './styles.scss';

export const WorkPage = () => {
  const [projectsData, setProjectsData] = useState<Project[] | null>(null);
  
  const [filter, setFilter] = useState('all');

  // Update project data, running on first render and filter change
  useEffect(() => {
    handleChangeCategory(filter);
  }, [filter]);

  // Handles filter change on click event and updates state accordingly
  const handleChangeCategory = (selectedCat: string) => {
    if (selectedCat === 'all') {
      setProjectsData(rawProjectData);
    } else {
      setProjectsData(
        rawProjectData.filter((project: Project) =>
          project.category.includes(selectedCat)
        )
      );
    }
  };

  // For scroll down function
  const elementRef = useRef<HTMLElement | null>(null);
  const executeScroll = () =>
    elementRef?.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <motion.div
      className="work-container main-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.3 }}
    >
      <Helmet>
        <title>Alec Johnson | Work</title>
        <meta
          name="description"
          content="A list of projects to showcase Alec Johnson's work as a Front-End Developer."
        />
      </Helmet>
      <section className="projects-intro" data-aos="fade-right">
        <h1>Projects.</h1>
        <p>
          A collection of my featured technical projects and fun projects as a
          front-end developer. <br />
          Stay tune for more...
        </p>
        <div className="sort-btns-group">
          <FilterButtons
            setFilter={setFilter}
            buttons={[
              { name: 'All Projects', slug: 'all' },
              { name: 'Featured Projects', slug: 'featured' },
              { name: 'Fun Projects', slug: 'fun' },
            ]}
          />
        </div>
        <button onClick={executeScroll} className="scroll-btn">
          <DownArrow />
        </button>
      </section>
        {/*
        - Flipper & Flipped - animation for project lists when switching categories(state changes and data changes)
        - flipKey - data to be tracked
          learn more about react-flip-toolkit: https://github.com/aholachek/react-flip-toolkit
        */}
        <Flipper
          flipKey={projectsData}
          spring={{ stiffness: 125, damping: 20 }}
        >
          <Flipped flipId="animatedProjectListDiv">
            <section ref={elementRef} className="projects-list">
              {projectsData?.map((project: Project, i) => {
                return (
                  <Thumbnail
                    title={project.title}
                    brief={project.brief}
                    tech={project.tech}
                    thumbnail={project.thumbnail}
                    id={project.id}
                    moreInfo={project.moreInfo}
                    live={project.live}
                    github={project.github}
                    key={i}
                  />
                );
              })}
            </section>
          </Flipped>
        </Flipper>
      <Contact />
    </motion.div>
  );
};