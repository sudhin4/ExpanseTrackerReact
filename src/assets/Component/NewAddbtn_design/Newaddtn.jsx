import IncomeImage from "../NewAddbtn_design/Income_imageForIncome.png";
import Income_expanseImage from "../NewAddbtn_design/saving Image For expanse app.png";
import "../NewAddbtn_design/Newaddbtn.css";
import Expanse_Image from "../NewAddbtn_design/Expanse image For Expanse.png";
import CategoryDropdown from "../Categorydropdown/CategoryDropdown";
import Choosetypelist from "../TypeList/TypelistMapfull";
import { useState,useEffect } from "react";

function Newaddbtn_() {
    const [getcategorystateincome,setgetcategorystateincome] = useState();
    const [getcategorystateexpanse,setgetcategorystateexpanse] = useState();

  
        function getcategoryyy(value){
        if(value=="income"){
            setgetcategorystateexpanse(false);
            setgetcategorystateincome(true);
            
        }
        else if(value=="expanse"){
            setgetcategorystateincome(false);
            setgetcategorystateexpanse(true);
            
        }
    }
    
    


  return (
    <>
    <div className="heading_div_details">
        <h1 className="addYourMoneyDetails">Add your money details.!</h1>
    </div>
    
      <div className="Newadd_btn_design_whole_div">
        
        <div className="category_choose_div___">
          <div onClick={()=>getcategoryyy("income")} className={ getcategorystateincome ?'income_btn_section  income_btn_divvv _clicked' :'income_btn_section  income_btn_divvv'}>
            <img
              src={Income_expanseImage}
              alt=""
              className="income_image_tagg image_tag_for_btn"
              
            />
            <h2 className="Income_heading">Income</h2>
          </div>
          <div onClick={()=>getcategoryyy("expanse")} className={ getcategorystateexpanse ?"income_btn_divvv _clicked Expanse_btn_section" :"income_btn_divvv Expanse_btn_section" }>
            <img
              src={Expanse_Image}
              alt=""
              className="expanse_image_tagg image_tag_for_btn"
            />
            <h2 className="Exapanse_heading">Expanse</h2>
          </div>
        </div>

        <div className="whole_input_tag_addbtn_component incomeee_btn_divvvv">
          <div className="Amount_div_for_addbtn section_wise_add_button">
            <label htmlFor="" className="label--- label_for_amount">
              Enter an amount
            </label>
            <input
              type="number"
              name="amount"
              id=""
              placeholder="Amount"
              className="amount_input_add__ input_for_newadd"
            />
          </div>
          <div className="date_div_for_addbtn section_wise_add_button">
            <label htmlFor="" className="label--- label_for_amount">
              Date
            </label>
            <input
              type="date"
              name="DATE"
              id=""
              placeholder="DD/MM/YYYY"
              className="DATE_input_add__ input_for_newadd"
            />
          </div>
          <div className="Note_div_for_addbtn section_wise_add_button">
            <label htmlFor="note" className="label--- label_for_note">
              Add Note
            </label>
            <input
              type="text"
              name="NOTE"
              placeholder="Add Note"
              className="Add_note_input_addbtn input_for_newadd"
            />
          </div>
          <div className="dropdown_for_category section_wise_add_button">
            <label htmlFor="category" className="label--- label_for_category">
              Choose Category
            </label>
            <Choosetypelist />
          </div>
        </div>
        <div className="buttons_for_save_addbtn">
          <button className="cancel_btn__ btn_addbtn">Cancel</button>
          <button className="Add_btn__ btn_addbtn">Add</button>
        </div>
      </div>
    </>
  );
}
export default Newaddbtn_;
