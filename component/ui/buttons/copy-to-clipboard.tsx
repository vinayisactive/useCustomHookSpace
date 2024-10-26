"use client"
import React from 'react'
import { FiCopy } from "react-icons/fi";
import copyToClipboard  from '@/helpers/copyToClipboard';

interface copyToClipboardProps {
  text : string
}

const Copytoclipboard: React.FC<copyToClipboardProps> = ({text}) => {
  return (
    <button 
    className="px-2 transition-transform duration-300 ease-in-out transform hover:scale-150"
    onClick={() => copyToClipboard(text)}
    >
  <FiCopy />
</button>
  )
}

export default Copytoclipboard;
