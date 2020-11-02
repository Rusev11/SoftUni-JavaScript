import React from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import Input from '../../components/input';
import SubmitButton from '../../components/buttons/submit-button';
import authenticate from '../../utils/authenticate';
import UserContext from '../../Context';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static contextType = UserContext;

    hadnleChange(event, type) {
        const newState = {};
        newState[type] = event.target.value;
        this.setState(newState);
    }

    

    async handleSubmit(event) {
        event.preventDefault();
        const {
            username,
            password,
        } = this.state;
        await authenticate('http://localhost:5000/api/user/login', {
            username,
            password
        }, (user)=>{
            console.log('You are logged in.');
            this.context.logIn(user)
            this.props.history.push('/');
        }, (error)=>{
            console.log('Error', error);
        });
        
    }

    render() {
        const {
            username,
            password,
        } = this.state;

        return (
            <PageLayout>
                <form className={styles.container} onSubmit={this.handleSubmit}>
                    <Title title="Login" />
                    <Input
                        value={username}
                        onChange={(e) => this.hadnleChange(e, 'username')}
                        label='username'
                        id='username'
                    />
                    <Input
                        value={password}
                        onChange={(e) => this.hadnleChange(e, 'password')}
                        label='Password'
                        id='password'
                        type='password'
                    />
                    <SubmitButton title='Login' />
                </form>
            </PageLayout>
        )
    }
}

export default LoginPage;