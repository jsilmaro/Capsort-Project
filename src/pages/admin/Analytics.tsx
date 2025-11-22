import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent } from '../../components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { User } from 'lucide-react';
import imgLogo from "figma:asset/5e19f141de3eaf2163fbc9110148fd1204d40355.png";
import imgWave1 from "figma:asset/ba56d7e7444bd13beb9ea786959f018859428f69.png";
import imgFolder1 from "figma:asset/9eaf329b5d94d5d48a8803c555624260a28decfc.png";
import imgPeople11 from "figma:asset/5c147f29514e716211c9b3bad549ec2f7681031e.png";
import imgStar1 from "figma:asset/7a3ef37f6ffa0f76b4b85d5a7dc1dd3f36988545.png";
import imgSearching1 from "figma:asset/b0608fe40b14641daf89205557a2d190565bd295.png";
import imgPeople10 from "figma:asset/d85598bb0a80b77f3c21d66bd108017142a90408.png";
import imgCalendar7 from "figma:asset/9f3d7d4eaaeb110fcab009a228c3e24b4f2519e5.png";

// Mock data for charts
const projectsData = [
  { year: '2013', IOT: 100, Database: 80 },
  { year: '2014', IOT: 40, Database: 90 },
  { year: '2015', IOT: 60, Database: 20 },
  { year: '2016', IOT: 50, Database: 100 },
  { year: '2017', IOT: 100, Database: 80 },
  { year: '2018', IOT: 70, Database: 40 },
  { year: '2019', IOT: 90, Database: 100 },
  { year: '2020', IOT: 100, Database: 30 },
];

const topSavedProjects = [
  { name: 'IoT Smart Bin', saves: 120, color: '#34c759' },
  { name: 'Database Analyzer', saves: 60, color: '#ffcc00' },
  { name: 'IoT Smart Bin', saves: 24, color: '#34c759' },
  { name: 'Database Analyzer', saves: 20, color: '#ffcc00' },
  { name: 'IoT Smart Bin', saves: 10, color: '#34c759' },
];

const trackDistribution = [
  { name: 'IOT', value: 65, color: '#34c759' },
  { name: 'Database', value: 35, color: '#ffcc00' },
];

