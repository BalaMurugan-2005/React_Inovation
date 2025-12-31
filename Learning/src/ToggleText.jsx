import { useState } from "react";

function ToggleText() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <p>This text is visible</p>}
    </>
  );
}

export default ToggleText;
