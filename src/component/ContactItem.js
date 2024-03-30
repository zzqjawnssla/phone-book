import React from "react";
import {Col, Row} from "react-bootstrap";

const ContactItem = ({item}) => {
    return (
        <div>
            <Row style={{border:"1px solid lightgrey", borderRadius:"5px", padding:"5px", width:"83%", marginLeft:"1px",marginBottom:"3px"}}>
                <Col lg={1}>
                    <img
                        width={50}
                        alt="profile"
                        src="https://www.alleganyco.gov/wp-content/uploads/unknown-person-icon-Image-from.png"/>
                </Col>
                <Col style={{marginLeft:"20px"}} lg={10}>
                    <div>{item.name}</div>
                    <div>{item.phoneNumber}</div>
                </Col>

            </Row>
        </div>
    );
}

export default ContactItem;