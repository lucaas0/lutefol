import { useEffect, useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers';
// If you are using date-fns v3.x, please import the v3 adapter
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

type Props = {
    onDateSelected(date: Date | null): void;
}
const CustomDatePicker = (props: Props) => {
    const { onDateSelected } = props;

    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    useEffect(() => {
        onDateSelected(selectedDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedDate]);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                className="modal-input"
                format="dd-MM-yyyy"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
            />
        </LocalizationProvider>
    )
};

export default CustomDatePicker;
