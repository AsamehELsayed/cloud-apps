
import Link from 'next/link';
import { GrTechnology } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Auth from './auth';
import Navbar from './Navbar';
import { cookies } from 'next/headers';
import { verifyTokenForPage } from '@/utils/token';

const Header = () => {
  const token = cookies().get("token")?.value as string || ""
  const user = verifyTokenForPage(token)

  return (
    <nav className="bg-gray-800  mx-auto">
    <div className=" mx-auto w-full flex  sm:px-6 lg:px-8 ">
      <div className=" flex justify-around md:h-16 w-full sm:h-auto">
   
          <Link href="/"  className="text-white md:text-2xl sm:text-xl font-bold flex items-center space-x-1 cursor-pointer">
              CLOUD
              <GrTechnology className="text-4xl" />
              HOSTING
          
          </Link>
          <span className='order-3 md:order-2'>
          <Navbar isAdmin={user?.isAdmin ?? false} />
          </span>
          <span className='order-2 md:order-2 my-auto'>
          <Auth />
          </span>
       
       
     
      </div>
    </div>
  </nav>
  
  );
};

export default Header;
