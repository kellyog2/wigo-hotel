import { useLocation } from "react-router-dom";

const BookingSuccess = () => {
  const location = useLocation();

  const bookingData = location.state;

  const transactionId =
    "TRX-" + Math.floor(Math.random() * 100000000);

  const receiptNumber =
    "RCPT-" + Math.floor(Math.random() * 100000);

  const currentDate = new Date().toLocaleString();

  const handlePrint = () => {
    const printContents =
      document.getElementById("print-receipt")?.innerHTML;

    const originalContents = document.body.innerHTML;

    if (printContents) {
      document.body.innerHTML = printContents;

      window.print();

      document.body.innerHTML = originalContents;

      window.location.reload();
    }
  };

  return (
    <>
      {/* SUCCESS PAGE UI */}
      <section className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-black px-6">

        <div className="max-w-xl w-full bg-gray-100 dark:bg-gray-900 rounded-3xl p-10 text-center shadow-lg">

          {/* Success Icon */}
          <div className="w-24 h-24 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto mb-6 text-5xl">
            ✓
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Booking Successful
          </h1>

          {/* Message */}
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
            Thank you for choosing Wigo Hotel & Suite.
            Your reservation has been confirmed successfully.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4">

            <button
              onClick={handlePrint}
              className="flex-1 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-medium hover:opacity-90 transition duration-300"
            >
              Print Receipt
            </button>

            <a
              href="/"
              className="flex-1 bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition duration-300"
            >
              Back To Home
            </a>

          </div>
        </div>
      </section>

      {/* HIDDEN PRINTABLE RECEIPT */}
      <div className="hidden">

        <div id="print-receipt" className="p-10 text-black">

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold">
              Wigo Hotel & Suite
            </h1>

            <p>Luxury Hotel Booking Receipt</p>
          </div>

          <hr className="my-6" />

          <div className="space-y-4 text-lg">

            <div className="flex justify-between">
              <span>Guest Name:</span>
              <span>{bookingData?.name || "Customer"}</span>
            </div>

            <div className="flex justify-between">
              <span>Email:</span>
              <span>{bookingData?.email || "Not Provided"}</span>
            </div>

            <div className="flex justify-between">
              <span>Room Booked:</span>
              <span>
                {bookingData?.room?.title || "Executive Suite"}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Amount Paid:</span>
              <span>
                {bookingData?.room?.price || "$299"}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Transaction ID:</span>
              <span>{transactionId}</span>
            </div>

            <div className="flex justify-between">
              <span>Receipt No:</span>
              <span>{receiptNumber}</span>
            </div>

            <div className="flex justify-between">
              <span>Payment Status:</span>
              <span>Successful</span>
            </div>

            <div className="flex justify-between">
              <span>Date:</span>
              <span>{currentDate}</span>
            </div>

          </div>

          <hr className="my-8" />

          <div className="text-center">
            <p>
              Thank you for choosing Wigo Hotel & Suite.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingSuccess;