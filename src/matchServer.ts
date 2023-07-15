import { MatchServer } from "./MatchServer/MatchServer";

// 环境变量配置
// 程序运行的端口
const port = parseInt('3000');

export const matchServer = new MatchServer({
    port: port
});

// Entry function
async function main() {
    await matchServer.init();
    await matchServer.start();
}
main();

