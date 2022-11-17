import { serverController } from './controllers/serverController';

const main = async () => {
    try {
        const res = await serverController();
        return res;
    } catch (err) {
        throw err;
    }
};

main()
    .then((res) => {
        console.log('MAIN STARTED');
        console.log('RESULT: ', res);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });