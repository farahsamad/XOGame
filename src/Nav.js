import { useEffect, useRef, useState } from "react";
import "./App.css";

export default function Nav({
  clearUser,
  clarComputer,
  clearBlocks,
  clearTurn,
  wincounter,
  losecounter,
  clearWincounter,
  clearLosecounter,
  setOne,
  one,
  userWin,
  block0,
  block1,
  block2,
  block3,
  block4,
  block5,
  block6,
  block7,
  block8,
}) {
  const [setting, setSetting] = useState(false);
  const NameRef = useRef(null);
  const onePlayer = useRef(null);
  const twoPlayer = useRef(null);

  function playAgain() {
    clearUser([]);
    clarComputer([]);
    clearBlocks(() => ({
      block0: false,
      block1: false,
      block2: false,
      block3: false,
      block4: false,
      block5: false,
      block6: false,
      block7: false,
      block8: false,
    }));
    block0.current.style.color = "black";
    block1.current.style.color = "black";
    block2.current.style.color = "black";
    block3.current.style.color = "black";
    block4.current.style.color = "black";
    block5.current.style.color = "black";
    block6.current.style.color = "black";
    block7.current.style.color = "black";
    block8.current.style.color = "black";
    if (userWin) {
      clearTurn({
        user: true,
        computer: false,
      });
    } else {
      console.log("yessssss");
      clearTurn({
        user: false,
        computer: true,
      });
    }
  }
  // useEffect(() => {
  //   if (window.innerWidth < 500 && onePlayer.current && twoPlayer.current) {
  //     document.getElementById("one-player").innerHTML = "1";
  //     document.getElementById("two-player").innerHTML = "2";
  //   }
  // }, []);

  useEffect(() => {
    if (!one) {
      twoPlayer.current.style.backgroundColor = "red";
      onePlayer.current.style.backgroundColor = "white";
      document.getElementById("win-word").innerHTML = "Win1:";
      document.getElementById("lose-word").innerHTML = "Win2:";
    } else {
      onePlayer.current.style.backgroundColor = "red";
      twoPlayer.current.style.backgroundColor = "white";
      document.getElementById("win-word").innerHTML = "Win:";
      document.getElementById("lose-word").innerHTML = "Lose:";
    }
  }, [one]);

  useEffect(() => {
    playAgain();
    clearWincounter(() => 0);
    clearLosecounter(() => 0);
  }, [one]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <div className="logo">XOGame</div>
      </div>
      <div className="second-container">
        <div className="second-layer">
          <input
            type="text"
            className="name-container"
            ref={NameRef}
            placeholder="User"
          />
          <div className="win-container players-container">
            <div
              className="one-player"
              id="one-player"
              ref={onePlayer}
              onClick={() => setOne((prev) => !prev)}
            >
              1 player
            </div>
            <div
              className="two-player"
              id="two-player"
              ref={twoPlayer}
              onClick={() => setOne((prev) => !prev)}
            >
              2 player
            </div>
          </div>
        </div>
        <div className="third-layer">
          <div className="win-container">
            <div id="win-word">Win: </div> {wincounter}
          </div>
          <div className="win-container">
            <div id="lose-word">Lose: </div> {losecounter}
          </div>
          <div
            className="win-container"
            style={{ cursor: "pointer", minWidth: "fit-content" }}
            onClick={playAgain}
          >
            Play again
          </div>
          <div className="win-container setting-cont">
            <input
              type="image"
              src={require(`./Image/setting.png`)}
              alt="setting"
              className="setting"
              onClick={() => {
                setSetting((prev) => !prev);
              }}
            />
            <div className={`setting-container ${setting ? "visible" : ""}`}>
              <div
                className="Reset-button"
                onClick={() => {
                  playAgain();
                  clearWincounter(() => 0);
                  clearLosecounter(() => 0);
                }}
              >
                Reset
              </div>
              <div
                className="Change-name-button"
                onClick={() => (NameRef.current ? NameRef.current.focus() : "")}
              >
                Change username
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
