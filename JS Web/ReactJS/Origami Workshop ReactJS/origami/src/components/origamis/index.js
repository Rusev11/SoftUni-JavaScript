import React from 'react';
import styles from './index.module.css';
import Origam from '../origam';

class Origamis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origamis: []
    }
  }

  getOrigamis = async () => {
    const length = this.props.length;
    const promise = await fetch(`http://localhost:5000/api/origami?length=${length}`);
    const origamis = await promise.json();
    this.setState({
      origamis: origamis
    });
  }

  renderOrigamis() {
    const {
      origamis
    } = this.state;
    return (
      origamis.map((origam, index) => {
        return (
          <Origam key={origam._id} index={index} {...origam} />
        )
      })
    )
  }

  componentDidMount() {
    this.getOrigamis();
  }

  render() {
    return (
          <div className={styles['origamis-wrapper']}>
            {this.renderOrigamis()}
          </div>
    )
  }
}

export default Origamis; 
