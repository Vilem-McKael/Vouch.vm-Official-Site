import React from 'react'
import vouchLogo from '../../assets/vouch2.png'


export default function LandingPage() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center mt-24'>
            <img src={vouchLogo} className='w-[400px] h-[400px] '/>
            <h1 className='text-2xl text-ivory'>Find and share the media that inspires you</h1>
        </div>
    </div>
  )
}
