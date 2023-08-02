import React from 'react';
import './Aspects.css';
import IMG1 from '../Images/3.jpg';
import IMG2 from '../Images/4.jpg';
import IMG3 from '../Images/5.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';



function Aspects() {
  const navigate = useNavigate();  
  
  const [check, setcheck] = useState('');
  const [isClosed, setIsClosed] = useState(false);

  const handleClick = () => {
    if (!check || !document.querySelector('input[name="choosingMethod"]:checked')) {
      notification.open({
      message: 'Heii learner!',
      description: 'You must choose both the Aspect Ratio and Content Creation Method first',
      icon: <SmileOutlined />,
    });
    } else {
      navigate('/freeform');
    }
  };

    const handleClose = () => {
      setIsClosed(true);
    };
  
    if (isClosed) {
      
      return null;
    }

    
  return (
    <div className="container-ratio">
        <div className="container-title">
            <h3>How you want to proccess your course?</h3>
            <p>Please select the ratio and method of content creation</p>
            <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
        </div>

        <h2>Aspec Ratio</h2>
    <div className="container-card">
        <div className="card" style={check === 'firstOption' ? {border: '2px solid aqua'} : null} onClick={() => setcheck('firstOption')}>
            <img src={IMG1} className="card-img-top" alt="..." />
            <div className="card-body" >
                <h3>Free Form</h3>
                <p className="card-text">Modern formats keep your content conneted and fluid.</p>
            </div>
        </div>
        
        <div className="card" style={check === 'secondOption' ? {border: '2px solid aqua'} : null} onClick={() => setcheck('secondOption')}>
            <img src={IMG2} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3>16: 9</h3>
                <p className="card-text">Modern formats help keep your content connected and consistent.</p>
            </div>
        </div>
        <div className="card"  style={check === 'thirdOption' ? {border: '2px solid aqua'} : null} onClick={() => setcheck('thirdOption')}>
            <img src={IMG3} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3>9:16</h3>
                <p className="card-text">Suitable for modern contents, micro-courses, and social media, especially Tiktok, Reels..</p>
            </div>
        </div>
     
    </div>
    <div className="container-method">
        <h3>Content Creation Method</h3>
        <div className="row">
            
              <div className="card">
              <label htmlFor="autoOption">
                <div className="card-body d-flex align-items-center">
                    <input type="radio" id='autoOption' name="choosingMethod" value="automatic" />
                    <div className="text">
                    <h5 className="card-title">Automaticly</h5>
                  <p className="card-text">AI will generate the course based on your outline.</p>
                </div>
                </div>
                </label>
              </div>
              <div className="card">
          <label htmlFor="manualOpt">
            <div className="card-body d-flex align-items-center">
              <input type="radio" id="manualOpt" name="choosingMethod" value="manual" className="me-3" />
              <div>
                <h5 className="card-title">Manually</h5>
                <p className="card-text">...</p>
              </div>
            </div>
          </label>
        </div>
          </div>
    </div>
    <div className="d-flex justify-content-center align-items-center mt-4">
    <button type="button" className="btn btn-success"  onClick={handleClick}>Next</button>
</div>
</div>
  )
}

export default Aspects
