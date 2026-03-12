import { useState } from "react";
import { Container, Row, Col, Form, Button, Card, InputGroup } from "react-bootstrap";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleLogin = () => {

    if(email === "admin@school.com" && password === "123456"){
      localStorage.setItem("role","admin")
      window.location.href="/dashboard"
    }
    else if(email === "teacher@school.com" && password === "123456"){
      localStorage.setItem("role","teacher")
      window.location.href="/dashboard"
    }
    else if(email === "student@school.com" && password === "123456"){
      localStorage.setItem("role","student")
      window.location.href="/dashboard"
    }
    else{
      alert("Invalid Login")
    }

  }

  return (

    <div
    style={{
      minHeight:"100vh",
      display:"flex",
      alignItems:"center",
      background:"#f5f6fa"
    }}
    >

      <Container>

        <Card
        style={{
          border:"none",
          borderRadius:"12px",
          overflow:"hidden",
          boxShadow:"0 10px 25px rgba(0,0,0,0.1)"
        }}
        >

          <Row>

            {/* LEFT LOGIN FORM */}

            <Col
            lg={5}
            className="p-5 d-flex flex-column justify-content-center"
            >

              <h3 style={{fontWeight:"600"}}>
                School Management
              </h3>

              <p className="text-muted mb-4">
                Login to your account
              </p>

              <Form>

                <Form.Group className="mb-3">

                  <InputGroup>

                    <InputGroup.Text>
                      <FaUser/>
                    </InputGroup.Text>

                    <Form.Control
                    placeholder="Username or Email"
                    onChange={(e)=>setEmail(e.target.value)}
                    />

                  </InputGroup>

                </Form.Group>

                <Form.Group className="mb-4">

                  <InputGroup>

                    <InputGroup.Text>
                      <FaLock/>
                    </InputGroup.Text>

                    <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}
                    />

                  </InputGroup>

                </Form.Group>

                <Button
                style={{
                  background:"#1e293b",
                  border:"none",
                  padding:"10px"
                }}
                className="w-100"
                onClick={handleLogin}
                >
                  Login
                </Button>

              </Form>

            </Col>


            {/* RIGHT IMAGE */}

            <Col
            lg={7}
            className="d-none d-lg-flex align-items-center justify-content-center"
            style={{
              background:"#eef2f7",
              padding:"40px"
            }}
            >

              <img
              src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
              alt="login"
              style={{
                width:"100%",
                maxWidth:"400px"
              }}
              />

            </Col>

          </Row>

        </Card>

      </Container>

    </div>
  )
}

export default Login