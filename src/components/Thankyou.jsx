import Done from "../images/icon-complete.svg";
import CardFront from "../images/bg-card-front.png";
import Cardback from "../images/bg-card-back.png";
import CardLogo from "../images/card-logo.svg";
import style from "./Thankyou.module.css";
import classes from "./Form.module.css";

const Thankyou = (props) => {
  const name = localStorage.getItem("name");
  const num = localStorage.getItem("num");
  const month = localStorage.getItem("month");
  const year = localStorage.getItem("year");
  const Cvc = localStorage.getItem("Cvc");

  return (
    <>
      <div className={classes.front}>
        <img src={CardFront} alt="card front" />
        <img src={CardLogo} alt="card logo" className={classes.cardlogo} />
        <div className={classes.cardnum}>
          <p style={{ fontSize: 22 }}>{num}</p>
        </div>
        <div className={classes.cardname}>
          <p>{name}</p>
        </div>
        <div className={classes.date}>
          <p>{`${month} / ${year}`}</p>
        </div>
      </div>
      <div className={classes.back}>
        <img src={Cardback} alt="card back" />
        <div className={classes.cvc}>
          <p>{Cvc}</p>
        </div>
      </div>
      <div className={style.container}>
        <img src={Done} alt="Thank You" />
        <h1>THANK YOU</h1>
        <p>We've added your card details</p>
        <button className={style.btn} onClick={props.toggleBool}>
          Continue
        </button>
      </div>
    </>
  );
};
export default Thankyou;