export default function Analytics() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-[#d8d8d8]">
        <div className="mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Title */}
            <div className="flex items-center gap-4">
              <div className="w-[38px] h-[50px] relative overflow-hidden">
                <img 
                  src={imgLogo} 
                  alt="CapSort Logo" 
                  className="absolute h-[123.24%] left-0 top-[-9.86%] w-[263.3%] max-w-none object-cover"
                />
              </div>
              <div>
                <h1 className="font-['Poppins'] text-[20px] text-[#1a1851]">Capsort</h1>
                <p className="font-['Poppins'] text-[12px] text-black">Capstone Archiving and Sorting System</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-12">
              <Link to="/admin/dashboard" className="font-['Poppins'] text-[18px] text-black">
                Projects
              </Link>
              <div className="relative">
                <Link to="/admin/analytics" className="font-['Poppins'] text-[18px] text-[#1a1851]">
                  Analytics
                </Link>
                <div className="absolute -bottom-[18px] left-0 w-full h-[2px] bg-[#1a1851]" />
              </div>
              <Link to="/admin/about" className="font-['Poppins'] text-[18px] text-black">
                About Us
              </Link>
            </div>

            {/* Staff Profile */}
            <div className="flex items-center gap-3">
              <span className="font-['Poppins'] text-[18px] text-black">Staff Name</span>
              <div className="w-[40px] h-[40px] rounded-full border border-black bg-white flex items-center justify-center">
                <User size={18} className="text-black" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-8 py-8">
        {/* Greeting Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="font-['Poppins'] text-[32px] text-black">Hi, Admin!</h1>
            <img src={imgWave1} alt="👋" className="w-[40px] h-[40px] object-contain" />
          </div>
          <p className="font-['Poppins'] text-[16px] text-black">
            This is the overview of student activity and project performance
          </p>
        </div>

        {/* Summary Cards Row */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {/* Total Projects Card */}
          <Card className="bg-[#c9c7ff] border-0 rounded-[15px]">
            <CardContent className="p-6">
              <div className="w-[42px] h-[42px] bg-white rounded-[21px] flex items-center justify-center mb-3">
                <img src={imgFolder1} alt="" className="w-[22px] h-[22px]" />
              </div>
              <p className="font-['Poppins'] text-[14px] text-black mb-2">Total Projects</p>
              <p className="font-['Poppins'] text-[16px] text-black">900 uploaded capstones</p>
            </CardContent>
          </Card>

          {/* Active Students Card */}
          <Card className="bg-white border border-[#d8d8d8] rounded-[15px]">
            <CardContent className="p-6">
              <div className="w-[42px] h-[42px] bg-[#c9c7ff] rounded-[21px] flex items-center justify-center mb-3">
                <img src={imgPeople11} alt="" className="w-[22px] h-[22px]" />
              </div>
              <p className="font-['Poppins'] text-[14px] text-black mb-2">Active Students</p>
              <p className="font-['Poppins'] text-[16px] text-black">124 users active this month</p>
            </CardContent>
          </Card>

          {/* Total Saves Card */}
          <Card className="bg-white border border-[#d8d8d8] rounded-[15px]">
            <CardContent className="p-6">
              <div className="w-[42px] h-[42px] bg-[#c9c7ff] rounded-[21px] flex items-center justify-center mb-3">
                <img src={imgStar1} alt="" className="w-[22px] h-[22px]" />
              </div>
              <p className="font-['Poppins'] text-[14px] text-black mb-2">Total Saves/Favorites</p>
              <p className="font-['Poppins'] text-[16px] text-black">890 total saved items</p>
            </CardContent>
          </Card>

          {/* Most Viewed Project Card */}
          <Card className="bg-white border border-[#d8d8d8] rounded-[15px]">
            <CardContent className="p-6">
              <div className="w-[42px] h-[42px] bg-[#c9c7ff] rounded-[21px] flex items-center justify-center mb-3">
                <img src={imgSearching1} alt="" className="w-[22px] h-[22px]" />
              </div>
              <p className="font-['Poppins'] text-[14px] text-black mb-2">Most Viewed Project</p>
              <p className="font-['Poppins'] text-[16px] text-black mb-3">
                <span className="font-semibold">"IoT Smart Bin"</span>
                <span className="font-light"> – 320 views</span>
              </p>
              
              {/* Tag */}
              <div className="inline-flex items-center gap-2 bg-[#34c759] rounded-[15px] px-3 py-1 mb-4">
                <span className="font-['Poppins'] text-[14px] text-black">IOT</span>
              </div>

              {/* Author and Year */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <img src={imgPeople10} alt="" className="w-[24px] h-[24px]" />
                  <span className="font-['Poppins'] font-light text-[17px] text-black">Author</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={imgCalendar7} alt="" className="w-[24px] h-[24px]" />
                  <span className="font-['Poppins'] font-light text-[17px] text-black">Year</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Total Projects Graph */}
          <Card className="col-span-2 bg-white border border-[#d8d8d8] rounded-[15px]">
            <CardContent className="p-6">
              <div className="mb-4">
                <p className="font-['Poppins'] text-[14px] text-[#1a1851] mb-1">Total Projects</p>
                <p className="font-['Poppins'] text-[16px] text-[#1a1851]">over the years (2013 - present)</p>
              </div>
              
              {/* Legend */}
              <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-[10px] h-[10px] bg-[#34c759]" />
                  <span className="font-['Poppins'] text-[14px] text-[#1a1851]">IOT</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[10px] h-[10px] bg-[#ffcc00]" />
                  <span className="font-['Poppins'] text-[14px] text-[#1a1851]">Database</span>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={projectsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="year" 
                    tick={{ fontSize: 14, fontFamily: 'Poppins', fill: '#1a1851' }}
                  />
                  <YAxis 
                    tick={{ fontSize: 14, fontFamily: 'Poppins', fill: '#1a1851' }}
                    domain={[0, 100]}
                    ticks={[0, 20, 40, 60, 80, 100]}
                  />
                  <Tooltip />
                  <Bar dataKey="IOT" fill="#34c759" radius={[5, 5, 0, 0]} barSize={20} />
                  <Bar dataKey="Database" fill="#ffcc00" radius={[5, 5, 0, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Saves by Track Card */}
          <Card className="bg-white border border-[#d8d8d8] rounded-[15px]">
            <CardContent className="p-6">
              <div className="mb-4">
                <p className="font-['Poppins'] text-[14px] text-black mb-1">Track Distribution</p>
                <p className="font-['Poppins'] text-[16px] text-black">Saves by Track</p>
              </div>

              <div className="flex justify-center mb-4">
                <ResponsiveContainer width={150} height={150}>
                  <PieChart>
                    <Pie
                      data={trackDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={45}
                      outerRadius={75}
                      paddingAngle={0}
                      dataKey="value"
                    >
                      {trackDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Legend */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-[10px] h-[10px] bg-[#34c759]" />
                  <span className="font-['Poppins'] text-[14px] text-[#1a1851]">IOT</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[10px] h-[10px] bg-[#ffcc00]" />
                  <span className="font-['Poppins'] text-[14px] text-[#1a1851]">Database</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top 5 Most Saved Projects */}
        <Card className="bg-white border border-[#d8d8d8] rounded-[15px]">
          <CardContent className="p-6">
            <p className="font-['Poppins'] text-[14px] text-[#1a1851] mb-6">TOP 5 Most Saved Projects</p>
            
            <div className="space-y-4">
              {topSavedProjects.map((project, index) => (
                <div key={index} className="flex items-center gap-4">
                  <p className="font-['Poppins'] text-[16px] text-[#1a1851] w-[150px]">
                    {project.name}
                  </p>
                  <div className="flex-1 h-[20px] bg-gray-100 rounded-[5px] overflow-hidden">
                    <div 
                      className="h-full rounded-[5px]"
                      style={{ 
                        width: `${(project.saves / 120) * 100}%`,
                        backgroundColor: project.color 
                      }}
                    />
                  </div>
                  <p className="font-['Poppins'] text-[14px] text-[#929292] w-[80px] text-right">
                    {project.saves} saves
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}