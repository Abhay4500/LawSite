import React from 'react';
import { FaWhatsapp } from "react-icons/fa";


const FloatingWhatsAppButton: React.FC = () => {
    const phoneNumber = '+918307958345'; // Replace with your phone number in international format

    return (
        <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.floatingButton}
        >
            <FaWhatsapp size={40} color='white'/>
        </a>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    floatingButton: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        zIndex: 1000,
    },
    icon: {
        width: '35px',
        height: '35px',
    },
};

export default FloatingWhatsAppButton;
