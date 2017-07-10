function newGame() {

  /******/
  (function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/
      if (installedModules[moduleId]) {
        /******/
        return installedModules[moduleId].exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/
      var module = installedModules[moduleId] = {
        /******/
        i: moduleId,
        /******/
        l: false,
        /******/
        exports: {}
        /******/
      };
      /******/
      /******/ // Execute the module function
      /******/
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/
      /******/ // Flag the module as loaded
      /******/
      module.l = true;
      /******/
      /******/ // Return the exports of the module
      /******/
      return module.exports;
      /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // identity function for calling harmony imports with the correct context
    /******/
    __webpack_require__.i = function(value) {
      return value;
    };
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function(exports, name, getter) {
      /******/
      if (!__webpack_require__.o(exports, name)) {
        /******/
        Object.defineProperty(exports, name, {
          /******/
          configurable: false,
          /******/
          enumerable: true,
          /******/
          get: getter
          /******/
        });
        /******/
      }
      /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function(module) {
      /******/
      var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
      /******/
      __webpack_require__.d(getter, 'a', getter);
      /******/
      return getter;
      /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 1);
    /******/
  })
  /************************************************************************/
  /******/
  ([
    /* 0 */
    /***/
    (function(module, exports, __webpack_require__) {

      var Furry = __webpack_require__(3);
      var Coin = __webpack_require__(2);
      var Game = function() {
        this.board = document.querySelectorAll("#board div");
        this.furry = new Furry;
        this.coin = new Coin;
        this.score = 0;
        this.over = false;
        this.index = function(x, y) {
          return x + (y * 20);
        }
        this.showFurry = function() {
          this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
        }
        this.showCoin = function() {
          this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
        }
        this.startGame = function(self) {
          var interval = setInterval(function() {
            self.showFurry();
            self.showCoin();
            self.moveFurry(interval);
            self.showFurry();
            document.addEventListener('keydown', function(event) {
              self.turnFurry(event);

            });


          }, 250);
        }

        this.hideVisibleFurry = function() {
          var oldfurry = document.querySelector('.furry');
          oldfurry.classList.remove('furry');
        }
        this.checkCoinCollision = function() {

          if ((this.furry.x == this.coin.x) && (this.furry.y == this.coin.y)) {
            var oldCoin = document.querySelector('.coin');
            oldCoin.classList.remove('coin');
            this.score++;
            var showScore = document.querySelector("#score strong");
            showScore.innerHTML = this.score;
            this.coin = new Coin;
            this.showCoin();

          }

        }

        this.moveFurry = function(interval) {
          this.hideVisibleFurry();
          if (this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
          } else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
          } else if (this.furry.direction === "up") {
            this.furry.y = this.furry.y - 1;
          } else if (this.furry.direction === "down") {
            this.furry.y = this.furry.y + 1;
          } else {}
          this.checkCoinCollision();
          if (this.gameOver() === false) {} else {
            clearInterval(interval);
            var gameovermessage = document.querySelector("#over");
            gameovermessage.innerHTML = "GAME OVER<br>TWÓJ WYNIK: " + this.score;
            gameovermessage.classList.remove('invisible');
            this.hideVisibleFurry();
          }
        }
        this.turnFurry = function(event) {
          switch (event.which) {
            case 37:
              this.furry.direction = 'left';
              break;
            case 38:
              this.furry.direction = 'up';
              break;
            case 39:
              this.furry.direction = 'right';
              break;
            case 40:
              this.furry.direction = 'down';
              break;
          }
        }
        this.gameOver = function(interval) {
          if ((this.furry.x < 0) || (this.furry.y < 0) || (this.furry.y > 4) || (this.furry.x > 19)) {
            console.log("KONIEC GRY TWÓJ WYNIK1: ");
            return true;
          } else {
            console.log(this.furry.x);
            return false;
          }


        }


      }
      module.exports = Game;




      /*var Furry = require("./furry.js");
      var Coin =require("./coin.js");
      var Game = function(){
        this.board = document.querySelectorAll("#board div");
        this.furry = new Furry;
        this.coin = new Coin;
        this.score = 0;
        this.over=false;
        this.index = function(x,y) {
          return x + (y * 10);
        }
        this.showFurry = function(){
           this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');
        }
        this.showCoin = function(){
           this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');
        }
        this.startGame = function(self){
          var interval=setInterval(function(){
            self.showFurry();
            self.showCoin();
            self.moveFurry(this);
            self.showFurry();
            document.addEventListener('keydown', function(event){
              self.turnFurry(event);

            });


          }, 250);
        }

        this.hideVisibleFurry = function(){
          var oldfurry=document.querySelector('.furry');
          oldfurry.classList.remove('furry');
        }
        this.checkCoinCollision = function(){

          if ((this.furry.x == this.coin.x) && (this.furry.y == this.coin.y)){
            var oldCoin = document.querySelector('.coin');
            oldCoin.classList.remove('coin');
            this.score++;
            var showScore = document.querySelector("#score strong");
            showScore.innerHTML = this.score;
            this.coin = new Coin;
            this.showCoin();

          }

        }

        this.moveFurry = function(interval){
          this.hideVisibleFurry();
          if(this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
          }else if(this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
          }else if(this.furry.direction === "up") {
            this.furry.y = this.furry.y - 1;
          }else if(this.furry.direction === "down") {
            this.furry.y = this.furry.y + 1;
          }else{}
          this.checkCoinCollision();
          this.gameOver(interval);

        }
        this.turnFurry = function(event){
          switch (event.which) {
          case 37:
            this.furry.direction = 'left';
            break;
          case 38:
            this.furry.direction = 'up';
            break;
          case 39:
            this.furry.direction = 'right';
            break;
          case 40:
            this.furry.direction = 'down';
            break;
          }
        }
        this.gameOver = function(interval){
              if ((this.furry.x < 0)||(this.furry.y < 0)||(this.furry.y > 9)||(this.furry.x > 9)){
                console.log("KONIEC GRY TWÓJ WYNIK1: ");
                this.hideVisibleFurry();
                      clearInterval(interval);

              }
              console.log(this.furry.x);


        }


      }
      module.exports = Game;
      */


      /***/
    }),
    /* 1 */
    /***/
    (function(module, exports, __webpack_require__) {

      console.log('hello');

      var Game = __webpack_require__(0);
      var gra = new Game;
      gra.startGame(gra);


      /***/
    }),
    /* 2 */
    /***/
    (function(module, exports) {

      var Coin = function() {
        this.x = Math.floor(Math.random() * 20);
        this.y = Math.floor(Math.random() * 5);
      }
      module.exports = Coin;


      /***/
    }),
    /* 3 */
    /***/
    (function(module, exports) {

      var Furry = function() {
        this.x = 0;
        this.y = 0;
        this.direction = 'right';
      }
      module.exports = Furry;


      /***/
    })
    /******/
  ]);




}




$('#board div').css('height', $('#board div').width() + 'px');


$('#Furry_Game_button').on('click', function() {
  var frontTitle = $(document).find(".front")
  $('.left_box').css('left', '-50%');
  $('.right_box').css('right', '-50%');
  $(this).css('display', 'none');
  $(this).prev().css('display', 'none');
  frontTitle.css('display', 'none');
  newGame();
});

$('#newGame').on('click', function() {
  $('#over').addClass('invisible');
  newGame();
});
