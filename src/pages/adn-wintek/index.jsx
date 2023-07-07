import Footer from "../../components/footer/Footer";
import NavWintek from "../../components/navbar/Navbar";
import { Card } from "react-bootstrap";
import secuencia from '../../../public/images/secuencia-wintek-2.png';
import imgSocios from '../../../public/images/Julio&Veronica (16 of 62).jpg';
import Image from 'next/image'
import styles from './adn.module.css'

function AdnWintek() {
  return (
    <div>
        <NavWintek/>
        <div className={styles.container}>
        <p className={styles.title}>ADN WINTEK</p>
        <Card className={styles.containerSection}>
        <Card.Body className={styles.cardBody}>
            <p className={styles.text}> Cada eslabón y conexión en la estructura de nuestro ADN fue creado para ofrecer las mejores soluciones de transformación digital para las empresas; gracias a nuestra experiencia, capacitación constante, colaboraciones internacionales y una trayectoria de más de dos décadas de cada uno de los socios, podemos asegurar</p> 
            <Image src={secuencia} className={styles.iconAdn} alt='imagen secuencia'/>
            <p className={styles.text}>Fusionar la mejor gestión técnica y del equipo</p>
            <Image src={secuencia} className={styles.iconAdn}alt='imagen secuencia'/>
            <p className={styles.text}>Garantizar la cercanía y seguimiento con nuestros clientes</p>
            <Image src={secuencia} className={styles.iconAdn} alt='imagen secuencia'/>
            <p className={styles.text}>Escuchar activamente todas las necesidades de las empresas que confían en nosotros</p>
            <Image src={secuencia} className={styles.iconAdn} alt='imagen secuencia'/>
            <p className={styles.text}>Evolucionar y crecer de la mano de todos los clientes, para mantenernos a la vanguardia</p>
            <Image src={secuencia} className={styles.iconAdn} alt='imagen secuencia'/>
            <p className={styles.text}>Compartir nuestra experiencia en diferentes industrias y países del mundo</p>
        </Card.Body>
        </Card>

        <p className={styles.title}>SEMBLANZAS</p>
        <Image src={imgSocios} className="img-semblanzas" width={400} height={600} alt="imagen socios"/>
        <Card className={styles.containerSection}>
        <Card.Body >
            <p  className={styles.title}>Verónica Apellido Apellido</p>
            <p  className={styles.text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
        </Card.Body>
        </Card>

        <Card className={styles.containerSection}>
        <Card.Body >
            <p  className={styles.title}>Julio Merino Arango</p>
            <p className={styles.text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
        </Card.Body>
        </Card>

        </div>
         <Footer/>
    </div>
  )
}

export default AdnWintek;