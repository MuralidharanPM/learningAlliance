import React from 'react';
import './styles.css';
import Logoimagefull from "../assets/LearningAllianceLogoExpanded.png";

export default function Navbar() {
  return (
      <div className='navBarCls'>
          <div class="headerPCls">
              <div class="headerCCls">
                  <div class="headerImgCls">
                    <img className='logoHeadCls' alt='logo is used here' src={Logoimagefull}/>
                  </div>
                  <div class="headerContentCls">
                      <div class="headerContCls">
                        <button>About</button>
                        <button>Feature</button>
                        <button>Status</button>
                        <button>Resource</button>
                      </div>
                      <div class="headerBtnSec">
                          <button>GET STARTED</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
