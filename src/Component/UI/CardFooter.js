import React from "react";

const CardFooter = () => {
  const wrapper = {
    display: "inline-block",
    position: "absolute",
    width: "1.5rem",
    height: "1.5rem",
    margin: "0.75rem",

  };

  return (
    <div className="cardfooter" style={{display:"flex",justifyContent:"center", marginTop:"1rem"}}>
      <div style={{
        width: "3rem", height: "3rem",
        display: "inline-block", border: "white solid 1px",
        borderRadius: "1.5rem",
        boxShadow: "rgba(0,0,0,0.4) 0 0 2px 1px",
        margin:"1rem"
      }}>
        <input type="image" src="https://cdn-icons-png.flaticon.com/512/880/880594.png" style={wrapper} alt="" />
      </div>
      <div style={{
        width: "3rem", height: "3rem",
        display: "inline-block", border: "white solid 1px",
        borderRadius: "1.5rem",
        boxShadow: "rgba(0,0,0,0.4) 0 0 2px 1px",
        margin:"1rem"

      }}>
        <input type="image" src="https://cdn-icons-png.flaticon.com/512/880/880594.png" style={wrapper} alt="" />
      </div>
    </div>
  )
}

export default CardFooter;