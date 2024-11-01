import ContactBank from '@/components/ContactBank'
import ContactUsForm from '@/components/ContactUsForm'
import ContactUsLinks from '@/components/ContactUsLinks'
import ContactUsMap from '@/components/ContactUsMap'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-[80vh]'>
      <ContactUsLinks/>
      <ContactUsForm/>
      <ContactBank/>
      <ContactUsMap/>
    </div>
  )
}

export default page