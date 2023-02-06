import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://www.compass.com/m3/f814bfd01cc289efdd7f5298e59ae8cb174719a9.jpg" />
      {contacts.map(createCard)};
      {/* <Card
          name={contacts[0].name}
          img={contacts[0].imgURL}
          tel={contacts[0].phone}
          email={contacts[0].email}
          />

          <Card 
          name={contacts[1].name}
          img={contacts[1].imgURL}
          tel={contacts[1].phone}
          email={contacts[1].email}
          />

          <Card 
          name={contacts[2].name}
          img={contacts[2].imgURL}
          tel={contacts[2].phone}
          email={contacts[2].email}
          />
          </div> */}
    </div>
  );
}

export default App;
