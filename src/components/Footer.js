import React from "react"

const Footer = props => {
  // props.children is anything you put in btwn the component when you invoke it 
  // i.e  <Footer>Made for Deep Dive!</Footer>
  return <footer>{props.children} </footer>
}

export default Footer
