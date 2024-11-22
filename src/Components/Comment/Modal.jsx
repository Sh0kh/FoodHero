import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import ReactStars from 'react-stars'; // Импортируем компонент ReactStars

export default function Modal({ isOpen, onClose, refresh }) {
    const [info, setInfo] = useState('');
    const [rating, setRating] = useState(0); // Состояние для хранения рейтинга
    const { ID } = useParams();
    const navigate = useNavigate()
    // Функция для создания комментария
    const createComment = async () => {
        if (!info.trim()) {
            Swal.fire({
                title: 'Ошибка!',
                text: 'Комментарий не может быть пустым.',
                icon: 'warning',
                position: 'top-end',
                timer: 3000,
                timerProgressBar: true,
                showCloseButton: true,
                toast: true,
                showConfirmButton: false,
            });
            return;
        }

        try {
            const newData = {
                foodEstablishmentId: ID,
                rating, // Передаем выбранный рейтинг
                review: info
            };

            await axios.post(`/ratings/create`, newData,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            refresh()
            Swal.fire({
                title: 'Muvaffaqiyatli!',
                icon: 'success',
                position: 'top-end',
                timer: 3000,
                timerProgressBar: true,
                showCloseButton: true,
                toast: true,
                showConfirmButton: false,
            });
            setInfo('');
            setRating(0); // Сброс рейтинга после отправки
            onClose(); // Закрытие модального окна
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.response?.data?.message || 'Ошибка при удалении.',
                icon: 'error',
                position: 'top-end',
                timer: 3000,
                timerProgressBar: true,
                showCloseButton: true,
                toast: true,
                showConfirmButton: false,
            });
            console.log(error)
            if (error.status === 401) {
                navigate('/login')
            }
        }
    };

    return (
        <div>
            {isOpen && (
                <div className="modal-overlay" onClick={onClose}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <label htmlFor="">
                            <h3 className="font-bold text-[18px] mb-[10px]">Fikringiz</h3>
                            <textarea
                                value={info}
                                onChange={(e) => setInfo(e.target.value)}
                                placeholder="Fikr..." className="w-full h-[100px] p-[10px] border rounded resize-none"></textarea>
                        </label>

                        {/* Добавляем компонент ReactStars для рейтинга */}
                        <div className="mt-[10px]">
                            <h4 className="font-bold">Reyting:</h4>
                            <ReactStars
                                count={5} // Количество звезд
                                value={rating} // Значение рейтинга
                                onChange={(newRating) => setRating(newRating)} // Функция для изменения рейтинга
                                size={24} // Размер звезд
                                color2={'#ffd700'} // Цвет активных звезд
                            />
                        </div>

                        <button onClick={createComment} className="mt-[10px] w-full py-[10px] bg-[#C0C] rounded-[10px] text-white">
                            Yuborish
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
