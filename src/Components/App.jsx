import { Header } from "./Header/Header";

import './global.css';
import styles from './App.module.css';

import { Sidebar } from "./Sidebar/Sidebar";

export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <strong>Gabriel K</strong>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit aut sapiente nostrum eius doloremque possimus id quo. Perferendis, deserunt?</p>

          <strong>Gabriel P</strong>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laborum sed quia magnam eum, commodi rem cumque. Debitis non dolorum fuga quos nobis!</p>
        </main>
      </div>
    </>
  );
}