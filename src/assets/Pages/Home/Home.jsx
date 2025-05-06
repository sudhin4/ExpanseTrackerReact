import MainCard from "../../Component/CardFormatMain/MainCard";
import IncomeCard from "../../Component/Incomeandexpanse/IncomeCard";
import "../Home/Home.css";
import { ExpanseCard } from "../../Component/Incomeandexpanse/IncomeCard";
import { FaPlus } from "react-icons/fa6";
import Upcomingpayment from "../../Component/UpcomingPayment/UpcomingPayment";

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
            <button className="Btn_for_add">
              <FaPlus className="Logo_for_add_btn" />
              <p className="btn_add_home">Add</p>
            </button>
          </div>
          <h1 className="upcomingPayment_heading___">Upcoming payment</h1>
          <div className="upcoming_payment_details_div">
            
            <div className="component_upcoming_payment">
              
              <Upcomingpayment />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
