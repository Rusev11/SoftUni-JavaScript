import React from 'react';
import styles from './index.module.css'
import PageLayout from '../../components/page-layout';
import Origamis from '../../components/origamis';
import UserContext from '../../Context';

class ProfilePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: null,
            posts: null,
            error: false
        }
    }

    static contextType = UserContext;

    componentDidMount(){

        this.getUser(this.props.match.params.userid);
    }

    getUser = async (id) => {
        const response = await fetch(`http://localhost:5000/api/user?id=${id}`);
        if(!response.ok){
            this.props.history.push('/error');
        }
        const user = await response.json();
        this.setState({
            username: user.username,
            posts: user.posts && user.posts.length
        })
    };

    logOut = ()=>{
        this.context.logOut();
        this.props.history.push('/');
    }

    render(){
        const {
            username,
            posts
        } = this.state;

        if(!username){
            return (
                <PageLayout>
                    <div>Loading...</div>
                </PageLayout>
            )
        }
        return (
            <PageLayout>
                <div className={styles.container}>
                    <p>User: {username}</p>
                    <p>Posts: {posts}</p>

                    <button onClick={this.logOut}>Logout</button>
                </div>
                <Origamis length={3}/>
            </PageLayout>
        )
    }
}

export default ProfilePage;