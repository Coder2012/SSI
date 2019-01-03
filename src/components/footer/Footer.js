import React from 'react'
import FooterStyles from './footer.module.scss'

const Footer = () => {
    return ( <footer className={FooterStyles.footer}>
        <p className={FooterStyles.copyright}>Copyright &copy; SSI 2018</p>
    </footer> );
}
 
export default Footer;