import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

import { Landpage } from "../components/Layout/landpage";

import styles from "../styles/pages/home.module.scss";
import commonStyles from "../styles/commonStyles.module.scss";

import modelo01 from "../assets/images/image01.png";
import computer from "../assets/images/image02.png";
import modelo02 from "../assets/images/image03.png";

import job01 from "../assets/images/job1.jpg";
import job02 from "../assets/images/job2.jpg";
import job03 from "../assets/images/job3.jpg";

import Link from "next/link";
import { Title } from "components/title";

interface IFormInputs {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

export default function Home() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();

  return (
    <Landpage title="Agência Tucan">
      <header className={styles.header}>
        <div>
          <p>O seu negócio merece um projeto</p>
          <h1>feito com amor pela tucan!</h1>
          <div className={commonStyles.flex}>
            <Link href="/orcamento">
              <a className={commonStyles.btn_default}>Orçamento</a>
            </Link>

            <Link href="#main">
              <a className={commonStyles.btn_secondary}>Saiba mais</a>
            </Link>
          </div>
        </div>

        <div>
          <Image src={modelo01} alt="image" width={562} height={620} />
        </div>
      </header>

      <div id="main" className={styles.about}>
        <div className={styles.content_about}>
          <div>
            <Title
              icon="ri-computer-line ri-2x"
              title="Desenvolvimento exclusivo"
              subtitle="Adaptados para uma gama de dispositivos e planejados para sua empresa conquistar novos clientes"
            />

            <p className={styles.paragraph}>
              Somos uma agência de desenvolvimento e design que trabalha com
              soluções e estratégias para conectar sua marca com o consumidor de
              forma humanizada, proporcionando novas oportunidades de negócio e
              potencializando suas vendas.
            </p>
            <p className={styles.paragraph}>
              Oferecemos muito mais que desenvolvimento de sites. Projetos
              exclusivos, desenvolvidos por profissionais capazes de entender
              suas necessidades, apresentar e colocar em prática as melhores
              soluções.
            </p>
            <p className={styles.paragraph}>
              Conexão humanizada para que seu consumidor tenha uma ótima
              experiência, traduzido a personalidade e valores da empresa.
            </p>
          </div>

          <div>
            <Image src={computer} alt="Computador" height={483} width={520} />
          </div>
        </div>
      </div>

      <div className={styles.service}>
        <div className={styles.content_service}>
          <Title
            icon="ri-service-line ri-2x"
            title="Conheça os serviços que a Tucan  tem a oferecer"
          />
          <Image
            className={commonStyles.model}
            src={modelo02}
            alt="Computador"
            height={483}
            width={520}
          />
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <i className="ri-code-s-slash-line ri-2x" />
            <h2>Desenvolvimentos de sites</h2>
            <p>
              Desenvolvimento de site exclusivo, focado em UX/UI, responsivo,
              otimizado (SEO) e gerenciável.
            </p>
          </div>

          <div className={styles.card}>
            <i className="ri-palette-line ri-2x" />
            <h2>Identidade Visual</h2>
            <p>
              Criação de identidade visual, manual, conceito da marca, logo e
              demais materias auxiliares de branding.
            </p>
          </div>
          <div className={styles.card}>
            <i className="ri-chat-smile-2-line ri-2x" />
            <h2>Gestão de redes sociais</h2>
            <p>
              Através de um planejamento estratégico, criamos presença digital
              para o seu negócio e o aproximamos de possíveis clientes.
            </p>
          </div>
          <div className={styles.card}>
            <i className="ri-store-line ri-2x" />
            <h2>E-Commerce</h2>
            <p>
              Plataforma completa para e-commerce, sistema de venda online e
              customização para sua empresa vender mais.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.contact}>
        <div className={styles.content_contact}>
          <div>
            <Title
              icon="ri-customer-service-2-line ri-2x"
              title="Conte sua ideia"
              subtitle="Envie um e-mail, ou ligue e nos conte sobre o que você quer desenvolver."
            />

            <div>
              <p>
                <i className="ri-phone-line" /> (92) 98544-5392
              </p>
              <p>
                <i className="ri-phone-line" /> (92) 99243-0969
              </p>
            </div>

            <div>
              <p>
                <i className="ri-mail-line" /> tucan.developers@gmail.com
              </p>
            </div>

            <div>
              <p>
                <i className="ri-map-pin-5-line" />
                R. Francisco Fiuza de Lima, 3848, Jauary II, Itacoatiara -
                Amazonas, 69104376
              </p>
            </div>
          </div>

          <form
            className={styles.form_contact}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.input_block}>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                placeholder="Nome completo"
                {...register("name", { required: true })}
              />
              <p>{errors.name && "Por favor digite seu nome!"}</p>
            </div>

            <div className={styles.input_block}>
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                placeholder="E-mail"
                {...register("email", { required: true })}
              />
              <p>{errors.email && "Por favor digite seu e-mail!"}</p>
            </div>

            <div className={styles.input_block}>
              <label htmlFor="phone">Telefone</label>
              <input
                type="tel"
                placeholder="Telefone"
                {...register("phone", { required: true })}
              />
              <p>{errors.phone && "Por favor digite seu telefone!"}</p>
            </div>

            <div className={styles.input_block}>
              <label htmlFor="message">Mensagem</label>
              <input
                type="text"
                placeholder="Fale um pouco sobre seu projeto"
                {...register("message", { required: true })}
              />
              <p>{errors.message && "Por favor digite sua mensagem!"}</p>
            </div>

            <div className={commonStyles.flex}>
              <button className={commonStyles.btn_default} type="submit">
                Enviar
              </button>
              <button className={commonStyles.btn_secondary} type="reset">
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className={styles.gallery}>
        <div className={styles.content_gallery}>
          <Title
            icon="ri-gallery-line ri-2x"
            title="Galeria de Jobs"
            subtitle="Tivemos a honra de criar, gerenciar, estruturar e participar de cada uma dessas marcas. Confira o portfólio completo."
          />
        </div>
        <div className={styles.content_jobs}>
          <div className={commonStyles.image_block}>
            <Image
              src={job01}
              alt="imag"
              layout="responsive"
              width={480}
              height={480}
            />
          </div>
          <div className={commonStyles.image_block}>
            <Image
              src={job02}
              alt="imag"
              layout="responsive"
              width={480}
              height={480}
            />
          </div>
          <div className={commonStyles.image_block}>
            <Image
              src={job03}
              alt="imag"
              layout="responsive"
              width={480}
              height={480}
            />
          </div>
        </div>
      </div>
    </Landpage>
  );
}
