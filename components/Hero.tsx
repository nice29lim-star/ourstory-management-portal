
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="py-20 sm:py-24 text-center">
            <div className="container mx-auto px-5">
                <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Welcome to <span className="text-primary">OurStory</span><br />
                    Management Portal
                </h1>
                <p className="text-lg sm:text-xl text-text-sub max-w-2xl mx-auto">
                    아워스토리 중고등팀 및 영업팀을 위한 통합 업무 지원 시스템입니다.
                </p>
            </div>
        </section>
    );
};

export default Hero;
