import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TeacherLayout from '../teacherlayout/TeacherLayout';

const StudentProfileView = ({ studentId }) => {
  const [activeTab, setActiveTab] = useState('attendance');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Sample student data - replace with actual data or API call
  const studentInfo = {
    name: "John Doe",
    id: "ENR123456",
    program: "BACHELOR OF TECHNOLOGY",
    batch: "CSD-2024"
  };

  const tabs = [
    { id: 'attendance', label: 'Attendance' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'exam_details', label: 'Exam Details' },
    { id: 'placement_details', label: 'Placement Details' }
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/student/${studentId}/${activeTab}`);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab, studentId]);

  const renderTabContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
        </div>
      );
    }

    if (error) {
      return (
        <Alert variant="destructive" className="mt-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      );
    }

    if (!data) {
      return (
        <div className="flex justify-center items-center h-64 text-gray-500">
          No data available
        </div>
      );
    }

    // Render different content based on active tab
    switch (activeTab) {
      case 'attendance':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Attendance Overview</h3>
            {/* Add your attendance content here */}
          </div>
        );
      case 'achievements':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Student Achievements</h3>
            {/* Add your achievements content here */}
          </div>
        );
      case 'exam_details':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Examination Details</h3>
            {/* Add your exam details content here */}
          </div>
        );
      case 'placement_details':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Placement Information</h3>
            {/* Add your placement content here */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <TeacherLayout>
   
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{studentInfo.name}</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={activeTab} className="mt-6">
          <Card>
            <CardContent className="pt-6">
              {renderTabContent()}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
    </TeacherLayout>
  );
};

export default StudentProfileView;