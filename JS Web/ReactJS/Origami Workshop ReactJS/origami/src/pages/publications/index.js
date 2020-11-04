import React from 'react';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import Origamis from '../../components/origamis';

const PublicationsPage = () => {  
    return (
      <PageLayout>
        <Title title='Publications' />
        <Origamis />
      </PageLayout>
    )
}

export default PublicationsPage; 
