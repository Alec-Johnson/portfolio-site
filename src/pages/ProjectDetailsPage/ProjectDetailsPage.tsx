import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { motion } from 'framer-motion';
import { Contact, ProjectDetails, ProjectNav } from '../../components';
import { rawProjectData, Project } from '../../globals/rawProjectData';
import './styles.scss';

export const ProjectDetailsPage = () => {
  // Reads the URL parameter
  let { id } = useParams();

  const [singleProject, setSingleProject] = useState<Project | null>(null);
  const [nextProjectId, setNextProjectId] = useState<string | null >(null);

  // Fetch single project data based on id & project has moreInfo
  // (if a project has moreInfo, it will have a ProjectDetailsPage)
  useEffect(() => {
    const project: Project = rawProjectData.filter(
      (project) => project.id === id && project.moreInfo === true
    )[0];
    
    setSingleProject(project);

    // Get array that only contains the projects that have moreInfo
    const projectsHasMoreInfo = rawProjectData.filter(
      (project) => project.moreInfo === true
    );

    // Get the current project index in the array projectsHasMoreInfo
    const currentProjectIndex = projectsHasMoreInfo.findIndex((oneProject) => {
      return oneProject.id === id;
    });

    // When currentProjectIndex is the last project in the array projectsHasMoreInfo, next project will be the first project in the array
    if (currentProjectIndex + 1 === projectsHasMoreInfo.length) {
      setNextProjectId(projectsHasMoreInfo[0].id);
    } else {
      setNextProjectId(projectsHasMoreInfo[currentProjectIndex + 1].id);
    }
  }, [id]);

  return (
    <motion.div
      className="single-project-container main-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.3 }}
    >
      {singleProject ? (
        <>
          <ProjectDetails singleProject={singleProject} />
          <ProjectNav nextProjectId={nextProjectId} />
        </>
      ) : (
        <section className="no-project-detail">
          <h1>Still in Progress</h1>
          <p>
            This project currently does not have a single detail page, please
            check other projects.
          </p>
          <div className="button-group">
            <Link to="/work">View Other Projects</Link>
            <Link to="/">Return Home</Link>
          </div>
        </section>
      )}
      <Contact />
    </motion.div>
  );
};