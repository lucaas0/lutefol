import React from 'react';
import '../assets/styles/modal.css';
import Image from 'next/image';
import { InputProps } from '@/misc';

type ModalHeaderProps = {
    title: string;
    handleClose(): void;
}
const ModalHeader = ({ title, handleClose }: ModalHeaderProps) => {
    return (
        <div className="modal-header">
            <h3>{title}</h3>
        	<button onClick={handleClose}>
                <Image src="/close-ic.svg" width={16} height={16} alt='X' />
            </button>
        </div>
    )
}

type ModalContentProps = {
    children: React.ReactNode;
}

const ModalContent = ({ children }: ModalContentProps) => {
    return (
            <React.Fragment>
                { children }
            </React.Fragment>
    )
}

type ModalLabelProps = {
    title: string;
}

const ModalLabel = ({ title }: ModalLabelProps) => {
    return (
        <h4 className='modal-label'>
            { title }
        </h4>
    )
}

const ModalInput = ({ type, value, hasError, onInputChange, placeholder, ...rest }: InputProps) => {
    return (
        <input
            type={type}
            className={`modal-input ${hasError ? 'input-error' : ''}`}
            placeholder={placeholder}
            value={value}
            {...rest}
            onChange={(e) => onInputChange(e)}
            autoComplete="off"
        />
    )
}

type ModalInputWrapperProps = {
    children: React.ReactNode;
}

const ModalInputWrapper = ({children}: ModalInputWrapperProps) => {
    return (
        <div className='modal-input-wrapper'>
            { children }
        </div>
    )
}

type ModalRootProps = {
    children: React.ReactNode,
    containerClass?: string;
}

const ModalRoot = ({ children, containerClass }: ModalRootProps) => {
    return (
        <div className='modal-background'>
            <div className={containerClass ? `modal ${containerClass}` : 'modal'}>
                { children }
            </div>
        </div>
    )
}

export const Modal = {
    Root: ModalRoot,
    Header: ModalHeader,
    Content: ModalContent,
    Label: ModalLabel,
    Input: ModalInput,
    InputWrapper: ModalInputWrapper,
};
