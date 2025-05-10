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
import Addbtn from "../../Component/AddBtn/AddBtn";
import { useState } from "react";

function Home() {
  const [isaddbtnopen, setisaddbtnopen] = useState(false);
  return (
    <>
      {isaddbtnopen ? <Addbtn /> : null}
      <div className="Right_Section_div_in_home">
        <div className="Expanse_Details_components_in_homee">
          <div className="FirstComponents_divv">
            <MainCard />
            <IncomeCard />
            <ExpanseCard />
          </div>
          <div className="Btn_div">
            <button className="Btn_for_add">
              <FaPlus className="Logo_for_add_btn" />
              <p className="btn_add_home">Add</p>
            </button>
          </div>

          <div className="upcoming_payment_details_div">
            <h1 className="upcomingPayment_heading___">Upcoming payment</h1>
            <div className="component_upcoming_payment">
              <Upcomingpayment />
            </div>
          </div>

          <div className="LAstTransaction_home_Divvv">
            <h1 className="LaasTTransaction_heading_INHOME">
              Last Transaction
            </h1>
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
