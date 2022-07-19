export default function Navbar(props) {
  return (
    <div id="navbar">

      <div id="logo">
        edi<span id="text-crimson">tt</span>or
      </div>

      <p>Seamlessly transform your text with fluid clutterfree interface</p>
      
      <label className="switch">
        <input type="checkbox" />
        <span
          onClick={() => props.setDarkMode((prev) => !prev)}
          className="slider"
        ></span>
      </label>
      
    </div>
  );
}
