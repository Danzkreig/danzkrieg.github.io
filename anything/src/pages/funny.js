import { addRequestMeta } from "next/dist/server/request-meta";
import { yabdab, dabdab } from "../component/test";
import styles from "../component/test.module.css";
import Image from "next/image";
const db = [
  {
    info: `Mitchell Livingston WerBell III (March 18, 1918 – December 17, 1983) was
        a U.S. Office of Strategic Services (OSS) operative, mercenary,
        paramilitary trainer, firearms engineer, and arms dealer.`,
    id: "/skull.png",
  },
  {
    info: `Nikolaus Barbie (25 October 1913 – 25 September 1991) was a German officer of the SS and SD who worked in Vichy France during World War II. He became known as the "Butcher of Lyon" for having personally tortured prisoners—primarily Jews and members of the French Resistance—as the head of the Gestapo in Lyon. `,
    id: "/Hydra.png",
  },
  {
    info: `Heinrich Luitpold Himmler (7 October 1900 – 23 May 1945) was the Reichsführer of the Schutzstaffel (Protection Squadron; SS), a leading member of the Nazi Party of Germany, and one of the most powerful men in Nazi Germany, primarily known for being a main architect of the Holocaust.`,
    id: "/SS.png",
  },
];
const svgTest = () => {
  const result = [];
  let textPath = `<textPath alignment-baseline="top" xlink:href="#circle" id="text">republic of west alaska * Республика Западная Аляска * Respublika Zapadnaya Alyaska * </textPath>`;
  var i = 0;
  do {
    let wazzok = (
      <div className={styles.main}>
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
            fill="transparent"
            stroke="orange"
            strokeWidth={"15"}
            className={styles.cricle}
          >
            <Image
              width={200}
              height={150}
              src={db[i].id}
              className={styles.skul}
              onClick={() => {
                var a = new Audio("/work.mp3");
                a.play();
              }}
            />
          </circle>
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
  } while (i < db.length);
  return result;
};

export default function Cookies() {
  return (
    <div>
      <div>{svgTest()}</div>
    </div>
  );
}
