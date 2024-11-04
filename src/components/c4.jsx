import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Component4 = () => (
    <Container style={{ marginTop: '15rem' }}>
        <Row className="text-center mb-4">
            <Col>
                <h2>CO MÓWIĄ NASI KLIENCI</h2>
                <p>Poznaj opinie innych </p>
            </Col>
        </Row>

        <Row className="justify-content-center">
            <Col md={4} className="mb-4 h-100">
                <Card className="p-3 text-center border-0 shadow-sm" style={{ minHeight: '250px' }}>
                    <Card.Body>
                        <Card.Text>Fantastyczne usługi! Zespół był bardzo pomocny.</Card.Text>
                        <div className="d-flex align-items-center justify-content-center mt-4">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Jeremy H."
                                className="rounded-circle me-3"
                                width="60"
                                height="60"
                            />
                            <div>
                                <h6 className="mb-0">Jeremy H.</h6>
                                <small className="text-muted">Manager</small>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            <Col md={4} className="mb-4 h-100">
                <Card className="p-3 text-center border-0 shadow-sm" style={{ minHeight: '250px' }}>
                    <Card.Body>
                        <Card.Text>Szybka i profesjonalna obsługa. Zdecydowanie polecam!</Card.Text>
                        <div className="d-flex align-items-center justify-content-center mt-4">
                            <img
                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=60"
                                alt="John S."
                                className="rounded-circle me-3"
                                width="60"
                                height="60"
                            />
                            <div>
                                <h6 className="mb-0">John S.</h6>
                                <small className="text-muted">Freelancer</small>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            <Col md={4} className="mb-4 h-100">
                <Card className="p-3 text-center border-0 shadow-sm" style={{ minHeight: '250px' }}>
                    <Card.Body>
                        <Card.Text>Dzięki ich wsparciu osiągnęliśmy nasze cele w rekordowym czasie!</Card.Text>
                        <div className="d-flex align-items-center justify-content-center mt-4">
                            <img
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=60"
                                alt="Susan W."
                                className="rounded-circle me-3"
                                width="60"
                                height="60"
                            />
                            <div>
                                <h6 className="mb-0">Susan W.</h6>
                                <small className="text-muted">Photographer</small>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default Component4;
