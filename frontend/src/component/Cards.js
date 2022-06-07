import React from 'react';
import '../css/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <span id="cards-text1">Find out your nutritional needs with PillGood!</span>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/5.jpg'
              text='빅데이터를 기반으로한 자세한 영양소 분석'
              label='영양제 분석'
              path='/empty'
            />
            <CardItem
              src='images/9.jpg'
              text='사용자의 자가진단을 통한 맞춤 영양제 및 음식 추천'
              label='영양제 추천'
              path='/empty'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;