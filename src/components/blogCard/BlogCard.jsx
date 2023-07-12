import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import style from './BlogCard.module.css';

function BlogCard({ image, title, date, linkPage, group, author }) {
  return (
      <Card style={{ width: '20rem'}} className={style.cardStyle}>
        <Image variant="top" src={image} width={100} height={100} alt="image from blog"/>
        <Card.Body>
          <Card.Title className={style.title}>{title}</Card.Title>
          <Card.Text className={style.smallText}>{date}</Card.Text>
          <a href={linkPage}>
            <Button className={style.button}>Leer más</Button>
          </a>
          <Card.Text className={style.mediumText}>{group}</Card.Text>
          <Card.Footer>
          <small className={`text-muted mediumText`}>{author}</small>
        </Card.Footer>
        </Card.Body>
      </Card>
    );
  }

export default BlogCard