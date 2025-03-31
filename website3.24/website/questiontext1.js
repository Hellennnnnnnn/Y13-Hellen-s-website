// 结构化存储题目（支持富文本、图片等复杂内容）
let currentQuizName = "Quiz 1"; 
const questions = [
  {
    id: 1,
    text: "1. The solution to 3x+7=22 is:",
    options: [
      { value: "a", label: "A. x=3" },
      { value: "b", label: "B. x=5" },
      { value: "c", label: "C. x=15" },
      { value: "d", label: "D. x=6" },
    ],
    correct: "b" , 
    selected: null, // 记录用户选择
    answered: false // 是否已回答
  },
  {
    id: 2,
    text: "2. The expression x²+5x+6x can be factored as:",
    options: [
      { value: "a", label: "A. (x+1)(x+6)" },
      { value: "b", label: "B. (x+2)(x+3)" },
      { value: "c", label: "C. (x+5)(x+1)" },
      { value: "d", label: "D. (x+4)(x+2)" },
    ],
      correct: "b", 
    selected: null, // 记录用户选择
    answered: false // 是否已回答  
  },
 {
    id: 3,
    text: "3.A right-angled triangle has legs of 3cm and 4cm. The length of the hypotenuse is:",
    options: [
      { value: "a", label: "A. 5cm" },
      { value: "b", label: "B. 6cm" },
      { value: "c", label: "C. 7cm" },
      { value: "d", label: "D. 12cm" },
    ],
     correct: "a", 
    selected: null, // 记录用户选择
    answered: false // 是否已回答  
  },
    {
    id: 4,
    text: "4. The formula for the circumference of a circle is:",
    options: [
      { value: "a", label: "A. πr²" },
      { value: "b", label: "B. 2πd" },
      { value: "c", label: "C. πd" },
      { value: "d", label: "D. 2πr" },
    ],
        correct: "d", 
    selected: null, // 记录用户选择
    answered: false // 是否已回答  
  },
    {
    id: 5,
    text: "5. For the dataset: 5, 7, 8, 10, 10, the mean is:",
    options: [
      { value: "a", label: "A. 7" },
      { value: "b", label: "B. 8" },
      { value: "c", label: "C. 9" },
      { value: "d", label: "D. 10" },
    ],
        correct: "b", 
    selected: null, // 记录用户选择
    answered: false // 是否已回答  
  },
    {
    id: 6,
    text: "6. The probability of rolling an even number on a standard die is:",
    options: [
      { value: "a", label: "A. 1/6" },
      { value: "b", label: "B. 1/3" },
      { value: "c", label: "C. 1/2" },
      { value: "d", label: "D. 2/3" },
  ],
        correct: "c", 
    selected: null, // 记录用户选择
    answered: false // 是否已回答  
    },
    {
    id: 7,
    text: "7. Which formula correctly calculates the area of a triangle?",
    options: [
      { value: "a", label: "A. Base × Height" },
      { value: "b", label: "B.1/2×Base×Height" },
      { value: "c", label: "C. Base + Height" },
      { value: "d", label: "D. π×Radius²" },
    ],
correct: "b", 
    selected: null, // 记录用户选择
    answered: false // 是否已回答  
  },
    {
    id: 8,
    text: "8. The formula for the slope between points(x₁,y₁)and (x₂,y₂)is",
    options: [
      { value: "a", label: "A. (y₂-y₁)/(x₂-x₁)" },
      { value: "b", label: "B. (x₂-x₁)/(y₂-y₁)" },
      { value: "c", label: "C.y=mx+c" },
      { value: "d", label: "D. 1/2×Base×Height" },
    ],
        correct: "a", 
    selected: null, // 记录用户选择
    answered: false // 是否已回答  
  },
    {
    id: 9,
    text: "9. A student solves 2(x+3)=10 and gets x=7. The error is:",
    options: [
      { value: "a", label: "A. Forgot to expand the brackets" },
      { value: "b", label: "B. Correct answer" },
      { value: "c", label: "C. Did not multiply 2 into the bracket" },
      { value: "d", label: "D. Did not rearrange terms" },
    ],
        correct: "c", 
    selected: null, // 记录用户选择
    answered: false // 是否已回答  
  },
    {
    id: 10,
    text: "10. A book costs $16 after a 20% discount. What is the original price? Let the original price be x？",
    options: [
      { value: "a", label: "A.0.8x=16 → x=20" },
      { value: "b", label: "B.8x=16 → x=2" },
      { value: "c", label: "C.x−0.8=16 → x=16.8" },
      { value: "d", label: "D. x/0.8=16 → x=12.8" },
    ],
        correct: "a", 
    selected: null, // 记录用户选择
    answered: false // 是否已回答  
  },
    
];