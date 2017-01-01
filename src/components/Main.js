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
		singleImgData.imageUrl = require('../images/' + singleImgData.fileName);
		imageDatasArr[i] = singleImgData;

	}
	return imageDatasArr;
})(imageDatas);


var ImgFigure = React.createClass({
  render: function(){
    return <figure>
              <img src = {this.data.props.imageURL} alt = {this.data.props.title}/>
              <figcaption>
                <h2>
                  {this.props.data.title}
                </h2>
              </figcaption>
           </figure>
  }
})

var Gallery = React.createClass({

  render: function(){
    var controllerUnits = [],
        imgFigures = [];
    imageDatas.forEach(function (value, index) {

        if (!this.state.imgsArrangeArr[index]) {
            this.state.imgsArrangeArr[index] = {
                pos: {
                    left: 0,
                    top: 0
                },
                rotate: 0,
                isInverse: false,
                isCenter: false
            };
        }

        imgFigures.push(<ImgFigure key={index} data={value} ref={'imgFigure' + index} arrange={this.state.imgsArrangeArr[index]} inverse={this.inverse(index)} center={this.center(index)}/>);

        controllerUnits.push(<ControllerUnit key={index} arrange={this.state.imgsArrangeArr[index]} inverse={this.inverse(index)} center={this.center(index)}/>);
    }.bind(this));
    return <section className = "stage">
              <section className = "img-sec">
                {imgFigures}
              </section>
              <nav className = "controller-nav">
              </nav>
           </section>
           
  }
});

React.render(<Gallery />, document.getElementById('app'));

module.exports = Gallery;

