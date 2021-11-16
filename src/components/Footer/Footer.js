import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';

import { ReactComponent as HeartSvg } from '../';
import { ReactComponent as Copyright } from '../';

// import styles from './Footer.modules.scss';

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <Copyright/>
          <span>2021</span>
          <span>All Rights Reserved</span>
          <span>Developed with</span>
        </div>
        <div>
          <span> <HeartSvg/></span> 
          <span>by</span>

          <Link to={routes.ourteam}>
            GoIT Students
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;