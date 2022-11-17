import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function PageNotFound() {
    const router = useRouter();
    useEffect(() => {
        router.replace('/shop')
    }, [])
    // here we can show a toast 
    return (<>Page Not Found</>)
}