import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Header.module.css";
import ReactCountryFlag from "react-country-flag";

const Header = () => {
  const [currentUSD, setCurrentUSD] = useState();
  const [currentINR, setCurrentINR] = useState();

  let config = {
    headers: {
      apikey: "CVuyb9gchkXR85V9rDLgAj0ENLRXDaVa",
    },
  };

  const getCurrencyRates = () => {
    const getCurrentINR = axios
      .get(
        "https://api.apilayer.com/exchangerates_data/latest?base=USD",
        config
      )
      .then((res) => setCurrentINR(res.data.rates.INR.toFixed(4)))
      .catch((err) => console.log(err));

    const getCurrentUSD = axios
      .get(
        "https://api.apilayer.com/exchangerates_data/latest?base=USD",
        config
      )
      .then((res) => {
        setCurrentUSD(res.data.rates.EUR.toFixed(4));
        console.log(res.data.rates);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCurrencyRates();
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.currency}>
        <ReactCountryFlag countryCode="IN" svg className={styles.flag} />
        USD-INR <span className={styles.rate}>{currentINR}</span>
      </div>
      <div className={styles.currency}>
        <ReactCountryFlag countryCode="US" svg className={styles.flag} />
        USD-EUR <span className={styles.rate}>{currentUSD}</span>{" "}
      </div>
    </header>
  );
};

export default Header;
