import { clientRequest } from "../src/index";

test("start test", () => {
    clientRequest("localhost", "get").then((res) => {
        expect(res.getData().length > 0).toBe(true);
    }).catch(err => {
        console.log("err", err);
    });
});
