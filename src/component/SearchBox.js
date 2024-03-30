import React, {useState} from "react";
import {Button, Col, Row,Form} from "react-bootstrap";
import {useDispatch} from "react-redux";

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch=useDispatch();
const searchContact = (e) => {
        e.preventDefault();
        dispatch({type:"SEARCH_CONTACT", payload:{searchTerm}})
        setSearchTerm("");
    }

    return(
        <div>
           <Row style={{marginBottom:"10px"}}>
                <Col lg={10}>
                     <Form.Control type="text" placeholder="이름을 입력해주세요." onChange={(e)=>setSearchTerm(e.target.value)}/>
                </Col>
                <Col lg={2}>
                     <Button onClick={searchContact}variant="primary">찾기</Button>
                </Col>
           </Row>
        </div>
    );
}

export default SearchBox;