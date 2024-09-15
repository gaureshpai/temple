import Link from 'next/link';
import React from 'react';

const banks = [
    {
        name: 'Canara Bank',
        location: 'Carstreet, Mangaluru',
    },
    {
        name: 'Union Bank of India',
        location: 'Carstreet, Mangaluru',
    },
    {
        name: 'Karnataka Bank Ltd',
        location: 'Carstreet, Mangaluru',
    },
];

const BankName = 'Bank Name';
const AcName = 'Account name';
const AcNum = 'Account number';
const IFSC = 'IFSC code';
const BankAddress = 'Address';

const ContactBank = () => {
    return (
        <div className="bg-gray-50 py-12 px-4 md:px-8" id='ContactBank'>
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Bank Details</h1>
                <hr className="border-t-3 border-orange-500 my-4 mx-auto w-1/12" />
            </div>
            <div className="max-w-5xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Bankers</h2>
                        <ul className="list-disc pl-5 text-gray-700 mb-6">
                            {banks.map((bank, index) => (
                                <li key={index} className="text-gray-800 mb-2">
                                    {bank.name}, {bank.location}
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Online Payments</h2>
                        <div className="space-y-4">
                            <p className="text-gray-700 mb-4 border-b border-gray-300 pb-2">
                                <strong className="font-medium">Bank Name:</strong>
                                <span className="ml-2 text-gray-800">{BankName}</span>
                            </p>
                            <p className="text-gray-700 mb-4 border-b border-gray-300 pb-2">
                                <strong className="font-medium">A/C Name:</strong>
                                <span className="ml-2 text-gray-800">{AcName}</span>
                            </p>
                            <p className="text-gray-700 mb-4 border-b border-gray-300 pb-2">
                                <strong className="font-medium">A/C No.:</strong>
                                <span className="ml-2 text-gray-800">{AcNum}</span>
                            </p>
                            <p className="text-gray-700 mb-4 border-b border-gray-300 pb-2">
                                <strong className="font-medium">IFSC Code:</strong>
                                <span className="ml-2 text-gray-800">{IFSC}</span>
                            </p>
                            <p className="text-gray-700 mb-4">
                                <strong className="font-medium">Address:</strong>
                                <span className="ml-2 text-gray-800">{BankAddress}</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center bg-white border border-gray-300 p-6 rounded-lg shadow-md">
                        <div className="text-center mb-6">
                            <p className="text-lg font-semibold text-gray-800 mb-4">
                                FOR DONATIONS:
                            </p>
                            <Link
                                href="/Donate"
                                className="bg-green-500 text-white font-bold p-3 hover:bg-transparent hover:text-green-500 border-2 border-green-500 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
                            >
                                Donate
                            </Link>
                        </div>
                        <hr className="border-t border-gray-300 my-6 w-full" />
                        <div className="text-center">
                            <p className="text-lg font-semibold text-gray-800 mb-4">
                                CHECK ALL UPDATES:
                            </p>
                            <Link
                                href="/Updates"
                                className="bg-blue-500 text-white font-bold p-3 hover:bg-transparent hover:text-blue-500 border-2 border-blue-500 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
                            >
                                Check All Updates
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactBank;
