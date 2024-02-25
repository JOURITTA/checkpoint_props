import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";
function Player({joueur,image,name,team,nat,num,age}) {
  console.log(image,name,team,nat,num,age)
  return (
    <div >
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={joueur.image} style={{ width:"286px", height:"300px" }}/>
    <Card.Body>
      <h4 style={{textAlign:"center",color:"red"}}> {joueur.name}</h4>
      <Card.Text style={{display:"flex" }}><h5>l'equipe:</h5><h6>{joueur.team}</h6></Card.Text>
      <Card.Text style={{display:"flex" }}><h5>Nationalité:</h5><h6>{joueur.nationality}</h6></Card.Text>
      <Card.Text style={{display:"flex" }}><h5>le numéro de maillot:</h5><h6>{joueur.jerseyNumber}</h6></Card.Text>
      <Card.Text style={{display:"flex" }}><h5>age :</h5><h6>{joueur.age}</h6></Card.Text>
    </Card.Body>
  </Card>
  </div>
  )
}

Player.defaultProps={
  image:"https://www.shutterstock.com/image-photo/soccer-field-600nw-426014257.jpg",
  name:"amira",
  team:"tunisie",
  nat:"tunisienne",
  num:10,
  age:32,
}
Player.propTypes={
 age:PropTypes.number
}
export default Player