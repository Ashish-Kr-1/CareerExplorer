import { useEffect, useState } from 'react';
import Card from './components/card';
import Orb from './components/orb';
import './index.css';

function App() {

  const [data, setData] = useState({})
  const [recommendations, setRecommendations] = useState({})

  const [formData, setFormData] = useState({
    skill: 'Mathematical modeling',
    interest: 'Safety',
    qualification: "Bachelor's in Finance",
    hobby: 'Robotics'
  });

  useEffect(() => {

  }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5000/api/data');
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //   } catch (error) {
  //     console.log('Error ', error)
  //   }
  // }



  const recommendHandler = async (e) => {
    console.log("Tried")
    console.log(formData)
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      setRecommendations(data.recommendations || []);
      console.log(data.recommendations);
    } catch (error) {
      console.error('API error: ', error);
    }
  }

  return (
    <>
      <main>
        <img src='../src/assets/img/orb.png' className='roamer h-5 w-5'></img>
        <video autoPlay muted loop playsInline src="../src/assets/img/skills.mp4" type="video/mp4" className='bg-video' />

        <header className='flex justify-center'>
          <h1 className="heading md text-blue-200 text-center mt-25">Career Explorer</h1>
        </header>
        <section className="flex flex-wrap justify-center items-center gap-6 mt-40 px-4 md:px-10 lg:px-20 xl:px-40">
          <Card className="flex-1 grow " dataName="skill" formData={formData} setFormData={setFormData} />
          <Card className="flex-1 grow " dataName="interest" formData={formData} setFormData={setFormData} />
          <Card className="flex-1 grow " dataName="qualification" formData={formData} setFormData={setFormData} />
          <Card className="flex-1 grow " dataName="hobby" formData={formData} setFormData={setFormData} />
        </section>
        <section className='flex justify-center mt-25'>
          <button className="bg-blue-300 items-center justify-center h-20 w-45 rounded-md text-black text-2xl text-shadow-blue-200 hover:border-3 hover:border-black hover:bg-blue-200" onClick={recommendHandler}>Guide me</button>
        </section>
        <header className='flex justify-center'>
          <h1 className="heading md text-blue-200 text-center mt-25">Ok</h1>
        </header>
      </main>

    </>
  )
}

export default App
