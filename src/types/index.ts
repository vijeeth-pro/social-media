import React from 'react';

export interface Response {
    message: string;
    status: boolean;
}

export interface MessageType {
    mess: string;
    setMess: React.Dispatch<React.SetStateAction<string>>;
    response: Response;
}