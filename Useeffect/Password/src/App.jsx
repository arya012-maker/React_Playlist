import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [lenght, setLenght] = useState(0);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  // userRef hook
  const passwordref = useRef(null);

  const generatePassword = useCallback(() => {
    let Pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";
    for (let i = 1; i < lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      Pass += str.charAt(char);
    }
    setPassword(Pass);
  }, [lenght, numberAllowed, charAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  useEffect(() => {
    generatePassword();
  }, [lenght, numberAllowed, charAllowed, generatePassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-8 my-8 text-white bg-gray-800">
        <h1 className="text-center text-2xl font-bold mb-6">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={Password}
            className="outline-none w-full px-3 py-2 text-black"
            placeholder="Generated password"
            readOnly
            ref={passwordref}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="mb-6">
          <label className="block text-white mb-2">Length: {lenght}</label>
          <input
            type="range"
            min={3}
            max={50}
            value={lenght}
            className="w-full cursor-pointer"
            onChange={(e) => setLenght(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={(e) => setNumberAllowed((prev) => !prev)}
              className="mr-2"
            />
            <label className="text-white" htmlFor="numberInput">
              Include Numbers
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={(e) => setcharAllowed((prev) => !prev)}
              className="mr-2"
            />
            <label className="text-white" htmlFor="charInput">
              Include Special Characters
            </label>
          </div>
        </div>
        {/* <button
          onClick={generatePassword}
          className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Generate Password
        </button> */}
      </div>
    </>
  );
}

export default App;
