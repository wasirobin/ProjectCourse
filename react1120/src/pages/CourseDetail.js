import Navbar from '../component/Navbar'
import ControlledCarousel from '../component/ControlledCarousel'
import TopCourseDetail from '../component/TopCourseDetail'
import BodyCourseDetail from '../component/BodyCourseDetail'
import Footer from '../component/Footer'
import React, { useState, useEffect } from 'react'

function CourseDetail() {
  const [mydata, setMydata] = useState()
  const getData = async () => {
    const res = await fetch('http://localhost:3000/get-db', {
      method: 'get',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const data = await res.json()

    setMydata(data)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Navbar />
      <ControlledCarousel />
      <TopCourseDetail data={mydata} />
      <BodyCourseDetail data={mydata} />
      <Footer />
    </>
  )
}

export default CourseDetail
