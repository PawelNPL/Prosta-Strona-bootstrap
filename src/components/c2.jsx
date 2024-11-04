import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Component2 = () => {
  return (
    <div className="container mt-5" style={{ height: 'auto', width: '100%' , marginBottom:'200px' }}>
      {}
      <div className="text-center mb-5" style={{ marginTop:'250px'}}>
        <h2>Tworzymy z myślą o przyszłości</h2>
        <p>
          Każdy projekt, który realizujemy, jest efektem naszej pasji do designu i technologii.
          Skupiamy się na tworzeniu unikalnych rozwiązań, które łączą funkcjonalność, estetykę i
          innowacyjność. Zobacz, co sprawia, że nasze produkty są wyjątkowe.
        </p>
      </div>

      <Row style={{ marginTop: '5%' }}>
        <Col md={4}>
          <Card className="mb-4 fit-content" style={{ height: '' }}>
            <Card.Body>
              <Card.Img
                src="https://plus.unsplash.com/premium_photo-1661382011487-cd3d6b1d9dff?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Card.Title style={{ paddingTop: '5px' }}>Przemyślany Design</Card.Title>
              <Card.Text>
                Nasze projekty są tworzone z myślą o użytkownikach. Każdy detal jest dokładnie przemyślany, aby zapewnić intuicyjność, funkcjonalność i estetykę na najwyższym poziomie.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 fit-content" style={{ height: '' }}>
            <Card.Body>
              <Card.Img
                src="https://plus.unsplash.com/premium_photo-1681566925312-948c8a896b37?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Card.Title style={{ paddingTop: '5px' }}>Świetne Produkty</Card.Title>
              <Card.Text>
                Oferujemy produkty, które łączą innowacyjne rozwiązania z doskonałą jakością. Nasze produkty wyróżniają się trwałością, funkcjonalnością i eleganckim designem.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 fit-content" style={{ height: '' }}>
            <Card.Body>
              <Card.Img
                src="https://plus.unsplash.com/premium_photo-1661962469106-dff58e62f235?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Card.Title style={{ paddingTop: '5px' }}>Fantastyczna Integracja</Card.Title>
              <Card.Text>
                Nasze rozwiązania doskonale współpracują z istniejącymi systemami. Zapewniamy płynną integrację, która usprawnia procesy i zwiększa wydajność bez zakłóceń w działaniu.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Component2;
