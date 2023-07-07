import { Card } from "react-bootstrap";
import styles from './TextCard.module.css';


function TextCard({title, text}) {
  return (
    <div>
        <div className={styles.container}>

        <Card className={styles.containerSection}>
        <Card.Body >
            <p className={styles.title}>{title}</p>
            <p className={styles.text}>{text}</p>
        </Card.Body>
        </Card>
    
        </div>
    </div>
  )
}

export default TextCard;