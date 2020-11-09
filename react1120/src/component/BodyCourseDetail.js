import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

function BodyCourseDetail(props) {
  let history = useHistory()
  let { id } = useParams()
  const { data } = props
  console.log(id, data)
  let display = data
  const myData = id && data && data[id - 1]
  return myData ? (
    <>
      <div class="top-250"></div>
      <div class="top-page-green">
        <div class="block">
          <div class="box-left">
            <h4 class="box-left-h4">{myData.text}</h4>
          </div>
          <div class="box-right">
            <div class="box-right-img">
              <img
                src={'http://localhost:3001/IMG/CourseDetail/' + myData.pic_01}
                alt=""
              />
            </div>
            <div class="box-right-img">
              <img
                src={'http://localhost:3001/IMG/CourseDetail/' + myData.pic_02}
                alt=""
              />
            </div>
            <div class="box-right-img">
              <img
                src={'http://localhost:3001/IMG/CourseDetail/' + myData.pic_03}
                alt=""
              />
            </div>
            <div class="box-right-img">
              <img
                src={'http://localhost:3001/IMG/CourseDetail/' + myData.pic_04}
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
            src={'http://localhost:3001/IMG/CourseList/' + myData.pic_big}
            alt=""
            width="466px"
          />
        </div>
        <div class="down-right">
          <div class="down-right-in">
            <h3 class="down-right-in-h3">{myData.act_title}</h3>
            <hr />
            <h4 class="down-right-in-h4A">
              活動日期：{myData.act_date.slice(0, 10)}
            </h4>
            <h4 class="down-right-in-h4A">活動地點：{myData.act_place}</h4>
            <h4 class="down-right-in-h4A">活動人數：{myData.act_members}人</h4>
            <h4 class="down-right-in-h4A">活動費用：{myData.act_price}</h4>
            <button class="up-buttonA">
              <h3 class="up-button-h3">我要報名</h3>
            </button>
            <button
              class="up-buttonA"
              onClick={() => {
                history.push(`/CourseList/}`)
              }}
            >
              <h3 class="up-button-h3">看更多活動</h3>
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    ''
  )

  return (
    <>
      <div>{display}</div>
    </>
  )
}

export default BodyCourseDetail
