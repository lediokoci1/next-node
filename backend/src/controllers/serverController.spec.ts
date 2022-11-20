import { serverController } from './serverController';

test("Online Server Test", async () => {
    const result = await serverController()
    expect(result).toStrictEqual({ url: 'http://app.scnt.me', priority: 3 });
})