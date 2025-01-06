import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Component1 from './Nv_lab/Component1'
// import HtmlComponent from './Nv_lab/htmlcomp'
// import Timetable from './Nv_lab/24-12-2024/timetabel'
// import StateABC from './Nv_lab/30-12-2024/statemgmt1'
// import StateXYZ from './Nv_lab/30-12-2024/statemgmt2'
// import StateMerge from './Nv_lab/30-12-2024/statemgmt3'
// import MyCustComp from './Nv_lab/31-12-2024/propsexmp3'
// import Purefunc1 from "./Nv_lab/31-12-2024/purefunc1"
// import MyCustButton from './Nv_lab/31-12-2024/purefunc2'
// import HookExmp from './Nv_lab/31-12-2024/hookexmp1'
// import StateExmp2 from './Nv_lab/6-1-2025/hookexmp2'
import StateExmp3 from './Nv_lab/6-1-2025/hookexmp3'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <StateExmp3 />    
  </StrictMode>,
)
