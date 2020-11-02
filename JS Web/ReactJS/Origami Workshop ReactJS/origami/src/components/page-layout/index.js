import Header from '../header'
import styles from './index.module.css';
import Aside from '../aside';
import Footer from '../footer';

function PageLayout(props) {
  return (
    <div className={styles.app}>
      <Header />
      <div>
        <Aside />
        <div className={styles['inner-container']}>
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageLayout; 
