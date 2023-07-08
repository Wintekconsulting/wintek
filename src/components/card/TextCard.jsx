import { Card } from "react-bootstrap";
import styles from './TextCard.module.css';

function TextCard({title, text}) {
  return (
    <div className="container">
        <Card className={`${styles.containerSection} bootstrap-class`}>
        <Card.Body >
            <p className={styles.title}>{title}</p>
            <p className={styles.text}>{text}</p>
        </Card.Body>
        </Card>
    </div>
  );
}

export default TextCard;