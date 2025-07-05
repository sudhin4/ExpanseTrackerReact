import '../Incomeandexpanse/IncomeCard.css'

function IncomeCard(){
    return (
        <>
        <div className="Whole_Income_card">
            <div className="Carddd_income">
                <h2 className="Price_Income_heading">₹45,500</h2>
                <h4 className="Income_heading_section Income_headdd">Income</h4>
            </div>
        </div>
        </>
    )
}
export default IncomeCard;

export function ExpanseCard(){
    return (
        <>
        <div className="Whole_Income_card">
            <div className="Carddd_income">
                <h2 className="Price_Income_heading Expanses_amount">₹45,500</h2>
                <h4 className="Income_heading_section">Expanse</h4>
            </div>
        </div>
        </>
    )
}



