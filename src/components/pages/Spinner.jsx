import loader from "../../assets/loader/loader.gif";
function Spinner() {
  return (
    <div className="w-100 mt-auto">
      <img width={180} className="text-center mx-auto" src={loader} alt="" />
    </div>
  );
}

export default Spinner;
