import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Button from "./Button";
import Square from "./Square";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Card, makeStyles } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { FormattedMessage } from "react-intl";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import { FormattedMessage } from "react-intl";



function Home() {

    const [squares, setSquares] = useState(Array(9).fill(""));
    const [turn, setTurn] = useState("x");
    const [winner, setWinner] = useState(null);

    const checkEndTheGame = () => {
        for (let square of squares) {
            if (!square) return false;
        }
        return true;
    };

    const checkWinner = () => {
        const combos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let combo of combos) {
            const [a, b, c] = combo;
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                return squares[a];
            }
        }
        return null;
    };

    const updateSquares = (ind) => {
        if (squares[ind] || winner) {
            return;
        }
        const s = squares;
        s[ind] = turn;
        setSquares(s);
        setTurn(turn === "x" ? "o" : "x");
        const W = checkWinner();
        if (W) {
            setWinner(W);
        } else if (checkEndTheGame()) {
            setWinner("x | o");
        }
    };

    const resetGame = () => {
        setSquares(Array(9).fill(""));
        setTurn("x");
        setWinner(null);
    };

    return (
        <Box className="tic-tac-toe">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="130"
              height="50"
              viewBox="0 0 128.89 29.431"
            >
              <g data-name="Logo Primary - Landscape (Large size) Purple+Orange">
                <g data-name="Group 1" fill="black">
                  <path
                    data-name="Path 1"
                    d="M69.394 14.954a12.475 12.475 0 01-4.27 9.4l-1.673 1.46a.7.7 0 00-.067.982l1.831 2.1a.7.7 0 00.982.067l1.673-1.46a16.649 16.649 0 005.7-12.543v-1.568a.7.7 0 00-.7-.7h-2.785a.7.7 0 00-.7.7z"
                  ></path>
                  <path
                    data-name="Path 2"
                    d="M80.024 7.248H77.05a.7.7 0 00-.7.7v2.785a.7.7 0 00.7.7h3.058a3.839 3.839 0 013.858 3.4 3.77 3.77 0 01-3.748 4.129h-4.213a.7.7 0 00-.7.7v2.785a.7.7 0 00.7.7h4.213a7.951 7.951 0 007.936-8.249 8.071 8.071 0 00-8.13-7.65z"
                  ></path>
                  <path
                    data-name="Path 3"
                    d="M65.986 15.548a8.013 8.013 0 10-8.013 8.014 8.022 8.022 0 008.013-8.014zm-8.013 3.836a3.836 3.836 0 113.836-3.836 3.841 3.841 0 01-3.836 3.837z"
                  ></path>
                  <path
                    data-name="Path 4"
                    d="M43.146 11.883a3.311 3.311 0 01-3.534 3.3 3.385 3.385 0 01-3.08-3.416v-1.482a.664.664 0 00-.664-.664H32.73a.375.375 0 00-.376.375 5.145 5.145 0 01-4.471 5.162 5.054 5.054 0 01-5.624-5.016v-.2a.674.674 0 00-.674-.674h-2.827a.674.674 0 00-.674.674 9.353 9.353 0 009.132 9.42 9.2 9.2 0 006.753-2.848 7.474 7.474 0 006.33 2.835 7.6 7.6 0 007.026-7.642V8.549a.674.674 0 00-.674-.674h-2.829a.674.674 0 00-.674.674z"
                  ></path>
                  <rect
                    data-name="Rectangle 1"
                    width="12.129"
                    height="4.034"
                    rx="2.017"
                    transform="translate(28.334 23.56)"
                  ></rect>
                  <path
                    data-name="Path 5"
                    d="M78.323 4.737a2.369 2.369 0 10-2.369-2.369 2.369 2.369 0 002.369 2.369z"
                  ></path>
                  <path
                    data-name="Path 6"
                    d="M45.645 23.208a2.369 2.369 0 102.369 2.369 2.369 2.369 0 00-2.369-2.369z"
                  ></path>
                  <circle
                    data-name="Ellipse 1"
                    cx="2.369"
                    cy="2.369"
                    r="2.369"
                    transform="translate(8.723 15.971)"
                  ></circle>
                  <path
                    data-name="Path 7"
                    d="M10.716 25.244a6.915 6.915 0 01-.261-13.79.7.7 0 00.637-.691V7.969a.7.7 0 00-.74-.7 11.092 11.092 0 1011.807 11.807.7.7 0 00-.7-.74h-2.794a.7.7 0 00-.691.637 6.923 6.923 0 01-7.258 6.271z"
                  ></path>
                </g>
                <g data-name="Group 2">
                  <path
                    data-name="Path 8"
                    d="M116.103 0a12.8 12.8 0 00-12.787 12.787 12.8 12.8 0 0012.787 12.788 12.8 12.8 0 0012.787-12.787A12.8 12.8 0 00116.103 0zm0 20.689a7.911 7.911 0 01-7.9-7.9 7.911 7.911 0 017.9-7.9 7.911 7.911 0 017.9 7.9 7.911 7.911 0 01-7.9 7.901z"
                    fill="#651fff"
                  ></path>
                  <path
                    data-name="Path 9"
                    d="M102.912 22.663a3.315 3.315 0 00-3.315 3.315 3.315 3.315 0 003.315 3.315 3.315 3.315 0 003.315-3.315 3.315 3.315 0 00-3.315-3.315z"
                    fill="#ff9100"
                  ></path>
                </g>
              </g>
            </svg>
            <br /> 
            <br /> 
            <br /> 
            <p id='head1' className='header'>
            <FormattedMessage id="text1" defaultMessage="خوش اومدین به بازی تیک تاک" />
                </p>


<p id='head2' className='header'>
<FormattedMessage id="veryAttractive" defaultMessage="خیلی جذابه" />
    
    </p>
<p id='head3' className='header'>

<FormattedMessage id="veryAttractive" defaultMessage="خلاقیت داره " />
    

</p>

<p id='head4' className='header '>  


<FormattedMessage id="it's interesting" defaultMessage="جالبه" />
    


</p>
  <Box className='light x1'></Box>
  <Box className='light x2'></Box>
  <Box className='light x3'></Box>
  <Box className='light x4'></Box>
  <Box className='light x5'></Box>
  <Box className='light x6'></Box>
  <Box className='light x7'></Box>
  <Box className='light x8'></Box>
  <Box className='light x9'></Box>
          
       
            <Button resetGame={resetGame} />
            <Box className="game">
                {Array.from("012345678").map((ind) => (
                    <Square
                        key={ind}
                        ind={ind}
                        updateSquares={updateSquares}
                        clsName={squares[ind]}
                    />
                ))}
            </Box>
            <Box className={`turn ${turn === "x" ? "left" : "right"}`}>
                <Square clsName="x" />
                <Square clsName="o" />
            </Box>
            <AnimatePresence>
                {winner && (
                    <motion.div
                        key={"parent-box"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="winner"
                    >
                        <motion.div
                            key={"child-box"}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="text"
                        >
                            <motion.h2
                                initial={{ scale: 0, y: 100 }}
                                animate={{
                                    scale: 1,
                                    y: 0,
                                    transition: {
                                        y: { delay: 0.7 },
                                        duration: 0.7,
                                    },
                                }}
                            >
                                {winner === "x | o"
                                    ? <p>
                                        
                                        <FormattedMessage id="text2" defaultMessage="هیچکی برنده نشد" />
    

                                        
                                          &#128540;</p>
                                    : <p> 
                                        
                                        <FormattedMessage id="text3" defaultMessage="برنده جناب" />
     
                                        
                                         &#128513;</p>}
                            </motion.h2>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{
                                    scale: 1,
                                    transition: {
                                        delay: 1.3,
                                        duration: 0.2,
                                    },
                                }}
                                className="win"
                            >
                                {winner === "x | o" ? (
                                    <>
                                        <Square clsName="x" />
                                        <Square clsName="o" />
                                    </>
                                ) : (
                                    <>
                                        <Square clsName={winner} />
                                    </>
                                )}
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{
                                    scale: 1,
                                    transition: { delay: 1.5, duration: 0.3 },
                                }}
                            >
                                <Button resetGame={resetGame} />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Box>
    );
}

export default Home;
