import React, { useState, useEffect, useCallback } from 'react';
import styles from './index.module.css';
import Origam from '../origam';

const Origamis = (props) => {
  const [origamis, setOrigamis] = useState ([]);

  const renderOrigamis = () => {
    return (
      origamis.map((origam, index) => {
        return (
          <Origam key={origam._id} index={index} {...origam} />
        )
      })
    )
  }

  const getOrigamis = useCallback( async () => {
    const promise = await fetch(`http://localhost:5000/api/origami?length=${props.length}`);
    const origamis = await promise.json();
    setOrigamis(origamis  );
  },[props.length]) 

  useEffect(() => {
    getOrigamis();
  }, [props.updatedOrigamis])

  return (
    <div className={styles['origamis-wrapper']}>
      {renderOrigamis()}
    </div>
  )
}

export default Origamis; 
