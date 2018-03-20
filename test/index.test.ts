import { clientRequest } from "../src/index";

test("start test", () => {
    clientRequest("localhost", "get").then((res) => {
        console.log("res===========>",res);
        expect(res.length > 0).toBe(true);
    }).catch(err => {
        console.log("err", err);
    });
});
