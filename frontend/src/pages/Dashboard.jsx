import React from "react";
import Navbar from "../component/Navbar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 shadow-lg">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-sky-500 text-transparent bg-clip-text">Dashboard</h1>
            <p className="text-slate-400">Welcome back! Here's what's happening with your account.</p>
          </div>
          
          <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Stats Cards */}
            <div className="bg-slate-800/70 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
              <h3 className="font-medium text-slate-400">Total Users</h3>
              <p className="mt-2 text-3xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 text-transparent bg-clip-text">1,234</p>
              <p className="mt-1 text-sm text-emerald-400">+12% from last month</p>
            </div>
            
            <div className="bg-slate-800/70 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
              <h3 className="font-medium text-slate-400">Active Sessions</h3>
              <p className="mt-2 text-3xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 text-transparent bg-clip-text">42</p>
              <p className="mt-1 text-sm text-sky-400">+3 today</p>
            </div>
            
            <div className="bg-slate-800/70 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
              <h3 className="font-medium text-slate-400">Security Score</h3>
              <p className="mt-2 text-3xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 text-transparent bg-clip-text">98%</p>
              <p className="mt-1 text-sm text-amber-400">+2% from last week</p>
            </div>
          </div>
          
          <div className="mt-8 bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-slate-200">Recent Activity</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 hover:bg-slate-700/30 rounded-lg transition-all border border-transparent hover:border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-cyan-500/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-slate-200">New user registered</p>
                    <p className="text-sm text-slate-400">2 minutes ago</p>
                  </div>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-900/50 text-emerald-400 border border-emerald-800/50">New</span>
              </div>
              
              <div className="flex items-center justify-between p-3 hover:bg-slate-700/30 rounded-lg transition-all border border-transparent hover:border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-sky-500/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-slate-200">Security alert triggered</p>
                    <p className="text-sm text-slate-400">1 hour ago</p>
                  </div>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-900/50 text-amber-400 border border-amber-800/50">Warning</span>
              </div>
              
              <div className="flex items-center justify-between p-3 hover:bg-slate-700/30 rounded-lg transition-all border border-transparent hover:border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-emerald-500/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-slate-200">System update completed</p>
                    <p className="text-sm text-slate-400">3 hours ago</p>
                  </div>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-sky-900/50 text-sky-400 border border-sky-800/50">Info</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
