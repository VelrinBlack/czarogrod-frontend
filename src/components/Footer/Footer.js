import React from "react";

import { StyledContainer } from "./FooterStyles";
import { useRouter } from "next/router";

const Footer = () => {
  const Router = useRouter();
  return (
    <StyledContainer>
      <div className="container">
        <div className="box-container">
          <div className="logo-box box">
            <img
              src="/images/other/logo.png"
              alt="logo"
              className="logo"
              loading="lazy"
            />
          </div>
        </div>
        <div className="box-container">
          <div className="menu-box box">
            <a href="/">
              <div className="link">HOME</div>
            </a>
            <a href="/oferta">
              <div className="link">OFERTA</div>
            </a>
            <a href="/portfolio">
              <div className="link">PORTFOLIO</div>
            </a>
            <a href="/pytania">
              <div className="link">PYTANIA</div>
            </a>
            <a href="/blog">
              <div className="link">BLOG</div>
            </a>
            <a
              className="link"
              href={"/#omnie"}
              onClick={(e) => {
                e.preventDefault();
                Router.push("/");
                window.scroll({
                  top: 700,
                  behavior: "smooth",
                });
              }}
            >
              O MNIE
            </a>
            <a href="/kontakt">
              <div className="link">KONTAKT</div>
            </a>
          </div>
        </div>
        <div className="box-container">
          <div className="contact-box box">
            <p className="text">
              Skontaktuj się ze mną używając poniższych danych lub wypełnij
              formularz w zakładce KONTAKT, a ja odezwę się do Ciebie.
            </p>
            <div className="contact-data">
              <p className="phone-number">
                nr telefonu:
                <br />
                <a href="tel:+48784880484">+48 784 880 484</a>
              </p>
              <p className="email-address">
                adres e-mail:
                <br />
                <a href="mailto:kontakt@czarogrod.pl">kontakt@czarogrod.pl</a>
              </p>
            </div>
            <div className="social-media">
              <a
                href="https://www.facebook.com/Czarogrodpl-108508777589942"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <img
                  src="/images/social_media/facebook.svg"
                  alt="facebook logo"
                  className="logo"
                />
              </a>
              <a
                href="https://www.instagram.com/czarogrod.pl/?hl=pl"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <img
                  src="/images/social_media/instagram.svg"
                  alt="instagram logo"
                  className="logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright">© 2020-2021 – Bartosz Wleciał</p>
    </StyledContainer>
  );
};

export default Footer;
