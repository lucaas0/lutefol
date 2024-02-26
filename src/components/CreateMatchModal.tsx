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

    const { data: session } = useSession();

    useEffect(() => {
        getMatches();
    }, []);

    const getMatches = async () => {
        try {
            const response = await axios.get(matchesURL(), {
              method: "GET",
              headers: {
                'accept': 'application/json',
                'club': 'piratasfc',
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJZUVNpRjkzcUVjcUlxRmx1aEJkUHg0emZkNTBwNC1YZ3pPQU11S3JfdEVVIn0.eyJleHAiOjE3MDg4ODg5MzQsImlhdCI6MTcwODg4ODAzNCwiYXV0aF90aW1lIjoxNzA4ODg3MDY2LCJqdGkiOiJkNzBkYTVhNC1mNGJmLTQzYjEtYTE3NC1jYTYyY2QwNDU3OWEiLCJpc3MiOiJodHRwczovL2F1dGgubHV0ZWZvbC5jb20vcmVhbG1zL2x1dGVmb2wiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiYjc1M2E1YjUtZTI1OS00ZTdlLTkxYmEtMDIwNDg2YThiNDE4IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibHV0ZWZvbC1jbGllbnQiLCJzZXNzaW9uX3N0YXRlIjoiNzRjZTQzZmItYzM0NC00YWM3LTkxYmItMjNkMzA4MGEwYjExIiwiYWNyIjoiMCIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjgwODAvKiIsImh0dHBzOi8vYXBpLmx1dGVmb2wuY29tLyoiLCJodHRwczovL2x1dGVmb2wuY29tLyoiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtbHV0ZWZvbCIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiNzRjZTQzZmItYzM0NC00YWM3LTkxYmItMjNkMzA4MGEwYjExIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJMdWNhcyBHYXJjaWEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJsdWtha3UiLCJnaXZlbl9uYW1lIjoiTHVjYXMiLCJmYW1pbHlfbmFtZSI6IkdhcmNpYSIsImVtYWlsIjoibHVrYXNnYXJjaWFqQGdtYWlsLmNvbSJ9.ETcUkZTHjfsWtxDtuYn1Cj8czg3cF7kWmEidUxALqWsSS9Uz5QvsoxzD240Eaw-yZUmsgJ5n9OUcg0nKkZKRXY7Kh6Agapri70L9ZjBw9IKdF5Tz-pDEGAPGwFAXNLo0-wku_UjgVsnUlYaxvzTjlamuz11txvRP7sPKKr47fzbMBZHka3beOChwlofAlc0EWhSBLQUVGqsOhdsdVUTziU-Br9PGHItuMuaNHEuxCCS5yHqO_k7CJMDPtZxYSQNtXxnhfjtCkzER_-80dtml7v6N1sttHbV9OAz99yNvKBZoFkvDVBS9BIkir-fBcFIF3sCu_DJD0GYC0OjXm9nZ8g',
                'Content-Type': 'application/json'
                },
            });
        
            console.log("Success:", response);
          } catch (error) {
            console.error("Error:", error);
          }
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;;
        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
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
                    <button className="flex-1 px-8 py-4 bg-white text-black rounded-full">Publish</button>
                 </div>
            </Modal.Content>
        </Modal.Root>
    )
}

export default CreateMatchModal;
