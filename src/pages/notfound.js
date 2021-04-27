import { useEffect } from 'react';

export default function NotFound() {
    useEffect(() => {
        document.title = 'NotFound! - Camagru';
    }, []);
    return (
        <div className="bg-gray-background">
            <div className="mx-auth max-w-screen-lg">
                <p className="text-center text"> MHHH INTERESTING!</p>
            </div>
        </div>
    );
}