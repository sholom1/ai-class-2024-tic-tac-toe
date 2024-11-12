import React from 'react';

function NavButton({children, onClick}: {children: React.ReactNode, onClick?: () => any}) {
    return (
        <button onClick={onClick} className='border-2 border-black rounded border-b-0 p-1'>
            {children}
        </button>
    );
};

export default NavButton;