import { useNavigate } from 'react-router-dom';
import './Video.css';
import {  Rate, Space, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { useState } from 'react';



function Video() {
    const video1 = "https://www.youtube.com/embed/zpOULjyy-n8?rel=0";
   
    const backPage = useNavigate();
    const handleFinishLesson = () => {
      notification.open({
        message: "That was amazing",
        description: "Congratulate, you already finish this lesson!",
        icon: <SmileOutlined />
      })
    }

    const [close, isClosed] = useState(false);

    const handleClose = () => {
      isClosed(true);
    } 
    if (close ) {
      return false;
    }
  return (
    <div className='container-video'>
    <div className="container-title">
            <h3>Lesson 1</h3>
            <p>Please watch the video till the end!</p>
            <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
        </div>
    <div className="embed-responsive embed-responsive-16by9">
  <iframe className="embed-responsive-item" src={video1} allowfullscreen title='video percobaan'> </iframe>
</div>
<div className='overview'>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Course Overview</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. 
    Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
 <div className="card">
 <div class="card-body">
 <Space direction='vertical'>
 <h5 class="card-title">How you rate this lesson?</h5>
      <Rate defaultValue={4} allowHalf tooltips={["Bad", "Not Really Good", "Good", "Comfort", "Best Lesson!"]}/>
   </Space>
   </div>
   </div>
<div className="container-button d-flex justify-content-between">
    <button type="button" class="btn btn-dark" onClick={() => backPage("/freeform")}>Back Button</button>
    <button type="button" class="btn btn-warning" onClick={handleFinishLesson}>Next Lesson</button>  
</div>

</div>
</div>
  )
}

export default Video
