import './DatePickerModal.scss';

import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const DatePickerModal = ({ date, setDate }) => {

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateRangePicker
          startText=""
          endText=""
          value={date}
          allowSameDateSelection={false}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          minDate={new Date()}
          renderInput={(startProps, endProps) => (
            <div className='date_picker_modal_cells_format'>
              <div className="spmc_ia_item">
                <label className='saf_item_label'>Arrival date</label>
                <TextField {...startProps} />
              </div>
              <div className="spmc_ia_item">
                <label className='saf_item_label'>Departure date</label>
                <TextField {...endProps} />
              </div>
            </div>
          )}
        />
      </LocalizationProvider>
    );
  }

export default DatePickerModal;