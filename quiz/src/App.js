import "./App.css";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import "./index.css";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Quiz />
      </main>
    </div>
  );
}

export default App;
