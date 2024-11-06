import {FaMoneyBillWave} from'react-icons/fa';

const TransactionElement = (props) => {

    const {transaction} = props;
    
    return (
        <div
            className="transaction-card-element display-f justify-space-between align-center"
            
        >
            <div className="el-icon-con">
                <FaMoneyBillWave />
            </div>

            <div className="el-texts">
                <div className="el-texts-1 p-text font-weight-semi">{transaction.service}</div>
                <div className="el-texts-2 normal-font-text">{transaction.createdAt}</div>
            </div>

            <div className="el-amt p-text font-weight-semi">
                {`NGN ${transaction.amount}`}
            </div>
        </div>
    )
}

export default TransactionElement