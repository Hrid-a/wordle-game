import { sample } from "./utils/helpers";
import { WORDS } from "./utils/data";

import Game from "./components/Game";
import Header from "./components/Header"
import './styles.css';

function App() {
  const answer = sample(WORDS);
  return (
    <div className="wrapper">
      <Header />
      <main className="game-wrapper">
        <Game answer={answer} />
      </main>
    </div>
  )
}

export default App
