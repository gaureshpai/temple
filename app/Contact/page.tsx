import ContactUsForm from '@/components/ContactUsForm'
import ContactUsLinks from '@/components/ContactUsLinks'
import ContactUsMap from '@/components/ContactUsMap'
import React from 'react'

const page = () => {
  return (
    <div>
      <ContactUsLinks/>
      <ContactUsForm/>
      <ContactUsMap/>
    </div>
  )
}

export default page