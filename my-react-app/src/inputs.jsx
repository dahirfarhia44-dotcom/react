import { useState } from "react"


// e represents an event
function Inputs() {
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name}
          onChange={handleInputChange}
        />{name}

    </div>
  )
}

export default Inputs