import React from 'react';
import {FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ContactSection = (props) => {

    const {color} = props;

    return (
        <div className="enquiries">
            <div className="enq-title" style={{ color: color }}>For more enquiries:</div>
            <div className="enq-elements">
                <div className="enq-el">
                    <div className="enq-el-icon-con">
                        <FaPhoneAlt />
                    </div>

                    <div className="enq-el-text">08034678912</div>
                </div>

                <div className="enq-el">
                    <div className="enq-el-icon-con">
                        <MdEmail />

                    </div>

                    <div className="enq-el-text">info@rhomboid.com</div>
                </div>

            </div>
        </div>
    )
}

export default ContactSection