import Image from "next/image";

export const About = () => {
  return (
    <div className="flex flex-col gap-16 mt-32">
      <div className="flex place-content-center">
        <h1 className="bg-gray-200 w-24 text-center rounded">About Me</h1>
      </div>
      <div className="flex flex-row gap-x-52 ml-[400px]">
        <Image
          src="/Heydrich.jpeg"
          width={500}
          height={1000}
          className="object-contain mb-64 shadow-lg"
        />
        <div className="flex flex-col max-w-[600px] gap-10">
          <h1 className="text-5xl">Who am I?</h1>
          <h1 className="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            venenatis consequat urna, vitae interdum nisl. Cras porta ornare
            lacus, eget eleifend nisl malesuada eget. Curabitur porttitor ac
            nisi ac sollicitudin. Fusce ante libero, commodo eget mi in,
            hendrerit pretium ante. Duis dictum finibus lectus. Vivamus iaculis
            vulputate diam. Nam non nisl neque. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Aenean non tempor purus. In euismod
            lacus non lacinia condimentum. Ut sodales lacinia nibh, ac tincidunt
            purus pretium in. Aenean et nibh nec sapien tempus sodales. Etiam
            blandit tincidunt magna, eu placerat metus luctus sed. Maecenas
            convallis nulla ac mauris blandit, quis vestibulum turpis molestie.
            Phasellus et felis lectus. Nam auctor porttitor sem, a fermentum
            nulla posuere sed. Ut ut odio blandit, eleifend massa vitae, mollis
            arcu. Aenean vel neque magna. Etiam et felis auctor, fermentum urna
            viverra, aliquet felis. Cras dignissim scelerisque diam, ultrices
            elementum eros. Quisque sed dapibus tellus. Nullam ligula arcu,
            vestibulum eu tortor tempor, placerat interdum turpis. Proin
            sagittis at tellus ut accumsan. Vivamus quis velit viverra, lobortis
            tortor quis, condimentum erat. Morbi vel consequat arcu. Duis
            tincidunt nisi in turpis congue pulvinar. Sed tristique mattis
            augue, at venenatis ex varius ut. Nullam luctus est a orci molestie,
            dapibus cursus erat ultrices. Morbi vitae accumsan turpis. Donec leo
            odio, posuere eget nibh et, tempus consequat lorem. Morbi est arcu,
            facilisis a magna ut, mollis rhoncus ex. Curabitur lectus tortor,
            euismod et odio sit amet, dictum luctus lectus. Vivamus congue felis
            in sagittis tincidunt. In tempor eros ac risus sollicitudin, a
            viverra mi egestas. Phasellus molestie imperdiet magna, eu luctus
            lectus auctor condimentum. Nunc feugiat arcu sed tellus tristique,
            sit amet mattis quam euismod. Proin tempor urna ligula, ut porta sem
            egestas sodales. Ut ultricies tortor et ex volutpat, non fermentum
            lorem mattis. Phasellus lacinia at elit sit amet iaculis. Integer
            sit amet dui ut nibh iaculis aliquam vitae et metus. Aliquam erat
            volutpat. Donec et mattis leo. Curabitur dui nibh, mollis vitae urna
            vel, tincidunt sollicitudin dui. Quisque ut dolor non urna feugiat
            pretium. In hac habitasse platea dictumst. Nulla et scelerisque est.
            Fusce commodo felis sit amet sodales facilisis. Etiam tincidunt
            lectus et ornare posuere. Praesent pharetra mi et nibh tristique,
            interdum malesuada ipsum suscipit. Proin sagittis sodales lacus, in
            viverra turpis convallis malesuada. Phasellus vehicula tincidunt
            malesuada. Suspendisse sed orci ut dolor imperdiet fermentum.
            Vestibulum augue risus, condimentum viverra nisl at, iaculis
            pulvinar purus. Aliquam sollicitudin lorem nunc, vitae gravida
            turpis lobortis placerat.
          </h1>
        </div>
      </div>
    </div>
  );
};
