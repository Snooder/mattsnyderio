import React from 'react';

const IconDisplay = ({ icon, backgroundColor }) => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                backgroundColor: backgroundColor, // Set background color for the icon
                borderRadius: '10px',
            }}
        >
            {icon && (
                <div style={{ fontSize: '80px' }}>
                    {icon}
                </div>
            )}
        </div>
    );
};

export default IconDisplay;
