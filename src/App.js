import { useState } from "react";
import classes from "./App.module.css";
import UserForm from "./components/Form";
import bgMain from "./images/bg-main-desktop.png";
import Thankyou from "./components/Thankyou";

function App() {
  const [myBool, setmyBool] = useState(true);

  function toggleBool() {
    setmyBool(!myBool);
  }

  return (
    <div className={classes.container}>
      <img src={bgMain} alt="bg main desktop" />
      {myBool ? (
        <UserForm toggleBool={toggleBool} />
      ) : (
        <Thankyou toggleBool={toggleBool} />
      )}
    </div>
  );
}

export default App;
