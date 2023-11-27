import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Game1() {
  const [isGameStart, setIsGameStart] = useState(false);
  const [isNumberShow, setIsNumberShow] = useState(false);
  const [isGameEnd, setIsGameEnd] = useState(false);
  const [tryCount, setTryCount] = useState(5);
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 10) + 31
  );

  const updateGameState = () => {
    setIsGameStart(!isGameStart);
  };

  const showNumber = () => {
    setIsNumberShow(!isNumberShow);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (document.getElementById("angka").value == "") {
      toast.error("Input Tidak Boleh Kosong", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark",
      });
    } else {
      if (document.getElementById("angka").value < 31) {
        toast.error("Input Value Terlalu Kecil", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark",
        });
      }
      if (document.getElementById("angka").value > 40) {
        toast.error("Input Value Terlalu Besar", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark",
        });
      }
      if (document.getElementById("angka").value == randomNumber) {
        setIsGameEnd(true);
        toast.success("Game Selesai Anda Menang", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark",
        });
      }
    }
    setTryCount(tryCount - 1);
    if (tryCount == 1) {
      setIsGameEnd(true);
      toast.error("Game Selesai! Anda Gagal", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark",
      });
    }
  };

  const resetHandler = () => {
    document.getElementById("angka").value = "";
    setIsGameEnd(false);
    setIsNumberShow(false);
    setRandomNumber(Math.floor(Math.random() * 10) + 31);
    setTryCount(5);
  };

  return (
    <div>
      <h1>Number Guessing Game</h1>
      <p className="text-start ms-3 my-0">
        1. Each player gets 5 chances to guess
      </p>
      <p className="text-start ms-3 my-0">2. Number range is between 31 - 40</p>
      <p className="text-start ms-3 my-0">
        3. You can reset the number after 5 wrong answers
      </p>
      <div className={isGameStart ? "d-none" : "d-block"}>
        <p className="text-start ms-3 mt-5">Silakan mulai permainan</p>
        <p className="text-start ms-3 mt-5"></p>
        <div className="text-start">
          <button className="btn btn-success ms-3" onClick={updateGameState}>
            Mulai Permainan
          </button>
        </div>
      </div>
      <div className={!isGameStart ? "d-none" : "d-block"}>
        <p className="text-start ms-3 mt-5 mb-1">Input Angka</p>
        <div className="d-flex">
          <input
            type="text"
            name="angka"
            id="angka"
            className="form-control ms-3 w-50"
            placeholder="Input angka 31-40"
            disabled={isGameEnd}
          />
          <button className="btn btn-primary ms-2" onClick={showNumber}>
            {isNumberShow ? (
              <i class="bi bi-eye-fill"></i>
            ) : (
              <i class="bi bi-eye-slash-fill"></i>
            )}
          </button>
        </div>
        <div className={isNumberShow ? "d-block" : "d-none"}>
          <p className="text-start ms-3 mt-3 mb-1">
            Nilai Aslinya Adalah {randomNumber}
          </p>
        </div>
        <p className="text-start ms-3 mt-5 mb-1">Jumlah tebakan {tryCount}</p>
        <div className="text-start mt-2">
          {isGameEnd || (
            <button className="btn btn-primary ms-3" onClick={submitHandler}>
              Tebak Angka
            </button>
          )}
          {!isGameEnd || (
            <button className="btn btn-danger ms-3" onClick={resetHandler}>
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
