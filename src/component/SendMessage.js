import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth, firestore } from '../firebase.js'; // Update the import path for auth and db

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('');

    async function sendMessage(e) {
        e.preventDefault();
        const { uid } = auth.currentUser;

        await addDoc(collection(firestore, 'messages'), {
            text: msg,
            uid,
            createdAt: serverTimestamp()
        });
        setMsg('');
        scroll.current.scrollIntoView({ behavior: 'smooth' });
    } 

    return (
        <div>
            <form onSubmit={sendMessage}>
                <input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Message..." />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default SendMessage;

