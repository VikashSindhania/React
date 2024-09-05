const Contact = () => {
  // I am creating a arrow function
  //rafce creates the boiler plate of that Component.
  return (
    // which returns you a piece of JSX
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>

      <form>
        <input
          type="text"
          className="border border-blaxk p-2 m-2"
          placeholder="name"
        />

        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        />
        <button className="border border-black p-2 m-2  bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
