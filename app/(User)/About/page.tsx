import AboutAdministration from '@/components/AboutAdministration'
import AboutCallender from '@/components/AboutCallender'
import AboutFestivals from '@/components/AboutFestivals'
import AboutHistory from '@/components/AboutHistory'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-[80vh]'>
      <AboutHistory/>
      <AboutFestivals />
      <AboutAdministration />
      <AboutCallender/>
    </div>
  )
}

export default page