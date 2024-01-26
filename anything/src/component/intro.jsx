var inputASCII = [
  "<pre><code> @@@@@@@^^~~~~~~~~~~~~~~~~~~~~^^@@@@@@@@",
  " @@@@@@^     ~^  @  @@ @ @ @ I  ~^@@@@@@",
  " @@@@@            ~ ~~ ~I          @@@@@",
  " @@@@'                  '  _,w@<    @@@@",
  " @@@@     @@@@@@@@w___,w@@@@@@@@  @  @@@",
  " @@@@     @@@@@@@@@@@@@@@@@@@@@@  I  @@@",
  " @@@@     @@@@@@@@@@@@@@@@@@@@*@[ i  @@@",
  " @@@@     @@@@@@@@@@@@@@@@@@@@[][ | ]@@@",
  " @@@@     ~_,,_ ~@@@@@@@~ ____~ @    @@@",
  " @@@@    _~ ,  ,  `@@@~  _  _`@ ]L  J@@@",
  " @@@@  , @@w@ww+   @@@ww``,,@w@ ][  @@@@",
  " @@@@,  @@@@www@@@ @@@@@@@ww@@@@@[  @@@@",
  " @@@@@_|| @@@@@@P' @@P@@@@@@@@@@@[|c@@@@",
  " @@@@@@w| '@@P~  P]@@@-~, ~Y@@^'],@@@@@@",
  " @@@@@@@[   _        _J@@Tk     ]]@@@@@@",
  " @@@@@@@@,@ @@, c,,,,,,,y ,w@@[ ,@@@@@@@",
  " @@@@@@@@@@`,P~ _ ~^^^^Y@@@@@  @@@@@@@@@",
  " @@@@^^=^@@^   ^' ,ww,w@@@@@ _@@@@@@@@@@",
  " @@@_xJ~ ~   ,    @@@@@@@P~_@@@@@@@@@@@@",
  " @@   @,   ,@@@,_____   _,J@@@@@@@@@@@@@",
  " @@L  `' ,@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
  " @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
  "</code></pre>",
].join("\n");

// dangerouslySetInnerHTML expects an object like this:
var wrappedASCII = { __html: inputASCII };
export const Intro = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-center items-center dark:bg-black w-screen xl:mt-10">
      <div className="h-fit">
        <div className="flex flex-col gap-5 xl:flex-row-reverse xl:gap-24">
          <h1
            className="whitespace-pre dark:text-white text-xs md:text-base text-center"
            dangerouslySetInnerHTML={wrappedASCII}
          ></h1>
          <div className="xl:flex xl:flex-col xl:items-center xl:justify-center flex-col items-center flex">
            <h1 className="text-3xl dark:text-white">I am Fester.</h1>
            <p className="text-xl dark:text-white">
              I am a Front-End web developer in training.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
