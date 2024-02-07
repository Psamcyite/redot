import React from 'react';
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <Box component="footer" bgcolor="#333" color="#fff" p={2} textAlign="center">
      <p>&copy; {new Date().getFullYear()} Redot. All rights reserved.<br/>
         <a href="https://psamcyite.tech">
	    Powered by Psamcyite
         </a>
      </p>
    </Box>
  );
};

export default Footer;
