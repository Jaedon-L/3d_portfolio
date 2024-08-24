

import { Link } from 'react-router-dom'

import  arrow  from "../assets/icons/arrow.svg";





const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        {text}
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src = {arrow} className ='w-4 h-4 object-contain' /> 
        </Link>

    </div>
)
const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Jaedon</span>👋
            <br/>
            A Game Developer and Frontend Engineer from San Francisco.
        
        
        </h1>
    ),
    2: (
        <InfoBox text = "Ready to keep up with many different atmospheres. Worked with startup tech companies, constantly learning from a fast paced work environment."
        link = '/about'
        btnText = "Learn More"
        
        />
    ),
    3: (
        <InfoBox text = "Developed many projects this year, including games, websites and more. "
        link = '/projects'
        btnText = "Visit my Projects"
        
        />
    ),
    4: (
        <InfoBox text = "I'm always willing to work with others on new projects. "
        link = '/contact'
        btnText = "Chat with me!"
        
        />
    ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null; 
}

export default HomeInfo