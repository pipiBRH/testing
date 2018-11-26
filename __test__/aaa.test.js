const {
    Storage
} = require('@google-cloud/storage');
const storage = new Storage();
const bucket = storage.bucket('testa8843526');



async function aaa() {
    var prefix = "zhongxingbank/getAccbalance/"
    var delimiter = "/"
    const options = {
        prefix: prefix,
    };
    if (delimiter) {
        options.delimiter = delimiter;
    }

    var results = await bucket.getFiles(options)
    const files = results[0];
    const content = files.map(async (file) => {
        var data = await file.download()
        return await data[0].toString()
    });
    return content
};


test('zhongxingbank.getAccbalance', async () => {
    var caseContent = await aaa()
    caseContent.map(async (content) => {
        console.log(await content)
        expect(await content).toEqual(await content);
    })
});