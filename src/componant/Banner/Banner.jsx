import logo from '../../assets/techmaniaLogo.png'
import backgroundImage from '../../assets/techmania-banner-bg.jpg'

const Banner = () => {
  return (
    <div
      className=" bg-center bg-no-repeat bg-cover py-12"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'cover',
      }}
    >
      <div className=" w-[90%] lg:w-[80%] min-h-screen mx-auto flex flex-col md:flex-row-reverse lg:flex-row-reverse justify-between md:items-center">
        <div className='mt-0 md:mt-[-300px]'>
          <div className="text-white my-5">
            <span className="p-4 bg-[#0b358a] text-base sm:text-2xl md:text-2xl lg:text-4xl font-bold inline-block">pursue</span>
            <span className="p-4 bg-white text-cyan-800 sm:text-2xl md:text-2xl lg:text-4xl font-bold inline-block">your passions</span>
          </div>
          <div className="text-white  my-5">
            <span className="p-4 bg-[#0b358a] text-base sm:text-2xl md:text-2xl lg:text-4xl font-bold inline-block">secure</span>
            <span className="p-4 bg-white text-cyan-800 sm:text-2xl md:text-2xl lg:text-4xl font-bold inline-block">your peace of mind</span>
          </div>
        </div>
        <div className=" bg-white w-64 sm:w-72 px-3 py-5 self-center">
          <div className="px-3 text-center">
            <div className='bg-black'>
            <img src={logo} className=" w-40 mx-auto" alt="" />
            </div>
            <h4 className=" font-bold text-2xl my-3 ">Join With Us</h4>
          </div>
          <div className="my-2">
            <input
              type="text"
              className="w-full border-2 px-2 p-1 my-1 rounded-sm"
              placeholder="Student First Name"
            />
            <br />
            <input
              type="text"
              className="w-full border-2 px-2 p-1 my-1 rounded-sm"
              placeholder="Student Last Name"
            />
            <br />
            <input
              type="email"
              className="w-full border-2 px-2 p-1 my-1 rounded-sm"
              placeholder="Student Email Address"
            />
            <div className="flex mt-2">
              <input
                type="checkbox"
                name=""
                id="checkbox"
                className="w-7 h-7 mr-2"
              />
              <label htmlFor="checkbox" className="text-sm text-[#0b358a]">
                I confirm that i have recive and accept my LRAP Award
              </label>
            </div>
            <button className="w-full hover:bg-cyan-500 border-cyan-500 bg-white border-2 hover:text-white p-2 mt-5">Join Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner