import Footer from '../../components/footer/Footer';
import NavWintek from '../../components/navbar/Navbar';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styles from './Inicia.module.css';

function Inicia() {
  return (
    <div>
         <NavWintek/>
        <div className={styles.container}>
        <p className={styles.title}>INICIA TU CAMINO EL ÉXITO</p>
        <Card className={styles.containerSection}>
        <Card.Body className={styles.cardBody}>
            <p className={styles.text}> Puedes hacer la mejor transformación digital para tu empresa, ahora.</p> 
            <p className={styles.text}> Solo compártenos tus datos y una breve descripción de lo que necesitas para hacer despegar tu compañía. </p> 
            <p className={styles.text}>A la brevedad nos pondremos en contacto contigo.</p> 

            <Form className={styles.containerForm}>
            
              <Form.Group as={Row} className="mb-3" controlId="formNombre">
                <div className={styles.formRow}>
                  <Form.Label className={styles.textLabel} column="lg" lg={5}>Nombre</Form.Label>
                  <Form.Control size="lg" type="text" placeholder="Nombre" />
                </div>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPuesto">
              <div className={styles.formRow}>
                <Form.Label  className={styles.textLabel} column="lg" lg={5}>Puesto</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Puesto" />
              </div>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formEmpresa">
              <div className={styles.formRow}>
                <Form.Label  className={styles.textLabel} column="lg" lg={5}>Empresa</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Empresa" />
              </div>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formTelefono">
              <div className={styles.formRow}>
                <Form.Label  className={styles.textLabel} column="lg" lg={5}>Teléfono</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Teléfono" />
              </div>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formCorreo">
              <div className={styles.formRow}>
                <Form.Label  className={styles.textLabel} column="lg" lg={5}>e-mail</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Correo electrónico" />
              </div>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formMensaje">
              <div className={styles.formRow}>
                <Form.Label  className={styles.textLabel} column="lg" lg={5}>Mensaje</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Mensaje" as="textarea" rows={5}/>
              </div>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button className= {styles.button} type="submit">Enviar</Button>
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

export default Inicia