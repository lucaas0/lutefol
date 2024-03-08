import React, { ChangeEvent, useEffect, useState } from "react";
import { Modal } from "./Modal";
import { matchesURL } from "@/services/api";
import axios from 'axios';
import CustomDatePicker from "./CustomDatePicker";
import { createFormattedDateTime } from "@/utils";
import CustomTimePicker from "./CustomTimePicker";
import { ToastTypes } from "@/misc";
import 'react-toastify/dist/ReactToastify.css';
import showToast from "./Toast";
import { useSession } from "next-auth/react";


type CreateMatchModalProps = {
    handleCloseModal(): void;
    handleMatchCreated(): void;
}

type ModalForm = {
    date: Date | null;
    time: Date | null;
    location: string;
}

const CreateMatchModal = ({handleCloseModal, handleMatchCreated}: CreateMatchModalProps) => {
    const [data, setData] = useState<ModalForm>({
        date: null,
        location: 'Leirifoot',
        time: null,
    });

    const [isLoading, setIsLoading] = useState(false);
    const session = useSession();

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const onCreateMatch = async () => {
        if (session && data.date && data.time) {
            const scheduledStart = createFormattedDateTime({ date: data.date, time: `${data.time?.getHours()}:${data.time?.getMinutes()}` });
            setIsLoading(true);
            try {
                await axios.post(matchesURL(), {
                    "homeTeamName": "SCALLYWAGS",
                    "awayTeamName": "CORSAIRS",
                    "scheduledStart": scheduledStart,
                    "scheduledLength": "PT60M",
                    "venueId": 10000,
                    "venueName": data.location,
                    "modality": "FUTSAL"
                  },
                  {
                    headers: {
                        'Authorization': `Bearer ${session.data?.accessToken}`,
                        'club': '10000'
                    },
                });
                showToast(ToastTypes.SUCCESS, 'Match Created!');
                handleCloseModal();
                handleMatchCreated();
            } catch (error) {
                showToast(ToastTypes.ERROR, 'An error occur, please try again.');
            } finally {
                setIsLoading(false);
            }
        }
    }

    const handleTimeSelected = (time: Date | null) => {
        setData((prevState) => ({ ...prevState, time}))
    }

    return (
        <React.Fragment>
            <Modal.Root containerClass='modal-container-column'>
                <Modal.Header title="Create Event" handleClose={() => handleCloseModal()} />
                <Modal.Content>
                    <Modal.InputWrapper>
                        <Modal.Label title='Date' />
                        <CustomDatePicker onDateSelected={(date) => setData((prevState) => ({ ...prevState, date}))} />
                    </Modal.InputWrapper>
                    <Modal.InputWrapper>
                        <Modal.Label title='Time' />
                        <CustomTimePicker onTimeSelected={(time) => handleTimeSelected(time)} />
                    </Modal.InputWrapper>
                    <Modal.InputWrapper>
                        <Modal.Label title='Location' />
                        <Modal.Input type='text' name="location" hasError={false} placeholder="" value={data.location} onInputChange={e => onInputChange(e)} />
                    </Modal.InputWrapper>
                    <div className="w-full flex flex-row gap-6 font-roboto">
                        <button className="flex-1 px-4 py-2 md:px-8 md:py-4 text-white bg-2D2D2D rounded-full border-393939" onClick={() => handleCloseModal()}>Cancel</button>
                        <button className="flex-1 px-4 py-2 md:px-8 md:py-4 bg-white text-black rounded-full" onClick={() => onCreateMatch()}>Publish</button>
                    </div>
                </Modal.Content>
            </Modal.Root>
        </React.Fragment>
    )
}

export default CreateMatchModal;
