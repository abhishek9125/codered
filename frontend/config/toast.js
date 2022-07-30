import toast from 'react-hot-toast';

export const customToast = (message, success = false, marginTop = '40px') => {

    if(success) {
        toast.success(message, {
            duration: 3000,
            position: 'top-right',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
                marginTop
            },
        });
    } else {
        toast.error(message, {
            duration: 3000,
            position: 'top-right',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
                marginTop
            },
        });
    }
}