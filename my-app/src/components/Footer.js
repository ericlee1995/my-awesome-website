import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

export default function Footer() {
  return (
    <footer className="footer">
      <p className="icon-copyright">
        2020 Eric Lee. Designed and built with{' '}
        <span role="img" aria-label="love">
          ❤️
        </span>
        .
      </p>
      <Container className="contact-item-container">
        <Row>
          <Col>
            <Button
              className="contact-item icon-mail-alt"
              href="mailto:hsuan9528@gmail.com"
              variant="outline-light"
            >
              Email
            </Button>
            <Button
              className="contact-item icon-linkedin"
              href="http://www.linkedin.com/in/erichsuanlee"
              variant="outline-light"
            >
              LinkedIn
            </Button>
            <Button
              className="contact-item icon-github"
              href="http://github.com/ericlee1995"
              variant="outline-light"
            >
              GitHub
            </Button>
            <Button
              className="contact-item icon-instagram"
              href="http://www.instagram.com/eric.hlee/"
              variant="outline-light"
            >
              Instagram
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
