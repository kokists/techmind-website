import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Sample flag images to use until real ones are added
const placeholderFlag = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 40'%3E%3Crect width='60' height='40' fill='%23f0f0f0'/%3E%3Crect width='60' height='13.33' fill='%23ccc'/%3E%3Crect y='26.67' width='60' height='13.33' fill='%23ccc'/%3E%3C/svg%3E";

// Placeholder upload icon
const uploadIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'/%3E%3Cpolyline points='17 8 12 3 7 8'/%3E%3Cline x1='12' y1='3' x2='12' y2='15'/%3E%3C/svg%3E";

// Sample country flags
const flags = {
  'United States': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 40'%3E%3Crect width='60' height='40' fill='%23f0f0f0'/%3E%3Crect width='60' height='3.08' y='0' fill='%23d80027'/%3E%3Crect width='60' height='3.08' y='6.15' fill='%23d80027'/%3E%3Crect width='60' height='3.08' y='12.31' fill='%23d80027'/%3E%3Crect width='60' height='3.08' y='18.46' fill='%23d80027'/%3E%3Crect width='60' height='3.08' y='24.62' fill='%23d80027'/%3E%3Crect width='60' height='3.08' y='30.77' fill='%23d80027'/%3E%3Crect width='60' height='3.08' y='36.92' fill='%23d80027'/%3E%3Crect width='24' height='20.77' fill='%232e4b80'/%3E%3C/svg%3E",
  'United Kingdom': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 40'%3E%3Crect width='60' height='40' fill='%23012169'/%3E%3Cpath d='M0,0 L60,40 M60,0 L0,40' stroke='%23fff' stroke-width='6'/%3E%3Cpath d='M30,0 L30,40 M0,20 L60,20' stroke='%23fff' stroke-width='10'/%3E%3Cpath d='M30,0 L30,40 M0,20 L60,20' stroke='%23c8102e' stroke-width='6'/%3E%3Cpath d='M0,0 L60,40 M60,0 L0,40' stroke='%23c8102e' stroke-width='2'/%3E%3C/svg%3E",
  'India': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 40'%3E%3Crect width='60' height='40' fill='%23f0f0f0'/%3E%3Crect width='60' height='13.33' y='0' fill='%23ff9933'/%3E%3Crect width='60' height='13.33' y='26.67' fill='%23138808'/%3E%3Ccircle cx='30' cy='20' r='4' fill='%23000080'/%3E%3C/svg%3E",
  'United Arab Emirates': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 40'%3E%3Crect width='60' height='40' fill='%23f0f0f0'/%3E%3Crect width='20' height='40' fill='%23009e49'/%3E%3Crect width='60' height='13.33' y='0' fill='%23ce1126'/%3E%3Crect width='60' height='13.33' y='26.67' fill='%23000'/%3E%3C/svg%3E",
  'Singapore': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 40'%3E%3Crect width='60' height='40' fill='%23f0f0f0'/%3E%3Crect width='60' height='20' fill='%23ed2939'/%3E%3Ccircle cx='16' cy='20' r='6' fill='%23f0f0f0'/%3E%3Ccircle cx='20' cy='20' r='6' fill='%23f0f0f0'/%3E%3Cpath d='M11,16 L25,24 M25,16 L11,24' stroke='%23ed2939' stroke-width='1'/%3E%3C/svg%3E"
};

const JobSearch = () => {
  return (
    <div>
      {/* This is a utility component that exports the flags and upload icon */}
      <div style={{ display: 'none' }}>
        <img id="usFlag" src={flags['United States']} alt="US Flag" />
        <img id="ukFlag" src={flags['United Kingdom']} alt="UK Flag" />
        <img id="indiaFlag" src={flags['India']} alt="India Flag" />
        <img id="uaeFlag" src={flags['United Arab Emirates']} alt="UAE Flag" />
        <img id="singaporeFlag" src={flags['Singapore']} alt="Singapore Flag" />
        <img id="uploadIconImg" src={uploadIcon} alt="Upload Icon" />
      </div>
    </div>
  );
};

export { JobSearch, flags, uploadIcon, placeholderFlag };
export default JobSearch;
