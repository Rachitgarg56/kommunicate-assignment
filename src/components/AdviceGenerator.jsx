import { useState } from 'react';
import dice from '../assets/images/icon-dice.svg';
import patterDividerDesktop from '../assets/images/pattern-divider-desktop.svg';
import patterDividerMobile from '../assets/images/pattern-divider-mobile.svg';
import './AdviceGenerator.css'

const AdviceGenerator = () => {
  const [slip, setSlip] = useState(0);
  const [advice, setAdvice] = useState('');

  const produceJoke = async () => {
    const data = await fetch('https://api.adviceslip.com/advice');
    const parsedRes = await data.json();
    setSlip(parsedRes.slip.id);
    setAdvice(parsedRes.slip.advice);
  }


  return (
    <div className="relative max-w-[600px] bg-gray-400 flex flex-col gap-6 items-center p-6 rounded-lg">
      <p className="advice-no" style={{color:"hsl(150, 100%, 66%)"}}>ADVICE #{slip}</p>
      <p className='text-center'>{`"${advice}"`}</p>
      <img src={patterDividerDesktop} alt="pattern-divider" />
      
      <button className='dice absolute -bottom-4 left-[46.5%] rounded-full w-10 h-10 flex justify-center items-center' onClick={produceJoke} >  
        <img className='dice' src={dice} alt="dice" />
      </button>
    </div>
  )
}

export default AdviceGenerator
