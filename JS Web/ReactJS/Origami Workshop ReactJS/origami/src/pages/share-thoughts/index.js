import React, {useState} from 'react';
import PageLayout from '../../components/page-layout';
import styles from './index.module.css';
import Title from '../../components/title';
import SubmitButton from '../../components/buttons/submit-button';
import Origamis from '../../components/origamis/';
import getCookie from '../../utils/cookie';
import getOrigami from '../../utils/origami';



const ShareThoughtsPage = () => {
  const [publication, setPublication] = useState('');
  const [updatedOrigamis, setUptdatedOrigamis] = useState()

  const handleSubmit = async () => {

    const promise = await fetch('http://localhost:5000/api/origami', {
      method: 'POST',
      body: JSON.stringify({
        description: publication
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('x-auth-token')
      }
    });
    
    const data = await promise.json();
    setUptdatedOrigamis([....updatedOrigamis, 1])
  }

  return (
    <PageLayout>
      <Title title='Share your thoughts...' />
      <div className={styles.container}>
        <div>
          <textarea value={publication} className={styles.textarea} onChange={e => setPublication(e.target.value)}></textarea>
        </div>
        <div>
          <SubmitButton title="Post" onClick={handleSubmit}/>
        </div>
        <div>
          <Origamis length={3} updatedOrigamis={updatedOrigamis}/>
        </div>
      </div>
    </PageLayout>
  );
}

export default ShareThoughtsPage;