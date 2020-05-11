import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sally from './sally.js'

function App() {
  return (
    <>
    <header>
      <h1>Sally Student</h1>
      <h2>Computer Programmer</h2>
    </header>
    <address>
      <img className="image" src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" alt="Sally Student, looking mysterious and beautiful" />
      <Sally name='Sally Suzie Student' />
      <br className="email" />Email&colon; <a className="email" href="mailto:sallystudent@example.com" target="_blank">sallystudent@example.com</a>
      <br className="phone" />Phone&colon; <a className="phone" href="tel:0906451283">(090) 645-1283</a>
    </address>

    <main className="info">

      <section className="Education InfoSec">
      <header>
        <h3>Education&colon;</h3>
      </header>
        <p>Broad City University
          <br />BS in Computer Science
        </p>
      </section>

      <section className="WorkEXP InfoSec">
      <header>
        <h3>Work Experience&colon;</h3>
      </header>
          <p>Junior Programmer at Broad City Bank
            <br />2016 &ndash; 2019
           <br />Worked alongside senior programmers to develop secure terminals for banking clients
          </p>
          <p>Web Developer at Broad City Hall
            <br />2013 &ndash; 2016
            <br />Developed funtional and visually appealing websites for the city's projects and interests
          </p>
      </section>

      <section className="OtherSkills InfoSec">
        <header>
          <h3>Other Skills&colon;</h3>
        </header>
       <ul>
        <li>Microsoft Word</li>
        <li>Microsoft Excel</li>
        <li>Beatboxing</li>
        <li lang="ja">日本語</li>
      </ul>
    </section>

    </main>
    </>
  );
}

export default App;
