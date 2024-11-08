import React, { useState } from 'react';

export default function PersonComments() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <div className="Container">
                <div className="flex justify-between flex-col">
                    <div className="flex flex-col gap-[10px] mt-[30px]">
                        <div className="flex items-start justify-between border-b-[2px] pb-[10px]">
                            <div className="">
                                <h2 className="font-bold text-[20px]">
                                    Adam Due
                                </h2>
                                <span className="text-[#705C70]">
                                    Ajoyob - Zo’r Restaran
                                </span>
                            </div>
                            <div className="flex items-center gap-[5px]">
                                {[...Array(5)].map((_, index) => (
                                    <svg key={index} xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                        <path d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z" fill="#FFA500" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <button onClick={openModal} className="mt-[20px] w-full py-[10px] bg-[#C0C] rounded-[10px] text-white">
                            Fikir qoldirish
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalVisible && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <label htmlFor=""  className='block mb-[20px]'>
                            <h3 className="font-bold text-[18px] mb-[10px]">Ismingiz</h3>
                            <input type="text" className='w-full px-[10px ] py-[8px] rounded-[15px]' />
                        </label>
                        <label htmlFor="">
                        <h3 className="font-bold text-[18px] mb-[10px]">Fikringiz</h3>
                        <textarea placeholder="" className="w-full h-[100px] p-[10px] border rounded"></textarea>
                        </label>
                        <button onClick={closeModal} className="mt-[10px] w-full py-[10px] bg-[#C0C] rounded-[10px] text-white">
                            Yuborish
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
