import axios from '../../Utils/axios';
import { useEffect, useState } from 'react';
import Select from 'react-select';

export default function Header({onCityChange}) {
    const customStyles = {
        control: (base) => ({
            ...base,
            backgroundColor: 'transparent',
            borderRadius: '8px',
            boxShadow: 'none',
            borderColor: 'transparent',
            '&:hover': {
                borderColor: 'none',
            },
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? '#ddd' : 'white',
            color: state.isSelected ? 'blue' : 'black',
            padding: '10px',
        }),
        singleValue: (base) => ({
            ...base,
            color: '#333',
        }),
        menu: (base) => ({
            ...base,
            zIndex: 1000,
        }),
    };

    const [regions, setRegions] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);

    const fetchRegions = async () => {
        try {
            const response = await axios.get('/regions/get');
            const regionOptions = response.data.map(i => ({
                value: i.id,
                label: i.name
            }));
            setRegions(regionOptions);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchCities = async (regionId) => {
        try {
            const response = await axios.get(`/cities/region/${regionId}`);
            const cityOptions = response.data.map(i => ({
                value: i.id,
                label: i.name
            }));
            setCities(cityOptions);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchRegions();
    }, []);

    useEffect(() => {
        if (selectedRegion) {
            fetchCities(selectedRegion.value);
        } else {
            setCities([]); // Clear cities when no region is selected
        }
    }, [selectedRegion]);

    useEffect(() => {
        if (selectedCity) {
            localStorage.setItem('CityId', selectedCity.value);
            onCityChange(selectedCity.value);  // Pass selected city ID to the parent
        }
    }, [selectedCity, onCityChange]);  // Ensure the parent gets updated city ID

    return (
        <div className="Header bg-[#F1EEF1] py-[20px] w-full">
            <div className="Container">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12.0001 14C14.2061 14 16.0001 12.206 16.0001 10C16.0001 7.794 14.2061 6 12.0001 6C9.79406 6 8.00006 7.794 8.00006 10C8.00006 12.206 9.79406 14 12.0001 14ZM12.0001 8C13.1031 8 14.0001 8.897 14.0001 10C14.0001 11.103 13.1031 12 12.0001 12C10.8971 12 10.0001 11.103 10.0001 10C10.0001 8.897 10.8971 8 12.0001 8Z" fill="#706670" />
                            <path d="M11.4201 21.814C11.5893 21.9349 11.7921 21.9998 12.0001 21.9998C12.2081 21.9998 12.4108 21.9349 12.5801 21.814C12.8841 21.599 20.0291 16.44 20.0001 10C20.0001 5.589 16.4111 2 12.0001 2C7.58909 2 4.00009 5.589 4.00009 9.995C3.97109 16.44 11.1161 21.599 11.4201 21.814ZM12.0001 4C15.3091 4 18.0001 6.691 18.0001 10.005C18.0211 14.443 13.6121 18.428 12.0001 19.735C10.3891 18.427 5.97909 14.441 6.00009 10C6.00009 6.691 8.69109 4 12.0001 4Z" fill="#706670" />
                        </svg>
                        <Select
                            styles={customStyles}
                            placeholder="Select Region"
                            className="border-none w-[160px]"
                            isClearable
                            options={regions}
                            value={selectedRegion}
                            onChange={(option) => {
                                setSelectedRegion(option);
                                setSelectedCity(null); // Clear city selection when region changes
                            }}
                        />
                    </div>
                        {selectedRegion && (
                            <Select
                                styles={customStyles}
                                placeholder="Select City"
                                className="border-none w-[160px] ml-4"
                                isClearable
                                options={cities}
                                value={selectedCity}
                                onChange={setSelectedCity}
                            />
                        )}
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
}
