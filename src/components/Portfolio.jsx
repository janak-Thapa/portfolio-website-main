import gamehub from "../assets/portfolio/gamehub.png";
import gemini from "../assets/portfolio/gemini.png";
import ecommerce from "../assets/portfolio/ecommerce.png";
import AIVoiceChatAssistant from "../assets/portfolio/AIVoiceChatAssistant.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "AI Voice Chat Assistant",
      src: AIVoiceChatAssistant,
      demoUrl: "https://ai-voice-assistant-sigma.vercel.app/",
      codeUrl: "https://github.com/janak-Thapa/AI-Voice-Assistant"
    },
    {
      id: 2,
      title: "Game Hub",
      src: gamehub,
      demoUrl: 'https://game-hub-nine-ruby-17.vercel.app/',
      codeUrl: 'https://github.com/janak-Thapa/GameHub'
    },
    {
      id: 3,
      title: "Gemini Clone",
      src: gemini,
      demoUrl: 'https://gemini-clone-gamma.vercel.app/',
      codeUrl: 'https://github.com/janak-Thapa/Gemini-clone'
    },
    {
      id: 4,
      title: "Ecommerce",
      src: ecommerce,
      demoUrl: 'https://ecommerce-one-rose.vercel.app/',
      codeUrl: 'https://github.com/janak-Thapa/Ecommerce'
    },
  ];

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here!</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, title, src, demoUrl, codeUrl }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt={title} className='rounded-md duration-200 hover:scale-105' />
              <h2 className='text-center text-xl font-bold mt-4'>{title}</h2>
              <div className='flex items-center justify-center'>
                <a href={demoUrl} target='_blank' rel='noopener noreferrer' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-blue-500 text-white rounded-md text-center'>Demo</a>
                <a href={codeUrl} target='_blank' rel='noopener noreferrer' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-green-500 text-white rounded-md text-center'>Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
