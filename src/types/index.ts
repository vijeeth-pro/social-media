import React from 'react';

export interface Response {
    message?: string;
    value?: boolean;
}

export interface MessageType {
    mess?: string;
    setMess?: React.Dispatch<React.SetStateAction<string>>;
    response?: Response;
}