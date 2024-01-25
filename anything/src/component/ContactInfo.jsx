export const Contact = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex justify-center items-center gap flex-col dark:text-white">
        <h1>You can contact me through my discord or send me an email.</h1>
        <div className="flex flex-col gap-1 justify-center items-center">
          <h1 className="text-purple-800 dark:text-purple-500">
            festeringwound@proton.me
          </h1>
          <h1 className="text-blue-700 darl:text-blue-200">
            <a href="https://discord.gg/aq9An4b3jW">My Discord Server.</a>
          </h1>
        </div>
      </div>
    </div>
  );
};
