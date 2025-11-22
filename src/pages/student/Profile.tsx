import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { Card, CardContent } from '../../components/ui/card';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { CapstoneCard } from '../../components/CapstoneCard';
import { Edit, FileText } from 'lucide-react';

const mockUserPapers = [
  { id: 1, title: 'My Capstone Project', author: 'Current User', year: 2024, field: 'IoT' },
];

export default function StudentProfile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Juan Dela Cruz',
    email: 'juan.delacruz@ustp.edu.ph',
    studentId: '2020-12345'
  });

  const handleLogout = () => {
    navigate('/');
  };

  const handleSave = () => {
    setIsEditing(false);
    // In real app, would save to backend
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <Navbar role="student" onLogout={handleLogout} />

      <div className="container mx-auto px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="rounded-[15px]">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarFallback className="bg-[#1a1851] text-white text-[32px]">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  {!isEditing ? (
                    <>
                      <h2 className="font-['Poppins'] text-[24px] text-[#1a1851] mb-2">
                        {userData.name}
                      </h2>
                      <p className="font-['Poppins'] text-[14px] text-[#929292] mb-1">
                        {userData.email}
                      </p>
                      <p className="font-['Poppins'] text-[14px] text-[#929292] mb-4">
                        Student ID: {userData.studentId}
                      </p>
                      <Button 
                        onClick={() => setIsEditing(true)}
                        variant="outline"
                        className="rounded-[8px] gap-2"
                      >
                        <Edit size={16} />
                        Edit Profile
                      </Button>
                    </>
                  ) : (
                    <div className="space-y-4 text-left">
                      <div>
                        <Label htmlFor="name" className="font-['Poppins']">Name</Label>
                        <Input
                          id="name"
                          value={userData.name}
                          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                          className="rounded-[8px]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="font-['Poppins']">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={userData.email}
                          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                          className="rounded-[8px]"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          onClick={handleSave}
                          className="flex-1 bg-[#1a1851] hover:bg-[#0B1441] text-white rounded-[8px]"
                        >
                          Save
                        </Button>
                        <Button 
                          onClick={() => setIsEditing(false)}
                          variant="outline"
                          className="flex-1 rounded-[8px]"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-['Poppins'] text-[14px] text-[#929292]">
                      Saved Papers
                    </span>
                    <span className="font-['Poppins'] text-[18px] text-[#1a1851]">
                      {mockUserPapers.length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-['Poppins'] text-[14px] text-[#929292]">
                      Papers Viewed
                    </span>
                    <span className="font-['Poppins'] text-[18px] text-[#1a1851]">
                      12
                    </span>
                  </div>
                </div>

                <div className="border-t mt-4 pt-4">
                  <Button 
                    onClick={handleLogout}
                    variant="outline"
                    className="w-full rounded-[8px] border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600"
                  >
                    Log Out
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Uploaded Papers */}
          <div className="lg:col-span-2">
            <h2 className="font-['Poppins'] text-[28px] text-black mb-6">
              My Uploaded Papers
            </h2>

            {mockUserPapers.length > 0 ? (
              <div className="grid gap-6">
                {mockUserPapers.map((paper) => (
                  <CapstoneCard
                    key={paper.id}
                    title={paper.title}
                    author={paper.author}
                    year={paper.year}
                    field={paper.field}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <FileText size={64} className="mx-auto text-[#929292] mb-4" />
                <p className="font-['Poppins'] text-[20px] text-[#929292] mb-2">
                  No saved papers yet
                </p>
                <p className="font-['Poppins'] text-[14px] text-[#929292] mb-6">
                  Browse and save capstone papers to view them here
                </p>
                <Button 
                  onClick={() => navigate('/student/dashboard')}
                  className="bg-[#1a1851] hover:bg-[#0B1441] text-white rounded-[8px]"
                >
                  Browse Papers
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}