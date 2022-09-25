import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCirles from './BackgroundCirles';

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, my name is Hreiðar", "Guy-who-loves-coffee.tsx", "<ButLovesToCodeMore />"],
    loop: true,
    delaySpeed: 2000,
  });
    return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCirles />
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </h1>
    </div>
  );
}
