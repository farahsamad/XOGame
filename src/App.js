import "./App.css";
import Nav from "./Nav";
import { useState, useEffect, useRef } from "react";

function App() {
  const [block, setBlock] = useState({
    block0: false,
    block1: false,
    block2: false,
    block3: false,
    block4: false,
    block5: false,
    block6: false,
    block7: false,
    block8: false,
  });
  const [userturn, setUserturn] = useState({
    user: true,
    computer: false,
  });
  const [user, setUser] = useState([]);
  const [computer, setComputer] = useState([]);
  const [wincounter, setWincounter] = useState(0);
  const [userwin, setUserwin] = useState(false);
  const [losecounter, setLosecounter] = useState(0);
  const [one, setOne] = useState(true);
  const block0 = useRef(null);
  const block1 = useRef(null);
  const block2 = useRef(null);
  const block3 = useRef(null);
  const block4 = useRef(null);
  const block5 = useRef(null);
  const block6 = useRef(null);
  const block7 = useRef(null);
  const block8 = useRef(null);

  useEffect(() => {
    var win = false;
    if (user.length !== 0 && block0.current) {
      if ([0, 1, 2].every((data) => user.includes(data))) {
        block0.current.style.color = "red";
        block1.current.style.color = "red";
        block2.current.style.color = "red";
        setWincounter((prev) => prev + 1);
        win = true;
        setUserwin(true);
      }
      if ([3, 4, 5].every((data) => user.includes(data))) {
        block3.current.style.color = "red";
        block4.current.style.color = "red";
        block5.current.style.color = "red";
        setWincounter((prev) => prev + 1);
        win = true;
        setUserwin(true);
      }
      if ([6, 7, 8].every((data) => user.includes(data))) {
        block6.current.style.color = "red";
        block7.current.style.color = "red";
        block8.current.style.color = "red";
        setWincounter((prev) => prev + 1);
        win = true;
        setUserwin(true);
      }
      if ([0, 3, 6].every((data) => user.includes(data))) {
        block0.current.style.color = "red";
        block3.current.style.color = "red";
        block6.current.style.color = "red";
        setWincounter((prev) => prev + 1);
        win = true;
        setUserwin(true);
      }
      if ([1, 4, 7].every((data) => user.includes(data))) {
        block4.current.style.color = "red";
        block1.current.style.color = "red";
        block7.current.style.color = "red";
        setWincounter((prev) => prev + 1);
        win = true;
        setUserwin(true);
      }
      if ([2, 5, 8].every((data) => user.includes(data))) {
        block5.current.style.color = "red";
        block8.current.style.color = "red";
        block2.current.style.color = "red";
        setWincounter((prev) => prev + 1);
        win = true;
        setUserwin(true);
      }
      if ([0, 4, 8].every((data) => user.includes(data))) {
        block0.current.style.color = "red";
        block4.current.style.color = "red";
        block8.current.style.color = "red";
        setWincounter((prev) => prev + 1);
        win = true;
        setUserwin(true);
      }
      if ([2, 4, 6].every((data) => user.includes(data))) {
        block2.current.style.color = "red";
        block4.current.style.color = "red";
        block6.current.style.color = "red";
        setWincounter((prev) => prev + 1);
        win = true;
        setUserwin(true);
      }
    }

    if (computer.length !== 0 && block0.current) {
      if ([0, 1, 2].every((data) => computer.includes(data))) {
        block0.current.style.color = "red";
        block1.current.style.color = "red";
        block2.current.style.color = "red";
        setLosecounter((prev) => prev + 1);
        setUserwin(false);
      }
      if ([3, 4, 5].every((data) => computer.includes(data))) {
        block3.current.style.color = "red";
        block4.current.style.color = "red";
        block5.current.style.color = "red";
        setLosecounter((prev) => prev + 1);
        setUserwin(false);
      }
      if ([6, 7, 8].every((data) => computer.includes(data))) {
        block6.current.style.color = "red";
        block7.current.style.color = "red";
        block8.current.style.color = "red";
        setLosecounter((prev) => prev + 1);
        setUserwin(false);
      }
      if ([0, 3, 6].every((data) => computer.includes(data))) {
        block0.current.style.color = "red";
        block3.current.style.color = "red";
        block6.current.style.color = "red";
        setLosecounter((prev) => prev + 1);
        setUserwin(false);
      }
      if ([1, 4, 7].every((data) => computer.includes(data))) {
        block4.current.style.color = "red";
        block1.current.style.color = "red";
        block7.current.style.color = "red";
        setLosecounter((prev) => prev + 1);
        setUserwin(false);
      }
      if ([2, 5, 8].every((data) => computer.includes(data))) {
        block5.current.style.color = "red";
        block8.current.style.color = "red";
        block2.current.style.color = "red";
        setLosecounter((prev) => prev + 1);
        setUserwin(false);
      }
      if ([0, 4, 8].every((data) => computer.includes(data))) {
        block0.current.style.color = "red";
        block4.current.style.color = "red";
        block8.current.style.color = "red";
        setLosecounter((prev) => prev + 1);
        setUserwin(false);
      }
      if ([2, 4, 6].every((data) => computer.includes(data))) {
        block2.current.style.color = "red";
        block4.current.style.color = "red";
        block6.current.style.color = "red";
        setLosecounter((prev) => prev + 1);
        setUserwin(false);
      }
    }

    // if (userturn.computer && win === false) {
    //   console.log("passs");
    //   console.log("win: ", win);
    //   setBlock((prev) => ({ ...prev, [blockValue]: true }));

    //   setUserturn((prev) => ({ user: !prev.user, computer: !prev.computer }));
    // }

    setTimeout(() => {
      console.log("winnn: ", win);
      if (one) {
        if (userturn.computer && win === false) {
          console.log("passs");
          console.log("win: ", win);
          var array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
          var array2 = [];
          array1.forEach((value) => {
            if (!user.includes(value)) {
              if (!computer.includes(value)) array2.push(value);
            }
          });
          const randomVal = Math.floor(Math.random() * array2.length);

          setComputer((prev) => [...prev, array2[randomVal]]);
          const blocks = Object.keys(block);
          var blockValue = blocks[array2[randomVal]];

          setBlock((prev) => ({ ...prev, [blockValue]: true }));

          setUserturn((prev) => ({
            user: !prev.user,
            computer: !prev.computer,
          }));
        }
      }
    }, 500);
  }, [block, user, computer, userturn, one]);

  return (
    <div className="App-container">
      <Nav
        clearUser={setUser}
        clarComputer={setComputer}
        clearBlocks={setBlock}
        clearTurn={setUserturn}
        wincounter={wincounter}
        losecounter={losecounter}
        clearWincounter={setWincounter}
        clearLosecounter={setLosecounter}
        setOne={setOne}
        one={one}
        userWin={userwin}
        block0={block0}
        block1={block1}
        block2={block2}
        block3={block3}
        block4={block4}
        block5={block5}
        block6={block6}
        block7={block7}
        block8={block8}
      />
      <div className="App-second-container">
        <div className="App">
          <div
            className="blocks block-0"
            ref={block0}
            onClick={() =>
              block.block0
                ? ""
                : one
                ? (setBlock((prev) => ({ ...prev, block0: true })),
                  setUser((prev) => [...prev, 0]),
                  setUserturn((prev) => ({
                    user: !prev.user,
                    computer: !prev.computer,
                  })))
                : (setBlock((prev) => ({ ...prev, block0: true })),
                  userturn.user
                    ? setUser((prev) => [...prev, 0])
                    : setComputer((prev) => [...prev, 0]),
                  setUserturn((prev) => ({
                    user: !prev.user,
                    computer: !prev.computer,
                  })))
            }
          >
            {block.block0 ? (
              user.includes(0) ? (
                <div className="X-container">X</div>
              ) : (
                <div className="X-container">O</div>
              )
            ) : (
              ""
            )}
          </div>
          <div
            className="blocks block-1"
            ref={block1}
            onClick={() =>
              block.block1
                ? ""
                : one
                ? (setBlock((prev) => ({ ...prev, block1: true })),
                  setUser((prev) => [...prev, 1]),
                  setUserturn((prev) => ({
                    user: !prev.user,
                    computer: !prev.computer,
                  })))
                : (setBlock((prev) => ({ ...prev, block1: true })),
                  userturn.user
                    ? setUser((prev) => [...prev, 1])
                    : setComputer((prev) => [...prev, 1]),
                  setUserturn((prev) => ({
                    user: !prev.user,
                    computer: !prev.computer,
                  })))
            }
          >
            {block.block1 ? (
              user.includes(1) ? (
                <div className="X-container">X</div>
              ) : (
                <div className="X-container">O</div>
              )
            ) : (
              ""
            )}
          </div>
          <div
            className="blocks block-2"
            ref={block2}
            onClick={() =>
              block.block2
                ? ""
                : one
                ? (setBlock((prev) => ({ ...prev, block2: true })),
                  setUser((prev) => [...prev, 2]),
                  setUserturn((prev) => ({
                    user: !prev.user,
                    computer: !prev.computer,
                  })))
                : (setBlock((prev) => ({ ...prev, block2: true })),
                  userturn.user
                    ? setUser((prev) => [...prev, 2])
                    : setComputer((prev) => [...prev, 2]),
                  setUserturn((prev) => ({
                    user: !prev.user,
                    computer: !prev.computer,
                  })))
            }
          >
            {block.block2 ? (
              user.includes(2) ? (
                <div className="X-container">X</div>
              ) : (
                <div className="X-container">O</div>
              )
            ) : (
              ""
            )}
          </div>
          <div
            className="blocks block-3"
            ref={block3}
            onClick={() =>
              block.block3
                ? ""
                : one
                ? (setBlock((prev) => ({ ...prev, block3: true })),
                  setUser((prev) => [...prev, 3]),
                  setUserturn((prev) => ({
                    user: !prev.user,
                    computer: !prev.computer,
                  })))
                : (setBlock((prev) => ({ ...prev, block3: true })),
                  userturn.user
                    ? setUser((prev) => [...prev, 3])
                    : setComputer((prev) => [...prev, 3]),
                  setUserturn((prev) => ({
                    user: !prev.user,
                    computer: !prev.computer,
                  })))
            }
          >
            {block.block3 ? (
              user.includes(3) ? (
                <div className="X-container">X</div>
              ) : (
                <div className="X-container">O</div>
              )
            ) : (
              ""
            )}
          </div>
          <div
            className="blocks block-4"
            ref={block4}
            onClick={() =>
              block.block4
                ? ""
                : one
                ? (setBlock((prev) => ({ ...prev, block4: true })),
                  setUser((prev) => [...prev, 4]),
                  setUserturn((prev) => ({
                    user: !prev.user,
                    computer: !prev.computer,
                  })))
                : (setBlock((prev) => ({ ...prev, block4: true })),
                  userturn.user
                    ? setUser((prev) => [...prev, 4])
                    : setComputer((prev) => [...prev, 4]),
                  setUserturn((prev) => ({
                    user: !prev.user,
                    computer: !prev.computer,
                  })))
            }
          >
            {block.block4 ? (
              user.includes(4) ? (
                <div className="X-container">X</div>
              ) : (
                <div className="X-container">O</div>
              )
            ) : (
              ""
            )}
          </div>
          <div
            className="blocks block-5"
            ref={block5}
            onClick={() =>
              block.block5
                ? ""
                : one
                ? (setBlock((prev) => ({ ...prev, block5: true })),
                  setUser((prev) => [...prev, 5]),
                  setUserturn((prev) => ({
                    user: !prev.user,
                    computer: !prev.computer,
                  })))
                : (setBlock((prev) => ({ ...prev, block5: true })),
                  userturn.user
                    ? setUser((prev) => [...prev, 5])
                    : setComputer((prev) => [...prev, 5]),
                  setUserturn((prev) => ({
                    user: !prev.user,
                    computer: !prev.computer,
                  })))
            }
          >
            {block.block5 ? (
              user.includes(5) ? (
                <div className="X-container">X</div>
              ) : (
                <div className="X-container">O</div>
              )
            ) : (
              ""
            )}
          </div>
          <div
            className="blocks block-6"
            ref={block6}
            onClick={() =>
              block.block6
                ? ""
                : one
                ? (setBlock((prev) => ({ ...prev, block6: true })),
                  setUser((prev) => [...prev, 6]),
                  setUserturn((prev) => ({
                    user: !prev.user,
                    computer: !prev.computer,
                  })))
                : (setBlock((prev) => ({ ...prev, block6: true })),
                  userturn.user
                    ? setUser((prev) => [...prev, 6])
                    : setComputer((prev) => [...prev, 6]),
                  setUserturn((prev) => ({
                    user: !prev.user,
                    computer: !prev.computer,
                  })))
            }
          >
            {block.block6 ? (
              user.includes(6) ? (
                <div className="X-container">X</div>
              ) : (
                <div className="X-container">O</div>
              )
            ) : (
              ""
            )}
          </div>
          <div
            className="blocks block-7"
            ref={block7}
            onClick={() =>
              block.block7
                ? ""
                : one
                ? (setBlock((prev) => ({ ...prev, block7: true })),
                  setUser((prev) => [...prev, 7]),
                  setUserturn((prev) => ({
                    user: !prev.user,
                    computer: !prev.computer,
                  })))
                : (setBlock((prev) => ({ ...prev, block7: true })),
                  userturn.user
                    ? setUser((prev) => [...prev, 7])
                    : setComputer((prev) => [...prev, 7]),
                  setUserturn((prev) => ({
                    user: !prev.user,
                    computer: !prev.computer,
                  })))
            }
          >
            {block.block7 ? (
              user.includes(7) ? (
                <div className="X-container">X</div>
              ) : (
                <div className="X-container">O</div>
              )
            ) : (
              ""
            )}
          </div>
          <div
            className="blocks block-8"
            ref={block8}
            onClick={() =>
              block.block8
                ? ""
                : one
                ? (setBlock((prev) => ({ ...prev, block8: true })),
                  setUser((prev) => [...prev, 8]),
                  setUserturn((prev) => ({
                    user: !prev.user,
                    computer: !prev.computer,
                  })))
                : (setBlock((prev) => ({ ...prev, block8: true })),
                  userturn.user
                    ? setUser((prev) => [...prev, 8])
                    : setComputer((prev) => [...prev, 8]),
                  setUserturn((prev) => ({
                    user: !prev.user,
                    computer: !prev.computer,
                  })))
            }
          >
            {block.block8 ? (
              user.includes(8) ? (
                <div className="X-container">X</div>
              ) : (
                <div className="X-container">O</div>
              )
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
