var createController = function(jogo) {
	var $entry = $(".entrada");
	var $blocks = $(".lacunas");
	console.log($entry);
	console.log($blocks);



	var changePlaceHolder = function(name){
		$entry.attr("placeholder", name)
	}

	var showBlocks = function() {
		$blocks.empty();
		jogo.getSpaces().forEach(function(space) {
			$("<li>")
			.addClass("lacuna")
			.text(space)
			.appendTo($blocks)
		})
		

	};

	var restart = function(){
		jogo.restart()
		$entry.attr("maxlength", "")
		showBlocks()
		changePlaceHolder("Palavra Secreta")
	}
	var changeBlock = function(guessProccess) {
		jogo.guessProccess(guess)
		$entry.val("");
		showBlocks()

		if (jogo.winOrLose()) {
			setTimeout(function() {
				if (jogo.win()) {
					alert('Parabéns, você venceu!')
				}
			
				else if (jogo.lose()) {
				alert('Oh não! Você foi enforcado!')
				}

				restart()

			}, 400)
				
			
		}
		

		
	};

	var receiveSecretword = function(){
		var secretWord = $entry.val()
		if (secretWord.length <= 3) {
			alert("Digite uma palavra com 4 caracteres!");
			secretWord = ""
			return
		}
		jogo.setSecretWord(secretWord);
		$entry.val("");
		changePlaceHolder("Chute uma letra")
		$entry.attr("maxlength", "1")
		showBlocks()
		
	};


	var start = function() {
		changePlaceHolder("Palavra Secreta")

		$entry.keypress(function (event) {
			if (event.which == 13) {
				switch (jogo.getPhase()) {
					case 1:
						receiveSecretword()
						break;
						
						

					case 2:
						guess = $entry.val();
						changeBlock(); 



						
						break;
				};
			};
		});
	};

return{start: start};
};

controller = createController(createGame(createSprite('.sprite')));
controller.start()