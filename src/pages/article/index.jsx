import Footer from "../../components/footer/Footer";
import NavWintek from "../../components/navbar/Navbar";
import Image from 'next/image';
import articleImage from '../../../public/images/programming-background-with-person-working-with-codes-computer.jpg';
import styles from './article.module.css'

function Article() {
  return (
    <>
    <NavWintek/>
    <div className={styles.imageContainer}>
        <Image src={articleImage} className={styles.mainImage} width={390} height={200} alt="imagen artículo"/>
        <p className={`title ${styles.articleTitle}`}>Título artículo del blog</p>
    </div>
    <div className={styles.textContainer}>
        <p className={`text `}>Texto del artículo</p>
    </div>
    <Footer/>
    </>
  )
}

export default Article