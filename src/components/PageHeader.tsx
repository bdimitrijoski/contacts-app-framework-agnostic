import React from 'react';

export interface HeaderProps {
  pageTitle: string;
  pageDescription: string;
}

export const PageHeader: React.FC<HeaderProps> = ({pageTitle, pageDescription})=>{
  return (
    <div className="heading-container" id="content" >
      <div className="container">
        <h1>{pageTitle}</h1>
        <p>{pageDescription}</p>

      </div>
    </div>
  )
}
