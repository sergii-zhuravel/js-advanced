// На основе класса
class scrollTask {
    constructor(initialPOosition){
    this.position = initialPOosition;
    }
    goTop = function(){ window.scrollTo(0,0);
        this.position = 1;
    }
    goBottom = function(){window.scrollTo(0,document.body.scrollHeight);
        this.position = 0
    }
    goReverse  = function(){
                if (this.position){
                    this.goBottom()
                } else {
                    this.goTop()
                }
            }
}

let scroller = new scrollTask();
//На основе функции-конструктора
// function ScrollTask(position) {
//   this.position = position;
// }
// ScrollTask.prototype.goTop = function() {
//   window.scrollTo(0, 0);
//   this.position = 1;
// };
// ScrollTask.prototype.goBottom = function() {
//   window.scrollTo(0, document.body.scrollHeight);
//   this.position = 0;
// };
// ScrollTask.prototype.goReverse = function() {
//   if (this.position) {
//     this.goBottom();
//   } else {
//     this.goTop();
//   }
// };
// var scroller = new ScrollTask(1);

// На основе объекта
// let scrollTask= {
//     position : 1,
//     goTop: function(){ window.scrollTo(0,0);
//        this.position = 1},
//     goBottom: function(){ window.scrollTo(0,document.body.scrollHeight);
//         this.position = 0},
//     goReverse: function(){
//         if (this.position){
//             this.goBottom()
//         } else {
//             this.goTop()
//         }
//     }
// }
