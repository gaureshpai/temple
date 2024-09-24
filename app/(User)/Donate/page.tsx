import React from 'react';
import Image from 'next/image';

const BankDetailsPage = () => {
  const qrCodeUrl = "/images/ppp.png";

  return (
    <div className="bg-white py-12 px-4 md:px-8 text-center" id='BankDetailsPage'>
      <div className="flex justify-center text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Bank Details</h1>
        <hr className="border-t-2 border-orange-500 my-2 mx-auto w-1/12" />
      </div>

      <div className="max-w-7xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Bank Name:</h2>
          <p className="text-gray-700">Sample Bank</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Account Number:</h2>
          <p className="text-gray-700">1234567890</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Account Name:</h2>
          <p className="text-gray-700">Sample Account Name</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">IFSC Code:</h2>
          <p className="text-gray-700">IFSC0001234</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">QR Code:</h2>
          <Image
            src={qrCodeUrl}
            alt="Bank QR Code"
            width={150}
            height={150}
            className="w-36 h-36 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default BankDetailsPage;