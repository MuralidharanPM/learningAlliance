import React from 'react';

const year = new Date();
const Footer = () => {
    return (
        <div className='footerPCls'>Copyright &copy; {year.getFullYear()}</div>
    );
}

export default Footer;