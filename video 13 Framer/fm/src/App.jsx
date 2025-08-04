import React from 'react'
import { motion, useScroll } from 'motion/react'




const App = () => {
// console.log(useScroll())
const scrollYProgress = useScroll().scrollYProgress

  return (
    <div>

      {/* <motion.div
        animate={{
          x:1000,
          rotate:720
        }}
        transition={{
          duration:1,
          delay:1
        }}
        className='box'
      >

      </motion.div> */}

      {/* <motion.div
       className='box'
       initial={{
        x:0
       }}
       animate={{
        x:1000,
        rotate:720
       }}
       transition={{
        duration:3,
        delay:1,
        repeat:Infinity,
        ease:'anticipate'
       }}
       >

       </motion.div> */}

      {/* <motion.div
        className='box'
        initial={{
          x: 0
        }}
        animate={{
          x: [0, 1200, 1200, 0, 0],
          y: [0, 0, 500, 500, 0],
          rotate: [0, 360, 0, -360, 0]
        }}
        transition={{
          duration: 4,
          delay: 1
        }}

      >

      </motion.div> */}

      {/* <motion.div
        className='box'
        whileHover={{
          backgroundColor: 'green'
        }}
        whileTap={{
          scale: 0.7
        }}

        drag
        whileDrag={{
          scale: 0.7
        }}
        dragConstraints={{
          left:0,
          top:0,
          right:1000,
          bottom:500
        }}
        dragDirectionLock='true'
      >

      </motion.div> */}

      {/* <motion.div className='circle'></motion.div> */}

      <motion.div
       className='bg-red-500 origin-left w-full h-3 fixed top-0 left-0'
       style={{
        scaleX:scrollYProgress
       }}
       >

      </motion.div>


      <h2>Anonymous trading school</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores tempore quasi vel molestias consequatur. Iure officia dolores reprehenderit cupiditate consequuntur necessitatibus cumque doloremque tempora accusamus velit harum iusto, quam sequi temporibus! Commodi voluptate doloremque excepturi sapiente libero! Odio culpa, magni accusantium ab laboriosam error. Officia ducimus dignissimos culpa labore a vel odit earum? Earum, sapiente rem? Dolorem, debitis quod neque nisi nesciunt earum, iure officiis asperiores vero non dolorum dignissimos saepe? Voluptatem culpa distinctio cumque, excepturi ratione dolorum, consequatur exercitationem nam maiores placeat, illo quisquam adipisci expedita tenetur porro! Provident maiores dolor consequuntur officia ipsum optio dicta molestiae magni non? <br /> <br /> <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto id enim nesciunt nobis recusandae deleniti doloremque quasi, iusto sequi distinctio, optio maxime non deserunt delectus. Nostrum rem reprehenderit, quos quo voluptate illo quam nobis maiores nesciunt, officiis voluptatum blanditiis? Tenetur sint odio placeat nobis voluptatum illum sed corporis beatae qui. Aspernatur tempore dolorum repellendus qui. Accusamus recusandae ea, est repellat veritatis id, non nihil tenetur fugit soluta, atque eos. Quos quia dicta pariatur voluptates eveniet sint a! Voluptate laborum veniam non eveniet delectus omnis officia minus ullam natus consectetur quae pariatur facilis deserunt a, aliquam dolores perspiciatis optio necessitatibus?<br /> <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi amet omnis earum! Obcaecati quibusdam dicta temporibus veritatis quos alias magni velit nobis ea ab exercitationem atque, quidem similique assumenda nesciunt placeat harum voluptates officia maxime earum quis eius neque fuga. Suscipit aspernatur laborum ex aliquid eligendi vero voluptatum natus fugit dignissimos beatae, esse earum quod odio adipisci velit mollitia! Suscipit, provident dolores perspiciatis impedit voluptatem fugiat architecto nisi doloribus quibusdam amet natus veniam laudantium mollitia inventore qui beatae sed quidem, blanditiis exercitationem expedita dolore distinctio tempora optio rem. Harum necessitatibus atque eligendi quas rem sint delectus? Esse possimus quae perferendis reiciendis molestias iste est, sunt nam minus reprehenderit hic odio numquam optio cumque pariatur obcaecati fugiat recusandae consequatur asperiores, architecto illo tempore quos sint quisquam! Quibusdam, fuga fugiat adipisci id repudiandae illum architecto at officia eius nostrum, ex sint alias eos soluta dolores fugit hic quo tenetur odit laborum earum, maxime dicta? Maiores libero sequi ratione tenetur corrupti totam soluta possimus sint, velit, doloribus quasi recusandae placeat rem maxime modi harum est? Veritatis fugit nam molestias at praesentium maxime alias deserunt beatae obcaecati velit et vero vitae sed sapiente amet veniam eius, quidem dignissimos quasi nobis dolor? Laborum, aut facere?</p>
    </div>
  )
}

export default App
