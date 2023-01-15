import { useCallback } from "react";
import { useSelector } from "react-redux";
import "./ValidationEror.scss";

const ValidationEror = () => {
  const { eror } = useSelector((state) => state.auth);
  const msgEror = useCallback(() => {
    return Object.keys(eror).map((name) => {
      const msg = eror[name].join(", ");
      return `${name} - ${msg}`;
    });
  }, [eror]);

  return eror !== null && msgEror().map((eror) => <div className="eror" key={eror}>{eror}</div>);
};

export default ValidationEror;
