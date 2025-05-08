import { AiFillHome } from "react-icons/ai";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import '../LeftTaskbar/MenuBar.css'
import { LuCircleUserRound } from "react-icons/lu";





function MenuBar(){
    return(
        <>
        <div className="whole_menuBar_div">
<div className="Content_menuBar_divvv">
            <div className="Home_btn_Menu div_menuuu">
            <AiFillHome className="Icon_in_menuBar HomeIcon"/>
            <h2 className="Home_btn_heading">Home</h2>
            </div>
            <div className="Dashboard_btn_Menu div_menuuu">
            <TbDeviceDesktopAnalytics className="Icon_in_menuBar AnalyticIcon"/>
            <h2 className="Home_btn_heading">Dashboard</h2>
            </div>
            <div className="transaction_btn_Menu div_menuuu">
            <HiMiniArrowsUpDown className="Icon_in_menuBar LasttransactionIcon"/>
            <h2 className="Home_btn_heading">Last Transaction</h2>
            </div>
            <div className="profile_btn_Menu div_menuuu">
            <LuCircleUserRound className="Icon_in_menuBar ProfileIcon"/>
            <h2 className="Home_btn_heading">Profile</h2>
            </div>

            
        </div>
        </div>
        
        </>
    )
}
export default MenuBar;