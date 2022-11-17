import { ServerModel } from '../models/serverModel';
import axios from 'axios';

const servers: ServerModel[] = [
    {
        url: 'https://does-not-work.perfume.new',
        priority: 1
    },
    {
        url: 'https://gitlab.com',
        priority: 4
    },
    {
        url: 'http://app.scnt.me',
        priority: 3
    },
    {
        url: 'https://offline.scentronix.com',
        priority: 2
    }
];

const req = async (url: string): Promise<boolean> => {
    try {
        setTimeout(() => false, 5000);
        const res = await axios.get(url);
        return res.status >= 200 && res.status < 300;
    } catch (err) {
        return false
    }
};

export const serverController = async () => {
    const onlineServers: ServerModel[] = [];
    return Promise.allSettled(
        servers
            .map(
                (server) =>
                    req(server.url)
                        .then(
                            (res) => res && onlineServers.push({ ...server, online: res })
                        )
            )
    )
        .then(() => {
            const result: ServerModel = onlineServers.sort((a, b) => a.priority - b.priority)[0]
            if (result) {
                return Promise.resolve({ url: result.url, priority: result.priority });
            } else {
                return Promise.reject('No servers are online');
            }
        });
};

