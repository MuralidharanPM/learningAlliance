import React, { useEffect, useState } from 'react';
import './styles.css';
import Logoimagefull from "../assets/LearningAllianceLogoExpanded.png";

export default function NavbarMob() {
    let [accordState, changeAccordState] = useState(false);
    return (
        <div className='navBarCls'>
            <div class="headerPCls">
                <div class="headerCCls">
                    <div class="headerImgCls">
                        <img className='logoHeadCls' alt='logo is used here' src={Logoimagefull} />
                    </div>
                    <div className="headerContentCls">
                        <button className='mobBurgerHeadCls' onClick={() => changeAccordState(!accordState)}></button>
                    </div>
                </div>
            </div>
            {accordState ? 
            <div className="hideheaderAccord">
                <button>About</button>
                <button>Feature</button>
                <button>Status</button>
                <button>Resource</button>
                <button className='headerMobBtnSec'>GET STARTED</button>
            </div>
             : 
             <div className="headerContMobCls">
                 <button>About</button>
                 <button>Feature</button>
                 <button>Status</button>
                 <button>Resource</button>
                 <button className='headerMobBtnSec'>GET STARTED</button>
             </div>
            }
        </div>
    )
}
