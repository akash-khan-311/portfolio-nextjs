// components/Navlink.js
import Link from "next/link";

const Navlink = ({ href, children }) => {
  
  return (
    <Link
    
      href={href}
      className={`flex justify-center px-4 py-2 my-1 uppercase transition-colors duration-300 transform hover:bg-[#F31559] hover:text-white`}
    >
      {children}
    </Link>
  );
};

export default Navlink;
