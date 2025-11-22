import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Button } from '../../components/ui/button';
import { ViewPaperModal } from '../../components/ViewPaperModal';
import { User } from 'lucide-react';
import imgLogo from "figma:asset/b1661763bfa5e8122ac6b23d679b4b27e62cf20a.png";
import imgFilter11 from "figma:asset/8f876301054a5314c04d0bf2c139407d07d8ede0.png";
import imgPeople3 from "figma:asset/d85598bb0a80b77f3c21d66bd108017142a90408.png";
import imgCaretDown2 from "figma:asset/5ccb523105427f1617e340bd7b68ac1772f1f857.png";
import imgSearchInterfaceSymbol1 from "figma:asset/ae406128f3012b96902d816d28e1503545a493ed.png";
import imgCalendar1 from "figma:asset/9f3d7d4eaaeb110fcab009a228c3e24b4f2519e5.png";

// Mock data
const initialProjects = [
  { id: 1, title: 'Capstone Title', author: 'Author', year: 'Year', field: 'IOT' },
  { id: 2, title: 'Capstone Title', author: 'Author', year: 'Year', field: 'Database' },
  { id: 3, title: 'Capstone Title', author: 'Author', year: 'Year', field: 'IOT' },
  { id: 4, title: 'Capstone Title', author: 'Author', year: 'Year', field: 'Database' },
  { id: 5, title: 'Capstone Title', author: 'Author', year: 'Year', field: 'IOT' },
  { id: 6, title: 'Capstone Title', author: 'Author', year: 'Year', field: 'Database' },
];

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState(initialProjects);
  const [selectedPaper, setSelectedPaper] = useState<typeof initialProjects[0] | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    search: '',
    field: '',
    fromYear: '',
    toYear: ''
  });

  const handleViewClick = (project: typeof initialProjects[0]) => {
    setSelectedPaper(project);
    setIsViewModalOpen(true);
  };

  const handleSavePaper = () => {
    // Handle saving paper to saved projects
    console.log('Paper saved to Saved Projects');
  };

  const handleResetFilter = () => {
    setFilters({
      search: '',
      field: '',
      fromYear: '',
      toYear: ''
    });
  };

  const getBadgeColor = (field: string) => {
    if (field === 'IOT') return 'bg-[#34c759]';
    if (field === 'Database') return 'bg-[#ffcc00]';
    return 'bg-[#34c759]';
  };

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
                <p className="font-['Poppins'] text-[18px] text-black">Capstone Archiving and Sorting System</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-12">
              <div className="relative">
                <Link to="/student/dashboard" className="font-['Poppins'] text-[18px] text-[#1a1851]">
                  Projects
                </Link>
                <div className="absolute -bottom-[18px] left-0 w-full h-[2px] bg-[#1a1851]" />
              </div>
              <Link to="/student/saved-projects" className="font-['Poppins'] text-[18px] text-black">
                Saved Projects
              </Link>
              <Link to="/student/about" className="font-['Poppins'] text-[18px] text-black">
                About Us
              </Link>
            </div>

            {/* Student Profile */}
            <div 
              
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => navigate('/student/profile')}
            
              onClick={() => navigate('/student/profile')}
            >
              <span className="font-['Poppins'] text-[18px] text-black">Student Name</span>
              <div className="w-[40px] h-[40px] rounded-full border border-black bg-white flex items-center justify-center">
                <User size={18} className="text-black" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-8 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar - Filters */}
          <div className="w-[300px] flex-shrink-0">
            <div className="bg-white rounded-[15px] border border-[#1a1851] p-6">
              {/* Filter Header */}
              <div className="flex items-center gap-3 mb-6">
                <img src={imgFilter11} alt="" className="w-[30px] h-[30px]" />
                <h2 className="font-['Poppins'] text-[16px] text-black">Filters</h2>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="font-['Poppins'] text-[16px] text-black mb-2 block">
                  Search
                </label>
                <div className="relative">
                  <img 
                    src={imgSearchInterfaceSymbol1} 
                    alt="" 
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-[15px] h-[15px]"
                  />
                  <Input
                    placeholder="Title, Author, or keyword"
                    value={filters.search}
                    onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                    className="pl-9 h-[35px] rounded-[8px] border-[#d8d8d8] font-['Poppins'] text-[12px] placeholder:text-[#929292]"
                  />
                </div>
              </div>

              {/* Fields */}
              <div className="mb-6">
                <label className="font-['Poppins'] text-[16px] text-black mb-2 block">
                  Fields
                </label>
                <div className="relative">
                  <Select value={filters.field} onValueChange={(value) => setFilters({ ...filters, field: value })}>
                    <SelectTrigger className="h-[35px] rounded-[8px] border-[#d8d8d8] font-['Poppins'] text-[12px] text-[#929292]">
                      <SelectValue placeholder="All Fields" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Fields</SelectItem>
                      <SelectItem value="IOT">IOT</SelectItem>
                      <SelectItem value="Database">Database</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <img src={imgCaretDown2} alt="" className="w-[10px] h-[10px]" />
                  </div>
                </div>
              </div>

              {/* Year */}
              <div className="mb-6">
                <label className="font-['Poppins'] text-[16px] text-black mb-2 block">
                  Year
                </label>
                <div className="space-y-3">
                  <div className="relative">
                    <Select value={filters.fromYear} onValueChange={(value) => setFilters({ ...filters, fromYear: value })}>
                      <SelectTrigger className="h-[35px] rounded-[8px] border-[#d8d8d8] font-['Poppins'] text-[12px] text-[#929292]">
                        <SelectValue placeholder="From Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, i) => 2024 - i).map((year) => (
                          <SelectItem key={year} value={year.toString()}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <img src={imgCaretDown2} alt="" className="w-[10px] h-[10px]" />
                    </div>
                  </div>

                  <div className="relative">
                    <Select value={filters.toYear} onValueChange={(value) => setFilters({ ...filters, toYear: value })}>
                      <SelectTrigger className="h-[35px] rounded-[8px] border-[#d8d8d8] font-['Poppins'] text-[12px] text-[#929292]">
                        <SelectValue placeholder="To Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, i) => 2024 - i).map((year) => (
                          <SelectItem key={year} value={year.toString()}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <img src={imgCaretDown2} alt="" className="w-[10px] h-[10px]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Reset Filter Button */}
              <Button 
                onClick={handleResetFilter}
                className="w-full h-[35px] bg-[#1a1851] hover:bg-[#16163f] text-white rounded-[8px] font-['Poppins'] text-[16px]"
              >
                Reset Filter
              </Button>
            </div>
          </div>

          {/* Main Content - Capstone Cards Grid */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-end justify-between mb-8">
              <div>
                <h1 className="font-['Poppins'] text-[32px] text-black">Capstone Papers</h1>
                <p className="font-['Poppins'] text-[20px] text-[#929292]">
                  {projects.length} papers found
                </p>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-[15px] border-[0.2px] border-black p-6 relative"
                >
                  {/* Title and Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="font-['Poppins'] font-medium text-[20px] text-black">
                      {project.title}
                    </h3>
                    <div className={`${getBadgeColor(project.field)} rounded-[15px] px-3 py-1 min-w-[76px] flex items-center justify-center`}>
                      <span className="font-['Poppins'] text-[12px] text-black">{project.field}</span>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 mb-4">
                    <img src={imgPeople3} alt="" className="w-[22px] h-[22px]" />
                    <span className="font-['Poppins'] font-light text-[15px] text-black">{project.author}</span>
                  </div>

                  {/* Year */}
                  <div className="flex items-center gap-3 mb-8">
                    <img src={imgCalendar1} alt="" className="w-[22px] h-[22px]" />
                    <span className="font-['Poppins'] font-light text-[15px] text-black">{project.year}</span>
                  </div>

                  {/* View Button */}
                  <div className="flex items-center justify-end">
                    <button 
                      className="bg-white border border-[#d8d8d8] rounded-[8px] px-[27px] py-[7px] h-[27px] flex items-center justify-center hover:bg-gray-50"
                      onClick={() => handleViewClick(project)}
                    >
                      <span className="font-['Poppins'] font-light text-[12px] text-black">View</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* View Paper Modal */}
      {selectedPaper && (
        <ViewPaperModal
          open={isViewModalOpen}
          onClose={() => setIsViewModalOpen(false)}
          paper={selectedPaper}
          onSave={handleSavePaper}
        />
      )}
    </div>
  );
}