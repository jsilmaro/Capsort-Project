import { Calendar, User } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

interface CapstoneCardProps {
  title: string;
  author: string;
  year: string | number;
  field: string;
  onClick?: () => void;
}

export function CapstoneCard({ title, author, year, field, onClick }: CapstoneCardProps) {
  // Determine badge color based on field
  const getBadgeColor = (field: string) => {
    const lowerField = field.toLowerCase();
    if (lowerField.includes('iot')) return 'bg-[#34c759]';
    if (lowerField.includes('database')) return 'bg-[#ffcc00]';
    if (lowerField.includes('web')) return 'bg-[#007aff]';
    return 'bg-[#34c759]';
  };

  return (
    <Card 
      className="border-[0.2px] border-black rounded-[15px] cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-['Poppins'] text-[20px] text-black flex-1">
            {title}
          </h3>
          <Badge className={`${getBadgeColor(field)} text-black rounded-[15px] px-3 py-1`}>
            {field}
          </Badge>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <User size={22} className="text-gray-600" />
            <span className="font-['Poppins'] text-[15px] text-black">{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={22} className="text-gray-600" />
            <span className="font-['Poppins'] text-[15px] text-black">{year}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
