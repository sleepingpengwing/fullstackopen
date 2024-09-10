import React from "react";

export interface HelloProps extends React.AllHTMLAttributes<HTMLElement>{ 
    name: string;
    age: number;
}
