"use client";

export default function ProjectCard() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-xl font-bold mb-2">Project Title</h2>
                <p className="text-gray-400 mb-4">A brief description of the project goes here.</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                    View Project
                </button>
            </div>
        </div>
    );
}
