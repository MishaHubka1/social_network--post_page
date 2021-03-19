import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import "./Login.css";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('')
    ;
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                   displayName: userAuth.user.displayName,
                   profileUrl: userAuth.user.photoURL
            }))
        }).catch((error) => alert(error))

    }
    const register = () => {
        if (!name) {
            return alert ("Please enter a full name!")
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                   email: userAuth.user.email,
                   uid: userAuth.user.uid,
                   displayName: name,
                   photoURL: profilePic
                }))      
            })
        }).catch((error) => alert(error))
    }
    
    return (
            <div className="login">
            <img src="https://marketplace-assets-production.s3-us-west-2.amazonaws.com/vault/items/preview-563cf163-2aac-41ac-be0c-7a010a141f38-UqPnD.png" alt=""/>

            <form>
                <h4>Full name (required if registering)</h4>
                <input value={name} onChange={e => setName(e.target.value)} type="text" />

                <h4>Profile pic URL (optional)</h4>
                <input value={profilePic} onChange= {(e) => setProfilePic (e.target.value)} type="text"/>

                <h4>Email</h4>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email"/>

                <h4>Password (6 or more characters)</h4>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password"/>

                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?{" "}</p>
            <span className="login__register" onClick={register}>Register Now</span>
        </div>
    )
}

export default Login
