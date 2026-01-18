const list=document.getElementById("list");
chrome.storage.local.get({library:[]},r=>{
 r.library.forEach(w=>{
  const li=document.createElement("li");
  li.textContent=w.word+" – "+w.meaning;
  list.appendChild(li);
 });
});