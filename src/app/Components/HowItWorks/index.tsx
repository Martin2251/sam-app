import React from 'react'
import { BsCardChecklist, BsSmartwatch } from 'react-icons/bs'
import { GiArcheryTarget } from 'react-icons/gi'
import { IoCalendarNumberOutline } from 'react-icons/io5'
import './HowItWorks.scss';

const HowItWorks = () => {
  return (
    <main className='bg-slate-200'>
        <header>
            <h1 className="text-3xl text-center">How it works</h1>
        </header>
        <p className='text-white text-center'>Optimise your training</p>
        <section className='how-it-works'>
            <div className='icon-div'>
        <GiArcheryTarget />
        <p>Set your goal</p>
        </div>
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
