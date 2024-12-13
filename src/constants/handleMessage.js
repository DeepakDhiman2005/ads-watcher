import { toast } from 'react-toastify';

/**
 * Handle toast messages.
 * 
 * @param {object} props
 * @param {string} props.msg - The message to display.
 * @param {'top-center' | 'bottom-left' | 'bottom-right' | 'top-right' | 'top-center' | 'bottom-center'} props.position - The position of the toast message.
 * @param {number} props.autoClose - Duration in milliseconds before the toast is automatically closed.
 * @param {'success' | 'error' | 'info' | 'warning'} props.type - The type of the toast message (default is 'success').
 */
const handleMessage = ({
    msg = "", 
    position = 'top-center', 
    autoClose = 1000,
    type = 'success',  // Default type is 'success'
}) => {
    toast(msg, {
        position: position,  // Dynamic position
        autoClose: autoClose, // Dynamic auto-close duration
        style: {
            zIndex: 1000000000, // Ensure the toast is on top
        },
        type: type, // Dynamic type (success by default)
    });
};

export default handleMessage;
