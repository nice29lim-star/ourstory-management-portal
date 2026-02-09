
import React from 'react';
import PortalCard from './PortalCard';
import type { AppInfo } from '../types';

interface PortalSectionProps {
    title: string;
    description: string;
    apps: AppInfo[];
    onCardClick: (app: AppInfo) => void;
}

const PortalSection: React.FC<PortalSectionProps> = ({ title, description, apps, onCardClick }) => {
    return (
        <section className="pb-20">
            <div className="container mx-auto px-5">
                <div className="mb-10 border-l-4 border-primary pl-5">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <p className="text-lg text-text-sub mt-1">{description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {apps.map((app) => (
                        <PortalCard key={app.id} app={app} onClick={() => onCardClick(app)} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortalSection;
