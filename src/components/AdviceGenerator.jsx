import { useState } from 'react';
import dice from '../assets/images/icon-dice.svg';
import patterDividerDesktop from '../assets/images/pattern-divider-desktop.svg';
import patterDividerMobile from '../assets/images/pattern-divider-mobile.svg';

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
    <div className="relative max-w-[600px] bg-blue-400 flex flex-col gap-6 items-center p-6 rounded-lg">
      <p className="advice-no">ADVICE #{slip}</p>
      <p className='text-center'>{`"${advice}"`}</p>
      <img src={patterDividerDesktop} alt="pattern-divider" />
      
      <button className='absolute -bottom-4 left-[47.5%]' onClick={produceJoke}>
        <img src={dice} alt="dice" />
      </button>
    </div>
  )
}

export default AdviceGenerator
