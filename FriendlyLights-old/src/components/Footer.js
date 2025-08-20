import React from 'react';

const Footer = () => {

  return (
    <footer id="footer" className="mt-0 px-40 py-10 h-auto rounded-2xl flex flex-col justify-center items-center bg-zinc-200">
      <p className='m-0'>@ {new Date().getFullYear()} FriendlLights. All rights reserved.</p>
    </footer>
  )
}

export default Footer;
