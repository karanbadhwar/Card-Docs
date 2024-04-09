import Card from "./Card";
import Data from "../Data/data.json";
import { useRef } from "react";

function Foreground() {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className="flex gap-5 w-full h-full z-[3] fixed top-0 left-0 flex-wrap p-10"
    >
      {Data.map((item, index) => (
        <Card data={item} key={index} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
