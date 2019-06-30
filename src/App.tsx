import React from 'react';
import { rows } from "./data";
import Thead from './thead'
import Tbody from './tbody'
import Parent from './sample'

const App: React.FC = () => {
  return (
    <div>
        <h1>健康に関する調査</h1>
        <table>
            <Thead/>
            <Tbody rows={rows}/>
        </table>
        <Parent childLabel="children"/>
    </div>
  );
}

export default App;
