import React from 'react'
import FooterStyles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={FooterStyles.footer}>
      <h3>Contact</h3>
      <dl class={FooterStyles.contact}>
        <dt>General business:</dt>
        <dd>
          <a href="mailto:info@s-s-int.com">info@s-s-int.com</a>
        </dd>
        <dt>Recruitment:</dt>
        <dd>
          <a href="mailto:hr@s-s-int.com">hr@s-s-int.com</a>
        </dd>
      </dl>
      <p className={FooterStyles.copyright}>Copyright &copy; SSI 2018</p>
    </footer>
  )
}

export default Footer
