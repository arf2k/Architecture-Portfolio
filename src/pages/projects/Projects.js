import React from "react";
import AlexandMaeby from "../../assets/AlexandMaeby.jpg"

const Projects = () => {
return (
     <>
     <h1>Projects Page</h1>
     <div className="proj-container">
     <div className="img-container" style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", height: "500px", width: "300px"}}>
<img alt="placeholder1" src={AlexandMaeby}/>
<img alt="placeholder2" src={AlexandMaeby}/>
<img alt="placeholder3" src={AlexandMaeby}/>
<img alt="placeholder4" src={AlexandMaeby}/>
<img alt="placeholder5" src={AlexandMaeby}/>
<img alt="placeholder6" src={AlexandMaeby}/>
<img alt="placeholder7" src={AlexandMaeby}/>
<img alt="placeholder8" src={AlexandMaeby}/>
<img alt="placeholder9" src={AlexandMaeby}/>

     </div>
     </div>
     </>
)
}

export default Projects