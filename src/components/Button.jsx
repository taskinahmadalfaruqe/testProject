const Button = () => {
  return (
    <div className="flex flex-col item-center justify-center border p-5 my-10">
      <h1 className="text-4xl text-center font-bold">Button</h1>
      <div className=" text-center my-10">
        <button className="bg-indigo-500 hover:bg-indigo-400 duration-300 text-white font-medium rounded-md p-2 px-4 active:scale-95">
          Button
        </button>
      </div>
      <p>this button created by MD SIAM ISLAM SAGOR</p>
      <p className="text-center my-2 ">&copy; Team Code Riders</p>
    </div>
  );
};

export default Button;
