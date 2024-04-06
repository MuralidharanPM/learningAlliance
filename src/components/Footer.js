import React from 'react';
import Logoimagefull from "../assets/LearningAllianceLogoExpanded.png";

export default function Footer() {
    const year = new Date();
    return (
        <div className='footerPgPCls'>
            <div className='footerPgCCls'>
                <div className='footerSubOnePCls'>
                    <div className='footerStageOneCls'>
                        <img alt='image used' src={Logoimagefull} />
                        <div className='footerCompanyDoesCls'>
                            <div className='footerCompanyDoesHCls'>Company</div>
                            <div className='footerCompanyDoesContCls'>
                                <a className='footerCompDoesContLinks'>How it works</a>
                                <a className='footerCompDoesContLinks'>Contact</a>
                                <a className='footerCompDoesContLinks'>Docs</a>
                                <a className='footerCompDoesContLinks'>Register</a>
                            </div>
                        </div>
                        <div className='footerStageTwoCls'>
                            <div className='footerSubscribeCls'>Subscribe</div>
                            <div className='FooterAreaFieldsCtrl'>
                                <input className='footerSearchCls' type='text' placeholder='Search courses' autoComplete='off'></input>
                                <button className='footerSearchBtn'></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footerSubTwoPCls'>
                    <div className='footerTakeOneCls'>
                        &copy; {year.getFullYear()} Do Learn. All rights reserved
                    </div>
                    <div className='footerTakeTwoCls'>
                        <button className='linkedInCardCls'></button>
                        <button className='facebookCardCls'></button>
                        <button className='twitterCardCls'></button> 
                    </div>
                </div>
            </div>
        </div>
    )
}
