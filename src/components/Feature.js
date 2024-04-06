import React from 'react';
import Learningpath from "../assets/personalisedpath.jpg";
import Onlinelearning from "../assets/onlinelearning.jpg";
import Groupwork from "../assets/groupproject.jpg";

export default function Feature() {
  return (
    <div className='featureMainCls'>
        <div className='featuresMainAreaPCls'>
            <div className='featureMainAreaCCLs'>
                <div className='featMainHeadCls'>
                    Features section
                </div>
                <div className='featMainContCls'>
                    Unlock the full potential of your learning journey with our cutting-edge education platform. Whether you're a student, professional, or lifelong learner, our innovative features are designed to empower you with knowledge and skills that transcend boundaries. Explore the possibilities and revolutionize the way you learn.
                </div>
                <div className='featMainMoreCls'>
                    <a>Learn more</a>
                </div>
            </div>
        </div>
        <div className='featuresSubAreaPCls'>
            <div className='featuresSubAreaCCls'>
                <div className='featureCardsCls'>
                    <img alt='image used' className='featureCardImgCls' src={Learningpath}/>
                    <div className='featureCardContCls'>
                        <div className='featureCardContHCls'>Personalized Learning Paths</div>
                        <div className='featureCardContSHCls'>Customize your learning journey with adaptive algorithms that recommend courses and resources based on your interests, proficiency level, and career aspirations.</div>
                    </div>
                </div>
                <div className='featureCardsCls'>
                    <img alt='image used' className='featureCardImgCls' src={Onlinelearning}/>
                    <div className='featureCardContCls'>
                        <div className='featureCardContHCls'>Live Virtual Classes</div>
                        <div className='featureCardContSHCls'>Participate in real-time lectures, discussions, and Q&A sessions led by expert instructors from around the globe, fostering interactive learning experiences and immediate feedback.</div>
                    </div>
                </div>
                <div className='featureCardsCls'>
                    <img alt='image used' className='featureCardImgCls' src={Groupwork}/>
                    <div className='featureCardContCls'>
                        <div className='featureCardContHCls'>Collaborative Projects and Group Work</div>
                        <div className='featureCardContSHCls'>Collaborate with peers on projects, assignments, and group activities, promoting teamwork, critical thinking, and communication skills.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
