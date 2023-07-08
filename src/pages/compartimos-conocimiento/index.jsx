import NavWintek from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import BlogCard from '../../components/blogCard/BlogCard';
import BlogCards from '../../config/blogCards.json';
import styles from './Compartimos.module.css'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

function Compartimos() {
  return (
    <div>
        <NavWintek/>
        <p  className="title">COMPARTIMOS CONOCIMIENTO</p>
       <Container fluid="md" className={styles.containerSection}>
       <Row>
      {
         BlogCards.map((blogcard, index) => <BlogCard key={index} {...blogcard}/>)
       }
       </Row>
       </Container>
       <Footer/>

    </div>
  )
}

export default Compartimos