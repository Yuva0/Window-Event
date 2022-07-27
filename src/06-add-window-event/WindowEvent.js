import { useEffect } from "react"

export default function WindowEvent () {

  useEffect(() => {

    const onDoubleClickHandler = () => { alert("alert pressed") }

    document.addEventListener("dblclick",onDoubleClickHandler);

    return (() => document.removeEventListener("dblclick",onDoubleClickHandler));
  });

  return (
    <h2>Window event active</h2>
  )
}
