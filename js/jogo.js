var createGame = function(sprite) {

	
	var setSecretWord = function(word) {
		secretWord = word;
		nextPhase();
		if (spaces.length > 0) spaces = []
		createSpaces() 
		
		return secretWord
	};

	var nextPhase = function() {
		phase = 2
		return phase
	}
	var createSpaces = function() {
		spaces = Array(secretWord.length).fill("");
		}

	var getSpaces = function() {
		console.log(spaces)
		return spaces
	};

	var getPhase = function() {
		console.log(phase)
		return phase
	};

	//Checks if guess is only ONE letter
	var isGuessValid = function(guess) {
		if (guess.length > 1) {
			alert("NOT VALID GUESS")
			return false
		} else {
			return true
		}
	}

	var isGuessCorrect = function(guess) {

		var exp = new RegExp(guess, 'gi'),
			result,
			correctGuess = false
			

			while(result = exp.exec(secretWord)) {
				
				spaces[result.index] = guess
				correctGuess = true
			}


		return correctGuess
	};

	var guessProccess = function(guess) {
		var guessValid = isGuessValid(guess);
		var guessCorrect = isGuessCorrect(guess);
		

		if (!guessCorrect) {
			sprite.nextFrame()
		};

		return spaces
	};

    var win = function () {
    	var win = false;
    	if (spaces.length > 0) {
        	if (!spaces.includes('')) win = true;
        }
    	return win
    };

    var lose = function () {
        return sprite.isFinished()

    };

    var winOrLose = function () {
        return win() || lose()
    };

    var restart = function () {
        phase = 1;
        spaces = [];
        secretWord = '';
        sprite.reset();
    };


	var phase = 1
	var spaces = []
	var secretWord = ''

	return {
		setSecretWord: setSecretWord,
		createSpaces: createSpaces,
		nextPhase: nextPhase,
		getSpaces: getSpaces,
		getPhase: getPhase,
		guessProccess: guessProccess,
		win: win,
		lose: lose,
		winOrLose: winOrLose,
		restart: restart
	};
}


//var jogo = criaJogo(createSprite('.sprite'));
//jogo.getPhase();
//secretWord = jogo.setSecretWord("ola");
//jogo.getPhase();
//jogo.getSpaces();
//jogo.guessProccess('a')
//jogo.guessProccess('o')
//jogo.guessProccess('b')


