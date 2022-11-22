import React from "react";

const Footer = ()=>{
    let myStyle = {
        margin:"35vh auto"
    }
   
    return(
        <footer className="bg-dark text-light py-3" style={myStyle}>
            <p className="text-center">
            Copyright &copy; waviz.com
            </p>
        </footer>
    )
}
export default Footer;
