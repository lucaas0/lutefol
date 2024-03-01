import { useEffect, useState } from "react";
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { LocalizationProvider } from '@mui/x-date-pickers';
// If you are using date-fns v3.x, please import the v3 adapter
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

type Props = {
    onTimeSelected(date: Date | null): void;
}
const CustomTimePicker = (props: Props) => {
    const { onTimeSelected } = props;

    const [selectedTime, setSelectedTime] = useState<Date | null>(null);

    useEffect(() => {
        onTimeSelected(selectedTime);
    }, [selectedTime]);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimeField
            format="HH:mm"
            value={selectedTime}
            onChange={(newValue) => setSelectedTime(newValue)}
            className="modal-input"
            variant="standard"
        />
        </LocalizationProvider>
    )
};

export default CustomTimePicker;
