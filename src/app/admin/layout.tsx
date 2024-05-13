import React from "react"
import AdminSidebar from "./AdiminSidebar";
import type { Metadata } from 'next';

interface AdminDashboardLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'This is admin dashboard',
}

const AdminDashboardLayout = ({ children }: AdminDashboardLayoutProps) => {
  return (
    <div className="overflow-height flex items-start justify-between overflow-hidden h-screen">
        <div className="h-screen w-15 lg:w-1/5 bg-purple-600 text-white p-1 lg:p-5" >
          <AdminSidebar />
        </div>
        <div className="h-screen w-full lg:w-4/5 overflow-y-scroll mt-10">
          {children}
        </div>
    </div>
  )
}

export default AdminDashboardLayout;