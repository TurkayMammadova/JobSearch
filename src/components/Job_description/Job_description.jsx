import React, { useState, useContext } from "react";
import style from "./Job_description.module.css";
import { PiPrinter } from "react-icons/pi";
import classNames from "classnames";
import { FaRegFlag } from "react-icons/fa";
import { RxThickArrowUp } from "react-icons/rx";
import img from "../../assets/Telegram_logo.png";
import { MainContext } from "../../context";
import { IoMdClose } from "react-icons/io";

function Job_description({ slug }) {
  const { allData, getVacancyDetailBySlug } = useContext(MainContext);
  const btn = classNames(
    style.btn,
    style.btn_blue,
    style.btn__with_icon,
    style.apply,
    style.btn_bold_green
  );
  const info = classNames(
    style.btn,
    style.btn_bold_green,
    style.btn__with_icon,
    style.apply,
    style.apply__mail
  );

  const vacancyDetails = getVacancyDetailBySlug(allData, slug);
  const demands = (vacancyDetails?.demands || "").split(";");
  const responsibilities = (vacancyDetails?.responsibilities || "").split(";");
  const conditions = (vacancyDetails?.conditions || "").split(";");
  const email = vacancyDetails?.email || "";
  console.log("mail", email);



  const [activeTab, setActiveTab] = useState("MuraciyetEt");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setInfoText("Müraciət üçün aşağıdakı email ünvanı köçürmək lazımdır.");
  };

  const [infoText, setInfoText] = useState(
    "Müraciət üçün aşağıdakı email ünvanı köçürmək lazımdır."
  );
  const mailCopy = (email) => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        // Provide feedback to the user (optional)
        setInfoText("E-mail ünvanı kopyalanmışdır");
        console.log("Email address copied to clipboard!");
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
  };
  return (
    <div className={style.tab_content}>
      <div className={style.tab_content__item}>
        <div className={style.content}>
          <div className={style.content_text}>
            <h4>
              <span>
                <strong>Vəzifə öhdəlikləri:</strong>
              </span>
            </h4>
            <ul>
              {demands.map((demand, index) => (
                <li key={index}>
                  <span>{demand}</span>
                </li>
              ))}
            </ul>
            <h4>
              <span>
                <strong>Tələblər:</strong>
              </span>
            </h4>
            <ul>
              {responsibilities.map((responsibility) => (
                <li>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
            <h4>
              <span>
                <strong>İş şəraiti:</strong>
              </span>
            </h4>
            <ul>
              {conditions.map((condition) => (
                <li>
                  <span>{condition}</span>
                </li>
              ))}
            </ul>
            <p>
              <span>
                Qeyd olunan tələblərə uyğun namizədlər aşağıdakı linkə daxil
                olaraq vakansiyaya müraciət edə bilərlər.
              </span>
            </p>
            <p>
              <span>
                Müraciətlər vakansiyanın tələblərinə əsasən dəyərləndiriləcək və
                yalnız seçilmiş namizədlərlə əlaqə saxlanılacaqdır.
              </span>
            </p>
          </div>
        </div>
        <div className={style.subscribe_block}>
          <img src={img} alt="" />
          <p>
            Vakansiyalar barədə məlumatı ən tez bizim
            <a href="https://t.me/jobsearchazerbaijan" target="blank">
              {" "}
              Telegram kanalında{" "}
            </a>
            izləyə bilərsiniz.
          </p>
        </div>
        {/* <div className={style.tab__files}></div> */}

        <div className={style.tab__buttons}>
          <a
            href=""
            className={style.tab__buttons__item}
            id={style.tab__buttons__item_print}
          >
            <PiPrinter className={style.print} /> Çap et
          </a>
          <a
            href=""
            className={style.tab__buttons__item}
            id={style.tab__buttons__item_complain}
          >
            <FaRegFlag className={style.complain} />
            Şikayət et
          </a>
        </div>

        <div
          className={`${style.apply_button} ${
            activeTab === "MailInfo" ? style.active : ""
          }`}
        >
          <div className={style.apply_info}>{infoText}</div>
          <span className={info}>
            <a
              href="#"
              className={style.apply__close}
              onClick={() => handleTabClick("MuraciyetEt")}
            >
              <IoMdClose />
            </a>
            <a
              href="#"
              className={style.apply__send_mail}
              onClick={() => mailCopy(email)}
            >
              {email}
            </a>
          </span>
        </div>
        <div
          className={`${style.apply_button} ${
            activeTab === "MuraciyetEt" ? style.active : ""
          }`}
          onClick={() => handleTabClick("MailInfo")}
        >
          <a href="#" className={style.btn} onClick={() => mailActive}>
            <RxThickArrowUp className={style.arrow} />
            Müraciət et
          </a>
        </div>
      </div>
    </div>
  );
}

export default Job_description;
