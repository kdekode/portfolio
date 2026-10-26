import styles from './page.module.scss';

export default function Home() {
  return (
    <>
    <section className={styles.section_v3}>
      <div className={styles.section_v3__wrap}>
        <h1 className={styles.section_v3__title}>Hola mundo.</h1>
        <p className={styles.section_v3__txt}>
          Desarrollador Front-End & WordPress especializado 
          en la creación de sitios web y tiendas online 100% a medida. 
          Experto en desarrollo de temas desde cero, integración de 
          animaciones avanzadas y optimización técnica orientada al 
          posicionamiento SEO.
        </p>
      </div>
    </section>
      
    </>
  );
}
