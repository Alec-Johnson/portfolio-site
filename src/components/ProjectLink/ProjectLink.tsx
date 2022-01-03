import './styles.scss';

type ProjectLinkProps = {
  url: string;
  name: string;
}
export const ProjectLink = ({ url, name }: ProjectLinkProps) => {
  return (
    <a
      className='url-link'
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {name}
    </a>
  );
};