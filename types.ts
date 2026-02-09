
import React from 'react';

export interface AppInfo {
  id: string;
  tag: string;
  title: string;
  description: string;
  url: string | null;
  icon: React.ReactElement;
  bgColorClass: string;
}
