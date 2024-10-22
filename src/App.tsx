// import { useState } from "react";
// import {
//   BasicCalendar,
//   // ControlCalendar,
//   // CustomizingCalendar,
//   // AdvancedCalendar,
// } from "./Components/BasicCalendar";

import BasicCalendar from "./Components/BasicCalendar/BasicCalendar";

function App() {
  return (
    <div style={{ height: "95vh" }}>
      <BasicCalendar />
      {/* <ControlCalendar /> */}
      {/* <CustomizingCalendar /> */}
      {/* <AdvancedCalendar /> */}
    </div>
  );
}

export default App;
