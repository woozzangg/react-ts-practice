import React from 'react';
import Counter from './Counter';
import Hello from './Hello';

const App: React.FC = () => {
  return (
    <div>
      <Hello />
      <Counter />
      <button onClick={() => window.open('www.naver.com', '_blank')}>[url 링크]</button>
    </div>
  );
};

export default App;