import React from "react";
import {contacts} from "../contacts";
import Card from "./Card";
import "./styles.css";
import Avatar from "./Avatar";

function App() {
  const contactElements = contacts.map((contact, index) => (
    <Card 
      key={index}
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  ));
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar 
        imgURL="https://media.licdn.com/dms/image/D4E03AQHMWq9RxthHIw/profile-displayphoto-shrink_800_800/0/1669943130333?e=1700092800&v=beta&t=vxIMqrNXvSGUfjc-NWD4Df_WIc3iaJl3mSZWA83SWLQ"
      />
      {contactElements}
    </div>
  );
}

export default App;
