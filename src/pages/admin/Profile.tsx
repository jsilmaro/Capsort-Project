import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { Card, CardContent } from '../../components/ui/card';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Edit, Shield, Users } from 'lucide-react';

export default function AdminProfile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [adminData, setAdminData] = useState({
    name: 'Admin User',
    email: 'admin@ustp.edu.ph',
    role: 'System Administrator'
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
      <Navbar role="admin" onLogout={handleLogout} />

      <div className="container mx-auto px-8 py-12">
        <h1 className="font-['Poppins'] text-[32px] text-black mb-8">Admin Profile</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="rounded-[15px]">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    <Avatar className="w-24 h-24">
                      <AvatarFallback className="bg-[#1a1851] text-white text-[32px]">
                        AU
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute bottom-0 right-0 bg-[#FFD338] rounded-full p-2">
                      <Shield size={16} className="text-[#1a1851]" />
                    </div>
                  </div>
                  
                  {!isEditing ? (
                    <>
                      <h2 className="font-['Poppins'] text-[24px] text-[#1a1851] mb-2">
                        {adminData.name}
                      </h2>
                      <p className="font-['Poppins'] text-[14px] text-[#FFD338] mb-1">
                        {adminData.role}
                      </p>
                      <p className="font-['Poppins'] text-[14px] text-[#929292] mb-4">
                        {adminData.email}
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
                          value={adminData.name}
                          onChange={(e) => setAdminData({ ...adminData, name: e.target.value })}
                          className="rounded-[8px]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="font-['Poppins']">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={adminData.email}
                          onChange={(e) => setAdminData({ ...adminData, email: e.target.value })}
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

                <div className="border-t pt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-['Poppins'] text-[14px] text-[#929292]">
                      Total Papers
                    </span>
                    <span className="font-['Poppins'] text-[18px] text-[#1a1851]">
                      142
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-['Poppins'] text-[14px] text-[#929292]">
                      Total Users
                    </span>
                    <span className="font-['Poppins'] text-[18px] text-[#1a1851]">
                      98
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-['Poppins'] text-[14px] text-[#929292]">
                      Active Since
                    </span>
                    <span className="font-['Poppins'] text-[18px] text-[#1a1851]">
                      2024
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

          {/* Admin Actions */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="rounded-[15px]">
              <CardContent className="p-6">
                <h3 className="font-['Poppins'] text-[20px] text-[#1a1851] mb-4">
                  Quick Actions
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button 
                    onClick={() => navigate('/admin/dashboard')}
                    variant="outline"
                    className="rounded-[8px] h-auto py-4 flex-col gap-2"
                  >
                    <Shield size={24} className="text-[#1a1851]" />
                    <span className="font-['Poppins']">Manage Papers</span>
                  </Button>
                  <Button 
                    onClick={() => navigate('/admin/analytics')}
                    variant="outline"
                    className="rounded-[8px] h-auto py-4 flex-col gap-2"
                  >
                    <Users size={24} className="text-[#1a1851]" />
                    <span className="font-['Poppins']">View Analytics</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[15px]">
              <CardContent className="p-6">
                <h3 className="font-['Poppins'] text-[20px] text-[#1a1851] mb-4">
                  System Information
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-['Poppins'] text-[14px] text-[#929292]">
                      System Version
                    </span>
                    <span className="font-['Poppins'] text-[14px] text-black">
                      v1.0.0
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-['Poppins'] text-[14px] text-[#929292]">
                      Last Backup
                    </span>
                    <span className="font-['Poppins'] text-[14px] text-black">
                      Today, 3:00 AM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-['Poppins'] text-[14px] text-[#929292]">
                      Database Status
                    </span>
                    <span className="font-['Poppins'] text-[14px] text-[#34c759]">
                      Healthy
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[15px] bg-[#fff9e6]">
              <CardContent className="p-6">
                <h3 className="font-['Poppins'] text-[18px] text-[#1a1851] mb-2">
                  Admin Responsibilities
                </h3>
                <ul className="font-['Poppins'] text-[14px] text-[#1e1e1e] space-y-2">
                  <li>• Manage and moderate capstone paper submissions</li>
                  <li>• Review and approve new content</li>
                  <li>• Monitor system analytics and usage</li>
                  <li>• Maintain user accounts and permissions</li>
                  <li>• Update about page and system content</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}