import { Card, Row, Col } from "react-bootstrap";

const AdminPanel = () => {

  const cardStyle = {
    padding:"20px",
    borderRadius:"10px",
    textAlign:"center",
    boxShadow:"0 3px 10px rgba(0,0,0,0.1)"
  }

  return (

    <>
      <h3>Admin Dashboard</h3>

      <Row className="mt-3">

        <Col md={4}>
          <Card style={cardStyle}>
            <h2>350</h2>
            <p>Total Students</p>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={cardStyle}>
            <h2>25</h2>
            <p>Total Teachers</p>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={cardStyle}>
            <h2>18</h2>
            <p>Total Classes</p>
          </Card>
        </Col>

      </Row>
    </>
  )

}

export default AdminPanel