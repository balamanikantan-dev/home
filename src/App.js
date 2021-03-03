import { BulbOutlined, ClockCircleOutlined, DesktopOutlined, GithubOutlined, MailOutlined, RocketOutlined } from '@ant-design/icons'
import { Card, Col, Rate, Row } from 'antd';
import './App.css';
import './Navbar/Navbar.css'
import 'antd/dist/antd.css';


function App() {
  return (
    <div className="App">
      <div style={{ height: '100vh', display: 'flex' }}>
        <h2 style={{ margin: "auto", fontSize: "50px" }}>
          Hello, I'm C.Balamanikantan.<br></br>
        I'm a Web developer.
      </h2>
      </div>
      <ul>
        <li><a classname="active" href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#contact">CONTACT</a></li>


      </ul>
      <h1 style={{ color: "gray", fontSize: "50px", textDecoration: "underline" }}>ABOUT</h1>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
        <ClockCircleOutlined style={{ fontSize: "110px", margin: "40px" }} />
        <DesktopOutlined style={{ fontSize: "110px", marginTop: "40px" }} />
        <BulbOutlined style={{ fontSize: "110px", marginTop: "40px" }} />
        <RocketOutlined style={{ fontSize: "110px", marginTop: "40px" }} /><br></br>

      </div >
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
        <h3>Fast</h3>

        <h3>Responsive</h3>

        <h3>Intuitive</h3>

        <h4>Dynamic</h4>

      </div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
        <p>Fast load times and lag free <br></br>
        interaction, my highest priority.</p>
        <p>My layouts will work on any <br></br>
          device, big or small.</p>
        <p>Strong preference for easy to <br></br>
            use, intuitive UX/UI.</p>
        <p>Websites don't have to be static, I love<br></br>
               making pages come to life.</p>
      </div><br></br>
      <h1 style={{ marginTop: "20px", color: "gray", fontSize: "50px", textDecoration: "underline" }}>SKILLS</h1>
      <div style={{ backgroundColor: "lightgrey", width: "96%", padding: "5px", margin: "20px" }}>




        <p style={{ fontSize: "40px" }}>CSS  -    <Rate disabled defaultValue={3} /></p>
        <br></br>
        <p style={{ fontSize: "40px" }}>HTML  - <Rate /></p><br></br>
        <p style={{ fontSize: "40px" }}>JAVASCRIPT  -  <Rate /></p><br></br>
        <p style={{ fontSize: "40px" }}>REACT- <Rate /></p>
      </div>
      <div>
        <h1 style={{ color: "gray", fontSize: "50px", textDecoration: "underline" }}>PROJECTS</h1>
        <Row>
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            <Card title="WEATHER" bordered={false} style={{ width: 300 }}>
              <p>A weather application which shows you the current weather
              at your location. This application allows you to get the
              current weather at your location and also for any specific
                city  from your choice.</p>
              <a href="https://balamanikantan-dev.github.io/weather" target="_blank">View Demo</a>

            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            <Card title="QUIZ" bordered={false} style={{ width: 300 }}>
              <p>A quiz application is a form of game or mind sport in
              which players attempt to answer questions correctly about
              a certain or variety of subjects. Quizzes can be used as
              a  measure growth in knowledge, abilities, or skills.
              They can also be televised for entertainment purposes,
               often in a game show format.</p>
              <a href="https://balamanikantan-dev.github.io/quiz" target="_blank">View Demo</a>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            <Card title="MOVIES" bordered={false} style={{ width: 300 }}>
              <p>This React app allows us to build specific components
              for each part of our UI. We'll build a Search component
              that lets a user input a movie title, and a Trending component
              to display the Trending movies. And when the user clicks on
              the movie it will be redirected the movie description page
                      where the required movie description is present. </p>
              <a href="https://balamanikantan-dev.github.io/movies" target="_blank">View Demo</a>

            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            <Card title="RECIEPE" bordered={false} style={{ width: 300 }}>
              <p>An app that allows user to view, edit, add and delete recipes.</p>

            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            <Card title="EMOJI" bordered={false} style={{ width: 300 }}>
              <p>In this react application a search component is presented
              and when so the user wants the particular emoji if the user
              places the required emoji name in the search component the
                 required emoji would be reverted back to the user </p>
              <a href="https://balamanikantan-dev.github.io/emoji" target="_blank">View Demo</a>

            </Card>
          </Col>

        </Row>
      </div>
      <h1 style={{ color: "gray", fontSize: "50px", textDecoration: "underline" }}>CONTACT</h1>
      <h3><MailOutlined />-Balamanikantan.dev@gmail.com</h3>
      <h3><GithubOutlined /> https://github.com/balamanikantan-dev</h3>
    </div>
  );
}

export default App;
