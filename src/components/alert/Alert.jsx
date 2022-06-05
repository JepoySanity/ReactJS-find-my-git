import { useContext } from "react";
import { FcCancel, FcOk } from "react-icons/fc";
import AlertContext from "../../context/alert/AlertContext";
function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <div className="flex gap-1 mb-3">
        {alert.type === "error" && (
          <FcCancel className="self-center" style={{ fontSize: 25 }} />
        )}
        {alert.type === "success" && (
          <FcOk className="self-center" style={{ fontSize: 25 }} />
        )}
        <h1 className="text-md text-white font-bold">{alert.msg}</h1>
      </div>
    )
  );
}

export default Alert;
