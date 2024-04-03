import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import SignIn from './component/SignIn';
import Chat from './component/Chat';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);
 
  return (
    <>
      {user ? <Chat /> : <SignIn />}
    </>
  );
}

export default App;
