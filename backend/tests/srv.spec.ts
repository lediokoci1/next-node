const { serverController } = require('../controllers/serverController');

const servers = [
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




describe("Calculator Tests", () => {
    test("Addition of 2 numbers", () => {
        // arrange and act
        var result = serverController(servers);

        // assert
        expect(result).toBe({ url: 'http://app.scnt.me', priority: 3 });
    });
})