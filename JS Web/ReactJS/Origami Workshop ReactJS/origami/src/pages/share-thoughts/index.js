import React from 'react';
import PageLayout from '../../components/page-layout';
import styles from './index.module.css';
import Title from '../../components/title';
import SubmitButton from '../../components/buttons/submit-button';
import Origamis from '../../components/origamis/';

function ShareThoughtsPage() {
  return (
    <PageLayout>
      <Title title='Share your thoughts...' />
      <div className={styles.container}>
        <div>
          <textarea className={styles.textarea} defaultValue='Puiblication...'></textarea>
        </div>
        <div>
          <SubmitButton title='Post' />
        </div>
        <div>
          <Origamis length={3}/>
        </div>
      </div>
    </PageLayout>
  );
}

export default ShareThoughtsPage;