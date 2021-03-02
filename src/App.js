import React from "react";
import { DateRangePicker } from "materialui-daterange-picker";
import { Button } from "@material-ui/core";
import { CalendarToday } from "@material-ui/icons";

const App = props => {
  const [open, setOpen] = React.useState(false);
  const [dateRange, setDateRange] = React.useState({});

  const toggle = () => setOpen(!open);

  return (
    <div>
      <Button onClick={(e)=> setOpen(true)} 
        endIcon={<CalendarToday/>} 
        variant="contained">Filter by Date</Button>
      <DateRangePicker
        open={open}
        toggle={toggle}
        onChange={(range) => setDateRange(range)}
      />
    </div>
  );
}

export default App;