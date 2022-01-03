import { Link } from 'react-router-dom';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import './styles.scss';

export const ProjectNav = ({ nextProjectId }: { nextProjectId: string | null }) => {
  return (
    <section className="single-project-nav">
      <Link to={'/work'}>
        <span>
          <BiChevronLeft title="Left arrow icon" />
        </span>
        Return Work
      </Link>
      <Link to={`/project-${nextProjectId}`}>
        Next Project{' '}
        <span>
          <BiChevronRight title="Right arrow icon" />
        </span>
      </Link>
    </section>
  );
};