"use client"
import React from 'react'
import { FiCopy } from "react-icons/fi";
import { copyToClipboard } from "../Utilities/copyToClipboard";

interface copyToClipboardProps {
  primaryLang : string
}

const Copytoclipboard: React.FC<copyToClipboardProps> = ({primaryLang}) => {
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
