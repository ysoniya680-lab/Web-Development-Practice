import { useState, useEffect } from "react";

function TextBoxDemo() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("Type something...");

  useEffect(() => {
    if (text.length > 0) {
      setMessage(`You typed: ${text}`);
    } else {
      setMessage("Text box is empty");
    }
  }, [text]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here"
      />
      <p>{message}</p>
    </div>
  );
}

export default TextBoxDemo;