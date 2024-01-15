import { addRequestMeta } from "next/dist/server/request-meta";
import styles from "../component/test.module.css";
import Image from "next/image";
const db = [
  {
    info: `Mitchell Livingston WerBell III (March 18, 1918 – December 17, 1983) was
        a U.S. Office of Strategic Services (OSS) operative, mercenary,
        paramilitary trainer, firearms engineer, and arms dealer.`,
    id: "/skull.png",
    fill: "transparent",
  },
  {
    info: `Nikolaus Barbie (25 October 1913 – 25 September 1991) was a German officer of the SS and SD who worked in Vichy France during World War II. He became known as the "Butcher of Lyon" for having personally tortured prisoners—primarily Jews and members of the French Resistance—as the head of the Gestapo in Lyon. `,
    id: "/Hydra.png",
    fill: "transparent",
  },
  {
    info: `Heinrich Luitpold Himmler (7 October 1900 – 23 May 1945) was the Reichsführer of the Schutzstaffel (Protection Squadron; SS), a leading member of the Nazi Party of Germany, and one of the most powerful men in Nazi Germany, primarily known for being a main architect of the Holocaust.`,
    id: "/SS.png",
    fill: "transparent",
  },
  {
    info: `Vladimir Vladimirovich Putin (born 7 October 1952) is a Russian politician and former intelligence officer who is the President of Russia. Putin has held continuous positions as president or prime minister since 1999: as prime minister from 1999 to 2000 and from 2008 to 2012, and as president from 2000 to 2008 and since 2012. He is the longest-serving Russian or Soviet leader since Joseph Stalin.`,
    id: "/favicon.ico",
    fill: "transparent",
  },
  {
    info: `Boris Nikolayevich Yeltsin (Russian: Борис Николаевич Ельцин,(1 February 1931 – 23 April 2007) was a Soviet and Russian politician who served as the first President of Russia from 1991 to 1999. He was a member of the Communist Party of the Soviet Union from 1961 to 1990. He later stood as a political independent, during which time he was viewed as being ideologically aligned with liberalism.`,
    id: "/sonnenrad.png",
    fill: "white",
  },
];
// republic of west alaska * Республика Западная Аляска * Respublika Zapadnaya Alyaska *
// The snake eats its own tail
const svgTest = () => {
  const result = [];
  let textPath = `<textPath alignment-baseline="top" xlink:href="#circle" id="text">republic of west alaska * Республика Западная Аляска * Respublika Zapadnaya Alyaska * </textPath>`;
  var i = 0;
  var top = 52.5;
  var fuse = 0;
  var width = 200;
  var height = 150;
  var left = 520;
  do {
    let wazzok = (
      <div className={styles.main}>
        <Image
          width={width}
          height={height}
          style={{ top: top + "px", left: left + "px" }}
          src={db[i].id}
          className={styles.skul}
          onClick={() => {
            var a = new Audio("/work.mp3");
            a.play();
          }}
        />
        <svg
          id={styles.rotatingText}
          viewBox="0 0 200 200"
          width="200"
          height="200"
        >
          <circle
            cx="100"
            cy="100"
            r="72"
            fill={db[i].fill}
            stroke="orange"
            strokeWidth={"15"}
            className={styles.cricle}
          />
          <defs>
            <path
              id="circle"
              d="M 100, 100
            m -75, 0
            a 75, 75 0 1, 0 150, 0
            a 75, 75 0 1, 0 -150, 0
            "
            ></path>
          </defs>

          <text
            width="400"
            dangerouslySetInnerHTML={{ __html: textPath }}
          ></text>
        </svg>
        <h3 className={styles.white}>{db[i].info}</h3>
      </div>
    );
    result.push(wazzok);
    i++;
    if (fuse === 0) {
      width -= 70;
      height -= 30;
      left += 35;
      height += 13;
      top += 16;
    }
    fuse++;
    top += 200;
  } while (i < db.length);
  return result;
};

export default function Cookies() {
  return (
    <div>
      <div className={styles.title}>
        <h1>Employed by [REDACTED]</h1>
      </div>
      <div className={styles.body}>{svgTest()}</div>
    </div>
  );
}
