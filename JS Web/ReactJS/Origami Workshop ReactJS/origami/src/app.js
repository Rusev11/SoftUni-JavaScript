import logo from './logo.svg';
import Header from './components/header'
import styles from './app.module.css';
import Aside from './components/aside';
import Origamis from './components/origamis';
import Footer from './components/footer';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div>
        <Aside />
        <Origamis />
      </div>
      <Footer />
    </div>
  );
}

export default App; 
