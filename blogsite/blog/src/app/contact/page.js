export default function Contact() {
  return (
    <div className="flex flex-col mb-12">
      <div className="flex flex-col gap-4  max-w-[700px] mr-auto ml-auto">
        <h1 className="text-2xl">Contact Us</h1>
        <p className="text-sm text-gray-500">
          Laborum non proident est enim adipisicing non laborum deserunt
          consequat sunt. Tempor sit tempor proident deserunt pariatur tempor
          ullamco aliqua ut magna tempor do voluptate. Deserunt aliqua culpa
          incididunt enim. Lorem elit aute exercitation elit sit sint cillum
          irure nostrud nulla elit esse. Dolor proident labore est adipisicing
          nisi mollit adipisicing sunt irure excepteur id esse.
        </p>
        <div className="flex flex-row gap-2 justify-around">
          <div className="flex flex-col border-[1px] border-solid border-gray-500 rounded w-56 p-2">
            <h1 className="text-2xl">Address</h1>
            <p className="text-sm text-gray-500">
              1386 Oak Ridge Drive, Saint Louis, Iceland
            </p>
          </div>
          <div className="flex flex-col border-[1px] border-solid border-gray-500  w-56 rounded p-2">
            <h1 className="text-2xl">Contact</h1>
            <p className="text-sm text-gray-500">133-713-3371</p>
            <p className="text-sm text-gray-500">ligma@balls.net</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mr-auto ml-auto mt-12 bg-gray-200 w-2/6 h-[420px] rounded">
        <div className="ml-10 mt-5 flex flex-col">
          <h1 className="text-xl mb-5">Leave a Message</h1>
          <div>
            <input
              type="text"
              className="mr-10 border-[1px] border-gray-300 text-gray-400 rounded p-1"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="border-[1px] border-gray-300 text-gray-400 rounded p-1"
              placeholder="Your Email"
            />
          </div>
          <input type="text" placeholder="Subject" className="w-2/3 mt-6" />
          <textarea
            placeholder="Write a message"
            className="w-4/5 resize-none mt-6 h-[150px]"
          />
          <button className="rounded bg-blue-500 text-center w-24 p-1 text-sm text-white mt-2">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
