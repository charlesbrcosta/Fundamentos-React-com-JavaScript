import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css'
import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          <Post
            author="Bruno"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut tenetur nam molestias sit nobis assumenda odio autem dolorum quia, rerum velit expedita sed ipsum earum, consectetur neque corporis at! Laudantium."
          />

          <Post
            author="B1tZer0"
            content="Fortinite e CSGo"
          />
        </main>
      </div>
    </div>
  )
}


