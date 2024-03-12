import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <>
            <div className='nav-bar'>
                <Link className='logo' to='/'>
                    <img src={LogoS} alt="logo" />    
                    <img className='sub-logo' src={LogoSubtitle} alt="slogoban" />    
                </Link>   
                <nav>
                    <NavLink exact="true" activeclassname="active" className='home-link' to="/">
                        <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                    </NavLink> 
                    <NavLink exact="true" activeclassname="active" className='about-link' to="/about">
                        <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                    </NavLink>   
                </nav> 
                <ul>
                    <li>
                        <a target='_blank' 
                            rel='noreferref'
                            href='https://www.linkedin.com/in/mayur-lilhare-9469941ab/'>
                                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                            </a>
                    </li>
                    <li>
                        <a target='_blank' 
                            rel='noreferref'
                            href='https://github.com/mayurlilhare'>
                                <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                            </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;