import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './Home.scss';
import { useEffect, useState } from 'react';
import AnimateLetters from '../AnimateLetters/AnimateLetters';

const Home=()=>{
    const [letterClass, setLetterClass]=useState('text-animate');
    const nameArray = ['l','o','b','o','d','a','n'];
    const jobArray = [ 'w','e','b',' ', 'd','e','v','e','l','o','p','e','r'];

    // useEffect(()=>{
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000);
    // },[])
    return(
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span> 
                        <span className={`${letterClass} _12`}>i,</span><br/>
                        <span className={`${letterClass} _13`}>I</span> 
                        <span className={`${letterClass} _14`}>m</span> 

                    <img src={ LogoTitle} alt="developer" />
                    <AnimateLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}/>  
                    <br/>
                    <AnimateLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22}/>  
                    </h1>
                    <h2 style={{display:'inline!important'}}>Frontend Developer / JavaScript Expert</h2>
                    <Link to="/contact" className='flat-button'>Contact Me</Link>
                </div>
            </div>
    );
}

export default Home;