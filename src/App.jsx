import { useState } from 'react';
import { getRandomNumber } from './utils/getRandom';
import phrases from './assets/phrases.json';
import Phrase from './components/Phrases/Phrases';
import Button from './components/Button/Button';
import MacMacBook1 from './image/MacBook-Air-1.jpg';
import MacMacBook2 from './image/MacBook-Air-2.jpg';
import MacMacBook3 from './image/MacBook-Air-3.jpg';
import MacMacBook4 from './image/MacBook-Air-4.jpg';
import './App.css';

const BackGrounds = [MacMacBook1, MacMacBook2, MacMacBook3, MacMacBook4]

function App() {
  const getRandomPhrase = () => phrases[getRandomNumber(phrases.length -1)];
  const getRandombackgrounds = () => BackGrounds[getRandomNumber(BackGrounds.length -1)];
  const [phraseObject, setphraseObject] = useState(getRandomPhrase());
  const [BackGround, setBackGround] = useState(getRandombackgrounds());

  const handlerClickPhrase = () => {
    let newPhrase = getRandomPhrase();
    let newBackgrounds = getRandombackgrounds();
    while(newPhrase === phraseObject){
      newPhrase = getRandomPhrase();
    }
    while(newBackgrounds === BackGround){
      newBackgrounds = getRandombackgrounds();
    }
    setphraseObject(newPhrase);
    setBackGround(newBackgrounds);
  }

  return (
    <div className='App__container' style={{ backgroundImage: `url('${BackGround}')` }}>
      <h1 className='text__center'>Fortune Cookies</h1>
      <div className='phrase__content'>
        <Phrase phrase={phraseObject.phrase} />
      </div>
      <p>Autor: <mark>{phraseObject.author}</mark></p>
      <div className='Btn__container'>
        <Button handlerClick={ handlerClickPhrase }/> 
      </div>
    </div>
  )
}

export default App
