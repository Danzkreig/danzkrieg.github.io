import Hello from "@/old/proptest";
import { addRequestMeta } from "next/dist/server/request-meta";
function App() {
  return (
    <div>
      <Hello name="Josh" />
    </div>
  );
}

export default App;
