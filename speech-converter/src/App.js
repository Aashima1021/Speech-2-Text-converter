import { useState } from "react";
import "./App.css";
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

function App() {
  const [texttocopy , setTexttocopy] = useState();
  const [isCopied, setCopied] = useClipboard(texttocopy , {successDuration:1000});
 
  
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: "en-In" });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    

    if (!browserSupportsSpeechRecognition) {
    return null;
    }
    
  return (
    <>
      <div className="container">
        <h2>Speech to Text converter</h2>
        <br />
        <p>
          Its my project where you can convert your speech to text with the help
          of React Hook. You can also copy it and use it in any other tab.
        </p>
        <div className="main-content" onClick={()=> setTexttocopy(transcript)}>{transcript}</div>
        <div className="btn-style">
          <button onClick={setCopied}>
          {isCopied ? "Copied !" : "Copy to clipboard"}</button>
          <button onClick={startListening}>Start listening</button>
          <button onClick={SpeechRecognition.stopListening}>
            stop listening
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
