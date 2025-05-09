import LastTransactionheading from "../../Component/Lasttransaction/LastTransaction";
import { DataInLastTransaction } from "../../Component/Lasttransaction/LastTransaction";
import '../LastTransaction/Dashboard.css'

function Dashboard(){
    return (
        <>
        <div className="lastTransaction_page_section">
        <LastTransactionheading/>
        <DataInLastTransaction/>    
        </div>
        </>
    )
}
export default Dashboard;