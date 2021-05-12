import React from "react";
import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <ul className="footer-block">
          <li>Связаться с нами</li>
          <li>FAQs</li>
          <li>Уход за изделиями</li>
          <li>Карта сайта</li>
        </ul>
      </div>
      <div>
        <div>
          <h1 className="footer-title">ПОДРОБНЕЕ О GUCCI</h1>
          <ul className="footer-li">
            <li>Gucci Equilibrium</li>
            <li>Code of Ethics</li>
            <li>Careers</li>
            <li>Правовая информация</li>
            <li>Политика конфиденциальности и<br></br> использования файлов Cookie</li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <h1 className="footer-title">ДОМ GUCCI</h1>
          <ul className="footer-li">
            <li>Карьера</li>
            <li>Юридическая информация</li>
            <li>Отчет перед обществом</li>
            <li>Борьба с контрафактом</li>
            <li>Финансовые результаты</li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="footer-title">СЛЕДИТЕ ЗА НАМИ</h1>
        <ul className="footer-li">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Instagram Beauty</li>
          <li>Youtube</li>
          <li>Twitter</li>
        </ul>
        <div className="footer-block2">
          <InstagramIcon className="instagram" />
          <FacebookIcon className="facebook" />
          <TwitterIcon className="twiter" />
          <YouTubeIcon className="youtube" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
