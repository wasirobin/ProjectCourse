function TopCourseDetail(props) {
  const { data } = props
  let display = ''
  display =
    data &&
    data.map((v, i) => {
      return (
        <>
          <div class="top-100" key={i}></div>

          <div class="top-course01">
            <img
              src={'http://localhost:3001/IMG/CourseDetail/' + v.pic_title}
              alt=""
            />
            <h1 class="top-course01-h1">{v.title}</h1>
            <h3 class="top-course01-h3">{v.sub_title}</h3>
          </div>
        </>
      )
    })

  return (
    <>
      <div>{display}</div>
    </>
  )
}

export default TopCourseDetail
