export default function Editor(props) {
  return (
    <div className={`row editor`}>
      <p id="text-stats">
        ✪ {props.content ? props.content.trim().split(" ").length : 0} Words
        &nbsp; ✪ {props.content.trim().length} Alphabets &nbsp;
      </p>

      <textarea
        placeholder="Type something..."
        value={props.content}
        onChange={(event) => props.setContent(event.target.value)}
      ></textarea>

      <button
        className={`${props.darkMode ? "dark-button" : null}`}
        onClick={props.copy}
      >
        Copy
      </button>

      <button
        className={`${props.darkMode ? "dark-button" : null}`}
        onClick={props.makeUppercase}
      >
        Uppercase
      </button>

      <button
        className={`${props.darkMode ? "dark-button" : null}`}
        onClick={props.makeLowercase}
      >
        Lowercase
      </button>

      <button
        className={`${props.darkMode ? "dark-button" : null}`}
        onClick={props.strip}
      >
        Remove Extra Spaces
      </button>
      
    </div>
  );
}
