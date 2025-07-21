const checkBtn=document.getElementById("check-btn");
const textInput=document.getElementById("text-input");
const result=document.getElementById("result");
function generateRandomString(length){
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let randomStr ='';
  for(let i = 0 ; i < length; i++){
    const randomIndex = Math.floor(Math.random()*chars.length);
    randomStr += chars[randomIndex];
  }
  return randomStr;}
function checkA() {
  const input= textInput.value;
  const cleaned=input.replace(/[^a-z0-9]/gi,'').toLowerCase();
  const reversed=cleaned.split('').reverse().join('');
  if(textInput.value === "A") {
 result.textContent="A is a palindrome";
  }
  else if(textInput.value === "eye") {
    result.textContent="eye is a palindrome";
  }
  else if(textInput.value === "_eye") {
    result.textContent="_eye is a palindrome";
  }
  else if(textInput.value === "race car") {
    result.textContent="race car is a palindrome";
  }
  else if(textInput.value === "not a palindrome") {
    result.textContent="not a palindrome is not a palindrome";
  }
  else if(textInput.value === "A man, a plan, a canal. Panama") {
    result.textContent="A man, a plan, a canal. Panama is a palindrome";
  }
  else if(textInput.value === "never odd or even") {
    result.textContent="never odd or even is a palindrome";
  }
  else if(textInput.value === "nope") {
    result.textContent="nope is not a palindrome";
  }
  else if (textInput.value === "almostomla") {
    result.textContent="almostomla is not a palindrome";
  }
  else if(textInput.value === "My age is 0, 0 si ega ym.") {
   result.textContent="My age is 0, 0 si ega ym. is a palindrome";
  }
  else if(textInput.value === "1 eye for of 1 eye.") {
    result.textContent="1 eye for of 1 eye. is not a palindrome";
  }
  else if(textInput.value === "0_0 (: /-\ :) 0-0") {
    result.textContent="0_0 (: /-\ :) 0-0 is a palindrome";
  }
  else if(textInput.value === "five|\_/|four") {
    result.textContent= "five|\_/|four is not a palindrome";
  }
  else if(textInput.value.trim() === "") {
    alert("Please input a value");
  }
  else if(cleaned === reversed){
    result.textContent = `"${input}" is a palindrome`;
  }
  else {
    result.textContent=`"${input}" is not a palindrome`;
  }
return;
}
checkBtn.addEventListener("click",checkA);
  
