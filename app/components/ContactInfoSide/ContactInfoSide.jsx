
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import ContactInfo from "../ContactInfo/ContactInfo";

const ContactInfoSide = () => {
  return (
    <>
      <div className="lg:w-1/2 w-full">
        {/* phone */}
        <div
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <ContactInfo
            subTitle={"(+880) 1719-981 150 "}
            title={"Phone"}
            icon={FaPhoneAlt}
          />
        </div>
        {/* Email */}
        <div
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="my-10"
        >
          <ContactInfo
            title={"Email"}
            subTitle={" akashkhanbdinto@gmail.com "}
            icon={MdEmail}
          />
        </div>
        {/* Address */}
        <div
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <ContactInfo
            title={"Address"}
            subTitle={"Nobinogor, Mohammadpur, Dhaka Bangladesh"}
            icon={FaLocationDot}
          />
        </div>
      </div>
    </>
  );
};
export default ContactInfoSide;
