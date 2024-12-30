import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Component1 from './Nv_lab/Component1'
// import HtmlComponent from './Nv_lab/htmlcomp'
// import Timetable from './Nv_lab/24-12-2024/timetabel'
// import StateABC from './Nv_lab/30-12-2024/statemgmt1'
// import StateXYZ from './Nv_lab/30-12-2024/statemgmt2'
import StateMerge from './Nv_lab/30-12-2024/statemgmt3'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Component1 /> */}
    {/* <HtmlComponent /> */}
    {/* <Timetable /> */}
    {/* <StateABC /> */}
    <StateMerge />
  </StrictMode>,
)
