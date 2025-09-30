import {Card, Button,Row, Col} from 'react-bootstrap'



export default function Productos() 
{
    const productos = [
        { id:1, nombre:"Producto 1", img:"https://placehold.co/300x200", precio:"$100" },
        { id:2, nombre:"Producto 2", img:"https://placehold.co/300x200", precio:"$200" },
        { id:3, nombre:"Producto 3", img:"https://placehold.co/300x200", precio:"$300" },
        { id:4, nombre:"Producto 4", img:"https://placehold.co/300x200", precio:"$400" },
        { id:5, nombre:"Producto 5", img:"https://placehold.co/300x200", precio:"$500" }
    ];

    return(
        <div>
            <Row>
                {productos.map((prod)=>{
                    <Col key={prod.id}>
                        <Card className='mb-4 shadow-sm'>
                            <Card.img variant="top" src={prod.img}/>
                            <Card.Body>
                                <Card.Title>{prod.nombre}</Card.Title>
                                <Card.Text>{prod.precio}</Card.Text>
                                <Button variant='primary'>Agregar</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                }
                )}
            </Row>
        </div>
    )

}