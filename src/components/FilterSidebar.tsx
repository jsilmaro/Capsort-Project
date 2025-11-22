import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface FilterSidebarProps {
  onFilterChange?: (filters: FilterValues) => void;
}

export interface FilterValues {
  search: string;
  field: string;
  fromYear: string;
  toYear: string;
}

export function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [filters, setFilters] = useState<FilterValues>({
    search: '',
    field: '',
    fromYear: '',
    toYear: ''
  });

  const handleFilterChange = (key: keyof FilterValues, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleReset = () => {
    const resetFilters = { search: '', field: '', fromYear: '', toYear: '' };
    setFilters(resetFilters);
    onFilterChange?.(resetFilters);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => currentYear - i);

  return (
    <Card className="rounded-[15px] border-[#1a1851] p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Filter size={30} className="text-[#1a1851]" />
          <h2 className="font-['Poppins'] text-[16px] text-black">Filters</h2>
        </div>

        {/* Search */}
        <div>
          <label className="font-['Poppins'] text-[16px] text-black mb-2 block">
            Search
          </label>
          <div className="relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Title, Author, or keyword"
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="pl-9 rounded-[8px] border-[#d8d8d8] text-[12px]"
            />
          </div>
        </div>

        {/* Fields */}
        <div>
          <label className="font-['Poppins'] text-[16px] text-black mb-2 block">
            Fields
          </label>
          <Select value={filters.field} onValueChange={(value) => handleFilterChange('field', value)}>
            <SelectTrigger className="rounded-[8px] border-[#d8d8d8]">
              <SelectValue placeholder="All Fields" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Fields</SelectItem>
              <SelectItem value="iot">IoT</SelectItem>
              <SelectItem value="database">Database</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Year Range */}
        <div>
          <label className="font-['Poppins'] text-[16px] text-black mb-2 block">
            Year
          </label>
          <div className="space-y-3">
            <Select value={filters.fromYear} onValueChange={(value) => handleFilterChange('fromYear', value)}>
              <SelectTrigger className="rounded-[8px] border-[#d8d8d8]">
                <SelectValue placeholder="From Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={filters.toYear} onValueChange={(value) => handleFilterChange('toYear', value)}>
              <SelectTrigger className="rounded-[8px] border-[#d8d8d8]">
                <SelectValue placeholder="To Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Reset Button */}
        <Button 
          onClick={handleReset}
          className="w-full bg-[#1a1851] text-white rounded-[8px] hover:bg-[#0B1441]"
        >
          Reset Filter
        </Button>
      </div>
    </Card>
  );
}