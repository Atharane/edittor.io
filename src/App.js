import React from "react";
import Navbar from "./Navbar";
import Editor from "./Editor";

function App() {
  const [content, setContent] = React.useState("");
  const [darkMode, setDarkMode] = React.useState(false);

  function copy() {
    navigator.clipboard.writeText(content);
  }

  function makeUppercase() {
    setContent((prev) => prev.toUpperCase());
  }

  function makeLowercase() {
    setContent((prev) => prev.toLowerCase());
  }

  function strip() {
    setContent((prev) => prev.replace(/\s+/g, " "));
  }

  console.log(darkMode)

  return (
    <div className={`App ${darkMode ? "dark-mode" : null}`}>

      <Navbar setDarkMode={setDarkMode} />

      <div className="container">
        <Editor
          darkMode={darkMode}
          content={content}
          setContent={setContent}
          copy={copy}
          makeUppercase={makeUppercase}
          makeLowercase={makeLowercase}
          strip={strip}
        />
      </div>
      
    </div>
  );
}

export default App;
