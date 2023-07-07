import Footer from "../../components/footer/Footer";
import NavWintek from "../../components/navbar/Navbar";
import TextCard from "../../components/card/TextCard";
import Textos from '../../config/textosBienvenidos.json';
import styles from '../../components/card/TextCard.module.css';

function Bienvenidos() {
  return (
    <div className={styles.page}>
        <NavWintek/>
        <div className={styles.container}>
        <p className={styles.title}>BIENVENIDOS</p>
        {
        Textos.map((texts, index) => <TextCard key={index} {...texts} />)
        }
        </div>
         <Footer/>
    </div>
  )
}

export default Bienvenidos