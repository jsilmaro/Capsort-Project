import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AddPaperModal, PaperData } from '../../components/AddPaperModal';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Plus, Search, Filter, User, Calendar, Edit } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import imgLogo from 'figma:asset/5e19f141de3eaf2163fbc9110148fd1204d40355.png';

// Mock data
const initialProjects = [
  { id: 1, title: 'Capstone Title', author: 'Author', year: 'Year', field: 'IOT' },
  { id: 2, title: 'Capstone Title', author: 'Author', year: 'Year', field: 'Database' },
  { id: 3, title: 'Capstone Title', author: 'Author', year: 'Year', field: 'IOT' },
  { id: 4, title: 'Capstone Title', author: 'Author', year: 'Year', field: 'Database' },
  { id: 5, title: 'Capstone Title', author: 'Author', year: 'Year', field: 'IOT' },
  { id: 6, title: 'Capstone Title', author: 'Author', year: 'Year', field: 'Database' },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState(initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<PaperData | undefined>(undefined);
  const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
  const [filters, setFilters] = useState({
    search: '',
    field: '',
    fromYear: '',
    toYear: ''
  });

  const handleLogout = () => {
    navigate('/');
  };

  const handleAddPaper = (paperData: PaperData) => {
    if (modalMode === 'add') {
      const newPaper = {
        id: projects.length + 1,
        title: paperData.title,
        author: paperData.author,
        year: paperData.year,
        field: paperData.field
      };
      setProjects([...projects, newPaper]);
    } else {
      // Edit mode - update existing paper
      setProjects(projects.map(p => 
        p.id === editingProject?.id 
          ? { ...p, title: paperData.title, author: paperData.author, year: paperData.year, field: paperData.field }
          : p
      ));
    }
  };

  const handleEditClick = (project: typeof initialProjects[0]) => {
    setEditingProject({
      id: project.id,
      title: project.title,
      author: project.author,
      year: project.year,
      field: project.field
    });
    setModalMode('edit');
    setIsModalOpen(true);
  };

  const handleDeletePaper = () => {
    if (editingProject) {
      setProjects(projects.filter(p => p.id !== editingProject.id));
    }
  };

  const handleOpenAddModal = () => {
    setEditingProject(undefined);
    setModalMode('add');
    setIsModalOpen(true);
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
                <p className="font-['Poppins'] text-[12px] text-black">Capstone Archiving and Sorting System</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-12">
              <div className="relative">
                <Link to="/admin/dashboard" className="font-['Poppins'] text-[18px] text-[#1a1851]">
                  Projects
                </Link>
                <div className="absolute -bottom-[18px] left-0 w-full h-[2px] bg-[#1a1851]" />
              </div>
              <Link to="/admin/analytics" className="font-['Poppins'] text-[18px] text-black">
                Analytics
              </Link>
              <Link to="/admin/about" className="font-['Poppins'] text-[18px] text-black">
                About Us
              </Link>
            </div>

            {/* Staff Profile */}
            <div 
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => navigate('/admin/profile')}
            >
              <span className="font-['Poppins'] text-[18px] text-black">Staff Name</span>
              <div className="w-[40px] h-[40px] rounded-full border border-black bg-white flex items-center justify-center">
                <User size={18} className="text-black" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-8 py-8">
        {/* Add Paper Button */}
        <div className="flex justify-end mb-8">
          <Button 
            onClick={handleOpenAddModal}
            className="bg-[#1a1851] hover:bg-[#16163f] text-white rounded-[15px] px-6 py-3 h-auto gap-3"
          >
            <Plus size={20} />
            <span className="font-['Poppins'] text-[20px]">Add Paper</span>
          </Button>
        </div>

        <div className="flex gap-8">
          {/* Left Sidebar - Filters */}
          <div className="w-[300px] flex-shrink-0">
            <div className="bg-white rounded-[15px] border border-[#1a1851] p-6">
              {/* Filter Header */}
              <div className="flex items-center gap-3 mb-6">
                <Filter size={30} className="text-[#1a1851]" />
                <h2 className="font-['Poppins'] text-[16px] text-black">Filters</h2>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="font-['Poppins'] text-[16px] text-black mb-2 block">
                  Search
                </label>
                <div className="relative">
                  <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
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
              </div>

              {/* Year */}
              <div className="mb-6">
                <label className="font-['Poppins'] text-[16px] text-black mb-2 block">
                  Year
                </label>
                <div className="space-y-3">
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
            <div className="grid grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-[15px] border-[0.2px] border-black p-6 relative"
                >
                  {/* Title and Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="font-['Poppins'] text-[20px] text-black">
                      {project.title}
                    </h3>
                    <Badge 
                      className={`${getBadgeColor(project.field)} text-black rounded-[15px] px-4 py-1 border-0`}
                    >
                      <span className="font-['Poppins'] text-[12px]">{project.field}</span>
                    </Badge>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 mb-4">
                    <User size={22} className="text-black" />
                    <span className="font-['Poppins'] text-[15px] text-black">{project.author}</span>
                  </div>

                  {/* Year */}
                  <div className="flex items-center gap-3 mb-8">
                    <Calendar size={22} className="text-black" />
                    <span className="font-['Poppins'] text-[15px] text-black">{project.year}</span>
                  </div>

                  {/* Edit Paper Link */}
                  <button 
                    onClick={() => handleEditClick(project)}
                    className="flex items-center justify-end gap-3 cursor-pointer hover:opacity-70 transition-opacity"
                  >
                    <span className="font-['Poppins'] text-[17px] text-black">Edit paper</span>
                    <Edit size={24} className="text-black" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add Paper Modal */}
      <AddPaperModal 
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddPaper}
        onDelete={handleDeletePaper}
        initialData={editingProject}
        mode={modalMode}
      />
    </div>
  );
}