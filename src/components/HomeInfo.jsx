import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../../Assets/assets/icons'

// const InfoBox = ({ text, link, btnText }) => (
//     <div className="info-box">
//         {text}
//         <Link to={link}>
//             {btnText}
//         </Link>
//     </div>
// )
const InfoBox = ({ text, link, btnText }) => {
    return (
        <div className="info-box">
            <p className='fort-medium sm:text-x1 text-center'>{text}</p>
            <Link to={link} className='neo-brutalism-white neo-btn'>
                {btnText}
                <img src={arrow} className='w-4 h-4 object-contain' />
            </Link>
        </div>
    )
}

const renderContent = {
    1: (
        <h1 className='sm:text-x1 sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>NRM</span>👋
            <br />
            A Cyber Security Undergratuate from UoM
        </h1>
    ),
    2: (
        <InfoBox
            text="Worked with many companies and picked up many skills along the way"
            link='/about'
            btnText='Learn more'
        />
    ),
    3: (
        <InfoBox
            text="Let multiple projects to success over the the years. Curious about the impact?"
            link='/projects'
            btnText='Visit my portfolio'
        />
    ),
    4: (
        <InfoBox
            text="Need a project done or looking for a dev? I'm just a few keystrokes away"
            link='/contact'
            btnText="Let's talk"
        />
    ),
    5: (
        <h1>5</h1>
    )
}



const HomeInfo = ({ CurrentStage }) => {
    return renderContent[CurrentStage] || null
}

export default HomeInfo