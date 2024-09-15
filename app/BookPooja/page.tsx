'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const initialSevaOptions = [
    { id: 1, name: 'Annadanam Seva', cost: 100 },
    { id: 2, name: 'Vastra Seva', cost: 150 },
    { id: 3, name: 'Vidya Seva', cost: 200 },
];

const BookPooja: React.FC = () => {
    const [formData, setFormData] = useState({
        sevaIds: [] as number[],
        name: '',
        email: '',
        phone: '',
        date: '',
        time: [] as string[],
        receipt: ''
    });
    const [sevaOptions, setSevaOptions] = useState(initialSevaOptions);
    const [totalCost, setTotalCost] = useState(0);
    const [paymentStatus, setPaymentStatus] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        if (name === 'sevaIds') {
            const id = parseInt(value);
            setFormData((prevData) => {
                const newSevaIds = checked
                    ? [...prevData.sevaIds, id]
                    : prevData.sevaIds.filter((sevaId) => sevaId !== id);
                calculateTotalCost(newSevaIds);
                return { ...prevData, sevaIds: newSevaIds };
            });
        } else if (name === 'time') {
            const newTime = checked
                ? [...formData.time, value]
                : formData.time.filter((item) => item !== value);
            setFormData({ ...formData, [name]: newTime });
        } else if (name === 'receipt') {
            const file = e.target.files?.[0];
            if (file) {
                const fileUrl = URL.createObjectURL(file);
                setFormData({ ...formData, receipt: fileUrl });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const calculateTotalCost = (selectedSevaIds: number[]) => {
        const selectedSevas = sevaOptions.filter(seva => selectedSevaIds.includes(seva.id));
        const cost = selectedSevas.reduce((acc, seva) => acc + seva.cost, 0);
        setTotalCost(cost);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.receipt && paymentStatus) {
            console.log('Form submitted:', formData, totalCost);
        } else {
            alert('Please upload the payment receipt and complete the payment before submitting the form.');
        }
    };

    return (
        <main className="bg-white min-h-screen py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">Book a Seva</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Select Seva(s)</label>
                            <div className="space-y-2">
                                {sevaOptions.map(seva => (
                                    <label key={seva.id} className="inline-flex items-center space-x-3">
                                        <input
                                            type="checkbox"
                                            value={seva.id}
                                            name="sevaIds"
                                            checked={formData.sevaIds.includes(seva.id)}
                                            onChange={handleChange}
                                            className="form-checkbox h-5 w-5 text-blue-500"
                                        />
                                        <span className="text-gray-700">{seva.name} - ₹{seva.cost}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-3 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full p-3 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                                className="w-full p-3 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time</label>
                            <div className="flex items-center space-x-6">
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        value="Morning"
                                        name="time"
                                        checked={formData.time.includes('Morning')}
                                        onChange={handleChange}
                                        className="form-checkbox h-5 w-5 text-blue-500"
                                    />
                                    <span className="ml-2 text-gray-700">Morning</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        value="Evening"
                                        name="time"
                                        checked={formData.time.includes('Evening')}
                                        onChange={handleChange}
                                        className="form-checkbox h-5 w-5 text-blue-500"
                                    />
                                    <span className="ml-2 text-gray-700">Evening</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        value="On Visit"
                                        name="time"
                                        checked={formData.time.includes('On Visit')}
                                        onChange={handleChange}
                                        className="form-checkbox h-5 w-5 text-blue-500"
                                    />
                                    <span className="ml-2 text-gray-700">On Visit</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex items-center space-y-4 md:space-y-0 md:space-x-4">
                            <span className="text-xl font-bold">Total Cost: ₹{totalCost}</span>
                        </div>
                        <div className="mt-4">
                            <Image
                                src="/images/ppp.png"
                                alt="QR Code"
                                width={200}
                                height={200}
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <label htmlFor="receipt" className="block text-sm font-semibold text-gray-700 mb-2">Upload Payment Receipt</label>
                            <input
                                type="file"
                                id="receipt"
                                name="receipt"
                                onChange={handleChange}
                                accept="image/*"
                                className="w-full p-3 text-gray-700 border border-gray-300 rounded-md"
                            />
                            {formData.receipt && (
                                <div className="mt-4">
                                    <Image
                                        src={formData.receipt}
                                        alt="Payment Receipt"
                                        width={300}
                                        height={300}
                                        className="object-cover"
                                    />
                                </div>
                            )}
                            <p className="mt-2 text-gray-700">Upload a screenshot of the payment to book the service.You will recieve the message on confirmation.</p>
                        </div>
                        <div className='w-100 text-center'>
                            <button
                                type="submit"
                                className="bg-orange-500 text-center text-white font-bold p-3 hover:bg-transparent hover:text-orange-500 border-2 border-orange-500 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
                            >
                                Submit Booking
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default BookPooja;