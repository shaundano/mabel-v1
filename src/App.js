import React from 'react';
import './App.css';
import logo from './assets/logo_only_black.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Mabel Logo" />
      </header>
      <div className="text-editor" id="textInputContainer" contentEditable="true">
      </div>
      <table className="word-storage-table" id="wordStorageTable">
        <thead>
          <tr>
            <th>string</th>
            <th>#_characters</th>
          </tr>
        </thead>
        <tbody>
          {/* Table rows will be dynamically added here */}
        </tbody>
      </table>
    </div>
  );
}

export default App;