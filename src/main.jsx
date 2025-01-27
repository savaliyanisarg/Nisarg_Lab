import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import AlphanumericInput from './27-1-2025/alphnumerical'
// import ToDoList from './27-1-2025/todolist'
// import ColorPicker from './27-1-2025/Colorpicker'
// import DayNightTheme from './27-1-2025/day_night'
// import Pagination from './27-1-2025/pagination'
import ContentFinder from './Nv_lab/27-1-2025/finder'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ContentFinder />    
  </StrictMode>,
)
