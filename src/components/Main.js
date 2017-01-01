require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//获得图片的数据
var imageDatas = require('../data/imageDatas.json');

var imageDatas = (function getImgUrl(imageDatasArr){
	var j = imageDatasArr.length;
	for(var i = 0; i < j; i++){
		var singleImgData = imageDatasArr[i];
		singleImgData.imageUrl = require('../images/' + singleImgData.fileName);
		imageDatasArr[i] = singleImgData;

	}
	return imageDatasArr;
})(imageDatas);
// class AppComponent extends React.Component {
//   render() {
//     return (
//       <div className="index">
//         <img src={yeomanImage} alt="Yeoman Generator" />
//         <div className="notice">Please  edit <code>src/components/Main.js</code> to get started!</div>
//       </div>
//     );
//   }
// }

// AppComponent.defaultProps = {
// };

// export default AppComponent;
