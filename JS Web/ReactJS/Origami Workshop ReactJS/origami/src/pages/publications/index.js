import React from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import Origamis from '../../components/origamis';
import userEvent from '@testing-library/user-event';
import UserContext from '../../Context';

class PublicationsPage extends React.Component {
  constructor(props) {
    super(props)
  }
  static contextType = UserContext;

  render() {
    return (
      <PageLayout>
        <Title title='Publications' />
        <Origamis />
      </PageLayout>
    )
  }
}

export default PublicationsPage; 
