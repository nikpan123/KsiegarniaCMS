const {classifyTestDataError} = require('./test-data-diagnostic.cjs');
const emit = payload => process.stdout.write('\nCMS_EVENT:' + JSON.stringify(payload) + '\n');
class CenterReporter {
  onBegin(config, suite) { emit({type:'begin', total:suite.allTests().length}); }
  onTestEnd(test, result) {
    emit({type:'test', title:test.title, file:test.location.file.split(/[\\/]/).pop(),
      status:result.status, duration:result.duration, dataErrors:(result.errors||[]).map(e=>classifyTestDataError(e)).filter(Boolean), retry:result.retry, warnings:(test.annotations||[]).filter(a=>['assets','coverage'].includes(a.type))});
  }
  onEnd(result) { emit({type:'end', status:result.status}); }
}
module.exports = CenterReporter;
