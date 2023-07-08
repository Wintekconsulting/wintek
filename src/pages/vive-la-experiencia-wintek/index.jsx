import Footer from '../../components/footer/Footer';
import NavWintek from '../../components/navbar/Navbar';
import { Card, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from './Vive.module.css';

function Vive() {
  return (
    <div>

        <NavWintek/>
        <div className={styles.container}>
        <p className={styles.title}>VIVE LA EXPERINCIA WINTEK</p>
        <Card className={styles.containerSection}>
        <Card.Body classname={styles.cardBody}>
            <p className={styles.text}> Si quieres iniciar tu carrera o continuar tu trayectoria profesional en una de las empresas de transformación digital más innovadoras, envíanos tu hoja de vida para descubrir tu perfil.</p>
            <p className={styles.text}> Queremos conocerte y trabajar de la mano para crecer juntos. Vive la experiencia Wintek y sé parte de nuestra historia.</p>
            <Form className='cont-form'>
              <Form.Group as={Row} className="mb-3" controlId="formArchivo">
              <Row>
                <Form.Label className={styles.textLabel} column="lg" lg={2}>Adjuntar archivo</Form.Label>
                <Col>
                  <Form.Control size="lg" type="file"/>
                </Col>
              </Row>
              </Form.Group>
              
              <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button className={styles.button} type="submit">Enviar archivo</Button>
                </Col>
                </Form.Group>
              </Form>
         
        </Card.Body>
        </Card>

        </div>
         <Footer/>

    </div>
  )
}

export default Vive