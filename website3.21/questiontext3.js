// 结构化存储题目（支持富文本、图片等复杂内容）
const questions = [
  {
    id: 1,
    text: "1. Evaluate ∫ 2xcos(x²)dx.",
    options: [
      { value: "a", label: "A. sin(x²)+C" },
      { value: "b", label: "B. 2sin(x²)+C" },
      { value: "c", label: "C. cos(x²)+C" },
      { value: "d", label: "D. x²sin(x²)+C" },
    ],
    correct: "a"  
  },
  {
    id: 2,
    text: "2. solve dy/dx=3y with y(0)=2.",
    options: [
      { value: "a", label: "A. y=2e³ˣ" },
      { value: "b", label: "B. y=3e²ˣ" },
      { value: "c", label: "C. y=2e⁻³ˣ" },
      { value: "d", label: "D. y=3x+2" },
    ],
      correct: "a"  
  },
 {
    id: 3,
    text: "3.For z=1+√3i, what is ∣z∣ and arg(z)",
    options: [
      { value: "a", label: "A. ∣z∣=2, arg(z)=π/3" },
      { value: "b", label: "B. ∣z∣=2, arg(z)=π/6" },
      { value: "c", label: "C. ∣z∣=√2, arg(z)=π/4" },
      { value: "d", label: "D. ∣z∣=4,arg(z)=π/3" },
    ],
     correct: "a"  
  },
    {
    id: 4,
    text: "4. Solve z²+4=0.",
    options: [
      { value: "a", label: "A. z=±4i" },
      { value: "b", label: "B. z=±√2i" },
      { value: "c", label: "C. z=±2" },
      { value: "d", label: "D. z=±2i" },
    ],
        correct: "d"  
  },
    {
    id: 5,
    text: "5. A test scores follow N(70,10²). What percentage scored above 90?",
    options: [
      { value: "a", label: "A. 2.28%" },
      { value: "b", label: "B. 15.87%" },
      { value: "c", label: "C. 0.13%" },
      { value: "d", label: "D. 5%" },
    ],
        correct: "a"  
  },
    {
    id: 6,
    text: "6.Solve tanθ=√3 for 0≤θ≤2π.",
    options: [
      { value: "a", label: "A. π/3, 4π/3 " },
      { value: "b", label: "B. π/6, 7π/6" },
      { value: "c", label: "C. π/3, 2π/3" },
      { value: "d", label: "D. π/4, 5π/4" },
  ],
        correct: "a"  
    },
    {
    id: 7,
    text: "7. Simplify sin⁻¹(sin(3π/4))",
    options: [
      { value: "a", label: "A. π/4" },
      { value: "b", label: "B. 3π/4" },
      { value: "c", label: "C. π/2" },
      { value: "d", label: "D. 5π/4" },
    ],
correct: "a"  
  },
    {
    id: 8,
    text: "8. Find ∫ x sinx dx.",
    options: [
      { value: "a", label: "A. −xcosx+sinx+C" },
      { value: "b", label: "B. xcosx−sinx+C" },
      { value: "c", label: "C.−xcosx−sinx+C" },
      { value: "d", label: "D. xsinx+cosx+C" },
    ],
        correct: "a"  
  },
    {
    id: 9,
    text: "9. Given z₁=2(cos(π/3)+i sin(π/3) and z₂=3(cos(π/6)+i sin(π/6)), find z₁*z₂ in polar form",
    options: [
      { value: "a", label: "A. 6(cos(π/2)+i sin(π/2))" },
      { value: "b", label: "B. 5(cos(π/2)+i sin(π/2))" },
      { value: "c", label: "C. 6(cos(π/9)+i sin(π/9))" },
      { value: "d", label: "D. 6(cos(π/6)+i sin(π/6))" },
    ],
        correct: "a"  
  },
    {
    id: 10,
    text: "10.A student differentiates f(x)=e²ˣ sinx and gets f'(x)=2e²ˣ cosx.The error is:",
    options: [
      { value: "a", label: "A.Incorrect derivative of sinx" },
      { value: "b", label: "B.Correct answer" },
      { value: "c", label: "C.Forgot the product rule" },
      { value: "d", label: "D.Misapplied chain rule" },
    ],
        correct: "c"  
  },
    
];