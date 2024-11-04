import React from 'react';
import { Container, Row, Col, Card, Form , Button} from 'react-bootstrap';


const Component5 = () => (
    <Container style={{ marginTop: '15rem' }}>
        <Row>
            
            <Col md={6} className="p-4" id="about">
                <h2>O nas</h2>
                <p>Jesteśmy firmą, która specjalizuje się w dostarczaniu wysokiej jakości usług dla naszych klientów. Z pasją dążymy do doskonałości i zapewniamy, że spełniamy wszystkie oczekiwania naszych klientów.</p>
                <p><strong>Adres:</strong> ul. Przykładowa 123, 00-001 Miasto</p>
                <p><strong>Telefon:</strong> +48 123 456 789</p>
                <p><strong>Email:</strong> kontakt@firma.pl</p>
            </Col>

            
            <Col md={6} className="p-4" id="contact">
                <h2>Skontaktuj się z nami</h2>
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>Imię i Nazwisko</Form.Label>
                        <Form.Control type="text" placeholder="Wpisz swoje imię i nazwisko" />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mt-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Wpisz swój email" />
                    </Form.Group>

                    <Form.Group controlId="formMessage" className="mt-3">
                        <Form.Label>Wiadomość</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Wpisz swoją wiadomość" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-3">
                        Wyślij
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
);

export default Component5;