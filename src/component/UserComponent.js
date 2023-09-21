import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const UserComponent = () => {
    const { id } = useParams(); 
    const users = useSelector((state) => state.users.users);
    const user = users.find((user) => user.id === Number(id));

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div>
            <div className="p-9 mt-20  flex-col items-center bg-white bg-cover bg-clip-border">
                <div className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover" >
                    <div className="absolute -bottom-12 flex h-[88px] w-[88px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
                        <img className="h-full w-full rounded-full" src={user.avatar} alt="" />
                    </div>
                </div>
                <div className="mt-16 flex flex-col items-center">
                    <h4 className="text-bluePrimary text-xl font-bold">{user.first_name} </h4>
                    <p className="text-lightSecondary text-base font-normal">{user.phone_number}</p>
                </div>
                <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
                    <div className="flex flex-col items-center justify-center">
                        <h6 className="text-bluePrimary  font-bold">{user.email}</h6>
                        <p className="text-lightSecondary text-sm font-normal">email</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h6 className="text-bluePrimary  font-bold">{user.gender}</h6>
                        <p className="text-lightSecondary text-sm font-normal">gender</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h6 className="text-bluePrimary  font-bold">{user.date_of_birth}</h6>
                        <p className="text-lightSecondary text-sm font-normal">date of birth</p>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default UserComponent;
