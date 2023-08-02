import { HiOutlineMail } from "react-icons/hi";
import { SiLinkedin } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <HiOutlineMail />,
    link: "mailto:chantellnichols13@gmail.com",
  },
  {
    id: 2,
    icon: <SiLinkedin />,
    link: "https://www.linkedin.com/in/chantellnichols",
  },
  { id: 3, icon: <FaWhatsapp />, link: "https://wa.me/+233557097546" },
];

// alternative whatsApp link
// https://wa.me/yournumber
// https://api.whatsapp.com/send/?phone=%2B233557097546

export default data;
