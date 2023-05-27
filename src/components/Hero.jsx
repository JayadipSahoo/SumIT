import logo from '../assets/logo.png'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt='sumz_logo' className='w-40 object-contain'></img>
            <button type ='button' onClick={()=>{
                window.open("https://google.com") 
            }} className='black_btn'>Github</button>
        </nav>
        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden'/>
            <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>No more time wasted on reading lengthy articles from start to finish. 
        Our AI Tool analyzes the text, identifies key points, and extracts the most important information, allowing you to grasp the essence without the overwhelming details.</h2>
    </header>
  )
}

export default Hero