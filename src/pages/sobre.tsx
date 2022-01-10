import { Landpage } from "components/Layout/landpage";
import { Title } from "components/Title";

import styles from "../styles/pages/about.module.scss";
import commonStyles from "../styles/commonStyles.module.scss";

export default function About() {
  return (
    <Landpage>
      <div className={styles.container_about}>
        <Title icon="ri-information-line ri-2x" title="Sobre" />

        <div className={styles.content_about}>
          <p>
            Uma empresa de inovação digital focada no desenvolvimento de
            soluções web e mobile. Nossa equipe é composta por desenvolvedores e
            designs excelentes, capazes realizar negócios digitais, desde sites
            para empresas já consolidadas a startups com potencial de escala em
            seu modelo de negócio.
          </p>
          <p>
            A TucanDev iniciou sua trajetória no mercado de tecnologia através
            do desenvolvimento de soluções web e mobile sob medida, sites e
            aplicativos que ajudam pequenas e grandes empresas a venderem mais e
            assim gerando impacto.
          </p>
          <p>
            Com excelência, vontade e uma dedicação fora do comum, cada membro
            da equipe busca fazer o seu melhor todos os dias nos projetos em que
            estão atuando, pois sabemos que o sucesso de nossos clientes é o que
            solidifica o nosso conjunto de conhecimentos práticos em diferentes
            mercados e nos ajuda a impactar positivamente cada vez mais a vida
            das empresas e pessoas, gerando valor para todo nosso ecossistema.
          </p>

          <div className={commonStyles.flex}>
            <div className={styles.mission}>
              <span>01</span>
              <h2>Missão</h2>
              <p>
                Promover o desenvolvimento de competências em gestão, a
                interação entre empresas e os centros de conhecimento e a
                promoção da inovação nas empresas.
              </p>
            </div>
            <div className={styles.vision}>
              <span>02</span>
              <h2>Visão</h2>
              <p>
                Ser referência no desenvolvimento de competências em gestão, na
                interação entre empresas e os centros de conhecimento e na
                promoção da inovação para aumentar a competitividade da
                indústria Amazonense.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Landpage>
  );
}
