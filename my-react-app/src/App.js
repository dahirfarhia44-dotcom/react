import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { use, useState } from 'react';
import Fam from './fam';
import Inputs from './inputs';
import List from './list';

// This is a React component called "Name" that returns a paragraph element with the text "Dahir".
//props is an object that contains the properties passed to the component. In this case, it has a property called "name" that is being used to display the name in the paragraph element.
function Name(props) {
  return <h2> {props.name}, {props.age}, {props.isStudent ? "Student" : "Not Student"}, {props.isworking ? "Employed" : "Unemployed"}, 
  {props.isTheDad ? "The Dad" : "The child"}</h2>
}

function App() {
// This is a boolean variable called "showName" that is set to false or true. It is used to conditionally render the "Name" component in the JSX code below. If "showName" is true, the "Name" component will be rendered with the specified props. If it is false, the "Name" component will not be rendered.
// you could also use the && operator (that is condition && return something) to conditionally render the Name component like this: 
// however, in conditional rendering, the && operator is often used to render a component or element only if a certain condition is true. If the condition is false, the component or element will not be rendered at all. This can be useful for showing or hiding content based on user interactions or application state.
/* instead of  if (showName) {
      setShowName(false);
    } else {
      setShowName(true);
    }
    } one can use  setShowName(!showName);  */
  const [showName, setShowName] = useState(false);
  function toggleShowName() {
    setShowName(!showName);
  }
  

  return (
    <div>
         <Fam />
      <Header />
   
      { showName && (
      <>
            <Name name={"Dahir Abdi Salaam"} age={65} isStudent={false} isworking={true} isTheDad={true}/>
            <Name name={"Aisha Dahir Abdi Salaam"} age={20} isStudent={true} isworking={false} isTheDad={false}/>
            <Name name={"Fartun Dahir Abdi Salaam"} age={22} isStudent={true} isworking={false} isTheDad={false}/>
           </> 
      ) } 
      <button onClick={toggleShowName} className='btn'>{showName ? "Hide Names" : "Show Names"}</button>
      <Inputs />
      <List />
      </div>

      
  )
}

export default App;
