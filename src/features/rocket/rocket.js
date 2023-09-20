import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectAllRockets,
    getRocketsStatus,
    getRocketsError,
    fetchRockets,
} from './rocketSlice.js';

const RocketsIndex = () => {
    const dispatch = useDispatch();
    const rockets = useSelector(selectAllRockets);
    const rocketStatus = useSelector(getRocketsStatus);
    const error = useSelector(getRocketsError);

    useEffect(() => {
        if (rocketStatus === 'idle') {
            dispatch(fetchRockets());
        }
    }, [rocketStatus, dispatch]);

    let contentToDisplay = '';
    if (rocketStatus === 'loading') {
        contentToDisplay = <h2 className='loading_state' >Loading...</h2>;
    } else if (rocketStatus === 'succeeded') {
        contentToDisplay = rockets.map((data) => (
            <div key={data.id}>
                <a href="#ht" class="flex flex-col my-9 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={data.avatar} alt="bread" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.first_name}</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.last_name}</p>
                    </div>
                </a>
            </div>
        ));
    } else if (rocketStatus === 'failed') {
        contentToDisplay = <p className='loading_state'>{error}</p>;
    }

    return (
        <div>
            {contentToDisplay}
        </div>
    );
};

export default RocketsIndex;