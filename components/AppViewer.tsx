
import React, { useState, useEffect } from 'react';
import type { AppInfo } from '../types';

interface AppViewerProps {
    app: AppInfo;
}

const Spinner: React.FC = () => (
    <div className="w-12 h-12 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
);

const AppViewer: React.FC<AppViewerProps> = ({ app }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
    }, [app.url]);

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="flex-grow relative bg-white">
            {isLoading && (
                <div className="absolute inset-0 z-10 flex flex-col justify-center items-center bg-white/95">
                    <Spinner />
                    <p className="mt-4 text-primary font-semibold">시스템 로딩 중...</p>
                </div>
            )}
            <iframe
                id="app-iframe"
                src={app.url ?? ''}
                onLoad={handleIframeLoad}
                className="w-full h-full border-none"
                title={app.title}
            ></iframe>
        </div>
    );
};

export default AppViewer;
