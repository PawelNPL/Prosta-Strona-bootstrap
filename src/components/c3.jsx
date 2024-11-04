import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { FaFileAlt, FaChartLine, FaChartBar } from 'react-icons/fa';
import './styles.css'; 

const Component3 = () => {
    return (
        <Container fluid className="mt-5" style={{ height: '70vh', backgroundColor: '#d1d1d1' }}>
            <Row className="h-100">
                
                <Col md={6} className="d-flex flex-column align-items-start justify-content-center" style={{ padding: '20px' }}>
                    <h1 style={{ fontWeight: 'bold' }}>JAK PRACUJEMY</h1>
                    <Row className="mt-4 align-items-center">
                        <Col xs={2} className="text-center">
                            <FaFileAlt size={50} />
                        </Col>
                        <Col xs={10}>
                            <h4 className="mb-2" style={{ fontWeight: 'bold' }}>Zbieramy wszystkie niezbędne dane</h4>
                            <p>Nasze pierwsze kroki polegają na gromadzeniu wszystkich niezbędnych informacji, które są kluczowe dla dalszej analizy.</p>
                        </Col>
                    </Row>
                    <Row className="mt-4 align-items-center">
                        <Col xs={2} className="text-center">
                            <FaChartLine size={50} />
                        </Col>
                        <Col xs={10}>
                            <h4 className="mb-2" style={{ fontWeight: 'bold' }}>Analiza danych</h4>
                            <p>Dokonujemy szczegółowej analizy zebranych danych, aby zrozumieć kluczowe wzorce i trendy.</p>
                        </Col>
                    </Row>
                    <Row className="mt-4 align-items-center">
                        <Col xs={2} className="text-center">
                            <FaChartBar size={50} />
                        </Col>
                        <Col xs={10}>
                            <h4 className="mb-2" style={{ fontWeight: 'bold' }}>Raportowanie najlepszych rozwiązań</h4>
                            <p>Na podstawie przeprowadzonej analizy przygotowujemy raporty, które przedstawiają najbardziej efektywne rozwiązania.</p>
                        </Col>
                    </Row>
                </Col>

                
                <Col md={6} className="d-flex align-items-center justify-content-center" style={{ padding: '0' }}>
                    <div style={{ overflow: 'hidden', borderTopLeftRadius: '300px', borderBottomLeftRadius: '500px', height: '100%', width: '100%' }}>
                        <img
                            className="img-fluid responsive-image"
                            style={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover'
                            }}
                            src='https://plus.unsplash.com/premium_photo-1661297481575-4a595b393fad?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            alt="My Image"
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Component3;
