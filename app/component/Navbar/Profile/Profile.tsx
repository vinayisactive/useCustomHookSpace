"use client"
import React, { useState, useEffect } from 'react';
import { Logout } from '../navIndex';

const Profile = ({ userInfo }: any) => {
    const [isProfileActive, setProfileActive] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (isProfileActive) {
            timeoutId = setTimeout(() => {
                setProfileActive(false);
            }, 4000);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isProfileActive]);

    const toggleProfile = () => {
        setProfileActive(!isProfileActive);
    };

    return (
        <div 
            className={`border border-gray-light px-4 rounded-xl flex justify-center items-center cursor-pointer relative`} 
            onClick={toggleProfile}
        >
            <p className='tex-sml'>{userInfo?.name?.[0]?.toUpperCase()}</p>
            {isProfileActive && (
                <div className="flex flex-col gap-2 absolute bottom-[-105px] right-0 z-40 p-2 border bg-black border-gray-light rounded-2xl w-[150px]">
                    <p className='text-lg text-center'>{userInfo?.name}</p>
                    <Logout />
                </div>
            )}
        </div>
    );
};

export default Profile;
