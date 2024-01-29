export const Contact = () => {
  return (
    <div className="flex justify-center items-center pb-10">
      <div className="flex justify-center items-center gap flex-col dark:text-white w-2/3">
        <h1>
          You can contact me through
          <a
            href="https://discord.gg/aq9An4b3jW"
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
          >
            &nbsp;my discord server
          </a>{" "}
          or send me an
          <a
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-400 cursor-pointer select-none"
            onClick={() =>
              navigator.clipboard.writeText("festeringwound@proton.me")
            }
          >
            &nbsp;email
          </a>
          .
        </h1>
      </div>
    </div>
  );
};
