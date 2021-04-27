import {useEffect} from 'react';
import Header from '../components/header';
import Timeline from '../components/timeline';
import Sidebar from '../components/sidebar';


export default function Dashboard() {
    useEffect(() => {
        document.title = 'Camagru';
    }, []);
    return (
        <div className="">
            <Header />
            <div className="grid">
                <Timeline />
                <Sidebar />
            </div>
        </div>
    )
}