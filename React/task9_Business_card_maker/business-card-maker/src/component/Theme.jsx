export default function Theme(props) {
  return (
    <>
      <div className="theme wizard-area">
        <h3>Set Theme</h3>
        <label htmlFor="lightColor">Choose a light color:</label>
        <input
          type="color"
          id="lightColor"
          name="lightColor"
          value={props.lightColor}
          onChange={props.handleLightColorChange}
        />
        <label htmlFor="mainColor">Choose a main color:</label>
        <input
          type="color"
          id="mainColor"
          name="mainColor"
          value={props.mainColor}
          onChange={props.handleMainColorChange}
        />
        <label htmlFor="darkColor">Choose a dark color:</label>
        <input
          type="color"
          id="darkColor"
          name="darkColor"
          value={props.darkColor}
          onChange={props.handleDarkColorChange}
        />
        <button onClick={props.handleResetTheme}>Reset Theme</button>
        {console.log(props.lightColor)}
      </div>
    </>
  );
}
