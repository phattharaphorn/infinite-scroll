import React from 'react';
import InfiniteScrollList from './components/InfiniteScrollList';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Infinite Scroll Example</h1>
      <InfiniteScrollList />
    </div>
  );
};

export default App;
