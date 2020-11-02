import styles from './index.module.css';

function Title({title}){
    return (
        <h1 className={styles.title }>{title}</h1>
    )
}

export default Title;