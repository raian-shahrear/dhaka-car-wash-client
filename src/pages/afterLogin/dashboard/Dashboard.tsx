import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <Link to="/">
                <Button variant="outline">Home page</Button>
            </Link>
        </div>
    );
};

export default Dashboard;