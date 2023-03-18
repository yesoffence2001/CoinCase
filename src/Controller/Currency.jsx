import React from "react";
import styles from "./Currency.module.css";

const Currency = ({
  options,
  selectCurrency,
  onChangeCurrency,
  amount,
  onChangeAmount,
}) => {
  return (
    <div className={styles.container}>
      <select
        value={selectCurrency}
        onChange={onChangeCurrency}
        className={styles.select}
      >
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={amount}
        onChange={onChangeAmount}
        className={styles.input}
      />
    </div>
  );
};

export default Currency;
