export default function Message() {
    return (
        <div className="">
<form action="">
            <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">

                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <p className="mb-8 text-gray-600">We'd love to hear from you!</p>
                <input
                    type="text"
                    placeholder="Your Name"
                    className="mb-4 p-2 border border-gray-300 rounded w-80"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="mb-4 p-2 border border-gray-300 rounded w-80"
                />
                <textarea
                    placeholder="Your Message"
                    className="mb-4 p-2 border border-gray-300 rounded w-80 h-32"
                ></textarea>
                <button
                    type="submit"
                    className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-950 transition-colors"
                >
                    Send Message
                </button>
            </div>
</form>
        </div>
    );
}