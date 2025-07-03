import Choosetypelist from "../TypeList/TypelistMapfull.jsx";
import CategoryDropdown from "../Categorydropdown/CategoryDropdown.jsx";
import addlogo from "../AddBtn/Add Income Image.png";
import "../AddBtn/Addbtn.css";
import { IoClose } from "react-icons/io5";

function Addbtn() {
  return (
    <>
      <div className="whole_add_btnCOmponentDiv">
        <div className="inputFields_div">
          <IoClose className="close_btn_add_btn" />

          <img src={addlogo} alt="" className="addbtnlogo_image" />
          <br />

          <label className="label inputlabelName">Transaction Name</label>
          <br />
          <Choosetypelist />
          <br />
          <label className="label inputlabelAmount">Enter Amount</label>
          <br />
          <input type="number" className="input_add " placeholder="₹450.00" />
          <br />
          <label className="label inputlabelCategory">Choose a Category</label>
          <br />
          <CategoryDropdown />
          <br />
          <label className="label inputlabelCategory">Enter date</label>
          <br />
          <input type="date" className="data_inputlabel" />
          <br />
        </div>
        <button className="SaveBtn_add_btn">Save</button>
      </div>
    </>
  );
}
export default Addbtn;
