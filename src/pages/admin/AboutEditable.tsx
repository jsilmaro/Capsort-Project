import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Textarea } from '../../components/ui/textarea';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Edit, Save, X } from 'lucide-react';

export default function AboutEditable() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState({
    title: 'About CapSort',
    subtitle: 'Capstone Archiving and Sorting System',
    mission: 'CapSort is designed to provide an efficient and user-friendly platform for archiving, organizing, and discovering capstone projects from the University of Science and Technology of Southern Philippines. Our goal is to preserve the innovative work of students and make it accessible to future generations of learners and researchers.',
    contactEmail: 'capsort@ustp.edu.ph'
  });

  const handleLogout = () => {
    navigate('/');
  };

  const handleSave = () => {
    setIsEditing(false);
    // In real app, would save to backend
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original content
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <Navbar role="admin" onLogout={handleLogout} />

      <div className="container mx-auto px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-['Poppins'] text-[32px] text-black">
            Edit About Page
          </h1>
          {!isEditing ? (
            <Button 
              onClick={() => setIsEditing(true)}
              className="bg-[#1a1851] hover:bg-[#0B1441] text-white rounded-[8px] gap-2"
            >
              <Edit size={20} />
              Edit Content
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button 
                onClick={handleSave}
                className="bg-[#34c759] hover:bg-[#2da84a] text-white rounded-[8px] gap-2"
              >
                <Save size={20} />
                Save Changes
              </Button>
              <Button 
                onClick={handleCancel}
                variant="outline"
                className="rounded-[8px] gap-2"
              >
                <X size={20} />
                Cancel
              </Button>
            </div>
          )}
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {/* Title Section */}
          <Card className="rounded-[15px]">
            <CardContent className="p-6">
              <Label className="font-['Poppins'] text-[16px] text-black mb-2 block">
                Page Title
              </Label>
              {isEditing ? (
                <Input
                  value={content.title}
                  onChange={(e) => setContent({ ...content, title: e.target.value })}
                  className="rounded-[8px] text-[24px]"
                />
              ) : (
                <h2 className="font-['Poppins'] text-[32px] text-[#1a1851]">
                  {content.title}
                </h2>
              )}
            </CardContent>
          </Card>

          {/* Subtitle Section */}
          <Card className="rounded-[15px]">
            <CardContent className="p-6">
              <Label className="font-['Poppins'] text-[16px] text-black mb-2 block">
                Subtitle
              </Label>
              {isEditing ? (
                <Input
                  value={content.subtitle}
                  onChange={(e) => setContent({ ...content, subtitle: e.target.value })}
                  className="rounded-[8px]"
                />
              ) : (
                <p className="font-['Poppins'] text-[20px] text-[#1e1e1e]">
                  {content.subtitle}
                </p>
              )}
            </CardContent>
          </Card>

          {/* Mission Section */}
          <Card className="rounded-[15px]">
            <CardContent className="p-6">
              <Label className="font-['Poppins'] text-[16px] text-black mb-2 block">
                Mission Statement
              </Label>
              {isEditing ? (
                <Textarea
                  value={content.mission}
                  onChange={(e) => setContent({ ...content, mission: e.target.value })}
                  className="rounded-[8px] min-h-[150px]"
                />
              ) : (
                <p className="font-['Poppins'] text-[18px] text-[#1e1e1e] leading-relaxed">
                  {content.mission}
                </p>
              )}
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="rounded-[15px]">
            <CardContent className="p-6">
              <Label className="font-['Poppins'] text-[16px] text-black mb-2 block">
                Contact Email
              </Label>
              {isEditing ? (
                <Input
                  type="email"
                  value={content.contactEmail}
                  onChange={(e) => setContent({ ...content, contactEmail: e.target.value })}
                  className="rounded-[8px]"
                />
              ) : (
                <p className="font-['Poppins'] text-[18px] text-[#1e1e1e]">
                  {content.contactEmail}
                </p>
              )}
            </CardContent>
          </Card>

          {/* Team Members Section */}
          <Card className="rounded-[15px]">
            <CardContent className="p-6">
              <h3 className="font-['Poppins'] text-[20px] text-[#1a1851] mb-4">
                Team Members Management
              </h3>
              <p className="font-['Poppins'] text-[14px] text-[#929292] mb-4">
                To edit team members, use the dedicated team management interface.
              </p>
              <Button 
                variant="outline"
                className="rounded-[8px]"
                onClick={() => {}}
              >
                Manage Team Members
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Preview Section */}
        {isEditing && (
          <Card className="rounded-[15px] mt-6 bg-[#fff9e6]">
            <CardContent className="p-6">
              <p className="font-['Poppins'] text-[14px] text-[#1a1851]">
                💡 <strong>Tip:</strong> Changes will be visible to all users after saving.
                Make sure to review your content before publishing.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
