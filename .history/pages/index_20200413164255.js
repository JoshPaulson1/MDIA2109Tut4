import Link from 'next/Link';
import Router from 'next/router';
import './app.css';

const Index = () => <div>
    Index
    <Link href="/chatpage"><button>Chats!</button></Link>
</div>

export default Index;