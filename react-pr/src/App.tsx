import React from 'react';
import Counter from './components/Counter';
import Hello from './components/Hello';
import "./App.css";
import WoozzangGithub from "./components/WoozzangGithub/WoozzangGithub";

function App() {
  const handleClick = () => {
    window.open("www.naver.com");
  };

  return (
    <div>
      <WoozzangGithub />
    </div>
  );
}

// const App: React.FC = () => {
//   return (
//     <div>
//       <Hello />
//       <Counter />
//       <button onClick={() => window.open('www.naver.com', '_blank')}>[url 링크]</button>
//     </div>
//   );
// };

export default App;