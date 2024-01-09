import { useState } from "react";
import useSound from "../../node_modules/use-sound/dist/index";
import "./Hero.css";
import whatsapp from "../assets/whatsapp.svg";
import x from "../assets/x.svg";
import github from "../assets/github-1.svg";
import share from "../assets/share-svgrepo-com.svg";
import mahibhai from "../assets/video_2024-01-09_21-22-57.mp4";
import bolejokoyal from "../assets/src_boleJoKoyal.mp3";
import moyemoye from "../assets/moye-moye.mp3";

const Hero = () => {
  const [input, setinput] = useState("");
  const [result, setresult] = useState(false);
  const [success, setsuccess] = useState(false);
  const [playkoyal, stopkoyal] = useSound(bolejokoyal);
  const [playmoye, stopmoye] = useSound(moyemoye);

  function sum(a: string) {
    let sum = 0;
    for (const i of a) {
      sum += parseInt(i);
    }
    return sum % 7 === 0;
  }
  function checkreason() {
    if (!input.length) {
      alert("Input Box is Empty!!!");
      setresult(false);
      return;
    }

    
    if (
      input.toLowerCase() === "dhoni" ||
      input.toLowerCase() === "msd" ||
      input.toLowerCase() === "mahendra" ||
      input.toLowerCase() === "mahendra singh dhoni" ||
      input.toLowerCase() === "mahi" ||
      input.toLowerCase() === "thala" ||
      input.toLowerCase() === "captain cool" ||
      input === "7" ||
      input.length === 7 ||
      input.includes("7") ||
      parseInt(input) % 7 === 0 ||
      sum(input)
    ) {
      console.log("thala");
      playkoyal();
      setsuccess(true);
    } else {
      setsuccess(false);
      playmoye();
      console.log("not thala for you");
    }
    setresult(true);
  }
  return (
    <div className="app__hero">
      <h1>Check If you are a Thala ?</h1>
      <input
        required
        type="text"
        value={input}
        onChange={(e) => {
          setinput(e.target.value);
        }}
      />
      <div className="app__hero-button">
        <button onClick={checkreason}>Check</button>
        <button
          onClick={() => {
            setinput("");
            setresult(false);
            setsuccess(false);
            stopkoyal.stop();
            stopmoye.stop();
          }}
        >
          Reset
          
        </button>
      </div>
      {result && (
        <div className="">
          {success ? (
            <div className="vedio-container">
              <video
                autoPlay={true}
                width="400px"
                height="200px"
                src={mahibhai}
              ></video>

              <h2>Thala For a Reason</h2>
            </div>
          ) : (
            <h2>Not Thala for you</h2>
          )}
        </div>
      )}

      <p>#ThalaForReason</p>
      <div className="footer">
        <div className="footer-links">
          <p>Share On: </p>
          <img src={whatsapp} alt="" />
          <img src={x} alt="" />
          <img src={share} alt="" />
        </div>
        <div className="footer-clipboard">
          <a href="https://github.com/Rdevang/thala-for-reason/">
            <img src={github} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
