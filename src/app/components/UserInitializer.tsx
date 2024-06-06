"use client";
// Create a new component for handling client-side logic
import { useEffect } from 'react';
import { useUser } from '../context/UserContext';

const UserInitializer: React.FC = () => {
  const { login } = useUser();

  useEffect(() => {
    // Check if the code is running on the client side
    if (typeof window !== 'undefined') {
      // Check if user data exists in localStorage when the component mounts
      const token = localStorage.getItem('token');
      const email = localStorage.getItem('email');
      if (token) {
        // If user data exists, login the user using the context
        login(email, token);
        //const parsedUser = JSON.parse(userData);
        //login(parsedUser.email, parsedUser.password);
      }
    }
  }, [login]);

  // Return null because we don't need to render anything
  return null;
};

export default UserInitializer;
