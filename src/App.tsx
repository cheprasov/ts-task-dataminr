import React, { useCallback } from 'react';
import SchemeBuilder from './components/SchemeBuilder/SchemeBuilder';

import type { SchemeInf } from './types/Scheme';

import scheme from './scheme.json';

import './App.css';

function App() {
  const onChange = useCallback((obj: Record<string, any>) => {
      console.log('Checkbox value', obj);
  }, []);

  return (
    <div className="App">
      <SchemeBuilder
        scheme={scheme as SchemeInf}
        onChange={onChange}
      />
    </div>
  );
}

export default App;
