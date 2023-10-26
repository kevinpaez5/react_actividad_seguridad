import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const HomePage = () => {
  const { user } = useAuth0();

  return (
    <Container className="mt-5">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h1>Bienvenido a Mi App</h1>
          <p>
            Esta es una aplicación de demostración para implementar
            autenticación y autorización con React y Auth0.
          </p>
          <div>
            {user && (
              <p> {user.name} ({user.email}) </p>             
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;