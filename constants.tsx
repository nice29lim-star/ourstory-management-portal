
import React from 'react';
import type { AppInfo } from './types';

const PmsIcon = () => ( // Clipboard with list for Project Management
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
);

const CrmIcon = () => ( // User group for Customer Relationship Management
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197" />
    </svg>
);

const AmsIcon = () => ( // ID Card for Instructor Management
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 012-2h4a2 2 0 012 2v1m-4 0h4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75c-2.071 0-4.043.9-5.414 2.366" />
    </svg>
);

const AiReportIcon = () => ( // AI insight and analysis
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 01-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 013.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 013.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 01-3.09 3.09z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 15.75c0-2.485-2.015-4.5-4.5-4.5s-4.5 2.015-4.5 4.5c0 2.485 2.015 4.5 4.5 4.5s4.5-2.015 4.5-4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 19.5l2.25 2.25" />
    </svg>
);


export const managementPrograms: AppInfo[] = [
    {
        id: 'pms',
        tag: 'Project Management',
        title: '중고등팀 PMS',
        description: '프로젝트 진행 상황 관리 및 팀 협업 시스템입니다.',
        url: 'https://script.google.com/macros/s/AKfycbykUUpe-g8_rldB5A7-RPm14925FTh5CpesvsSmuBZUMi8FFV4SZuBgOamndlR0L8t3/exec',
        icon: <PmsIcon />,
        bgColorClass: 'bg-blue-100',
    },
    {
        id: 'crm',
        tag: 'Sales & CRM',
        title: '영업팀 CRM',
        description: '영업 실적 분석 및 고객 관리 시스템입니다.',
        url: 'https://script.google.com/macros/s/AKfycbzcni5OfpHVviIehsSWKS4Vt9_JUyF8N8U7J0dwiMflkniu7tDIsl2uJQQh-g2fAb7A/exec',
        icon: <CrmIcon />,
        bgColorClass: 'bg-green-100',
    }
];

export const managementSystems: AppInfo[] = [
    {
        id: 'ams',
        tag: 'Instructor Management',
        title: '중고등팀 강사 AMS',
        description: '강사 근태 관리 및 통합 운영 시스템입니다.',
        url: 'https://script.google.com/macros/s/AKfycbxOyWchuiTU0G1--8lt1ZogSnkjMtXFXvohsWkiD7ReUURyiPjZ5OB1185O_tIVzeAj/exec',
        icon: <AmsIcon />,
        bgColorClass: 'bg-purple-100',
    },
    {
        id: 'aireport',
        tag: 'AI Analytics',
        title: '중고등팀 강사 AI 리포트',
        description: '강사 수업 분석 및 AI 기반 피드백 리포트입니다. (준비 중)',
        url: 'https://script.google.com/macros/s/AKfycbyfJ_nMFEJY0z7DwAejQTHdigWeBnlrpQHiv4-tSh1XBWG8k8DOTDcPWKnKnsR4HPGk3Q/exec',
        icon: <AiReportIcon />,
        bgColorClass: 'bg-red-100',
    }
];
