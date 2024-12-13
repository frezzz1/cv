import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>
        <b>Коновалов Сергей</b>
      </h1>
      <p className={styles.intro}>
        Я веб-разработчик с опытом работы в создании сайтов и приложений.
        В этом разделе я рассказываю о своем опыте, навыках и проектах.
      </p>
    </div>
    <h2>Образование</h2>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <b>ПГТУ, г.Йошкар-Ола</b> — бакалавр (Программная Инженерия)
        <br />
        <span>Сентябрь 2022 – НАСТОЯЩЕЕ ВРЕМЯ</span>
      </li>
    </ul>
    <h2>Навыки</h2>
    <ul className={styles.list}>
      <li className={styles.listItem}>HTML</li>
      <li className={styles.listItem}>CSS</li>
      <li className={styles.listItem}>JavaScript</li>
      <li className={styles.listItem}>Node.js</li>
      <li className={styles.listItem}>React фреймворк</li>
      <li className={styles.listItem}>Python</li>
      <li className={styles.listItem}>Django фреймворк</li>
      <li className={styles.listItem}>PostgreSQL</li>
      <li className={styles.listItem}>MySQL</li>
    </ul>
    <h2>Проекты</h2>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <b>Card Maker</b>
        <p>
          Разработал сайт для создания и редактирования изображений, обеспечивающий базовый функционал, подобный Photoshop. Реализовал основной функционал сайта, используя Node.js. Также при создании использовался фреймворк React.
        </p>
      </li>
      <li className={styles.listItem}>
        <b>Учебный проект со статьями</b>
        <p>
          Создал сайт с возможностью добавлять, редактировать, а также удалять статьи. При создании использовался фреймворк React.
        </p>
      </li>
      <li className={styles.listItem}>
        <b>Веб приложение для БД</b>
        <p>
          Реализовал веб-приложение для взаимодействия с базой данных по предметной области. Обеспечил возможность ввода, редактирования, удаления данных, также добавил поиск записей по строке. При создании использовался ORM. Реализовал хранение данных в базе данных MySQL. Основная часть функционала была разработана на Python, использовав при этом фреймворк Django.
        </p>
      </li>
    </ul>
    <h2>Контакты</h2>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <a href="https://t.me/frezzz96">Telegram</a>
      </li>
      <li className={styles.listItem}>
        <a href="https://github.com/frezzz1">GitHub</a>
      </li>
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Резюме" />

export default IndexPage
