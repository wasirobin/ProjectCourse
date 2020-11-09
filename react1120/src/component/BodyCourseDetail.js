function BodyCourseDetail(props) {
  const { data } = props
  let display = ''
  display =
    data &&
    data.map((v, i) => {
      return (
        <>
          <div key={i}></div>
          <div class="top-250"></div>
          <div class="top-page-green">
            <div class="block">
              <div class="box-left">
                <h4 class="box-left-h4">{v.text}</h4>
              </div>
              <div class="box-right">
                <div class="box-right-img">
                  <img
                    src={'http://localhost:3001/IMG/CourseDetail/' + v.pic_01}
                    alt=""
                  />
                </div>
                <div class="box-right-img">
                  <img
                    src={'http://localhost:3001/IMG/CourseDetail/' + v.pic_02}
                    alt=""
                  />
                </div>
                <div class="box-right-img">
                  <img
                    src={'http://localhost:3001/IMG/CourseDetail/' + v.pic_03}
                    alt=""
                  />
                </div>
                <div class="box-right-img">
                  <img
                    src={'http://localhost:3001/IMG/CourseDetail/' + v.pic_04}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="top-50"></div>
          <div class="down">
            <div class="down-left">
              <img
                src={'http://localhost:3001/IMG/CourseList/' + v.pic_big}
                alt=""
                width="466px"
              />
            </div>
            <div class="down-right">
              <div class="down-right-in">
                <h3 class="down-right-in-h3">{v.title}</h3>
                <hr style="border: 1px solid grey;" />
                <h4 class="down-right-in-h4A">{v.act_title}</h4>
                <h4 class="down-right-in-h4A">活動日期：{v.act_date}</h4>
                <h4 class="down-right-in-h4A">活動地點：{v.act_place}</h4>
                <h4 class="down-right-in-h4A">活動人數：{v.act_members}人</h4>
                <h4 class="down-right-in-h4A">活動費用：{v.act_price}</h4>
                <button class="up-buttonA">
                  <h3 class="up-button-h3">我要報名</h3>
                </button>
                <button class="up-buttonA">
                  <h3 class="up-button-h3">看更多活動</h3>
                </button>
              </div>
            </div>
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

export default BodyCourseDetail
