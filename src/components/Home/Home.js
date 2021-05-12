import React from "react";
import "./Home.css";
// import img from "../HomePageImg/img.png";

const Home = () => {
  return (
    <div className="home">
      <div className="first-section">
        <img
          className="first-section-img"
          src="https://i.pinimg.com/originals/2d/32/58/2d325873f80e8971bcc1785f1f038ef6.jpg"
        />
      </div>

      <h1 className="bags">ЖЕНСКИЕ СУМКИ</h1>
      <div className="bags-main">
        <div className="bags-main-blocks">
          <img
            className="bags-photo"
            src="https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1439376067/400249_KHNRN_8698_001_075_0000_Light--DionysusGG.jpg"
            alt=""
          />

          <div className="description-item3">
            <h1 className="discription-title">
              Сумка на плечо <hr></hr>Dionysus GG маленького размера
            </h1>
            <p>Модель ‎400249 KHNRN 8642</p>
          </div>

          <button className="bags-btns-btn">ПОДРОБНЕЕ</button>
        </div>
        <div className="bags-main-blocks">
          <img
            className="bags-photo"
            src="https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1515495604/443497_DTDIT_9022_001_063_0000_Light--GGMarmont.jpg"
            alt=""
          />
          <div className="description-item3">
            <h1 className="discription-title">
              Сумка на плечо <hr></hr>GG Marmont маленького размера
            </h1>
            <p>Модель ‎443497 DTDIT 1000</p>
          </div>
          <button className="bags-btns-btn">ПОДРОБНЕЕ</button>
        </div>
        <div className="bags-main-blocks">
          <img
            className="bags-photo"
            src="https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1581706806/602204_1DB0G_6638_001_074_0000_Light--Gucci-Horsebit-1955.jpg"
            alt=""
          />
          <div className="description-item3">
            <h1 className="discription-title">
              Сумка на плечо <hr></hr>Gucci Horsebit 1955
            </h1>
            <p>Модель ‎602204 1DB0G 6638</p>
          </div>
          <button className="bags-btns-btn">ПОДРОБНЕЕ</button>
        </div>
        <div className="bags-main-blocks">
          <img
            className="bags-photo"
            src="https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1600341304/636709_10O0G_4933_001_080_0000_Light--Jackie-1961.jpg"
            alt=""
          />
          <div className="description-item3">
            <h1 className="discription-title">
              Маленькая сумка-хобо <hr></hr> Jackie 1961
            </h1>
            <p>Модель ‎636709 10O0G 4933</p>
          </div>
          <button className="bags-btns-btn">ПОДРОБНЕЕ</button>
        </div>
      </div>
      <hr className="hr-second" />

      <div className="explore">
        <h1 className="bags">Каждая дорогая Алессандро Микеле модель из коллекций Beloved — это современная интерпретация прошлого Дома креативным директором и отражение знакового дизайна, возвращающегося из сезона в сезон</h1>
      </div>
      <div className="first-png">
      </div>
      <hr />
            <div className="limited-edition">
        <div>
          <li className="limited-edition-titles1">
          Осень-зима 2020/21 / Ready-To-Wear / НЕДЕЛЯ МОДЫ: Милан
          </li>
          <img
            className="edition-img1"
            src="https://i.pinimg.com/originals/79/d4/a0/79d4a0a4f14b9940476c426d4359bb7a.jpg"
            alt=""
          />
        </div>
        <div>
          <div>
            <li className="limited-edition-titles2">
            2021 Gucci Fashion Show - Fashion Activation
            </li>
            <img
              className="edition-img2"
              src="https://i.pinimg.com/originals/63/a5/88/63a58820cd40e347db90f3cab8b529b0.jpg"
              alt=""
            />
          </div>
        </div>
        <div>
          <li className="limited-edition-titles3">
          Gucci Pre-Fall 2021 Collection
          </li>
          <img
            className="edition-img3"
            src="https://i.pinimg.com/originals/62/21/a2/6221a2a371276690d3a8e317f98d5513.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
