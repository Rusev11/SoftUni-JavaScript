import React from 'react';
import styles from './index.module.css';
import image from '../../images/blue-origami-bird.png'

function Origam({ description, author, index}) {
    return (
        <div className={styles.container}>
            <img alt='logo' className={styles.image} src={image} />
            <div className={styles.description}>
                <div>
                    <span>{index} - </span>
                    {description}
                </div>
            </div>
            <p>
                <div className={styles.user}>
                    <small>Author: </small>
                    {author.username}
                </div>
            </p>
        </div>
    )
}

export default Origam;