//imports
  //react
  import React from "react";
  //materials
    import TextField from '@mui/material/TextField';
    import AdapterDateFns from '@mui/lab/AdapterDateFns';
    import LocalizationProvider from '@mui/lab/LocalizationProvider';
  //components
    import DatePicker from '@mui/lab/DatePicker';

//master export
  export default function BasicDatePicker(props) {
    let [pickedDate, setPickedDate] = React.useState(props.dataFromParent);
      return (
        <LocalizationProvider dateAdapter = {AdapterDateFns} >
          <DatePicker 
            label = "Deadline" 
            value = {pickedDate} 
            onChange = {e => {setPickedDate(e); props.dataToParent(e)}}
            renderInput = {(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      );
  }