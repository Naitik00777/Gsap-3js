import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'


const App = () => {

  const boxRef = useRef()

  const {contextSafe} = useGSAP()

  const rotateBox = contextSafe(() => {
    gsap.to(boxRef.current,{
      rotate:360,
      duration:0.5
    })
  }
  )








  // const [xValue, setXValue] = useState(0)
  // const [setspin, setSetspin] = useState(0)
  // const randomX = gsap.utils.random(-500, 500, 100)
  // const rotateX = gsap.utils.random(-500, 500, 100)

  // const boxRef = useRef()


  // gsap
  // useGSAP(() => {
  //   gsap.to(boxRef.current, {
  //     x: xValue,
  //     duration: 0.5,
  //     rotate:setspin
  //   })
  // }, [xValue,setspin])
  // useGSAP(() => {
  //   gsap.from(boxRef.current, {
  //     y:300,
  //     opacity:0,
  //     rotate: 360,
  //     duration: 2,
  //     delay: 1
  //   }) 
  // })


  // useGSAP(() => {
  //   gsap.to(".box",{
  //     x:1000,
  //     duration:2,
  //     delay:1
  //   })
  // })


  return (

    <main>

      <button onClick={rotateBox}>Animate</button>
      <div ref={boxRef} className="box"></div>
      {/* <button onClick={() => {
        setXValue(randomX)
        setSetspin(rotateX)
      }}>Animate</button>
      <div ref={boxRef} className="box"></div> */}

      {/* <div className="box"></div> */}
      {/* <div className="container">
        <div className="circle"></div>
        <div ref={boxRef} className="box"></div>
      </div>
      <div className="kuch">
        <div className="circle"></div>
        <div className="box"></div>
      </div> */}
    </main>
  )
}

export default App
