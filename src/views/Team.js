import React from "react";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
    { name: "Dr. Subhadeep Sarkar", role: "Founder and PI", linkedin: "https://www.linkedin.com/in/sarkarsubhadeep/" },
    { name: "Arun Shrestha", role: "Developer", linkedin: "https://www.linkedin.com/in/arun-shrestha-b2b324a0/" },
    { name: "Sherren Jielita", role: "Developer", linkedin: "https://www.linkedin.com/in/sherren-jie-1706a1236/" },
    { name: "Minjie Tang", role: "Developer", linkedin: "https://www.linkedin.com/in/minjie-tang/" },
];

const Team = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Our Team</h1>
            <ul>
                {teamMembers.map((member, index) => (
                    <li key={index} className="mb-4">
                        <p className="text-xl font-semibold">{member.name}</p>
                        <p className="text-sm italic text-gray-600">{member.role}</p>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
                            <FaLinkedin className="mr-2" /> LinkedIn Profile
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Team;