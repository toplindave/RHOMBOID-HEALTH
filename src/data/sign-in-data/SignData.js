import { ReactComponent as CalenderIcon } from "./sign-in-icons/calender.svg";
import { ReactComponent as MapMarker } from "./sign-in-icons/map-marker.svg";
import { ReactComponent as Chat } from "./sign-in-icons/chat.svg";
import { ReactComponent as Help } from "./sign-in-icons/help.svg";
import { ReactComponent as Tube } from "./sign-in-icons/test-tube.svg";

const signinDetails = [
	{
		id: 1,
		title: "Communicate with your doctor",
		text: "Get answers to your medical questions from the comfort of your own home",
		img: <Chat />,
	},
	{
		id: 2,
		title: "Access your test results",
		text: "No more waiting for a phone call or letter – view your results and your doctor's comments within days",
		img: <Tube />,
	},
	{
		id: 3,
		title: "Manage your appointments",
		text: "Schedule your next appointment, or view details of your past and upcoming appointments",
		img: <CalenderIcon />,
	},
	{
		id: 4,
		title: "Need assistance with Rhomboid?",
		text: "Contact Rhomboid Support at +234810000000",
		img: <Help />,
	},
	{
		id: 5,
		title: "Find a nearby Health Provider",
		text: "With a presence everywhere, discover the most convenient locations for you and your family, no matter your needs.",
		img: <MapMarker />,
	},
];

export default signinDetails;
