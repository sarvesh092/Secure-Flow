import React from "react";
import Navbar from "../component/Navbar";
import { Shield, Lock, Key, Users, Code2 } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-cyan-400" />,
      title: "Advanced Security",
      description:
        "State-of-the-art encryption and security protocols to keep your data safe.",
    },
    {
      icon: <Lock className="h-8 w-8 text-sky-400" />,
      title: "Secure Authentication",
      description:
        "Multi-factor authentication and secure login processes for maximum protection.",
    },
    {
      icon: <Key className="h-8 w-8 text-cyan-400" />,
      title: "Access Control",
      description:
        "Granular permission system to control who can access what within your organization.",
    },
    {
      icon: <Users className="h-8 w-8 text-sky-400" />,
      title: "Team Collaboration",
      description: "Seamless collaboration tools built with security in mind.",
    },
    {
      icon: <Code2 className="h-8 w-8 text-cyan-400" />,
      title: "Developer Friendly",
      description:
        "Powerful APIs and documentation for easy integration with your existing systems.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-sky-500 text-transparent bg-clip-text">
            About SecureFlow
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Empowering organizations with cutting-edge security solutions and
            seamless access management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-700/50 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-200 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-sky-500 text-transparent bg-clip-text">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 ">
            {[
            //   { name: "Sarvesh", role: "Security Expert", avatar: "SA" },
              { name: "Sarvesh", role: "Lead Developer", avatar: "SA" },
            //   { name: "Sarvesh", role: "UI/UX Designer", avatar: "SA" },
            ].map((member, index) => (
              <div key={index} className="text-center ">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center text-2xl font-bold text-white">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-semibold text-slate-200">
                  {member.name}
                </h3>
                <p className="text-sky-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-sky-500 text-transparent bg-clip-text">
            Ready to get started?
          </h2>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Join thousands of organizations that trust SecureFlow for their
            security and access management needs.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
