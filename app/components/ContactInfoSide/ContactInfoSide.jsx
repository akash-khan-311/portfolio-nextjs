"use client";

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
            icon={
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                  fill="#1C274C"
                />
              </svg>
            }
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
            icon={
              <svg
                fill="#000000"
                width="100px"
                height="100px"
                viewBox="0 0 1920.00 1920.00"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
                    fillRule="evenodd"
                  />{" "}
                </g>
              </svg>
            }
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
            icon={
              <svg
                version={1.0}
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="800px"
                height="800px"
                viewBox="0 0 64 64"
                enableBackground="new 0 0 64 64"
                xmlSpace="preserve"
              >
                <path
                  fill="#231F20"
                  d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24
         C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24
         C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                />
              </svg>
            }
          />
        </div>
      </div>
    </>
  );
};
export default ContactInfoSide;
