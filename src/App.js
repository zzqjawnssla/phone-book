
import './App.css';
import {Col, Container, Row} from "react-bootstrap";
import ContactForm from "./component/ContactForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactList from "./component/ContactList";

// 1. 왼쪽에는 연락처 등록하는 폼이, 오른쪾에는 연락처 리스트와 search창
// 2.리스트에 유저이름과 전화번호를 추가할수 있다
// 3. 리스트에 아이템이 몇개있는지 보인다
// 4. 사용자가 유저를 이름검색으로 찾을 수 있다



function App() {


  return (
      <div>
          <h1 className="title">연락처</h1>

          <Container>
              <Row>
                  <Col style={{border:"1px solid lightgrey",marginRight:"10px", padding:"20px"}}>
                      <ContactForm/>
                  </Col>
                  <Col style={{border:"1px solid lightgrey", padding:"20px"}}>
                      <ContactList/>
                  </Col>
              </Row>
          </Container>
      </div>


  );
}

export default App;
