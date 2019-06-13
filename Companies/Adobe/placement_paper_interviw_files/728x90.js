// JavaScript Document
images = new Array(2);

images[0] = "<a href = 'http://www.lifetwit.com' target='_blank'><img src='http://www.yuvajobs.com/graphics/banners/728x90/jayanandan.gif' alt='LifeTwit.com' border='0'></a>";

images[1] = "<a href = 'http://www.lifetwit.com' target='_blank'><img src='http://www.yuvajobs.com/graphics/banners/728x90/lifetwit.gif' alt='LifeTwit.com' border='0'></a>";


index = Math.floor(Math.random() * images.length);

document.write(images[index]);