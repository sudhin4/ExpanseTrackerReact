import MainCard from "../../Component/CardFormatMain/MainCard";
import IncomeCard from "../../Component/Incomeandexpanse/IncomeCard";
import "../Home/Home.css";
import { ExpanseCard } from "../../Component/Incomeandexpanse/IncomeCard";
import { FaPlus } from "react-icons/fa6";
import Upcomingpayment from "../../Component/UpcomingPayment/UpcomingPayment";
import LastTransactionheading, {
  DataInLastTransaction,
} from "../../Component/Lasttransaction/LastTransaction";
import MenuBar from "../../Component/LeftTaskbar/MenuBar";

import { useState } from "react";
import { Link } from "react-router-dom";
import Newaddbtn_ from "../../Component/NewAddbtn_design/Newaddtn";
import settingslider from './settings-sliders.png'

function Home() {
  
  return (
    <>
      

      <div className="Right_Section_div_in_home">
        <div className="Expanse_Details_components_in_homee">
          <div className="FirstComponents_divv">
            <MainCard />
            <IncomeCard />
            <ExpanseCard />
          </div>
          <div className="Btn_div">
            <Link to={"/AddincomeorExpansepage"}>
              <button className="Btn_for_add">
                <FaPlus className="Logo_for_add_btn" />
                <p className="btn_add_home">Add</p>
              </button>
            </Link>
          </div>

          <div className="upcoming_payment_details_div">
            <h1 className="upcomingPayment_heading___">Upcoming payments</h1>
            <div className="component_upcoming_payment">
              <Upcomingpayment />
            </div>
          </div>

          <div className="LAstTransaction_home_Divvv">
            <div className="first_heading_filters">
              <h1 className="LaasTTransaction_heading_INHOME">
                Last Transaction
              </h1>
              <div className="filters_div_section">
                <img
                  src={settingslider}
                  alt=""
                  className="lastTransaction_calenderIMage"
                />
                <h2 className="filter_heading">Filters</h2>
              </div>
            </div>

            <div className="Data_for_last">
              <LastTransactionheading />
              <div className="DaTa_component_div">
                <DataInLastTransaction />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
