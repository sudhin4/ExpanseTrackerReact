function Addbtn(){
    return(
        <>
        <div className="whole_add_btnCOmponentDiv">
            <div className="inputFields_div">
                <label className="label inputlabelName">Transaction Name</label>
                <input type="text" className="input_add TransactionName__" placeholder="Fuel" />
                <label className="label inputlabelAmount">Enter Amount</label>
                <input type="number" className="input_add" placeholder="450.00" />
                <label className="label inputlabelCategory">Category</label>
                <select name="Choose a value" defaultValue={"Choose a value"} className="category input_add">
                    <option value=''>Choose a category</option>
                    <option value="Income">Income</option>
                    <option value="Expanse">Expanse</option>
                </select>
                <input type="date" />
                

            </div>
        </div>
        </>
    )
}
export default Addbtn;