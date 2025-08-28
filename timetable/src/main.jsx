import {StrictMode} from "react"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DragDropContext } from '@hello-pangea/dnd';

createRoot(document.getElementById('root')).render(

  <StrictMode>
        <DragDropContext onDragEnd={() => {}}>
    <App />
    </DragDropContext>
  </StrictMode>
);
