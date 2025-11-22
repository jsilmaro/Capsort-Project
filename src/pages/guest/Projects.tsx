import { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { FilterSidebar, FilterValues } from '../../components/FilterSidebar';
import { CapstoneCard } from '../../components/CapstoneCard';

// Mock data
const mockProjects = [
  { id: 1, title: 'Smart Home Automation System', author: 'John Doe', year: 2024, field: 'IoT' },
  { id: 2, title: 'Student Management Database', author: 'Jane Smith', year: 2024, field: 'Database' },
  { id: 3, title: 'IoT Weather Monitoring', author: 'Mike Johnson', year: 2023, field: 'IoT' },
  { id: 4, title: 'Library Management System', author: 'Sarah Williams', year: 2023, field: 'Database' },
  { id: 5, title: 'Smart Agriculture System', author: 'David Brown', year: 2024, field: 'IoT' },
  { id: 6, title: 'E-Commerce Database Design', author: 'Emily Davis', year: 2023, field: 'Database' },
];

export default function GuestProjects() {
  const [filteredProjects, setFilteredProjects] = useState(mockProjects);

  const handleFilterChange = (filters: FilterValues) => {
    let filtered = [...mockProjects];

    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchLower) ||
          project.author.toLowerCase().includes(searchLower) ||
          project.field.toLowerCase().includes(searchLower)
      );
    }

    // Apply field filter
    if (filters.field && filters.field !== 'all') {
      filtered = filtered.filter(
        (project) => project.field.toLowerCase() === filters.field.toLowerCase()
      );
    }

    // Apply year range filter
    if (filters.fromYear) {
      filtered = filtered.filter((project) => project.year >= parseInt(filters.fromYear));
    }
    if (filters.toYear) {
      filtered = filtered.filter((project) => project.year <= parseInt(filters.toYear));
    }

    setFilteredProjects(filtered);
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <Navbar role="guest" />

      <div className="container mx-auto px-8 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar */}
          <div className="w-[300px] flex-shrink-0">
            <FilterSidebar onFilterChange={handleFilterChange} />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="font-['Poppins'] text-[32px] text-black">Capstone Papers</h1>
              <p className="font-['Poppins'] text-[20px] text-[#929292]">
                {filteredProjects.length} papers found
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <CapstoneCard
                  key={project.id}
                  title={project.title}
                  author={project.author}
                  year={project.year}
                  field={project.field}
                />
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="font-['Poppins'] text-[20px] text-[#929292]">
                  No papers found matching your criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
