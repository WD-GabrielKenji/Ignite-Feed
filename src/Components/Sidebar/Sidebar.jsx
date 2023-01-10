import styles from './Sidebar.module.css';

import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1673205194019-55ac9f0a0899?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" 
        alt="Imagem de Capa" 
      />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/77596710?v=4"/>

        <strong>Gabriel Kenji</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine />  
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}