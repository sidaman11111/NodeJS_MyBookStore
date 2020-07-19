const TestData = require(__dirname + '/models/TestData.modle');

module.exports = {
    index: async function(req,res){
        const testData = TestData.find();
        res.render('test', {
            data: testData
        });
    }
}