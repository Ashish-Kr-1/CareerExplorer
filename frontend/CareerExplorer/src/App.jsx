import { useEffect } from 'react';
import Card from './components/card';
import Orb from './components/orb';
import './index.css'

function App() {
  return (
    <>
      <main>

        <img src='../src/assets/img/orb.png' className='roamer h-5 w-5'></img>
        <video autoPlay muted loop playsInline src="../src/assets/img/skills.mp4" type="video/mp4" className='bg-video' />

        <header className='flex justify-center'>
          <h1 className="heading text-5xl text-blue-200 text-center mt-25">Career Explorer</h1>
        </header>
        <section className="flex justify-between mt-40 mx-40">
          <Card dataName="Skills" />
          <Card dataName="Interests" />
          <Card dataName="Qualifications" />
          <Card dataName="Hobbies" />
        </section>
        <section className='flex justify-center mt-25'>
          <button className="bg-blue-300 items-center justify-center h-20 w-45 rounded-md text-black text-2xl text-shadow-blue-200 hover:border-3 hover:border-black hover:bg-blue-200">Guide me</button>
        </section>
      </main>

    </>
  )
}

export default App
