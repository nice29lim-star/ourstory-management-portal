
import React from 'react';
import type { AppInfo } from '../types';

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

interface PortalCardProps {
    app: AppInfo;
    onClick: () => void;
}

const PortalCard: React.FC<PortalCardProps> = ({ app, onClick }) => {
    return (
        <div 
            onClick={onClick}
            className="group bg-white rounded-3xl p-8 sm:p-12 text-left shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer relative overflow-hidden flex flex-col"
        >
            <div className="absolute -bottom-8 -right-8 text-gray-100/50 text-9xl transform -rotate-12 transition-transform duration-500 group-hover:scale-110">
                {app.icon}
            </div>
            
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-8 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110 ${app.bgColorClass}`}>
                {app.icon}
            </div>
            
            <div className="flex-grow">
                <span className="block text-primary font-bold text-sm uppercase tracking-widest mb-3">{app.tag}</span>
                <h3 className="text-3xl font-bold text-text-main mb-4">{app.title}</h3>
                <p className="text-text-sub text-lg">{app.description}</p>
            </div>

            <div className="mt-auto pt-8">
                <span className="text-primary font-semibold text-lg flex items-center gap-3">
                    프로그램 실행
                    <span className="transition-transform duration-300 group-hover:translate-x-1"><ArrowRightIcon /></span>
                </span>
            </div>
        </div>
    );
};

export default PortalCard;
