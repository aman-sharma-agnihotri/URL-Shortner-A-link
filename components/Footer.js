import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className=" sm:fixed bottom-0  w-full bg-green-600 text-white p-1">
        <ul className='flex flex-col sm:flex-row gap-1 sm:gap-8 items-center justify-center text-xs sm:text-base'>
          <li>A-link</li>
          <li>Copyright @ ASA</li>
          <li>Made by Aman Sharma (ASA)</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer