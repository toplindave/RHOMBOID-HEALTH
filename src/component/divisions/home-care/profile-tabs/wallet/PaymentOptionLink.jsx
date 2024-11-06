import React from 'react'
import { LiaAngleRightSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';


const PaymentOptionLink = (props) => {
    const {option} = props
  return (
    <Link>
        <div className="link-el-1">
            <div className="el-texts-1 p-text font-weight-semi">{option.option}</div>
            <div className="el-texts-2 normal-font-text">{option.desc}</div>
        </div>

        <div className="link-el-icon">
            <LiaAngleRightSolid />
        </div>
        
    </Link>
  )
}

export default PaymentOptionLink