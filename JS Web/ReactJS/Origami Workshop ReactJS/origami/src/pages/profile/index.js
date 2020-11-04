import React, { useState, useContext, useEffect, useCallback} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styles from './index.module.css'
import PageLayout from '../../components/page-layout';
import Origamis from '../../components/origamis';
import UserContext from '../../Context';

const ProfilePage = (props) => {
    const [username, setUsername] = useState(null);
    const [posts, setPosts] = useState(null);
    const params = useParams();
    const history = useHistory();
    const context = useContext(UserContext);

    const logOut = () => {
        context.logOut();
        history.push('/');
    }

    const getData = useCallback(async () => {
        const id = params.userid;
        const response = await fetch(`http://localhost:5000/api/user?id=${id}`);

        if (!response.ok) {
            history.push('/error');
        } else {
        const user = await response.json();
        setUsername(user.username);
        setPosts(user.posts && user.posts.length);
        }
    }, [params.userid, history]);

    useEffect(() => {
        getData()
    }, [getData]);

    return (
        <PageLayout>
            <div className={styles.container}>
                <p>User: {username}</p>
                <p>Posts: {posts}</p>

                <button onClick={logOut}>Logout</button>
            </div>
            <Origamis length={3} />
        </PageLayout>
    )
}

export default ProfilePage;