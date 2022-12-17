import { useEffect, useState } from "react";
import "./Magnifire.style.scss";
const Magnifire = () => {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const style = {
    left: `${positionX}px`,
    top: `${positionY}px`,
  };
  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveEvent);

    return () => {
      document.removeEventListener("mousemove", mouseMoveEvent);
    };
  });
  const mouseMoveEvent = (e) => {
    setPositionX(e.pageX);
    setPositionY(e.pageY);
  };
  return <div className="cursor-dot" style={style}></div>;
};
export default Magnifire;
