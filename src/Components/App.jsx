import { Header } from "./Header/Header";

import './global.css';
import styles from './App.module.css';

import { Sidebar } from "./Sidebar/Sidebar";
import { Post } from "./Posts/Post";

export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  );
}