import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { X } from 'lucide-react';
import imgDownArrow1 from "figma:asset/bcedc4b2b7d51499b885be3cbd4a2cfde3b64ad1.png";
import imgTrash1 from "figma:asset/f2a618d9d063a5a882d9001a79266c8923e43b84.png";
import imgRefresh1 from "figma:asset/d2ce8e612b6c10da577b23b78a1c46fbb8610600.png";

interface AddPaperModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (paper: PaperData) => void;
  onDelete?: () => void;
  initialData?: PaperData;
  mode?: 'add' | 'edit';
}

export interface PaperData {
  id?: number;
  title: string;
  author: string;
  field: string;
  year: string;
  file?: File | null;
}

export function AddPaperModal({ open, onClose, onSave, onDelete, initialData, mode = 'add' }: AddPaperModalProps) {
  const [formData, setFormData] = useState<PaperData>(
    initialData || {
      title: '',
      author: '',
      field: '',
      year: new Date().getFullYear().toString(),
      file: null
    }
  );

  // Update form data when initialData changes
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        title: '',
        author: '',
        field: '',
        year: new Date().getFullYear().toString(),
        file: null
      });
    }
  }, [initialData, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
      onClose();
    }
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => currentYear - i);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-[700px] p-0 gap-0 rounded-[20px] border border-[#1a1851]">
        {/* Accessibility Title (visually hidden) */}
        <DialogTitle className="sr-only">
          {mode === 'add' ? 'Add Capstone Paper' : 'Edit Capstone Paper'}
        </DialogTitle>
        
        {/* Accessibility Description (visually hidden) */}
        <DialogDescription className="sr-only">
          Enter the details of the capstone paper to add it to the repository.
        </DialogDescription>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-[31px] top-[29px] size-[40px] rounded-full bg-white border border-black flex items-center justify-center hover:bg-gray-50 z-10"
        >
          <X size={15} className="text-black" />
        </button>

        {/* Header */}
        <div className="pt-[65px] px-[40px]">
          <h2 className="font-['Poppins'] font-medium text-[26px] text-black mb-[8px]">
            {mode === 'add' ? 'Add Capstone Paper' : 'Edit Capstone Paper'}
          </h2>
          <p className="font-['Poppins'] font-light text-[12px] text-black mb-[33px]">
            Enter the details of the capstone paper to add it to the repository.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-[40px] pb-[35px]">
          <div className="space-y-[18px]">
            {/* Title Field */}
            <div>
              <label className="font-['Poppins'] text-[14px] text-black mb-[8px] block">
                Title
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter paper title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full h-[35px] px-[25px] bg-white border border-[#1a1851] rounded-[8px] font-['Poppins'] text-[12px] text-black placeholder:text-[#929292] focus:outline-none focus:ring-0"
                  required
                />
              </div>
            </div>

            {/* Author Field */}
            <div>
              <label className="font-['Poppins'] text-[14px] text-black mb-[8px] block">
                Author
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter author name"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full h-[35px] px-[25px] bg-white border border-[#d8d8d8] rounded-[8px] font-['Poppins'] text-[12px] text-black placeholder:text-[#929292] focus:outline-none focus:ring-0"
                  required
                />
              </div>
            </div>

            {/* Year and Field Row */}
            <div className="flex gap-[17px]">
              {/* Year Field */}
              <div className="flex-1">
                <label className="font-['Poppins'] text-[14px] text-black mb-[8px] block">
                  Year
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="2025"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full h-[35px] px-[25px] bg-white border border-[#d8d8d8] rounded-[8px] font-['Poppins'] text-[12px] text-black placeholder:text-[#929292] focus:outline-none focus:ring-0"
                    required
                  />
                </div>
              </div>

              {/* Field Dropdown */}
              <div className="flex-1">
                <label className="font-['Poppins'] text-[14px] text-black mb-[8px] block">
                  Field
                </label>
                <div className="relative">
                  <Select 
                    value={formData.field} 
                    onValueChange={(value) => setFormData({ ...formData, field: value })}
                  >
                    <SelectTrigger className="w-full h-[35px] px-[25px] bg-white border border-[#d8d8d8] rounded-[8px] font-['Poppins'] text-[12px] text-[#929292] focus:ring-0 focus:ring-offset-0">
                      <SelectValue placeholder="Select field" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="IoT">IoT</SelectItem>
                      <SelectItem value="Database">Database</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="absolute right-[13px] top-1/2 -translate-y-1/2 pointer-events-none size-[15px]">
                    <img 
                      src={imgDownArrow1} 
                      alt="" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-[14px] justify-center mt-[48px]">
            {mode === 'edit' ? (
              <>
                {/* Move to Trash Button */}
                <button
                  type="button"
                  onClick={handleDelete}
                  className="w-[158px] h-[34px] bg-[rgba(250,29,29,0.8)] rounded-[8px] flex items-center justify-center gap-[9px] hover:bg-[rgba(250,29,29,0.9)]"
                >
                  <div className="relative shrink-0 size-[18px]">
                    <img 
                      src={imgTrash1} 
                      alt="" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-['Poppins'] font-bold text-[14px] text-white">
                    Move to Trash
                  </span>
                </button>
                
                {/* Update Paper Button */}
                <button
                  type="submit"
                  className="w-[158px] h-[34px] bg-[#1a1851] rounded-[8px] flex items-center justify-center gap-[10px] hover:bg-[#0B1441]"
                >
                  <div className="relative shrink-0 size-[18px]">
                    <img 
                      src={imgRefresh1} 
                      alt="" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-['Poppins'] font-bold text-[14px] text-white">
                    Update Paper
                  </span>
                </button>
              </>
            ) : (
              <>
                {/* Cancel Button */}
                <button
                  type="button"
                  onClick={onClose}
                  className="w-[122px] h-[34px] bg-white border border-[#d8d8d8] rounded-[8px] font-['Poppins'] font-light text-[14px] text-black hover:bg-gray-50"
                >
                  Cancel
                </button>
                
                {/* Add Paper Button */}
                <button
                  type="submit"
                  className="w-[122px] h-[34px] bg-[#1a1851] rounded-[8px] font-['Poppins'] font-bold text-[14px] text-white hover:bg-[#0B1441]"
                >
                  Add Paper
                </button>
              </>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}