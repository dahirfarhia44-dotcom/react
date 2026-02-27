import React, { useState } from 'react'

function Name({ name, age, isStudent, isWorking, isTheDad }) {
  return (
    <h2>
      {name}, {age}, {isStudent ? "Student" : "Not Student"}, 
      {isWorking ? "Employed" : "Unemployed"}, {isTheDad ? "The Dad" : "The child"}
    </h2>
  );
}

function Fam() {
    const [showName, setShowName] = useState(false);
    
    const family = [
        {name:"Dahir Abdi Salam", age: 65, isStudent: false, isWorking: true, isTheDad: true},
        {name:"Aisha Dahir Abdi Salaam", age: 20, isStudent: true, isWorking: false, isTheDad: false},
        {name:"Fartun Dahir Abdi Salaam", age: 22, isStudent: true, isWorking: false, isTheDad: false},
        {name:"Faiza Dahir Abdi Salaam", age: 8, isStudent: true, isWorking: false, isTheDad: false}
    ];

    const toggleShowName = () => setShowName(!showName);

  return (
    <div>

        <button onClick={toggleShowName}>
        {showName ? "Hide Family Members" : "Show Family Members"}
      </button>

        {showName && family.map((member, index) => (
            <Name
            key={index}
            name={member.name}
            age={member.age}
            isStudent={member.isStudent}
            isWorking={member.isWorking}
            isTheDad={member.isTheDad}
            />
        ))}

    </div>
  )
}

export default Fam