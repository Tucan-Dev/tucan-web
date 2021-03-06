import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.scss";
import commonStyles from "../../styles/commonStyles.module.scss";

import Logotipo from "../../assets/icons/logotipo.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import LinkedIn from "../../assets/icons/linkedin.svg";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content_footer01}>
        <div>
          <i className="ri-chat-smile-2-line ri-2x" />
          <h1>Vamos começar um projeto juntos?</h1>
        </div>
        <div>
          <p>
            Seu projeto merece ficar me boas mãos, conte com a nossa agência
            para isso. Tem todas informações e está preparado? Então vamos
            começar!
          </p>
          <div className={commonStyles.flex}>
            <Link href="/orcamento">
              <a className={commonStyles.btn_default}>Começar um projeto</a>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.content_footer02}>
        <div>
          <div className={commonStyles.image_block}>
            <Image src={Logotipo} alt="logotipo" width={172} height={58} />
          </div>
          <p>
            Muito mais que uma agência digital, para uma parceria de projetos
            incríveis
          </p>

          <div className={styles.icons_block}>
            <Link href="https://www.instagram.com/tucandev/">
              <a target="_blank">
                <div className={commonStyles.image_block}>
                  <Image
                    src={Instagram}
                    alt="instagram"
                    width={40}
                    height={40}
                  />
                </div>
              </a>
            </Link>

            <Link href="https://www.facebook.com/tucandev/">
              <a target="_blank">
                <div className={commonStyles.image_block}>
                  <Image src={Facebook} alt="facebook" width={40} height={40} />
                </div>
              </a>
            </Link>

            <Link href="https://www.linkedin.com/company/tucandev/">
              <a target="_blank">
                <div className={commonStyles.image_block}>
                  <Image src={LinkedIn} alt="linkedIn" width={40} height={40} />
                </div>
              </a>
            </Link>
          </div>
        </div>

        <div>
          <ul>
            <li>
              <h2>Endereço</h2>
            </li>
            <li>
              <p>
                R. Francisco Fiuza de Lima, 3848, Jauary II, Itacoatiara -
                Amazonas
              </p>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <h2>Serviços</h2>
            </li>
            <li>
              <p>Desenvolvimento de sites</p>
            </li>
            <li>
              <p>Identidade Visual</p>
            </li>
            <li>
              <p>Gestão de Redes Sociais</p>
            </li>
            <li>
              <p>E-commerce</p>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <h2>Menu</h2>
            </li>

            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/orcamento">
                <a>Orçamento</a>
              </Link>
            </li>
            <li>
              <Link href="/sobre">
                <a>Sobre</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.content_footer03}>
        <small>&copy; Agência Tucan 2022. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
}
