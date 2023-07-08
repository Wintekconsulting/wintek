import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BlogCard({ image, title, date, linkPage, group, author }) {
  return (
      <Card style={{ width: '18rem' }}>
        <Image variant="top" src={image} width={100} height={100} alt="image from blog"/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{date}</Card.Text>
          <a href={linkPage}>
            <Button variant="primary" className="bttnSection">Leer más</Button>
          </a>
          <Card.Text>{group}</Card.Text>
          <Card.Footer>
          <small className="text-muted">{author}</small>
        </Card.Footer>
        </Card.Body>
      </Card>
    );
  }

export default BlogCard