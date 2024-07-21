import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';
import dashboardImage from "../assets/dashboard.mp4";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Dashboard() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, [location]);
    const data = [
        { name: 'July', totalUsers: 480, registeredUsers: 202, activeReaders: 144 },
        { name: 'June', totalUsers: 254, registeredUsers: 156, activeReaders: 88 },
        { name: 'May', totalUsers: 198, registeredUsers: 58, activeReaders: 36 },
        { name: 'April', totalUsers: 158, registeredUsers: 44, activeReaders: 18 },
        { name: 'March', totalUsers: 96, registeredUsers: 27, activeReaders: 12 }
    ];
    const pieData = [
        { name: 'Total Users', value: 480 },
        { name: 'Registered Users', value: 202 },
        { name: 'Active Readers', value: 144 }
    ];
    const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

    const isSmallScreen = window.innerWidth < 768;

    return (
        <div className="bg-[#353593] min-w-screen min-h-screen font-wittgenstein p-4 md:p-8">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/2 px-4 py-8 md:py-28">
                    <h1 className="text-white text-3xl md:text-5xl font-bold my-4">
                        Welcome to our <span className="text-[#f1b94a]">Dashboard</span>
                    </h1>
                    <div className="mt-4 flex flex-col gap-4">
                        <p className="bg-yellow-400 text-2xl md:text-3xl text-white py-2 md:py-4 px-4 rounded-lg">
                            Total Users: 480
                        </p>
                        <p className="bg-white text-2xl md:text-3xl text-black py-2 md:py-4 px-4 rounded-lg">
                            Total Active Users: 144
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center items-center">
                    <video
                        className="w-full h-full max-w-xs max-h-xs md:max-w-md md:max-h-md object-cover"
                        src={dashboardImage}
                        autoPlay
                        loop
                        muted
                    />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 mt-8">
                <div className="w-full lg:w-1/2 px-6 md:px-0">
                    <h2 className="text-2xl md:text-4xl text-center font-bold text-white mb-4">User Activity In past five months.</h2>
                    <div className="flex justify-center">
                        <BarChart
                            width={Math.min(window.innerWidth - 40, 600)}
                            height={300}
                            data={data}
                            barCategoryGap={10}
                            className="w-full"
                        >
                            <XAxis
                                dataKey="name"
                                stroke='#ffffff'
                                angle={isSmallScreen ? -90 : 0}
                                textAnchor="end"
                                dx={isSmallScreen ? -10 : 0}
                            />
                            <YAxis stroke='#ffffff' />
                            <Tooltip />
                            {!isSmallScreen && <Legend verticalAlign="top" wrapperStyle={{ marginBottom: 10 }} />}
                            <Bar dataKey="totalUsers" fill="#8884d8" name="Total Users" />
                            <Bar dataKey="registeredUsers" fill="#82ca9d" name="Registered Users" />
                            <Bar dataKey="activeReaders" fill="#ffc658" name="Active Readers" />
                        </BarChart>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 md:flex flex-col items-center">
                    <PieChart
                        width={Math.min(window.innerWidth - 40, isSmallScreen ? 300 : 400)}
                        height={Math.min(window.innerWidth - 40, isSmallScreen ? 300 : 400)}
                        className="w-full"
                    >
                        <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            outerRadius={Math.min(window.innerWidth - 40, isSmallScreen ? 100 : 150)}
                            innerRadius={Math.min(window.innerWidth - 40, isSmallScreen ? 60 : 100)}
                            fill="#8884d8"
                            dataKey="value"
                            label={false} // Hide default labels
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                    <div className="text-center mt-4 text-white">
                        {pieData.map((entry, index) => (
                            <div key={`label-${index}`} style={{ color: COLORS[index % COLORS.length] }}>
                                {entry.name}: {entry.value}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
