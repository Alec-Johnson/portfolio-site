import { Link } from 'react-router-dom';
import { Project } from '../../globals/rawProjectData';
import './styles.scss'

type ThumbnailsProps = {
  id: string;
  title: string;
  brief: string;
  tech: string[];
  thumbnail: string;
  moreInfo: boolean;
  live: string;
  github: string;
}

export const Thumbnail = ({
  id,
  title,
  brief,
  tech,
  thumbnail,
  moreInfo,
  live,
  github,
}: ThumbnailsProps | Partial<Project>) => {
  // added partial to help with TS errors until rawProjectData is fully completed
  return (
    <div className='project-thumbnail'>
      <div className="thumbnail-wrapper" data-aos="fade-left">
        <div className="project-thumbnail-image">
          <a href={live} target="_blank" rel="noreferrer">
            <img
              src={thumbnail}
              alt={`${title} Thumbnail`}
              loading="lazy"
            />
          </a>
        </div>
        <div className="thumbnail-text">
          <h2 className="project-thumbnail-title">{title}</h2>
          <ul className="tools-list">
            {tech && tech.map((tec, index) => <li key={index}>{tec}</li>)}
          </ul>
          <p className="project-thumbnail-overview">{brief}</p>
          <div className="action-buttons">
            {live && (
              <a href={live} target="_blank" rel="noreferrer">
                Live Site
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {moreInfo && (
              <Link to={`/project-${id}`} className="more-info">
                Learn More
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};