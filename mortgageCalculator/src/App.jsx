
import { useClickAnywhere } from "./useClickAnywhere";
export default function App() {
  useClickAnywhere((event) => {
    console.log("Clicked:", event.target);
  });

  return <div>Click literally anywhere.</div>;
}
