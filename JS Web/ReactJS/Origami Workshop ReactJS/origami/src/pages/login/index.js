import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import Input from '../../components/input';
import SubmitButton from '../../components/buttons/submit-button';
import authenticate from '../../utils/authenticate';
import UserContext from '../../Context';

const LoginPage = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const context = useContext(UserContext);
    const history = useHistory();
    const handleSubmit = async (event) => {
        event.preventDefault();
        await authenticate('http://localhost:5000/api/user/login', {
            username,
            password
        }, (user) => {
            console.log('You are logged in.');
            context.logIn(user)
            history.push('/');
        }, (error) => {
            console.log('Error', error);
        });

    }

    return (
        <PageLayout>
            <form className={styles.container} onSubmit={handleSubmit}>
                <Title title="Login" />
                <Input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    label='username'
                    id='username'
                />
                <Input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    label='Password'
                    id='password'
                    type='password'
                />
                <SubmitButton title='Login' />
            </form>
        </PageLayout>
    )
}

export default LoginPage;