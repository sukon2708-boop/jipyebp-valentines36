const questions = [
  {
    q: "ถ้ามีวันว่าง 1 วัน อยากทำอะไรด้วยกันที่สุด",
    c: ["ดูหนัง", "เดินเล่น", "อยู่ด้วยกันเฉย ๆ"],
    correct: 2,
  },
  {
    q: "เวลาที่คิดถึงกันมากที่สุดคือเมื่อไหร่",
    c: ["ก่อนนอน", "ตอนเหนื่อย", "ทุกเวลา"],
    correct: 2,

  },
  {
    q: "อะไรทำให้ยิ้มได้ง่ายที่สุด",
    c: ["ข้อความ", "เสียงหัวเราะ", "ได้เจอหน้า"],
    correct: 1,

  },
  {
    q: "ถ้าวันนี้ไม่สมบูรณ์ อยากได้อะไรมากที่สุด",
    c: ["กำลังใจ", "กอด", "อยู่ข้าง ๆ"],
    correct: 2,
    explain: "แค่มีเธออยู่ก็พอแล้ว "  },
  {
    q: "วาเลนไทน์นี้อยากบอกอะไร",
    c: ["ขอบคุณ", "รักนะ", "อยู่ด้วยกันไปนาน ๆ"],
    correct: 2,

  }
];

let index = 0;
let score = 0;

const questionText = document.getElementById("questionText");
const choicesBox = document.getElementById("choices");
const answerHint = document.getElementById("answerHint");
const gameCard = document.getElementById("gameCard");

function renderQuestion() {
  const q = questions[index];
  questionText.textContent = `${index + 1}. ${q.q}`;
  answerHint.textContent = "";
  choicesBox.innerHTML = "";

  q.c.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(i);
    choicesBox.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const q = questions[index];

  if (selected === q.correct) {
    score++;
    answerHint.textContent = " ตอบได้ตรงใจ";
  } else {
    answerHint.textContent = " ไม่เป็นไรนะ";
  }

  answerHint.textContent += " — " + q.explain;

  index++;

  setTimeout(() => {
    if (index < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 1200);
}

function showResult() {
  gameCard.innerHTML = `
    <h2>เล่นจบแล้ว </h2>
    <p class="subtle">คุณได้</p>
    <h6>${score} / ${questions.length} คะแนน</h6>
    <p class="subtle">${resultMessage()}</p>
  `;
}

function resultMessage() {
  if (score === 5) return "เข้ากันได้ดีมาก เหมือนเกิดมาเพื่อกันเลย ";
  if (score >= 3) return "หวานกำลังดี น่ารักมาก ";
  return "ความรักไม่ได้วัดที่คะแนน แต่หัวใจ ";
}

renderQuestion();
