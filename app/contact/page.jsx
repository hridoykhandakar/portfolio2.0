const page = () => {
  return (
    <section className="h-screen flex items-center justify-center dark:bg-gray-900 dark:text-white">
      <div className="form bg-gray-50 dark:bg-gray-800  shadow-lg rounded-md  p-10 md:w-1/2 lg:w-1/3">
        <h1 className="font-semibold text-center text-4xl pb-10">
          Get In Touch
        </h1>
        <form className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Your Name"
          />
          <label htmlFor="email">Email</label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="email"
            type="email"
            placeholder="Email"
          />
          <label htmlFor="message">Your Message</label>
          <textarea
            rows="4"
            className=" block w-full bg-gray-200 text-gray-700 border-2 border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="message"
            type="text"
            placeholder="Your Message"
          />
          <button className="bg-teal-500 px-4 py-3 text-white mt-4 rounded">
            Send
          </button>
        </form>
        <p className="mt-10 text-center">
          Sending to{" "}
          <a className="underline  text-teal-500 pl-2" href="">
            iamkmhridoy@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};
export default page;
