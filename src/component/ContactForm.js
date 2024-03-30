import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";

const ContactForm = () => {

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const dispatch=useDispatch();
    const addContact = (e) => {
        e.preventDefault();
        console.log(name, phoneNumber);
        dispatch({type:"ADD_CONTACT", payload:{name, phoneNumber}});

        setName("");
        setPhoneNumber("");
    }



    return(
        <div>
            <h2 style={{marginTop:"10px"}}><strong>연락처 추가하기</strong></h2>
            <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력해주세요." onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>연락처</Form.Label>
        <Form.Control type="number" placeholder="전화번호를 입력해주세요." onChange={(e)=>setPhoneNumber(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
        </div>
    );

}

export default ContactForm;