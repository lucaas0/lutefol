import { ChangeEvent, useEffect, useState } from "react";
import { Modal } from "./Modal";
import { matchesURL } from "@/services/api";
import { getSession, useSession } from "next-auth/react";
import axios from 'axios';

type CreateMatchModalProps = {
    handleCloseModal(): void;
}

type ModalForm = {
    date: string;
    time: string;
    location: string;
}

const CreateMatchModal = ({handleCloseModal}: CreateMatchModalProps) => {
    const [data, setData] = useState<ModalForm>({
        date: '',
        location: '',
        time: '',
    });

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;;
        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const onCreateMatch = async () => {
        const session = await getSession();

        if (session) {
            try {
                const { data } = await axios.post(matchesURL(), {
                    "homeTeamName": "SCALLYWAGS",
                    "awayTeamName": "CORSAIRS",
                    "scheduledStart": "2024-02-29T12:15:50-04:00",
                    "scheduledLength": "PT60M",
                    "venueId": 10000,
                    "venueName": null,
                    "modality": "FUTSAL"
                  },
                  {
                    headers: {
                        'Authorization': `Bearer ${session?.accessToken}`,
                        'club': '10000'
                    },
                });

            } catch (error) {
            }
        }
    }

    return (
        <Modal.Root containerClass='modal-container-column'>
            <Modal.Header title="Create Event" handleClose={handleCloseModal} />
            <Modal.Content>
                <Modal.InputWrapper>
                    <Modal.Label title='Date' />
                    <Modal.Input type='text' name="date" hasError={false} placeholder="" value={data.date} onInputChange={e => onInputChange(e)} />
                    </Modal.InputWrapper>
                <Modal.InputWrapper>
                    <Modal.Label title='Time' />
                    <Modal.Input type='text' name="time" hasError={false} placeholder="" value={data.time} onInputChange={e => onInputChange(e)} />
                </Modal.InputWrapper>
                <Modal.InputWrapper>
                        <Modal.Label title='Location' />
                        <Modal.Input type='text' name="location" hasError={false} placeholder="" value={data.location} onInputChange={e => onInputChange(e)} />
                 </Modal.InputWrapper>
                 <div className="w-full flex flex-row gap-6 font-roboto">
                    <button className="flex-1 px-8 py-4 text-white bg-2D2D2D rounded-full border-393939">Cancel</button>
                    <button className="flex-1 px-8 py-4 bg-white text-black rounded-full" onClick={onCreateMatch}>Publish</button>
                 </div>
            </Modal.Content>
        </Modal.Root>
    )
}

export default CreateMatchModal;
