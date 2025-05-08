import '../Lasttransaction/LastTransaction.css'
import Image from '../Lasttransaction/Electric city.png'
import Cash from '../Lasttransaction/cash Icon.png'

function LastTransactionheading(){
    return (
        <>
        <div className="WHole_Heading_Div">
            <h2 className="LastTransaction_name_heading heading_last">Transaction name</h2>
            <h2 className="LastTransaction_Date_heading heading_last">Date</h2>
            <h2 className="LastTransaction_payment_mode_heading heading_last">Payment Type</h2>
            <h2 className="LastTransaction_category_heading heading_last">Category</h2>
            <h2 className="LastTransaction_amount_heading heading_last">Amount</h2>
        </div>
        
        </>
    )
}

export function DataInLastTransaction(){
    return(
        <>
        <div className='DaTE_lastTRANSACTION'>
            <div className='TRANSAction_name'>
                <img src={Image} alt="" className='Image_for_TRANSACTION_NAME' />
                <h2 className='Data_FOR_TRANSACTIONnAME DATAA'>Electricy Bill</h2>
            </div>
            <h2 className='Data_forDATE DATAA'>04-05-2005</h2>
            <img src={Cash} alt="" className='PAYMENT_modeimage_for_lasttransaction' />
            <h2 className='category_INLASTTransaction DATAA'>Expanse</h2>
            <h2 className='Data_forAMOUNTExpanse DATAA'>₹45,000</h2>

            
        </div>
        
        
        </>
    )
}
export default LastTransactionheading;
