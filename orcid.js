const ORCID_ID='0009-0002-8822-0157';
async function loadPublications(){
try{
const r=await fetch(`https://pub.orcid.org/v3.0/${ORCID_ID}/works`,{headers:{Accept:'application/json'}});
const d=await r.json();
const pub=document.getElementById('publication-list');
const cnt=document.getElementById('pubCount');
if(cnt) cnt.innerText=d.group.length;
if(pub){
pub.innerHTML='';
d.group.forEach(w=>{
const s=w['work-summary'][0];
const t=s.title?.title?.value||'Untitled';
pub.innerHTML+=`<div class="pub-card"><h3>${t}</h3></div>`;
});
}
}catch(e){console.log(e)}
}
loadPublications();