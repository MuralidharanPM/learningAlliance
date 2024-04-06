import React from 'react';
import './styles.css';
import Aboutimage from "../assets/aboutImageBg.jpg";

export default function About() {
    return (
        <div className='aboutParentCls'>
            <div className='aboutChildCls'>
                <div className='aboutImgPCls'>
                    <img className='aboutImgCls' src={Aboutimage} alt='aboutSecImage' />
                </div>
                <div className='aboutContentPCls'>
                    <div className='aboutContHeaderCls'>
                        Absorbing Wisdom from Seasoned Professionals
                    </div>
                    <div className='aboutContCls'>
                        In our journey of acquiring expertise, one of the most invaluable resources is the wisdom imparted by seasoned professionals. Their experience serves as a beacon, guiding us through the intricacies of our chosen field. By observing their methods, absorbing their advice, and learning from their triumphs and setbacks, we gain a holistic understanding that textbooks alone cannot provide. Interacting with professionals allows us to grasp nuances, develop practical skills, and navigate challenges with greater confidence. Their mentorship not only accelerates our learning curve but also instills a deep appreciation for the craft we seek to master.
                    </div>
                </div>
            </div>
        </div>
  )
}
