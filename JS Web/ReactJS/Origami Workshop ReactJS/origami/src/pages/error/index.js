import React from 'react';
import PageLayout from '../../components/page-layout';
import styles from './index.module.css'

function ErrorPage(){
    return (
        <PageLayout>
            <div className={styles.container}>Error page</div>
        </PageLayout>
    );
}

export default ErrorPage;