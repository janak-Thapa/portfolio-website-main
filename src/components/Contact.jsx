
const Contact = () => {
  return (
    <div name="contact" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white mb-8">
      <div className="flex flex-col justify-center items-center h-full max-w-screen-lg mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="w-full md:w-1/2 bg-opacity-30 bg-gray-800 p-8 rounded-lg">
          <form action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6" method="POST" className="flex flex-col w-full">
            <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4" />
            <input type="text" name="email" placeholder="Enter your email" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4" />
            <textarea name="message" placeholder="Enter your message" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"></textarea>
            <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 rounded-md hover:scale-110 duration-300">Lets talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
