import loginImg from '/loginImg.png'


function App() {
  // A39DFF
  //625E99
  return (
    <>
      <div className='overflow-hidden w-screen h-screen '>
        <div className='w-[30%] h-full flex flex-col justify-between text-white bg-gradient-to-r from-[#625E99] to-[#A39DFF] pl-8 pr-4 pb-4 py-8' >

          <div className=' w-full  mb-6 pr-20 pl-8'>
            <h2 className='text-3xl my-4 font-semibold'>Welcome to  
            <span className='font-bold'> Total <br /> Security System!
              </span></h2>
            <h2></h2>
            <p className=' text-xs'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut assumenda accusantium vre 
            </p>

          </div>

        <div className='  mt-6'>
          <img src={loginImg} alt="" className=' object-cover' />

        </div>








        </div>




      </div>
    </>
  )
}

export default App
