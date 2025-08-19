import React from 'react';

const Footer = () => {

  return (
    <footer id="footer" className="p-8 bg-blue-600 text-white text-center">
      <p>@ {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
    </footer>
  )
}

export default Footer;
