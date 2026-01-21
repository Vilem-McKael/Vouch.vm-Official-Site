import React from 'react'
import { Link } from 'react-router-dom'
import vouchLogo1 from '../../assets/vouchNew.png'
import { IoMdInformationCircle as InfoLogo } from "react-icons/io";
import { DiPhonegap as GalleryLogo } from "react-icons/di";
import { MdConnectWithoutContact as ContactLogo } from "react-icons/md"
import { IconContext } from 'react-icons';

export default function NavBar() {
  return (
    <>
        <IconContext.Provider value={{ color: "#f5f5f5", size: "40px"}}>

            <div className='flex flex-row md:mx-20 items-between md:items-center fixed top-0 right-0 left-0 bg-black'>
                <div className='flex items-center justify-evenly text-xl h-[120px] w-full text-white'>
                    <Link to='/' className='flex flex-col justify-center items-center hover:scale-110 duration-100'>
                        <img className='rounded-md w-[40px]' src={vouchLogo1} />
                        <div className='pt-3'>Home</div>
                    </Link>
                    <Link to='/about' className='flex flex-col justify-center items-center hover:scale-110 duration-100'>
                        <InfoLogo/>
                        <div className='pt-3'>About</div>
                    </Link>
                    <Link to='/gallery' className='flex flex-col justify-center items-center hover:scale-110 duration-100'>
                        <GalleryLogo/>
                        <div className='pt-3'>Gallery</div>
                    </Link>
                    <Link to='/support' className='flex flex-col justify-center items-center hover:scale-110 duration-100'>
                        <ContactLogo />
                        <div className='pt-3'>Support</div>
                    </Link>
                </div>
            </div>

        </IconContext.Provider>
    </>
  )
}
