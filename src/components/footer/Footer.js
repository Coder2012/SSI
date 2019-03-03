import React from 'react'
import FooterStyles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={FooterStyles.footer}>
      <h3>Contact</h3>
      <section className={FooterStyles.address}>
        <h4>United Kingdom</h4>
        <p>SSI<br/>608, Jubilee Trading Estate,<br/>Jubilee Rd,<br/>Letchworth Garden City <br/>SG6 1NE</p>
      </section>
      <section className={FooterStyles.address}>
        <h4>Dubai</h4>
        <p>SSI<br/>Office 213, Building 6E-A,<br/>Dubai Airport Freezone<br/>United Arab Emirates <br/>PO Box 371473</p>
      </section>
      <dl className={FooterStyles.contact}>
        <dt>General business:</dt>
        <dd>
          <a href="mailto:info@s-s-int.com">Info@s-s-int.com</a>
        </dd>
        <dt>Recruitment:</dt>
        <dd>
          <a href="mailto:hr@s-s-int.com">HR@s-s-int.com</a>
        </dd>
        <dt>Training:</dt>
        <dd>
          <a href="mailto:training@s-s-int.com">Training@s-s-int.com</a>
        </dd>
        <dt>Security Services:</dt>
        <dd>
          <a href="mailto:security.services@s-s-int.com">Security.services@s-s-int.com</a>
        </dd>
        <dt>Construction:</dt>
        <dd>
          <a href="mailto:construction@s-s-int.com">Construction@s-s-int.com</a>
        </dd>
        <dt>Marine Services:</dt>
        <dd>
          <a href="mailto:marine.services@s-s-int.com">Marine.services@s-s-int.com</a>
        </dd>
      </dl>
      <p className={FooterStyles.copyright}>Copyright &copy; SSI 2018</p>
    </footer>
  )
}

export default Footer
