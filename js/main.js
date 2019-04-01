'use strict';

// Scope

{
    //クラス

    

   class Player{ //親クラス
       constructor(name,score){ //メソッド
        this.name = name;
        this.score = score;
       }

       showInfo(){//メソッド
           console.log(`name:${this.name} score:${this.score}`);
       }

       static showVersion(){//メソッド
           console.log('Player class ver. 1.0');
       }
   }

   class SoccerPlayer extends Player{ //子クラス
    constructor(name, score, number){
        super(name,score); //親クラスのconstructorを呼び出す
        this.number = number;
    }
    kick(){
        console.log('Gooooaal');
    }
   }

   const tsubasa = new SoccerPlayer('tsubasa',99,10);
   
   tsubasa.kick();
   console.log(tsubasa.number);
   tsubasa.showInfo();
}


