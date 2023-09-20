import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    getAllUserProfileData,
    getAllUserProfileStatus,
    getAllUserProfileError,
    fetchUserProfile,
} from './rocketSlice.js';

const AllUsers = () => {
    const dispatch = useDispatch();
    const profileData = useSelector(getAllUserProfileData);
    const userProfileStatus = useSelector(getAllUserProfileStatus);
    const error = useSelector(getAllUserProfileError);

    useEffect(() => {
        if (userProfileStatus === 'idle') {
            dispatch(fetchUserProfile());
        }
    }, [userProfileStatus, dispatch]);

    let contentToDisplay = '';
    if (userProfileStatus === 'loading') {
        contentToDisplay = <h2 className='loading_state' >Loading...</h2>;
    } else if (userProfileStatus === 'succeeded') {
        contentToDisplay = profileData.map((data) => (
            <div key={data.id}>
                <a href="#ht" className="flex flex-col m-9 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={data.avatar} alt="bread" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <small>first name:</small>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.first_name}</h5>
                        <small>last name:</small>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.last_name}</p>
                        <small>email:</small>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.email}</p>
                    </div>
                </a>
            </div>
        ));
    } else if (userProfileStatus === 'failed') {
        contentToDisplay = <p className='loading_state'>{error}</p>;
    }

    return (
        <div>
            {contentToDisplay}
        </div>
    );
};

export default AllUsers;