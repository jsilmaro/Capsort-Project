import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { X } from 'lucide-react';
import imgBook1 from "figma:asset/22c5a9b89d06999e984cc6e854a0e2d703b90455.png";
import imgPeople10 from "figma:asset/d85598bb0a80b77f3c21d66bd108017142a90408.png";
import imgCalendar7 from "figma:asset/9f3d7d4eaaeb110fcab009a228c3e24b4f2519e5.png";
import imgSaveInstagram4 from "figma:asset/8b6c68e7b8b5cbd54a40c396c941ac7b263ae894.png";

interface ViewPaperModalProps {
  open: boolean;
  onClose: () => void;
  paper: {
    title: string;
    author: string;
    year: string;
    field: string;
  };
  onSave?: () => void;
}

export function ViewPaperModal({ open, onClose, paper, onSave }: ViewPaperModalProps) {
  const getBadgeColor = (field: string) => {
    if (field === 'IOT') return 'bg-[#34c759]';
    if (field === 'Database') return 'bg-[#ffcc00]';
    return 'bg-[#34c759]';
  };

  const handleSaveClick = () => {
    if (onSave) {
      onSave();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-[700px] h-[400px] p-0 gap-0 rounded-[20px] border border-[#1a1851]">
        {/* Accessibility Title (visually hidden) */}
        <DialogTitle className="sr-only">
          View Capstone Paper
        </DialogTitle>
        
        {/* Accessibility Description (visually hidden) */}
        <DialogDescription className="sr-only">
          View details of the capstone paper including title, author, year, and field.
        </DialogDescription>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-[31px] top-[29px] size-[40px] rounded-full bg-white border border-black flex items-center justify-center hover:bg-gray-50 z-10"
        >
          <X size={15} className="text-black" />
        </button>

        {/* Content */}
        <div className="pt-[77px] px-[107px] pb-[70px] h-full flex flex-col">
          {/* Header Section */}
          <div className="flex items-start gap-[23px] mb-[52px]">
            {/* Book Icon */}
            <div className="shrink-0 size-[40px] bg-[rgba(26,24,81,0.1)] rounded-[10px] border border-[#1a1851] border-[0.1px] flex items-center justify-center">
              <img src={imgBook1} alt="" className="w-[35px] h-[35px]" />
            </div>

            {/* Title and Tag */}
            <div>
              <h2 className="font-['Poppins'] font-medium text-[28px] text-black mb-[11px]">
                {paper.title}
              </h2>
              <div className={`${getBadgeColor(paper.field)} inline-flex items-center justify-center rounded-[15px] px-[9px] h-[22px] min-w-[90px]`}>
                <span className="font-['Poppins'] font-semibold text-[14px] text-black text-center">
                  {paper.field}
                </span>
              </div>
            </div>
          </div>

          {/* Author and Year */}
          <div className="flex flex-col gap-[16px] mb-auto">
            <div className="flex items-center gap-[16px]">
              <img src={imgPeople10} alt="" className="w-[24px] h-[24px]" />
              <span className="font-['Poppins'] font-light text-[17px] text-black">
                {paper.author}
              </span>
            </div>
            <div className="flex items-center gap-[16px]">
              <img src={imgCalendar7} alt="" className="w-[24px] h-[24px]" />
              <span className="font-['Poppins'] font-light text-[17px] text-black">
                {paper.year}
              </span>
            </div>
          </div>

          {/* Add to Saved Projects */}
          <div className="flex items-center justify-end">
            <button 
              onClick={handleSaveClick}
              className="flex items-center gap-[21px] hover:opacity-70 transition-opacity"
            >
              <span className="font-['Poppins'] font-light text-[17px] text-black">
                Add to Saved Projects
              </span>
              <img src={imgSaveInstagram4} alt="" className="w-[30px] h-[30px]" />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
