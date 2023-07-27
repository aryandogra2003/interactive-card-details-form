import { useState } from "react";
import classes from "./App.module.css";
import UserForm from "./components/Form";
import bgMain from "./images/bg-main-desktop.png";
import bgMobile from "./images/bg-main-mobile.png";
import Thankyou from "./components/Thankyou";

function App() {
  const [myBool, setmyBool] = useState(true);

  function toggleBool() {
    setmyBool(!myBool);
  }

  return (
    <div className={classes.container}>
      <picture>
        <source media="(min-width: 426px)" srcset={bgMain} />
        <img src={bgMobile} alt="bg main desktop" style={{ width: "27rem" }} />
      </picture>

      {myBool ? (
        <UserForm toggleBool={toggleBool} />
      ) : (
        <Thankyou toggleBool={toggleBool} />
      )}
    </div>
  );
}

export default App;
