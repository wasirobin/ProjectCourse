import Navbar from '../component/Navbar'
import ControlledCarousel from '../component/ControlledCarousel'
import TopCourse from '../component/TopCourse'
import BodyCourse from '../component/BodyCourse'
import Footer from '../component/Footer'
import React, { useState, useEffect } from 'react'

function CourseList() {
  const [mydata, setMydata] = useState([])
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
      <TopCourse data={mydata.length ? mydata.slice(0, 4) : null} />
      <BodyCourse data={mydata.length ? mydata.slice(4, 11) : null} />
      <Footer />
    </>
  )
}

export default CourseList
