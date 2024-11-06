import { HiPlus } from "react-icons/hi";
import "../../../../../styles/index.scss";
import BigButton from "../../../../globals/buttons/big-button/BigButton";
import { useState } from "react";
import { Link } from "react-router-dom";
import { transactionData } from "../../../../../utils/homecare/transactionData";
import TransactionElement from "./TransactionElement";
import { ReactComponent as Interswitch } from "../../../../globals/icons/Interswitch_logo.svg";
import { paymentOptions } from "../../../../../utils/homecare/paymentOptions";
import PaymentOptionLink from "./PaymentOptionLink";




const WalletTab = (props) => {

  const { setBtnClass } = props;

  const [defaultOpt, setDefaultOpt] = useState(false);


  return (
    <div className={`info-display-section-2 ${setBtnClass(2)}`}>

      <div className="wallet-title display-f justify-space-between align-center">
        <h3 className="h3-text">Wallet</h3>

        <BigButton
          hasIcon={false}
          btnText="How to make payment"
          // action={addProduct}
          // isActive={true}
          Icon={null}
          cName="how-to-make-payment"

        />

      </div>

      <div className="wallet-body display-f justify-space-between">

        <div className="wallet-body-1">

          <div className="balance-card">
            <p className="balance-p h3-text font-weight-medium">Total Balance</p>
            <p className="balance-value font-weight-semi">NGN 450,000</p>

            <div className="balance-card-footer display-f justify-space-between align-center">

              <BigButton
                hasIcon={true}
                btnText="Add money"
                // action={addProduct}
                Icon={HiPlus}
                cName="add-money"

              />

              <div className="default-opt-con display-f justify-space-between align-center">
                <span className="default-opt">Set as default payment option</span>
                <span
                  onClick={() => setDefaultOpt(!defaultOpt)}
                  className={`opt-check ${defaultOpt ? "checked" : ""}`}
                >
                  <span className={`opt-check-indicator ${defaultOpt ? "checked" : ""}`}></span>
                </span>
              </div>



            </div>

          </div>

          <div className="transaction-card">

            <div className="transaction-card-title display-f justify-space-between align-center">
              <p className="font-weight-medium">Transactions</p>
              <Link className="p-text font-weight-semi">See all</Link>

            </div>

            <div className="transaction-card-elements">

              {
                transactionData.map((t, i) => (
                  <TransactionElement
                    key={i}
                    transaction={t}
                  />
                ))
              }
            </div>

          </div>

        </div>






        <div className="wallet-body-2">
          <div className="h3-text font-weight-medium">Payment</div>

          <div className="amt-due display-f align-center">
            <div className="amt-due-lbl">Amount due:</div>
            <div className="amt-due-txt font-weight-semi">NGN 12,000.00</div>
          </div>

          <BigButton
            hasIcon={false}
            btnText="Make payment from wallet"
            // action={addProduct}
            // isActive={true}
            Icon={null}
            cName="make-payment"
          />

          <div className="divider display-f justify-space-between align-center">
            <span></span>
            <p className="p-text font-weight-medium">Or</p>
            <span></span>
          </div>

          <div className="payment-opts-con">

            <div className="opts-title display-f justify-space-between align-center">
              <span className="p-text font-weight-medium">Other payment options</span>
              <span className="opts-title-icon">
                <Interswitch />
              </span>
            </div>

            <div className="opts-links-con">
              {
                paymentOptions.map((p, i) => (
                  <PaymentOptionLink
                    key={i}
                    option={p}
                  />
                ))
              }
            </div>
          </div>

        </div>


      </div>

    </div>
  )
}

export default WalletTab