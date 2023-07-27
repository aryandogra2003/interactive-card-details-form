import React from "react";
import classes from "./Form.module.css";
import CardFront from "../images/bg-card-front.png";
import Cardback from "../images/bg-card-back.png";
import CardLogo from "../images/card-logo.svg";
import { useState, useEffect, useRef } from "react";

const Form = (props) => {
  const [cvc, setCvc] = useState("");
  const [cardnum, setCardnum] = useState("");
  const [cardname, setCardname] = useState("");
  const [cardmonth, setCardmonth] = useState("");
  const [cardyear, setCardyear] = useState("");
  const [isCvcTouched, setIsCvcTouched] = useState(false);
  const [isCnameTouched, setIsCnameTouched] = useState(false);
  const [isCnumTouched, setIsCnumTouched] = useState(false);
  const [isCdateTouched, setIsCdateTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const name = useRef();
  const num = useRef();
  const month = useRef();
  const year = useRef();
  const Cvc = useRef();

  const isCvc = cvc.length === 3 && cvc.trim() !== "";
  const isCname = cardname.trim() !== "" && !/^[a-z][a-z\s]*$/.test(cardname);
  const isCnum =
    cardnum.split(" ").join("").length === 16 &&
    cardnum
      .split(" ")
      .join("")
      .match(/^[0-9]+$/) != null;
  const isCmonth = cardmonth > 1 && cardmonth < 13;
  const isCyear = cardyear.length === 2;

  useEffect(() => {
    if (isCmonth && isCname && isCnum && isCvc && isCyear) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [isCmonth, isCname, isCnum, isCvc, isCyear]);

  const cvcHandler = (event) => {
    setCvc(event.target.value);
    localStorage.setItem("Cvc", event.target.value);
  };
  const cvcBlurHandler = () => {
    setIsCvcTouched(true);
  };

  const cardNumHandler = (event) => {
    setCardnum(event.target.value);
    localStorage.setItem("num", event.target.value);
  };
  const cardNumBlurHandler = () => {
    setIsCnumTouched(true);
  };

  const cardNameHandler = (event) => {
    setCardname(event.target.value);
    localStorage.setItem("name", event.target.value);
  };
  const cardNameBlurHandler = () => {
    setIsCnameTouched(true);
  };

  const cardDateHandler = (event) => {
    setCardmonth(event.target.value);
    localStorage.setItem("month", event.target.value);
  };
  const cardDateBlurHandler = () => {
    setIsCdateTouched(true);
  };

  const cardyearHandler = (event) => {
    setCardyear(event.target.value);
    localStorage.setItem("year", event.target.value);
  };
  const cardyearBlurHandler = () => {
    setIsCdateTouched(true);
  };

  const formsubmitHandler = (event) => {
    event.preventDefault();

    if (!isCmonth && !isCname && !isCnum && !isCvc && !isCyear) {
      return;
    }
    setIsCvcTouched(false);
    setIsCdateTouched(false);
    setIsCnameTouched(false);
    setIsCnumTouched(false);
  };

  return (
    <>
      <div className={classes.front}>
        <img src={CardFront} alt="card front" className={classes.img1} />
        <img src={CardLogo} alt="card logo" className={classes.cardlogo} />
        <div className={classes.cardnum}>
          <p className={classes.cardnumP}>
            {!isCnumTouched && !isCnum ? "0000 0000 0000 0000" : cardnum}
          </p>
        </div>
        <div className={classes.cardname}>
          <p>
            {!isCnameTouched && !isCname
              ? "JANE APPLESEED"
              : name.current.value}
          </p>
        </div>
        <div className={classes.date}>
          <p>
            {!isCdateTouched && !isCmonth && !isCyear
              ? "00/00"
              : `${month.current.value} / ${year.current.value}`}
          </p>
        </div>
      </div>
      <div className={classes.back}>
        <img src={Cardback} alt="card back" />
        <div className={classes.cvc}>
          <p>{!isCvcTouched && !isCvc ? "000" : Cvc.current.value}</p>
        </div>
      </div>
      <form className={classes.form} onSubmit={formsubmitHandler}>
        <div className={classes.formdetails}>
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Jane Appleseed"
            className={classes.input}
            onChange={cardNameHandler}
            onBlur={cardNameBlurHandler}
            value={cardname}
            ref={name}
          />
          {!isCname && isCnameTouched && (
            <p className={classes.errorText}> Entered name is not valid !!</p>
          )}
        </div>
        <div className={classes.formdetails}>
          <label htmlFor="number">CARD NUMBER</label>
          <input
            type="text"
            id="cardnumber"
            name="cardnumber"
            placeholder="e.g. 1234 5678 9123 0000"
            className={classes.input}
            onChange={cardNumHandler}
            onBlur={cardNumBlurHandler}
            value={cardnum}
            ref={num}
          />
          {!isCnum && isCnumTouched && (
            <p className={classes.errorText}> Entered number is not valid !!</p>
          )}
        </div>
        <div>
          <div className={classes.formdetails2}>
            <label>EXP. DATE (MM/YY)</label> <br />
            <input
              type="number"
              id="month"
              name="month"
              placeholder="MM"
              className={classes.inputDate}
              onChange={cardDateHandler}
              onBlur={cardDateBlurHandler}
              value={cardmonth}
              ref={month}
            />
            <input
              type="number"
              id="year"
              name="year"
              placeholder="YY"
              className={classes.inputDate}
              onChange={cardyearHandler}
              onBlur={cardyearBlurHandler}
              value={cardyear}
              ref={year}
            />
            {!isCmonth && !isCyear && isCdateTouched && (
              <p className={classes.errorText}> Entered date is not valid !!</p>
            )}
          </div>{" "}
          <br />
          <div className={classes.formdetails}>
            <label>CVC</label>
            <input
              type="number"
              id="cvc"
              name="cvc"
              placeholder="e.g. 123 "
              className={classes.input}
              onChange={cvcHandler}
              onBlur={cvcBlurHandler}
              value={cvc}
              ref={Cvc}
            />
            {!isCvc && isCvcTouched && (
              <p className={classes.errorText}> Entered CVC is not valid !!</p>
            )}
          </div>
        </div>
        <div>
          <button
            disabled={!formIsValid}
            className={classes.btn}
            onClick={props.toggleBool}
          >
            Confirm
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
