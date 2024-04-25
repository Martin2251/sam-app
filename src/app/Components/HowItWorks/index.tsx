import React from 'react'
import { BsCardChecklist, BsSmartwatch } from 'react-icons/bs'
import { GiArcheryTarget } from 'react-icons/gi'
import { IoCalendarNumberOutline } from 'react-icons/io5'
import './HowItWorks.scss';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const HowItWorks = () => {
  return (
    <main className='bg-slate-200'>
        <header>
            <h3>How it works</h3>
        </header>
        <p className='text-white text-center'>Optimise your training</p>
        <section className='how-it-works'>
            <div className='icon-div'>
        <GiArcheryTarget />
        <p>Set your goal</p>
        </div>
        <div className='dots'><HiOutlineDotsHorizontal /></div>
        <IoCalendarNumberOutline />
        <p>Set Weekly avaliabity</p>
        <BsSmartwatch />
        <p className='wearable'>Connect your wearable device</p>
        <BsCardChecklist />
        <p>Replan</p>

        </section>

    </main>
  )
}

export default HowItWorks
