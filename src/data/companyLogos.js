import * as icons from "simple-icons";

function getLogo(slug) {
  return Object.values(icons).find(
    (icon) => icon && icon.slug === slug
  );
}

const logos = {
  AAPL: getLogo("apple"),
  MSFT: getLogo("microsoft"),
  GOOGL: getLogo("google"),
  AMZN: getLogo("amazon"),
  TSLA: getLogo("tesla"),
  NVDA: getLogo("nvidia"),
  META: getLogo("meta"),
  NFLX: getLogo("netflix"),
  AMD: getLogo("amd"),
  INTC: getLogo("intel"),
  WMT: getLogo("walmart"),
  JPM: getLogo("jpmorgan"),
  V: getLogo("visa"),
  MA: getLogo("mastercard"),
  KO: getLogo("cocacola"),
  PEP: getLogo("pepsico"),
  ORCL: getLogo("oracle"),
  IBM: getLogo("ibm"),
  ADBE: getLogo("adobe"),
  MCD: getLogo("mcdonalds"),
  CRM: getLogo("salesforce"),
  DIS: getLogo("disney"),
};

export default logos;