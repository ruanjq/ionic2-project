require('shelljs/global');
const path = require('path');


cd(path.resolve(__dirname, "../cordovaApp"));

var runPrepare = exec('cordova prepare');

if (runPrepare.code !== 0) {
  echo('Error: cordova prepare failed');
  exit(1);
}else{
	echo('Suc: cordova prepare successful');
}
