"use client"
import { FiCopy } from "react-icons/fi";
import { copyToClipboard } from "../Utilities/copyToClipboard";

import React from 'react'

const Copytoclipboard = ({primaryLang}: any) => {
  return (
    <button 
    className="px-2 transition-transform duration-300 ease-in-out transform hover:scale-150"
    onClick={() => copyToClipboard(primaryLang)}
    >
  <FiCopy />
</button>
  )
}

export default Copytoclipboard;
