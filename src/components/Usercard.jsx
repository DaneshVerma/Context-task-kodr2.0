import { useContext } from "react";
import { Mystore } from "../Context/UserContext";

const Usercard = () => {
    const {userData, isDark} = useContext(Mystore);
    if (!userData || userData.length === 0) return (
        <div className={`w-full md:w-1/2 p-8 rounded-lg shadow-lg ${
            isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        } transition-colors duration-300`}>
            <h2 className="text-2xl font-bold mb-4">No Users Registered</h2>
            <p className="text-gray-500">Register to see user cards here.</p>
        </div>
    );

    return (
        <div className={`w-full md:w-1/2 p-8 rounded-lg shadow-lg ${
            isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        } transition-colors duration-300`}>
            <h2 className="text-2xl font-bold mb-6">Registered Users</h2>
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {userData.map((user, index) => (
                    <div 
                        key={index} 
                        className={`rounded-lg p-6 ${
                            isDark 
                                ? 'bg-gray-700 hover:bg-gray-600' 
                                : 'bg-gray-50 hover:bg-gray-100'
                        } transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                    >
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                                {user.username ? user.username[0].toUpperCase() : '?'}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">{user.username}</h3>
                                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {user.email}
                                </p>
                            </div>
                        </div>
                        <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            <p className="flex items-center gap-2">
                                <span>📱</span>
                                {user.mobile}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ); }

export default Usercard;