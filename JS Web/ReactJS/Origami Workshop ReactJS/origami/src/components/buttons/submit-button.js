import styles from './submit-button.module.css';

function SubmitButton({title}){
    return (
        <button type='submit' className={styles.submit}>{title}</button>
    )
}

export default SubmitButton;