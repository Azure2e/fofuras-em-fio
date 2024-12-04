import styles from "./app.module.css"

//aquivos internos
import { Header } from "./components/Header/header";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className={styles.cardGeral}>
      <Header />
      <Welcome/>
    </div>
  );
}

export default App;
 