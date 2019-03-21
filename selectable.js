function foo(event){
  let log = document.getElementById('demo');
  let selection = event.target.value.substring(
    event.target.selectionStart, 
    event.target.selectionEnd)
  log.textContent = `selected: ${selection}`;
}
  
document.getElementById("myText").addEventListener('select', foo)
