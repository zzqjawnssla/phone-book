import React from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import {useSelector} from "react-redux";

const ContactList = () => {
    const contactList = useSelector(state => state.contactList);
    const searchTerm = useSelector(state => state.searchTerm);

    const filteredList = contactList.filter(item => item.name.includes(searchTerm));

    return (

        <div style={{marginBottom:"10px"}}>
            <h2 style={{marginTop:"10px",marginBottom:"10px"}}><strong>연락처 검색하기</strong></h2>

            <p style={{marginTop:"0px",marginBottom:"5px"}}>Result : {filteredList.length}</p>
            <SearchBox />
            <p style={{marginTop:"15px",marginBottom:"10px"}}>검색결과</p>
            {filteredList.map(item => <ContactItem item={item}/>)}
        </div>
    );
}

export default ContactList;