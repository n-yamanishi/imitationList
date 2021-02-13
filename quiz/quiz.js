// const question = '私の好きな食べ物は何！'
// //x＝これって定義ね。それがコンスト Xは　そのあと入れたやつってこと
// const anser =[
//     'たらこ',
//     'ラーメン',
//     'たこ焼き',
//     'マヨネーズ'
// ];
// const correct = 'ラーメン';

window.alert('これから私山西信哉のクイズに挑戦してもらう。全部で３問だ。。')

const quiz = [
    {
     question : '私の好きな食べ物は何！',
      anser: [
            'たらこ',
            'ラーメン',
            'たこ焼き',
            'マヨネーズ'
        ]  ,
        correct: 'ラーメン'
    } , {
        question : '私がなりたいものは何！！',
         anser: [
               'ラーメン屋',
               'キリン',
               'お金持ち',
               'エンジニア'
           ]  ,
           correct: 'エンジニア'
       }
       ,
       {
        question : '私はエンジニアになってどうなりたいでしょう？？',
         anser: [
               'イケイケ起業家になる！！',
               'フリーランスになって世界中飛び回るぜ。。',
               '会社でずっと勉強してたいな…。。',
               'お金を貯めてるラーメン屋になる…！！'
           ]  ,
           correct: '会社でずっと勉強してたいな…。。'
       }
]
const quizLengs = quiz.length;
let quizIndex = 0;
let score = 0;




// //正解の定義　ラーメンが正解
// console.log(document.getElementById('js-question').textContent = question);
// //htmlのIDタグの所のテキストを表示　んで＝questionで　上の定義したのを持ってくる
const $button = document.getElementsByTagName('button');
const buttonLenght =$button.length;
// //$button の定義 
// //getElementsByTagName（取得）したい所のワードを入れると。


// $button[0].textContent = anser[0];
// $button[1].textContent = anser[1];
// $button[2].textContent = anser[2];
// $button[3].textContent = anser[3];

// //リファクタリングしたの
// let buttonIndex = 0;
// //ただの定義　xみたいなの
// let buttonLenght = $button.length
// //$buttonの個数分って意味の定義　xy　みたいな
// while (buttonIndex < buttonLenght//ここ個数でもおkだけど上で定義してるからそれ使おう
// ){ $button[buttonIndex].textContent = anser[buttonIndex]
//     //$buttonにxをつけますって感じ　でその答えもそこの列って感じにしたの

//     buttonIndex++;
//     //何度も繰り返すってこと
// }

//クイズの問題文,選択肢を定義
const setupQuiz =() => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question
    let buttonIndex = 0;
    let buttonLenght = $button.length
    while (buttonIndex < buttonLenght){ 
        $button[buttonIndex].textContent = quiz[quizIndex].anser[buttonIndex]
        buttonIndex++;
    }
}

setupQuiz();
//定義した関数呼び出し　

//クリックしたらのアド
// $button[0].addEventListener('click', () => {
//     if(correct===$button[0].textContent) {
//     window.alert('正解！！！')
//     } else {
//     window.alert('不正解だ・・・。')
//     }
// });

// $button[1].addEventListener('click', () => {
//     if(correct===$button[1].textContent) {
//     window.alert('正解！！！')
//     } else {
//     window.alert('不正解だ・・・。')
//     }
// });

// $button[2].addEventListener('click', () => {
//     if(correct===$button[2].textContent) {
//     window.alert('正解！！！')
//     } else {
//     window.alert('不正解だ・・・。')
//     }
// });

// $button[3].addEventListener('click', () => {
//     if(correct===$button[3].textContent) {
//     window.alert('正解！！！')
//     } else {
//     window.alert('不正解だ・・・。')
//     }
// });

//
//以下リファクタリング

$button[0].addEventListener('click', (e) => {
        if(quiz[quizIndex].correct===e.target.textContent) {
        window.alert('正解！！！')
        } else {
        window.alert('不正解だ・・・。')
        }
    });
//     //クリックされた要素に何かしたいときはe.target

const clikHandler = (e) => {if(quiz[quizIndex].correct===e.target.textContent) {
     window.alert('正解！！！');
     score++;
 } else {
    window.alert('不正解だ・・・。')
   }

   quizIndex++;

   if(quizIndex < quizLengs){//問題あればこれ
       setupQuiz(quizIndex);
   }else {
       //なければこれ
    window.alert('終了！！正解は' + score + '/' + quizLengs + 'です！！');
   
    if(score[2]){window.alert('全問正解おめでとう！！君は山西プロだ！！') }
}};


//ボタンをクリックしたら正誤判定
 let handIndex = 0;
//$buttonLenghtは上部にて定義
while(handIndex < buttonLenght) {
     $button[handIndex].addEventListener('click', (e) => {
         clikHandler(e);
    })
    handIndex++;};

