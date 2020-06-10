function createSprite(selector){

	var reset = function() {
		classList = frame.classList;
		frame.classList.remove(classList[1]);
		frame.classList.add("frame1");
	}
	
	var nextFrame = function() {
		var objetoRegex  = new RegExp('(frame)(\\d)', 'g');
		regTarget = frame.classList[1]
		var resultado = objetoRegex.exec(regTarget)
		//console.log(resultado);
		var frameClass = resultado[0];
		//console.log(frameClass)
		var frameNumber = Number(resultado[2]);
		//console.log(frameNumber);
		if(frameNumber <= 8) {
			frame.classList.remove(frameClass)
			frameNumber += 1;
			frame.classList.add("frame"+frameNumber)

		}
		
	};

	var isFinished = function() {
		return frame.classList[1] == 'frame9'
	};

	var frame = document.querySelector(selector);
	console.log(frame);
	frame.classList.add("frame1");

	return {nextFrame: nextFrame,
		isFinished: isFinished,
		reset: reset	
	};
};