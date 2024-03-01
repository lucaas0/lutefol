import { ToastTypes } from '@/misc';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToast = (type: ToastTypes, message: string) => {
    switch (type) {
      case ToastTypes.SUCCESS:
        return toast.success(
          <div>
            <p>{message}</p>
          </div>
        );
      case ToastTypes.ERROR:
        return toast.error(
          <div>
            <p>{message}</p>
          </div>
        );
      case ToastTypes.WARNING:
        return toast.warning(
          <div>
            <p>{message}</p>
          </div>
        );
      default:
        return toast.warning(
          <div>
            <p>toast not defined...</p>
          </div>
        );
    }
  };
  export default showToast;