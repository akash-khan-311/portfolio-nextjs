import ContactInfo from "../components/ContactInfo/ContactInfo";
import ContactInfoSide from "../components/ContactInfoSide/ContactInfoSide";
import PageTitle from "../components/PageTitle/PageTitle";

const Contact = () => {
  return (
    <>
      <div>
        <PageTitle title={"Contact"} />
        <div className="mt-32 gap-5 flex flex-col lg:flex-row justify-between items-center ">
          {/* contact form */}
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="lg:w-1/2 w-full "
          >
            <h2 className="text-black dark:text-white text-4xl font-semibold">
              Get In Touch
            </h2>

            <form>
              {/* Name Field */}
              <div className="relative w-full min-w-[200px] h-10 my-14">
                <input
                  type="text"
                  name="name"
                  className="peer w-full h-full bg-transparent text-blue-gray-700 dark:text-blue-gray-200 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-lg px-3 py-6 rounded-[7px] border-blue-gray-200 focus:border-[#F31559]"
                  placeholder=" "
                />
                <label className="flex  w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-lg text-[18px] peer-focus:text-[18px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-[#F31559] before:border-blue-gray-200 peer-focus:before:!border-[#F31559] after:border-blue-gray-200 peer-focus:after:!border-[#F31559]">
                  Your Name
                </label>
              </div>
              {/* Email Field */}
              <div className="relative w-full min-w-[200px] h-10 my-14">
                <input
                  type="email"
                  name="email"
                  className="peer w-full h-full bg-transparent text-blue-gray-700 dark:text-blue-gray-200 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-lg px-3 py-6 rounded-[7px] border-blue-gray-200 focus:border-[#F31559]"
                  placeholder=" "
                />
                <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-lg text-[18px] peer-focus:text-[18px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-[#F31559] before:border-blue-gray-200 peer-focus:before:!border-[#F31559] after:border-blue-gray-200 peer-focus:after:!border-[#F31559]">
                  Your Email Address
                </label>
              </div>
              {/* Subject Field */}
              <div className="relative w-full min-w-[200px] h-10 my-14">
                <input
                  type="text"
                  name="subject"
                  className="peer w-full h-full bg-transparent text-blue-gray-700 dark:text-blue-gray-200 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-lg px-3 py-6 rounded-[7px] border-blue-gray-200 focus:border-[#F31559]"
                  placeholder=" "
                />

                <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-lg text-[18px] peer-focus:text-[18px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-[#F31559] before:border-blue-gray-200 peer-focus:before:!border-[#F31559] after:border-blue-gray-200 peer-focus:after:!border-[#F31559]">
                  Write Your Subject
                </label>
              </div>
              {/* Message */}
              <div className="relative w-full min-w-[200px] mt-14">
                <textarea
                  type="text"
                  name="message"
                  className="peer h-full min-h-[350px] w-full text-blue-gray-700 dark:text-blue-gray-200 resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-lg font-normal  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#F31559] focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />

                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[18px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[18px] peer-focus:leading-tight peer-focus:text-[#F31559] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#F31559] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#F31559] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Textarea Red
                </label>
              </div>
              <div className="mt-10"></div>
            </form>
          </div>
          {/* contact info */}
          <ContactInfoSide/>
        </div>
      </div>
    </>
  );
};
export default Contact;
