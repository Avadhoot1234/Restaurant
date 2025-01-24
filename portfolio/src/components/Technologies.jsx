import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import {TbBrandNextjs} from "react-icons/tb"
import { SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";

import {SiMongodb} from "react-icons/si"
import { FaNodeJs } from 'react-icons/fa'

import { FaPython } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaNodeJs className='text-7xl text-green-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb className='text-7xl text-green-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <GrMysql className='text-7xl text-white-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiTypescript className='text-7xl text-blue-800'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <TbBrandNextjs className='text-7xl text-white-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <IoLogoJavascript className='text-7xl text-yellow-300'/>
        </div>
      </div>
    </div>
  )
}

export default Technologies
