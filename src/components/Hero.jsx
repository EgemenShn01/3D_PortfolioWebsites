import {motion} from 'framer-motion'


import {styles} from '../styles'
import {ComputersCanvas} from './canvas' 
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto' >
      <div className={`${styles.paddingX} absolute
      inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 
      `}>
        <div className=' flex flex-col justify-center items-center mt-5 '>
           <div className='w-5 h-5 rounded-full bg-[#0c0c0c]' />
             <div className='w-1 sm:h-80 h-40  violet-gradient '/>
        </div>
        <div className=''>
                <h1 className={`${styles.heroHeadText} text-black`}>Hi, I'm <span className='text-[#2c2d29]'>
                  Egemen</span></h1>
                  <p className={`${styles.heroSubText} mt-2 text-black`}>
                    I develop 3D visuals, user interfaces <br className='sm:block hidden' /> and web applications
                  </p>
        </div>  
      </div>
      <ComputersCanvas className=""/>


      <div className='absolute xs:bottom-8 bottom-20 w-full flex justify-center items-center' title='CONTACT US'>
        <a href="#contact">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex
           justify-center items-start p-2'>
              <motion.div
                animate={
                  {
                    y:[0 , 24 ,0]
                  }
                }
                transition= {{
                      duration:1,
                       repeat:Infinity,
                       repeatType:'loop'
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
                />
           </div>
        </a>
        
      </div>
    </section>
  )
}

export default Hero