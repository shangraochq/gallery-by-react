require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';


//获得图片的数据
var imageDatas = require('../data/imageDatas.json');

//将图片数据转换为URL
var imageDatas = (function getImgUrl(imageDatasArr){
	var j = imageDatasArr.length;
	for(var i = 0; i < j; i++){
		var singleImgData = imageDatasArr[i];
		singleImgData.imageURL = require('../images/' + singleImgData.fileName);
		imageDatasArr[i] = singleImgData;

	}
	return imageDatasArr;
})(imageDatas);


var ImgFigure = React.createClass({
  render: function(){
    return <figure className = "img-figure">
              <img src = {this.props.data.imageURL} alt = {this.props.data.title}/>
              <figcaption>
                <h2 className = "img-title">
                  {this.props.data.title}
                </h2>
              </figcaption>
           </figure>
  }
})

var App = React.createClass({

  render: function(){
    var controllerUnits = [],
        imgFigures = [];
    imageDatas.forEach(function (value) {

        imgFigures.push(<ImgFigure data={value} />);

        // controllerUnits.push(<ControllerUnit key={index} arrange={this.state.imgsArrangeArr[index]} inverse={this.inverse(index)} center={this.center(index)}/>);
    });
    return <section className = "stage">
              <section className = "img-sec">
                {imgFigures}
              </section>
              <nav className = "controller-nav">
              </nav>
           </section>
    
  }
});



module.exports = App;

