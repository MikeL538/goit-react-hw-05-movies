import { GithubIcon } from './Icons/GithubIcon';
import { Linkedin } from './Icons/Linkedin';
import { Mail } from './Icons/Mail';
import css from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a
            href="https://github.com/MikeL538"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
        </li>
        <li>
          <a
            className={css.portfolio}
            href="https://mikel538.github.io/Mikel-Portfolio/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MikeL538"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
        </li>
        <li>
          <a href="mailto:mikel538.work@gmail.com" rel="noopener noreferrer">
            <Mail />
          </a>
        </li>
      </ul>
    </footer>
  );
};
