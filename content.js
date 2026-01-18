let popup=null;

function removePopup(){
  if(popup){popup.remove();popup=null;}
}

document.addEventListener("scroll",removePopup,true);
document.addEventListener("mousedown",e=>{
  if(popup && !popup.contains(e.target)) removePopup();
});
document.addEventListener("selectionchange",()=>{
  if(!window.getSelection().toString().trim()) removePopup();
});

document.addEventListener("mouseup",()=>{
  const text=window.getSelection().toString().trim();
  if(!text) return;

  // ACRONYM DETECTION
  if(/^[A-Z]{2,4}$/.test(text)){
    showAcronymCard(text);
    return;
  }

  if(text.split(/\s+/).length>2) return;

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(text)}`)
    .then(r=>r.json())
    .then(d=>showWordPopup(text,d))
    .catch(()=>{});
});

function showAcronymCard(word){
  removePopup();
  popup=document.createElement("div");
  popup.className="trippy-card";
  popup.innerHTML=`
    <div class="tp-header">
      <span class="tp-word">${word}</span>
      <button class="tp-close">✕</button>
    </div>
    <p class="tp-definition">
      <strong>${word}</strong> – <em>acronym</em><br>
      Meaning depends on context.
    </p>
    <input class="tp-input" placeholder="Add your meaning (e.g. Artificial Intelligence)">
    <button class="tp-save">Save meaning</button>
  `;
  document.body.appendChild(popup);
  popup.querySelector(".tp-close").onclick=removePopup;
  popup.querySelector(".tp-save").onclick=()=>{
    const val=popup.querySelector(".tp-input").value.trim();
    if(!val) return;
    chrome.storage.local.get({library:[]},r=>{
      r.library.push({word,meaning:val,type:"acronym"});
      chrome.storage.local.set({library:r.library});
      removePopup();
    });
  };
}

function showWordPopup(word,data){
  removePopup();
  const e=data?.[0]; const m=e?.meanings?.[0]; const d=m?.definitions?.[0];
  if(!m||!d) return;
  popup=document.createElement("div");
  popup.className="trippy-card";
  popup.innerHTML=`
    <div class="tp-header">
      <span class="tp-word">${word}</span>
      <button class="tp-close">✕</button>
    </div>
    <p class="tp-definition">${word} – <em>${m.partOfSpeech}</em> – ${d.definition}</p>
    ${d.example?`<p class="tp-example">Example: ${d.example}</p>`:""}
    ${e.origin?`<p class="tp-origin"><strong>Origin:</strong> ${e.origin}</p>`:""}
    <div class="tp-footer">Open extension to save</div>
  `;
  document.body.appendChild(popup);
  popup.querySelector(".tp-close").onclick=removePopup;
}
