import React, { useState, useEffect, useRef } from 'react';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { firestore } from '../firebase';
import SignOut from './SignOut';
import SendMessage from './SendMessage';

function Chat() {
    const scroll = useRef(null); // Initialize useRef with null
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const messagesRef = collection(firestore, 'messages');
        const q = query(messagesRef, orderBy('createdAt'), limit(25));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() });
            });
            setMessages(data);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        // Scroll to the bottom when messages change
        if (scroll.current) {
            scroll.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <div>
            <SignOut />
            {messages.map(({ id, text }) => (
                <div key={id}>
                    <p>{text}</p>
                </div>
            ))}
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    );
}

export default Chat;
