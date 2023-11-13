import data from './test.json';

export default defineEventHandler(async (event) => {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve(data);
        }, 1000);
    });
});
