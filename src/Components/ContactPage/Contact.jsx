import React from 'react'

function Contact() {
  return (
    <section className='font-bellefair pt-24 pb-10'>
      <div className='w-80 px-2'>
        <h1 className='capitalize text-primary text-2xl filter drop-shadow-[0_0_0.4px_#006400]'>Get in touch</h1>
        <h2 className='mt-5 text-primary'>Send a Message</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Risus urna donec molestie proin velit rhoncus rhoncus amet nisl.</p>
        <form className='flex flex-col mt-5'>
            <div className='w-full flex flex-wrap gap-x-2 gap-y-5'>
                <input type="text" className='w-[48%] pb-2 placeholder:text-black text-black border-b border-black/50' placeholder='Full Name' />
                <input type="email" className='w-[48%] pb-2 placeholder:text-black text-black border-b border-black/50' placeholder='Email Address' />
                <input type="text" className='w-[48%] pb-2 placeholder:text-black text-black border-b border-black/50' placeholder='Country' />
                <input type="number" className='w-[48%] pb-2 placeholder:text-black text-black border-b border-black/50' placeholder='Phone Number' />
            </div>
            <textarea className='w-full h-20 mt-5 border-b border-black/50 text-black placeholder:text-black resize-none' placeholder='Message'></textarea>
            <button className='px-6 py-1 mt-6 self-end rounded-sm bg-secondary text-accent'>Submit</button>
        </form>
      </div>
      <div></div>
    </section>
  )
}

export default Contact
