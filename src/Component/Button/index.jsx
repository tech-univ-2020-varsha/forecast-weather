import React from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';

const Button = ({ testId, children }) => (
  <button data-testid={testId} className={styles.getWeatherBtn} type="submit">
    <div className={styles.btnText}>{children}</div>
  </button>
);

export default Button;


Button.propTypes = {
  testId: propTypes.string.isRequired,
};
