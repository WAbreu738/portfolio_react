import wes from '../assets/wes.jpg';
import { Container, Row, Col, Button } from 'react-bootstrap';

function About() {
  return (
    <div className="about-me">
      <Container>
        <h1 className="text-center my-5">A Little About Myself</h1>
        <Row className=" mb-5">
          <Col lg={3} className="d-flex justify-content-end">
            <img src={wes} alt="Wes" className="rounded" style={{ maxHeight: '500px' }} />
          </Col>
          <Col lg={9}>
            <div className="content">
              <h2>Hi, I'm Wesley</h2>
              <p>
                I'm Wesley Abreu, a dedicated full-stack web developer enthusiastic about crafting visually appealing and highly functional websites. My journey in web development has equipped me with a diverse skill set and a strong drive to deliver exceptional user experiences.
              </p>
              <p>
                Proficient in front-end technologies such as React, HTML, CSS, and JavaScript, as well as back-end technologies including Node.js, Express, and databases like MongoDB, I strive to stay abreast of emerging technologies and industry trends.
              </p>
              <p>
                My passion for problem-solving and continuous learning fuels my ambition to excel as a versatile full-stack developer, eager to make meaningful contributions to innovative projects. Currently, I am actively seeking opportunities to further leverage my expertise and contribute to impactful web development endeavors.
              </p>
              <div className="mt-4">
                <h2>Check Out my Resume</h2>
                <Button variant="primary" size="lg" href="https://drive.google.com/file/d/11sRqS_uunMCxlwaDxFyUcytUx2lPySiI/view?usp=drive_link" target="_blank">Resume</Button>
              </div>
              <Row className="skills-section mt-5">
                <Col>
                  <h1>Skills</h1>
                  <Row>
                    <Col md={6}>
                      <h3>Front End Technologies</h3>
                      <ul>
                        <li>HTML</li>
                        <li>CSS/SCSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>TailwindCSS</li>
                      </ul>
                    </Col>
                    <Col md={6}>
                      <h3>Back End Technologies</h3>
                      <Row>
                        <Col md={6}>
                          <ul>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>SQL</li>
                            <li>PostgresSQL</li>

                          </ul>
                        </Col>
                        <Col md={6}>
                          <ul>
                            <li>Sequelize</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                            <li>GraphQL</li>
                          </ul>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>


      </Container>
    </div>
  );
}

export default About;
