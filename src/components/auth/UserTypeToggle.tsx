interface UserTypeToggleProps {
  value: 'admin' | 'student';
  onChange: (value: 'admin' | 'student') => void;
}

export function UserTypeToggle({ value, onChange }: UserTypeToggleProps) {
  return (
    <div className="flex gap-0 rounded-[8px] border border-[#1a1851] bg-white overflow-hidden">
      <button
        type="button"
        onClick={() => onChange('admin')}
        className={`flex-1 px-8 py-2 font-['Poppins'] text-[14px] transition-colors ${
          value === 'admin'
            ? 'bg-[#1a1851] text-white'
            : 'bg-white text-black'
        }`}
      >
        Admin
      </button>
      <button
        type="button"
        onClick={() => onChange('student')}
        className={`flex-1 px-8 py-2 font-['Poppins'] text-[14px] transition-colors ${
          value === 'student'
            ? 'bg-[#1a1851] text-white'
            : 'bg-white text-black'
        }`}
      >
        Student
      </button>
    </div>
  );
}
