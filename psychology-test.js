// 質問のデータ
let quizData = [
  {
      question: "今週の残業時間（／日）は何時間ですか？",
      choices: ["３時間以上", "２時間以上〜３時間未満", "２時間未満", "なし！", ],
  },
  {
      question: "１週間のうち、趣味に没頭できる時間ありますか？",
      choices: ["全くない", "あまりない", "少しある", "十分ある"],
  },
  {
      question: "１週間のうち、家族と夕飯を食べましたか？",
      choices: ["１回くらい", "２〜３回くらい", "４〜５回くらい", "ほぼ毎日"],
  }
];

// 結果のデータ
const answers = [
  '今のあなたは、働きすぎです。今すぐ家に帰って休憩しましょう。',
  '今のあなたは、少し働きすぎです。他の人に仕事を振っていきましょう。',
  '今のあなたは、あと少しで働きすぎです。たまには同僚と飲みにいきましょう。',
  '今のあなたは、標準的な働き方をしています。これ以上仕事量が増えないように気をつけましょう。',
  '今のあなたは、標準的な働き方をしています。可能ならば先の仕事を終わらせておくとよいでしょう。',
  '今のあなたは、余裕のある働き方をしています。周りに困っている同僚がいたら助けてあげましょう。',
  '今のあなたは、余裕のある働き方をしています。妻と子どもにプレゼントでも用意してみましょう。',
  '今のあなたは、充実した働き方をしています。たまにはジムにいって運動しましょう。',
  '今のあなたは、充実した働き方をしています。たまには家族とお出かけに行きましょう。',
  '今のあなたは、とても充実した働き方をしています。たまには家事にも挑戦してみましょう。'
]

let x = 0; //現在の問題のインデックス
let totalScore = 0; //選択された得点の総得点に加算

// 得点加算
function answerCheck(yourChoice){
  totalScore = totalScore + yourChoice; //選択された得点を総得点に加算
  setTimeout(nextQuestion, 500); // 0.5秒後に次の問題を表示
};

// 次の問題の表示
function nextQuestion() {
  if (x < quizData.length) {
    showQuestion();
    document.getElementById("quiz-result").innerText ='';
  } else {
    showResult();
  }
  x++;
};

// 問題の表示
function showQuestion(){
    document.getElementById('quiz-question').innerText = quizData[x].question;

    let choicesContainer = document.getElementById("quiz-choices");
    choicesContainer.innerHTML = "";

      // 選択肢ボタンの生成
    for(let i = 0; i < 4; i++){
      let button = document.createElement("button");
      button.innerText = quizData[x].choices[i];
      button.setAttribute('class', 'btn btn-lg btn-secondary m-1');

      // ボタンを押したら、正誤チェック関数を呼び出す
      button.onclick = function() {
        answerCheck(i);
      };
      choicesContainer.appendChild(button);
    };
  };

  const tweetDivision = document.getElementById('tweetDivision');

  // 診断結果の表示
  function showResult(){
    //診断結果表示エリアの作成
    document.getElementById("quiz-question").innerText = '結果発表';
    document.getElementById("quiz-choices").innerText = '';
    document.getElementById("quiz-result").innerText = answers[totalScore];

    // ツイートエリアの作成
    tweetDivision.innerText = '';
    const anchor = document.createElement('a');
    const hrefValue =
    'https://twitter.com/intent/tweet?button_hashtag='+
    encodeURIComponent('働き方診断') +
    '&ref_src=twsrc%5Etfw';

    anchor.setAttribute('href', hrefValue);
    anchor.setAttribute('class', 'twitter-hashtag-button');
    anchor.setAttribute('data-text', answers[totalScore]);
    anchor.innerText = 'Tweet #働き方診断';

    tweetDivision.appendChild(anchor);

    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweetDivision.appendChild(script);
  };

showQuestion();




