import React from "react";
import { ButtonType } from "@/utils/types";

const Button = ({ text, styles }: ButtonType) => {
  return <div className={styles}>{text}</div>;
};

export default Button;
