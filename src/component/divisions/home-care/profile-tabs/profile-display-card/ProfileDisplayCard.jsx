import { ReactComponent as AngleRight } from "../../../../../component/globals/icons/angleRightLight.svg";
import "../../../../../styles/index.scss";


const ProfileDisplayCard = (props) => {

    const { Icon, title, desc, text, btnText, action } = props;


    return (
        <div className="profile-display-card-container">
            <span className="display-b h3-text font-weight-semi text-greenish mb-1">
                {title ? title : ""}
            </span>
            <div className="profile-display-card-sub-container">
                <div className="profile-display-card display-f justify-space-between">
                    <Icon />
                    <div className="profile-display-desc">
                        <p className="p-text text-greenish">
                           {desc ? desc : ""}
                        </p>
                        <p className="h3-text font-weight-semi text-green mt-2">
                            {text ? text : ""}
                        </p>
                    </div>
                </div>

                <div className="edit-container">
                    <div 
                        className="edit display-f justify-flex-end align-center"
                        onClick={action}
                    >
                        <p className="normal-font-text font-weight-medium text-green mr-1">{btnText}</p>
                        <AngleRight />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProfileDisplayCard