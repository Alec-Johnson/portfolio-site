import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Project, rawProjectData } from '../../globals/rawProjectData';
import './styles.scss'

export const FeaturedProjects = () => {
  const [featured, setFeatured] = useState<Project[] | null>(null);

  useEffect(() => {
    const featuredProjects = rawProjectData.filter((project) =>
      project.category.includes('featured')
    );
    setFeatured(featuredProjects);
  }, []);

  return (
    <section className="home-featured-projects">
      <div className="home-featured-projects-content">
        <h2>Featured Projects</h2>
        {featured &&
          featured.map((featuredProject, index) => {
            return (
              <div className="featured-project-card" key={index}>
                <div className="project-card-content">
                  <img
                    src={featuredProject.thumbnail}
                    alt={`cover of the project ${featuredProject.title}`}
                  />
                  <div className="project-card-text">
                    <a
                      href={featuredProject.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3>{featuredProject.title}</h3>
                    </a>
                    <p>{featuredProject.subtitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        <Link className="work-btn homepage-btn all-works-btn" to="/work">
          All Projects
          <div className="overlay"></div>
        </Link>
      </div>
    </section>
  );
};