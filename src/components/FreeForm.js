import React from 'react';
import './FreeForm.css';
import IMG1 from '../Images/3.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

function FreeForm() {
  const toVideo = useNavigate();
  const toAspects = useNavigate();

  const [choice, setChoice] = useState('');
  const [closed, setClosed]= useState(false);

    const handleCloseBtn = () => {
      setClosed(true);
    }
    if(closed) { return null}

    const handleClick = () => {
      if (!choice) {
        notification.open({
        message: 'Heii learner',
        description: 'You must choose the template before go to the next step',
        icon: <SmileOutlined/>,
      });
      } else {
        toVideo('/video');
      }
    };
  
    
    
  return (
    <div className="container-ratio">
        <div className="container-title">
            <h3>Select a template</h3>
            <p>Here is the templates that support Free form</p>
            <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseBtn}></button>
        </div>
        
  <div class="row container-baru">
    <div class="col-md-4 mb-3">
      <div class="card" style={choice === 'firstOpt' ? {border: '2px solid aqua'} : null} onClick={() => setChoice('firstOpt')}>
        <div class="card-body">
        <img src={IMG1} class="card-img-top" alt="..."/>
        <h5 class="card-title">Card 1</h5>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <div class="card" style={choice === 'secOpt' ? {border: '2px solid aqua'} : null} onClick={() => setChoice('secOpt')}>
        <div class="card-body">
        <img src={IMG1} class="card-img-top" alt="..."/>
          <h5 class="card-title">Card 1</h5>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <div class="card" style={choice === 'thirdOpt' ? {border: '2px solid aqua'} : null} onClick={() => setChoice('thirdOpt')}>
        <div class="card-body">
        <img src={IMG1} class="card-img-top" alt="..."/>
          <h5 class="card-title">Card 1</h5>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <div class="card" style={choice === 'fourthOpt' ? {border: '2px solid aqua'} : null} onClick={() => setChoice('fourthOpt')}>
        <div class="card-body">
        <img src={IMG1} class="card-img-top" alt="..."/>
          <h5 class="card-title">Card 1</h5>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <div class="card" style={choice === 'fiveOpt' ? {border: '2px solid aqua'} : null} onClick={() => setChoice('fiveOpt')}>
        <div class="card-body">
        <img src={IMG1} class="card-img-top" alt="..."/>
          <h5 class="card-title">Card 1</h5>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <div class="card" style={choice === 'sixOpt' ? {border: '2px solid aqua'} : null} onClick={() => setChoice('sixOpt')}>
        <div class="card-body">
        <img src={IMG1} class="card-img-top" alt="..."/>
          <h5 class="card-title">Card 1</h5>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <div class="card" style={choice === 'sevenOpt' ? {border: '2px solid aqua'} : null} onClick={() => setChoice('sevenOpt')}>
        <div class="card-body">
        <img src={IMG1} class="card-img-top" alt="..."/>
          <h5 class="card-title">Card 1</h5>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <div class="card" style={choice === 'eightOpt' ? {border: '2px solid aqua'} : null} onClick={() => setChoice('eightOpt')}>
        <div class="card-body">
        <img src={IMG1} class="card-img-top" alt="..."/>
          <h5 class="card-title">Card 2</h5>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <div class="card" style={choice === 'nineOpt' ? {border: '2px solid aqua'} : null} onClick={() => setChoice('nineOpt')}>
        <div class="card-body">
        <img src={IMG1} class="card-img-top" alt="..."/>
          <h5 class="card-title">Card 3</h5>
        </div>
      </div>
    </div>
  </div>
  <div className="make-buttons-center">
        <div className="container-buttons">
        <button type="button" className="btn tombol-kembali btn-light" onClick={() => toAspects("/")}>
          Back
        </button>
        <button type="button" className="btn tombol-generate btn-success" onClick={handleClick}>
          Generate Now
        </button>
        </div>
      </div>

    </div>

  )
}

export default FreeForm
