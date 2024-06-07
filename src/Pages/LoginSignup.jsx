import React, { useState } from 'react';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = () => {
    // Store user data in localStorage for demo purposes
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    setMessage('Sign up successful! You can now log in.');
  };

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid email or password.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin();
    } else {
      handleSignup();
    }
  };

  return (
    <div className='loginsignup w-full h-auto min-h-[80vh] pt-20 pb-16'>
      <div className="loginsignup-container w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto bg-slate-300   mx-auto px-6 lg:px-10 py-10 lg:py-12 shadow-md rounded-lg">
        <h1 className='text-center text-3xl lg:text-4xl font-bold mb-6'>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form className="loginsignup-fields flex flex-col gap-6 mt-6" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder='Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='input-field p-2 border border-gray-300 rounded'
            />
          )}
          <input
            type="email"
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='input-field p-2 border border-gray-300 rounded'
          />
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='input-field p-2 border border-gray-300 rounded'
          />
          <button
            type="submit"
            className='w-full h-14 text-white bg-red-600 mt-6 border-none font-semibold text-lg lg:text-xl rounded-lg cursor-pointer'
          >
            {isLogin ? 'Login' : 'Continue'}
          </button>
        </form>
        <p className='loginsignup-login mt-4 text-gray-600 text-center text-base lg:text-lg font-medium'>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span
            className='text-red-600 font-semibold cursor-pointer'
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign up here' : 'Login here'}
          </span>
        </p>
        <div className="loginsignup-agree flex items-center mt-6 gap-4 text-gray-600 text-base lg:text-lg font-medium">
          {!isLogin && (
            <>
              <input type="checkbox" id='agree' className='w-4 h-4 lg:w-5 lg:h-5' />
              <label htmlFor='agree'>
                By continuing, I agree to the <a href="/terms" className="text-red-600 underline">terms of use</a> & <a href="/privacy" className="text-red-600 underline">privacy policy</a>.
              </label>
            </>
          )}
        </div>
        {message && <p className='mt-4 text-center text-lg text-green-600'>{message}</p>}
      </div>
    </div>
  );
};

export default LoginSignup;
