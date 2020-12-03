import React from 'react'
import ReactDOM from 'react-dom'
import {FileTree} from './FileTree'
import {FileViewer} from './FileViewer';
import { TestBuilder } from './TestBuilder';
import { TestBlock } from './TestBlock';
import { ReuploadDirectory } from './ReuploadDirectory';


export const MainContent: React.FC = () =>{
  

  return(
    <div className="row">
      <div className = 'left column'>
        <h1>Project Directory</h1>
        <FileTree />
      </div>
      <div className="middle column">
        <h1>Test Builder</h1>
        <TestBuilder/>
      </div>
      <div className="right column">
        <FileViewer />
      </div>
      <div>
        <TestBlock />
      </div>
      <div>
        <ReuploadDirectory />
      </div>
    </div>
  )
}