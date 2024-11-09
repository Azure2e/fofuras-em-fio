import styles from "./app.module.css"
import { Header } from "./components/Header/header";

function App() {
  return (
    <div className="App">
      <h1 className={styles.teste} >Um teste!</h1>
      <Header />
    </div>
  );
}

export default App;
