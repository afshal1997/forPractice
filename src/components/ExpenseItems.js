import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const ExpenseItems = (props) => {

    return (
        <>
            <Container>
                <Card className='bg-dark border-0 text-light pt-5 pb-5'>
                    <Row>
                        <Col>
                            <h2>{props.title}</h2>
                        </Col>
                        <Col>
                            <h2>{props.price}</h2>
                        </Col>
                        <Col>
                            <h2>${props.date.toISOString()}</h2>
                        </Col>
                        <Col>
                            <img className="w-25" src={props.img} alt="img" />
                        </Col>
                    </Row >
                </Card>
            </Container>
        </>
    )
}

export default ExpenseItems