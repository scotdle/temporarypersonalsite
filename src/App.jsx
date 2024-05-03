import { useState } from 'react'
import 'animate.css';
import './styles.scss'

function App() {

  return (
    <>
      <div className="l-page-main">
        <div className="l-page-main__container">
          <p className="l-page-main__heading animate__animated animate__backInLeft">Hi, I'm Scott Caudle 👋</p>
          <p className="l-page-main__eyebrow animate__animated animate__backInRight">A Front end Web Developer from Charlotte, NC</p>
          <p className="l-page-main__statement animate__animated animate__fadeInUpBig">currently shipping code at <a href="https://atypiccraft.com/">[Atypic]</a>...</p>
         
          <div className="l-page-main__icon-link animate__animated animate__fadeInUpBig">
            <a href="/scott_caudle_resume.pdf" className="l-page-main__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" xml:space="preserve"><path fill="#FFFFFF" d="M89.632 142.298c-1.1 0-2 .1-2-1v-13c0-3.7-3.8-7-8.2-7h-9.6v-4h9.5c6.6 0 12.2 5 12.2 11v13c.1 1.1-.8 1-1.9 1z"/><path fill="#FFFFFF" d="M119.532 143.298h-30.9c-.5 0-1-.2-1.4-.6l-20.3-20.3c-.4-.3-.6-.8-.6-1.4v-50.1c0-8.2 6.6-14.8 14.8-14.8h38.4c8.2 0 14.8 6.6 14.8 14.8v57.6c0 8.2-6.6 14.8-14.8 14.8zm-30.1-4h30.1c6 0 10.8-4.8 10.8-10.8v-57.6c0-6-4.8-10.8-10.8-10.8h-38.4c-6 0-10.8 4.8-10.8 10.8v49.3l19.1 19.1z"/><path fill="#FFFFFF" d="M115.732 83.598h-32c-1.1 0-2-.9-2-2s.9-2 2-2h32c1.1 0 2 .9 2 2s-.9 2-2 2zM115.732 95.598h-32c-1.1 0-2-.9-2-2s.9-2 2-2h32c1.1 0 2 .9 2 2s-.9 2-2 2zM115.732 107.598h-32c-1.1 0-2-.9-2-2s.9-2 2-2h32c1.1 0 2 .9 2 2s-.9 2-2 2z"/></svg>
            <span className="l-page-main__link">view my resume.</span>
            </a>
          </div>

          <img src="/sc-profile-pic.png" alt="" className="l-page-main__image animate__animated animate__fadeInUpBig" />


        </div>
      </div>
    </>
  )
}

export default App
