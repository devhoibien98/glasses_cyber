import { Button, Card, Col, Container, Row } from "react-bootstrap";
import glassesList from "../../data/glasses.js";
import { useState } from "react";
import { Link } from "react-router-dom";

const GlassesApp = () => {
  const [selectedGlasses, setSelectedGlasses] = useState(null);

  const handleSelectGlasses = (glasses) => {
    setSelectedGlasses(glasses);
  };

  return (
    <Container>
      <h1 className="text-center my-4">Try Glasses App Online</h1>

      <Row>
        {/* Cột hiển thị người mẫu */}
        <Col md={6}>
          <Card>
            <div style={{ position: "relative" }}>
              <img
                src="/glassesImage/model.jpg"
                alt="Model"
                style={{ width: "100%", height: "auto" }}
              />

              {selectedGlasses && (
                <img
                  src={selectedGlasses.url}
                  alt={selectedGlasses.name}
                  style={{
                    position: "absolute",
                    top: "24%",
                    left: "24.7%",
                    width: "50%",
                    height: "auto",
                    opacity: 0.7,
                  }}
                />
              )}
            </div>
          </Card>
        </Col>

        {/* Cột hiển thị danh sách kính */}
        <Col md={6}>
          <h3 className="text-center">Select Glasses</h3>
          <Row>
            {glassesList.map((glasses) => (
              <Col key={glasses.id} xs={6} md={4} className="mb-4">
                <Card
                  onClick={() => handleSelectGlasses(glasses)}
                  className="glasses-card"
                  style={{ cursor: "pointer" }}
                >
                  <Card.Img
                    variant="top"
                    src={glasses.url}
                    alt={glasses.name}
                  />
                  <Card.Body>
                    <Card.Title>{glasses.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Link to="/" className="text-decoration-none text-white mb-2">
        <Button variant="danger" type="submit" style={{ marginTop: "20px" }}>
          Back
        </Button>
      </Link>
    </Container>
  );
};
export default GlassesApp;
