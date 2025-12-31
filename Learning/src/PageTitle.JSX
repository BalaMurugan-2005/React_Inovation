import { useState, useEffect } from "react";

function PageTitle() {
  const [name, setName] = useState("React");

  useEffect(() => {
    document.title = name;
  }, [name]);

  return (
    <div>
        <input value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}
export default PageTitle;