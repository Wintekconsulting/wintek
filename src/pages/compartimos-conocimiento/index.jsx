import NavWintek from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import BlogCard from '../../components/card/BlogCard';
import BlogCards from '../../config/blogCards.json';
import styles from './Compartimos.module.css';

function Compartimos() {
  return (
    <div>
        <NavWintek/>
        <div className={styles.container}>
            <p  className={styles.title}>COMPARTIMOS CONOCIMIENTO</p>
            <div className={styles.containerSection}>
            {
                BlogCards.map((blogcard, index) => <BlogCard key={index} {...blogcard}/>)
            }
            </div>
        </div>
         <Footer/>

    </div>
  )
}

export default Compartimos