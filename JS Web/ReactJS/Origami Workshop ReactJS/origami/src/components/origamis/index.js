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
        const promise = await fetch('http://localhost:5000/api/origami');
        const origamis = await promise.json();
        this.setState({
            origamis: origamis
        });
    }
    
    renderOrigamis (){
        const {
            origamis
        } = this.state;
        return (
            origamis.map(origam => {
                return (
                    <Origam key={origam._id} {...origam} /> 
                )
            })
        )
    }

    componentDidMount() {
        this.getOrigamis();
    }

    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Origamis</h1>
                <div className={styles['origamis-wrapper']}>
                    {this.renderOrigamis()}
                </div>
            </div>
        )
    }
}

export default Origamis;