
import React from 'react';

const HouseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

interface HeaderProps {
    showHomeButton: boolean;
    onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ showHomeButton, onGoHome }) => {
    return (
        <header className="bg-white/90 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200/50 h-20">
            <div className="container mx-auto px-5 h-full flex justify-between items-center">
                <div className="cursor-pointer" onClick={onGoHome}>
                    <span className="font-outfit font-extrabold text-3xl text-light-blue-text tracking-tight uppercase">
                        OURSTORY
                    </span>
                </div>
                <nav>
                    {showHomeButton && (
                        <button
                            onClick={onGoHome}
                            className="bg-primary text-white font-semibold px-4 py-2 rounded-xl flex items-center gap-2 transition-all duration-300 ease-in-out hover:bg-secondary hover:-translate-y-0.5"
                        >
                            <HouseIcon />
                            홈으로 가기
                        </button>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
