import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define custom keyframe animations
const animateBubble1 = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-700px) rotate(600deg);
  }
`;

const animateBubble2 = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-700px) rotate(600deg);
  }
`;

// Styled components for bubbles with animations
const Bubble1 = styled.li`
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.15);
  bottom: -160px;
  left: 10%;
  animation: ${animateBubble1} 25s infinite linear;
`;

const Bubble2 = styled.li`
  position: absolute;
  width: 80px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.15);
  bottom: -160px;
  left: 20%;
  animation: ${animateBubble2} 28s infinite linear;
`;

const Bubble3 = styled.li`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.15);
  bottom: -160px;
  left: 30%;
  animation: ${animateBubble1} 20s infinite linear;
`;

const Bubble4 = styled.li`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.15);
  bottom: -160px;
  left: 40%;
  animation: ${animateBubble2} 22s infinite linear;
`;

const Bubble5 = styled.li`
  position: absolute;
  width: 120px;
  height: 120px;
  background-color: rgba(255, 255, 255, 0.15);
  bottom: -160px;
  left: 50%;
  animation: ${animateBubble1} 30s infinite linear;
`;

const Bubble6 = styled.li`
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.15);
  bottom: -160px;
  left: 60%;
  animation: ${animateBubble1} 25s infinite linear;
`;

const Bubble7 = styled.li`
  position: absolute;
  width: 80px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.15);
  bottom: -160px;
  left: 70%;
  animation: ${animateBubble2} 28s infinite linear;
`;

const Bubble8 = styled.li`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.15);
  bottom: -160px;
  left: 80%;
  animation: ${animateBubble1} 20s infinite linear;
`;


const LoginForm = () => {
  return (<>
    <div className="relative min-h-[580px] flex items-center justify-center bg-gradient-to-br from-teal-500 to-green-400">
      <div className="max-w-md w-full space-y-8 p-8 rounded-lg shadow-lg bg-gradient-to-br from-teal-400 to-green-400 backdrop-blur-lg backdrop-filter">
        <h1 className="text-3xl font-bold text-center text-gray-800">Welcome To Clean City</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          />
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>

      <ul className="absolute  w-full  bg-bubbles">
        <Bubble1 />
        <Bubble2 />
        <Bubble3 />
        <Bubble4 />
        <Bubble5 />
        <Bubble6 />
        <Bubble7 />
        <Bubble8 />
        
      </ul>
    </div>
    </>
  );
};

export default LoginForm;
