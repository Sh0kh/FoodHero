import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function PersonComments() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [data, setData] = useState([]);
    const { ID } = useParams(); // Get the ID from URL parameters

    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const getComment = async () => {
        try {
            const response = await axios.get('/ratings/all');
            setData(response?.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getComment();
    }, []);

    return (
        <div>
            <div className="Container">
                <div className="flex justify-between flex-col">
                    <div className="flex flex-col gap-[10px] mt-[30px]">
                        {data
                            ?.filter(i => String(i?.foodEstablishment?.id) === String(ID)) // Convert both to string for comparison
                            .map((i, index) => (
                                <div key={index} className="flex items-start justify-between border-b-[2px] pb-[10px]">
                                    <div>
                                        <h2 className="font-bold text-[20px]">{i?.user?.fullName}</h2>
                                        <span className="text-[#705C70]">{i?.review}</span>
                                    </div>
                                    <div className="flex items-center gap-[5px]">
                                        {[...Array(i?.rating)].map((_, index) => (
                                            <svg key={index} xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                                <path d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z" fill="#FFA500" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            ))}

                        <button onClick={openModal} className="mt-[20px] w-full py-[10px] bg-[#C0C] rounded-[10px] text-white">
                            Fikir qoldirish
                        </button>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalVisible} onClose={closeModal} />
        </div>
    );
}
