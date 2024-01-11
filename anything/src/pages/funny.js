import { addRequestMeta } from "next/dist/server/request-meta";
import { yabdab, dabdab } from "../component/test";
import styles from "../component/test.module.css";
import Image from "next/image";
var thing = "/skull.png";
const svgTest = () => {
  let textPath = `<textPath alignment-baseline="top" xlink:href="#circle" id="text">republic of west alaska * Республика Западная Аляска * Respublika Zapadnaya Alyaska * </textPath>`;
  return (
    <div className={styles.main}>
      <Image
        width={200}
        height={150}
        src={thing}
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
          fill="transparent"
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
        <text width="400" dangerouslySetInnerHTML={{ __html: textPath }}></text>
      </svg>
      <h3 className={styles.white}>
        Mitchell Livingston WerBell III (March 18, 1918 – December 17, 1983) was
        a U.S. Office of Strategic Services (OSS) operative, mercenary,
        paramilitary trainer, firearms engineer, and arms dealer.
      </h3>
    </div>
  );
};

export default function Cookies() {
  return (
    <div>
      <div>{svgTest()}</div>
    </div>
  );
}
