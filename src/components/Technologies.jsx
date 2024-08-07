
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImages from "../assets/react.png";
import mongo from "../assets/mongo.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import typescript from "../assets/typescript.png"


import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png"

const Technologies = () => {
  const techs = [
    {
      id:1,
      src:html,
      title:'HTML',
      style:'shadow-orange-500'
    },
    {
      id:2,
      src:css,
      title:'CSS',
      style:'shadow-blue-500'
    },
    {
      id:3,
      src:javascript,
      title:'JavaScript',
      style:'shadow-yellow-500'
    },
    {
      id:4,
      src:reactImages,
      title:'React',
      style:'shadow-blue-600'
    },
    
    
   
    {
      id:5,
      src:github,
      title:'GitHub',
      style:'shadow-gray-500'
    },
    {
      id:6,
      src:tailwind,
      title:'Tailwind',
      style:'shadow-sky-400'
    },
    {
      id:7,
      src:node,
      title:'Nodejs',
      style:'shadow-green-600'  
    },
    {
      id:8,
      src:nextjs,
      title:'Nextjs',
      style: "shadow-white",
    },
    {
      id:9,
      src:mongo,
      title:'Mongodb',
      style:'shadow-green-400'
    },
    {
      id:10,
      src:typescript,
      title:'TypeScript',
      style:'shadow-blue-400'
    },
  ]
  return (
    <div name='technologies' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Technologies</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {
            techs.map(({id,src,title,style})=>(
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2rounded-lg ${style}`}>
              <img src={src} alt="technologies"  className='w-20 mx-auto'/>
              <p className='mt-4'>{title}</p>
            </div>
            ))
          }  
        
        </div>
      </div>
    </div>
  )
}

export default Technologies

