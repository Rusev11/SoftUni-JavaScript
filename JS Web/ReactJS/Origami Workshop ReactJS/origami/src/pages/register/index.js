import React from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import Input from '../../components/input';
import SubmitButton from '../../components/buttons/submit-button';
import authenticate from '../../utils/authenticate';
import UserContext from '../../Context';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            rePassword: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    static contextType = UserContext;

    async handleSubmit(event) {
        event.preventDefault();
        const {
            username,
            password,
            rePassword
        } = this.state;

        await authenticate('http://localhost:5000/api/user/register', {
            username,
            password
        }, (user)=>{
            this.context.logIn(user);
            console.log('Successful registration');
            this.props.history.push('/');
        }, (error)=>{
            console.log('Error', error);
        });
    }

    onChange(event, type) {
        const newState = {};
        newState[type] = event.target.value;
        this.setState(newState);
    }

    render() {
        const {
            username,
            password,
            rePassword
        } = this.state;

        return (
            <PageLayout>
                <form className={styles.container} onSubmit={this.handleSubmit}>
                    <Title title="Register" />
                    <Input
                        value={username}
                        onChange={(e) => this.onChange(e, 'username')}
                        label='username'
                        id='username'
                    />
                    <Input
                        value={password}
                        onChange={(e) => this.onChange(e, 'password')}
                        label='Password'
                        id='password'
                        type='password'
                    />
                    <Input
                        value={rePassword}
                        onChange={(e) => this.onChange(e, 'rePassword')}
                        label='Re-Password'
                        id='re-password'
                        type='password'
                    />
                    <SubmitButton title='Register' />
                </form>
            </PageLayout>
        );
    }
}

export default RegisterPage;