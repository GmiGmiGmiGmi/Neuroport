const content = {
  "fix-problem": {
    title:"Fix a problem",
    body:`<p>Choose the area that best matches the problem.</p>
      <div class="choice-grid">
        <button class="choice" data-jump="nn-connect">NeuroNode won't connect</button>
        <button class="choice" data-jump="nn-charge">NeuroNode won't charge</button>
        <button class="choice" data-jump="grid3">Grid 3 issue</button>
        <button class="choice" data-jump="ns-signal">NeuroStrip signal issue</button>
        <button class="choice" data-jump="eyegaze-position">Eye-Gaze issue</button>
        <button class="choice" data-jump="general">Something else</button>
      </div>`
  },
  "setup": {
    title:"Set something up",
    body:`<p>Use a product guide or official resource to get started.</p>
      <div class="choice-grid">
        <button class="choice" data-jump="neuronode">NeuroNode</button>
        <button class="choice" data-jump="grid3">Grid 3</button>
        <button class="choice" data-jump="eyegaze">Eye-Gaze</button>
        <button class="choice" data-jump="uno">UNO Touch</button>
        <button class="choice" data-jump="neurostrip">NeuroStrip</button>
        <button class="choice" data-jump="mounts">Mounting</button>
      </div>`
  },
  "learn": {
    title:"Learn how to use",
    body:`<p>Browse the support areas below, or use the search bar to find a specific topic.</p>
      <div class="choice-grid">
        <button class="choice" data-jump="placement">NeuroNode placement</button>
        <button class="choice" data-jump="electrode-wizard">Electrode selection</button>
        <button class="choice" data-jump="ns-session">NeuroStrip sessions</button>
        <button class="choice" data-jump="ns-patch">Patch alignment</button>
        <button class="choice" data-jump="grid3">Grid 3 access</button>
        <button class="choice" data-jump="eyegaze-position">Eye-Gaze positioning</button>
      </div>`
  },
  "neuronode": {
    title:"NeuroNode & AAC support",
    body:`<img class="panel-image" src="assets/neuronode-duo.png" alt="NeuroNode Duo">
      <p>Use this section for NeuroNode connection, charging, activation, electrode selection, placement and Grid 3 access.</p>
      <div class="choice-grid">
        <button class="choice" data-jump="nn-connect">Connection problem</button>
        <button class="choice" data-jump="nn-charge">Charging problem</button>
        <button class="choice" data-jump="nn-red">Status lights</button>
        <button class="choice" data-jump="electrode-wizard">Choose an electrode</button>
        <button class="choice" data-jump="placement">Placement guide</button>
        <button class="choice" data-jump="grid3">Grid 3 setup</button>
      </div>`
  },
  "trilogy": {
    title:"NeuroNode Trilogy",
    body:`<img class="panel-image" src="assets/neuronode-trilogy.png" alt="NeuroNode Trilogy">
      <p>The Trilogy combines AAC, NeuroNode access and eye-gaze capability. Start by identifying which part of the system is causing the issue.</p>
      <div class="choice-grid">
        <button class="choice" data-jump="nn-connect">NeuroNode connection</button>
        <button class="choice" data-jump="eyegaze-position">Eye-Gaze</button>
        <button class="choice" data-jump="grid3">Grid 3</button>
        <button class="choice" data-jump="general">Other issue</button>
      </div>`
  },
  "eyegaze": {
    title:"Eye-Gaze solutions",
    body:`<img class="panel-image" src="assets/eyegaze-duo.png" alt="EyeGaze Duo">
      <p>Support resources for IRISBOND Hiru and Alea / IntelliGaze eye-gaze systems.</p>
      <div class="choice-grid">
        <button class="choice" data-jump="eyegaze-position">Positioning / cable checks</button>
        <button class="choice" data-jump="grid3">Grid 3 support</button>
      </div>
      <div class="mini-links">
        <a target="_blank" rel="noopener" href="https://www.irisbond.com/en/">IRISBOND Hiru ↗</a>
        <a target="_blank" rel="noopener" href="https://www.intelligaze.com/en/home">Alea IntelliGaze ↗</a>
      </div>`
  },
  "eyegaze-position": {
    title:"Eye-Gaze positioning & basic checks",
    body:`<img class="panel-image" src="assets/eyegaze-duo.png" alt="EyeGaze Duo">
      <ol>
        <li>Check that all Eye-Gaze cables are securely connected to the camera and device.</li>
        <li>Position the top of the screen approximately level with the user's eyes.</li>
        <li>As a general setup guide, position the user approximately 45–60 cm from the eye tracker.</li>
        <li>Open the required Eye-Gaze calibration software and complete calibration.</li>
      </ol>
      <div class="callout">If calibration or software-specific problems continue, use the official camera support resources or contact Control Bionics Support.</div>`
  },
  "uno": {
    title:"UNO Touch",
    body:`<img class="panel-image" src="assets/uno-touch.png" alt="UNO Touch">
      <ol>
        <li>Press and hold the device power button until the screen lights up.</li>
        <li>On Windows, confirm Grid 3 opens. On iOS, open the selected AAC application.</li>
        <li>Turn on the Bluetooth speaker using its Play/Pause button if supplied.</li>
      </ol>
      <div class="callout">For account-specific, damaged hardware or unresolved issues, contact Support.</div>`
  },
  "neurostrip": {
    title:"NeuroStrip support",
    body:`<img class="panel-image" src="assets/neurostrip-sensor.jpg" alt="NeuroStrip sensor">
      <p>NeuroStrip measures and records surface EMG and movement data. Use these support pathways for common product-operation questions.</p>
      <div class="choice-grid">
        <button class="choice" data-jump="ns-connect">Connect a device</button>
        <button class="choice" data-jump="ns-signal">Bad / erratic EMG</button>
        <button class="choice" data-jump="ns-patch">Patch alignment</button>
        <button class="choice" data-jump="ns-session">Start a session</button>
        <button class="choice" data-jump="ns-protocol">Protocols</button>
        <button class="choice" data-jump="ns-export">Session export</button>
      </div>
      <div class="callout warning"><strong>Scope:</strong> this hub provides product-operation guidance. Clinical interpretation and treatment decisions should remain with appropriately qualified professionals.</div>`
  },
  "ns-connect": {
    title:"Connect NeuroStrip",
    body:`<ol>
        <li>Wake the NeuroStrip so it is broadcasting over Bluetooth.</li>
        <li>Open <strong>Connections</strong> in the NeuroStrip application.</li>
        <li>Select <strong>Scan for Devices / Discover</strong>.</li>
        <li>Select the NeuroStrip and connect it. If needed, try the Connect button again.</li>
        <li>Use the Channels tab to assign the connected device to the intended channel and muscle placement.</li>
      </ol>
      <div class="callout">If the device does not appear, wake it first and run discovery again.</div>`
  },
  "ns-signal": {
    title:"NeuroStrip inaccurate / erratic sEMG",
    body:`<img class="panel-image" src="assets/neurostrip-sensor.jpg" alt="NeuroStrip sensor">
      <ol>
        <li>Check skin preparation and that the patch is adhering correctly.</li>
        <li>Check the NeuroStrip-to-patch electrode alignment.</li>
        <li>Use the Patch Alignment Tool when fitting the NeuroStrip to the patch.</li>
        <li>As a device check, place a connected NeuroStrip in its charger. The signal should read close to 0 μV.</li>
        <li>If required, use the pin tool to hold the NeuroStrip reset button for approximately three seconds.</li>
        <li>Restart the NeuroStrip application as a final standard troubleshooting step.</li>
      </ol>
      <div class="callout">If readings remain abnormal after standard checks, contact Support rather than continuing unsupported troubleshooting.</div>`
  },
  "ns-patch": {
    title:"NeuroStrip patch alignment",
    body:`<ol>
        <li>Remove the key-hole liner from the top of the NeuroStrip patch.</li>
        <li>Place the patch into the base of the Patch Alignment Tool.</li>
        <li>Fit the top of the tool onto the base so the patch sits flush and snug.</li>
        <li>Insert the NeuroStrip into the outline and press it onto the patch.</li>
        <li>Remove the joined NeuroStrip and patch from the tool.</li>
        <li>Remove the bottom liner, apply to the body and apply overdressing to the tail section as directed.</li>
      </ol>`
  },
  "ns-session": {
    title:"Start a NeuroStrip session",
    body:`<ol>
        <li>Create or select the client.</li>
        <li>Start a new session.</li>
        <li>Connect the required NeuroStrip devices.</li>
        <li>Assign devices to channels and confirm body placements.</li>
        <li>Leave unused channels as Unassigned.</li>
        <li>Select the protocol(s) for the session and continue.</li>
        <li>On the recording screen, confirm the EMG chart and channel indicators before starting the recording.</li>
      </ol>`
  },
  "ns-protocol": {
    title:"NeuroStrip protocols",
    body:`<p>The Protocols area can be used to create, edit or clone an existing protocol.</p>
      <ol>
        <li>Open the Protocols tab.</li>
        <li>Select <strong>New Protocol</strong> or clone an existing protocol.</li>
        <li>Enter the activity details and muscle channels.</li>
        <li>Configure the activity set timeline, repetitions and intervals.</li>
        <li>Configure visualisation options such as graph scale and target line.</li>
        <li>Preview the protocol before saving.</li>
      </ol>`
  },
  "ns-export": {
    title:"Export a NeuroStrip session",
    body:`<ol>
        <li>Open the client profile.</li>
        <li>Open the <strong>Sessions</strong> tab.</li>
        <li>Locate the relevant session.</li>
        <li>Open the actions menu beside the session.</li>
        <li>Select the available report or raw-data export option required for your workflow.</li>
      </ol>`
  },
  "nn-connect": {
    title:"NeuroNode won't connect",
    body:`<img class="panel-image" src="assets/neuronode-closeup.png" alt="NeuroNode wearable sensor">
      <p>Start with the standard Bluetooth reconnection workflow.</p>
      <ol>
        <li>Close the NeuroNode Controller App.</li>
        <li>In device Bluetooth settings, forget / remove the existing NeuroNode entry if present.</li>
        <li>Turn Bluetooth off on the Windows or iOS device.</li>
        <li>Use the supplied push-pin tool to press and hold the NeuroNode reset button for a Bluetooth scrub.</li>
        <li>Release when the NeuroNode transitions to rapid blue flashing.</li>
        <li>Wait for the rapid blue flashing to finish, then turn Bluetooth back on.</li>
        <li>Open NeuroNode Controller, wake the NeuroNode and reconnect.</li>
      </ol>
      <div class="callout">If the Controller App still cannot detect the NeuroNode after the standard reset, contact Support.</div>`
  },
  "nn-charge": {
    title:"NeuroNode won't charge",
    body:`<ol>
        <li>Check the charging plate, cable, power adaptor and wall outlet.</li>
        <li>Try a known-working outlet if available.</li>
        <li>Check that the NeuroNode is seated correctly on the charging plate.</li>
        <li>Inspect the cable and charging hardware for visible damage.</li>
      </ol>
      <div class="callout">If the NeuroNode still shows no response after basic charging checks, contact Support.</div>`
  },
  "nn-red": {
    title:"NeuroNode status lights",
    body:`<ul>
        <li><strong>Blue:</strong> searching for a Bluetooth connection.</li>
        <li><strong>Green:</strong> an EMG / spatial signal has been detected and counted as a switch.</li>
        <li><strong>Yellow:</strong> battery is low and recharging is recommended.</li>
        <li><strong>Red:</strong> error state; use the approved reset / Bluetooth scrub procedure or contact Support.</li>
      </ul>`
  },
  "grid3": {
    title:"Connect NeuroNode to Grid 3",
    body:`<ol>
        <li>Open <strong>Menu → Settings → Access → Switches</strong>.</li>
        <li>Under Switches, choose <strong>Connection</strong>.</li>
        <li>Select <strong>Change Key</strong>.</li>
        <li>Activate the NeuroNode once to make the selection.</li>
        <li>Select <strong>OK</strong> to confirm and save.</li>
      </ol>
      <div class="callout">If the NeuroNode is detected correctly in NeuroNode Controller but Grid 3 still does not respond, continue with Grid 3 configuration support.</div>
      <div class="mini-links">
        <a target="_blank" rel="noopener" href="https://hub.thinksmartbox.com/topic/grid-3/">Grid 3 support ↗</a>
        <a target="_blank" rel="noopener" href="https://hub.thinksmartbox.com/topic/how-to-use-grid-3/">How to use Grid 3 ↗</a>
        <a target="_blank" rel="noopener" href="https://hub.thinksmartbox.com/topic/grid-for-ipad/">Grid for iPad ↗</a>
      </div>`
  },
  "electrode-wizard": {
    title:"Which NeuroNode electrode should I use?",
    body:`<p>Use the intended placement to choose the appropriate documented option.</p>
      <ul>
        <li><strong>Non-adhesive electrode + band:</strong> typically suited to body areas that can be wrapped, such as wrist, arm, thigh or ankle.</li>
        <li><strong>Adhesive electrode:</strong> useful for areas that are difficult to wrap with a band, such as shoulder or abdomen.</li>
        <li><strong>Cloth electrodes:</strong> typically used for facial-muscle placements such as eyebrow or cheek and require the leadwire setup.</li>
        <li><strong>Spatial mode:</strong> an electrode is generally not required for upper- or lower-limb spatial activation.</li>
      </ul>
      <button class="choice" data-jump="placement">See placement examples →</button>`
  },
  "placement": {
    title:"NeuroNode placement examples",
    body:`<img class="panel-image" src="assets/neuronode-closeup.png" alt="NeuroNode">
      <p>Common documented placement examples include:</p>
      <ul>
        <li>Forehead flexion / eyebrow raise</li>
        <li>Smile</li>
        <li>Shoulder shrug</li>
        <li>Toe point / heel raise</li>
        <li>Leg adduction</li>
        <li>Leg abduction</li>
        <li>Finger flexion</li>
        <li>Wrist flexion</li>
      </ul>
      <div class="callout warning">Placement should be selected for the intended access method and should follow approved Control Bionics guidance for the individual setup.</div>`
  },
  "mounts": {
    title:"Mounting options",
    body:`<div class="choice-grid">
        <div><img class="panel-image" src="assets/table-stand.png" alt="Table stand"><strong>Table stand</strong></div>
        <div><img class="panel-image" src="assets/floor-stand.png" alt="Floor stand"><strong>Floor stand</strong></div>
      </div>
      <p>For compatible table, floor and wheelchair mounting systems, use the official Rehadapt resources.</p>
      <div class="mini-links"><a target="_blank" rel="noopener" href="https://rehadapt.com/">Rehadapt mounting ↗</a></div>`
  },
  "general": {
    title:"General Control Bionics enquiries",
    body:`<p>Use these official resources for product information, bookings, support and related equipment.</p>
      <div class="mini-links">
        <a target="_blank" rel="noopener" href="https://controlbionics.com/">Control Bionics ↗</a>
        <a target="_blank" rel="noopener" href="https://www.instagram.com/controlbionicsaus/">Instagram ↗</a>
        <a target="_blank" rel="noopener" href="https://bookings.cloud.microsoft/book/ControlBionics@controlbionics.com/?ismsaljsauthenabled=true">Book Support ↗</a>
        <a href="mailto:Support.au@controlbionics.com">Email Support</a>
      </div>`
  },
  "all-fixes": {
    title:"Quick fixes",
    body:`<div class="choice-grid">
        <button class="choice" data-jump="nn-connect">NeuroNode won't connect</button>
        <button class="choice" data-jump="nn-charge">NeuroNode won't charge</button>
        <button class="choice" data-jump="nn-red">NeuroNode status lights</button>
        <button class="choice" data-jump="grid3">Grid 3 not responding</button>
        <button class="choice" data-jump="ns-connect">NeuroStrip won't connect</button>
        <button class="choice" data-jump="ns-signal">NeuroStrip signal problem</button>
        <button class="choice" data-jump="eyegaze-position">Eye-Gaze issue</button>
      </div>`
  }
};

const searchMap = [
  [["neuronode","node","bluetooth","scrub","reset","connect"],"nn-connect"],
  [["charge","charging","battery"],"nn-charge"],
  [["red light","flashing red","blue light","yellow light","status light"],"nn-red"],
  [["grid 3","grid3","smartbox","switch","change key"],"grid3"],
  [["hiru","irisbond","eyegaze","eye gaze","intelligaze","alea","camera"],"eyegaze"],
  [["position","45","60cm","calibration"],"eyegaze-position"],
  [["neurostrip","strip","emg","semg","signal","erratic","noise"],"neurostrip"],
  [["protocol","repetition","target line"],"ns-protocol"],
  [["session","channel","body placement"],"ns-session"],
  [["export","raw data","report"],"ns-export"],
  [["patch","alignment"],"ns-patch"],
  [["electrode","cloth","adhesive","non-adhesive"],"electrode-wizard"],
  [["placement","muscle","eyebrow","smile","shoulder","wrist","finger","leg"],"placement"],
  [["mount","table stand","floor stand","wheelchair","rehadapt"],"mounts"],
  [["uno","uno touch"],"uno"],
  [["book","appointment","support","contact","general"],"general"]
];

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

function openPanel(key){
  const item = content[key] || content.general;
  modalContent.innerHTML = `<span class="eyebrow">SUPPORT GUIDE</span><h2 id="modalTitle">${item.title}</h2>${item.body}
    <div class="support-actions" style="margin-top:24px">
      <a class="btn btn-primary" target="_blank" rel="noopener" href="https://bookings.cloud.microsoft/book/ControlBionics@controlbionics.com/?ismsaljsauthenabled=true">Book Support</a>
      <a class="btn btn-secondary" href="mailto:Support.au@controlbionics.com">Email Support</a>
    </div>`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
  bindJumpButtons();
}
function closePanel(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}
function bindJumpButtons(){
  modalContent.querySelectorAll("[data-jump]").forEach(btn=>{
    btn.addEventListener("click",()=>openPanel(btn.dataset.jump));
  });
}
document.querySelectorAll("[data-open]").forEach(el=>el.addEventListener("click",()=>openPanel(el.dataset.open)));
document.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("click",closePanel));
document.addEventListener("keydown",e=>{if(e.key==="Escape") closePanel();});

function runSearch(){
  const q = document.getElementById("searchInput").value.trim().toLowerCase();
  if(!q){ openPanel("general"); return; }
  let chosen = "general";
  let best = 0;
  searchMap.forEach(([terms,key])=>{
    let score=0;
    terms.forEach(t=>{ if(q.includes(t)) score += t.length; });
    if(score>best){best=score; chosen=key;}
  });
  openPanel(chosen);
}
document.getElementById("searchBtn").addEventListener("click",runSearch);
document.getElementById("searchInput").addEventListener("keydown",e=>{if(e.key==="Enter") runSearch();});

// Neuro V1: deterministic, free frontline assistant
const neuroRoutes = [
  {terms:["neuronode","bluetooth","connect","connection","scrub","reset"],key:"nn-connect",reply:"That sounds like a NeuroNode connection issue. I can open the standard Bluetooth reset and reconnection guide."},
  {terms:["charge","charging","battery"],key:"nn-charge",reply:"I can help with the standard NeuroNode charging checks."},
  {terms:["red light","flashing red","blue light","yellow light","status light"],key:"nn-red",reply:"I can explain the NeuroNode status lights and documented next steps."},
  {terms:["grid 3","grid3","switch","change key"],key:"grid3",reply:"I can open the NeuroNode-to-Grid 3 switch connection guide."},
  {terms:["neurostrip","emg","semg","strip","signal"],key:"neurostrip",reply:"I can take you to NeuroStrip setup, connection, protocols, sessions and signal troubleshooting."},
  {terms:["patch","alignment"],key:"ns-patch",reply:"I can show the NeuroStrip patch alignment workflow."},
  {terms:["electrode","placement","muscle","eyebrow","smile","wrist","shoulder"],key:"electrode-wizard",reply:"I can help you find the documented NeuroNode electrode and placement guidance."},
  {terms:["eye gaze","eyegaze","hiru","irisbond","intelligaze","alea","camera"],key:"eyegaze",reply:"I can point you to Eye-Gaze setup and the official Hiru / IntelliGaze resources."},
  {terms:["mount","table stand","floor stand","wheelchair"],key:"mounts",reply:"I can show the mounting section and official Rehadapt resource."},
  {terms:["book","appointment","support","contact","email"],key:"general",reply:"I can open the Control Bionics support and booking options."},
  {terms:["uno","uno touch"],key:"uno",reply:"I can open the UNO Touch setup guide."}
];
function neuroReply(text){
  const q=text.trim().toLowerCase(); if(!q)return;
  const log=document.getElementById("neuroChat");
  const u=document.createElement("div");u.className="neuro-msg user";u.textContent=text;log.appendChild(u);
  let best=null,score=0;
  neuroRoutes.forEach(r=>{let s=0;r.terms.forEach(t=>{if(q.includes(t))s+=t.length});if(s>score){score=s;best=r}});
  const a=document.createElement("div");a.className="neuro-msg assistant";
  if(best){a.innerHTML=`<strong>Neuro:</strong> ${best.reply} <button class="text-link neuro-open-guide" data-key="${best.key}" type="button">Open guide →</button>`}
  else{a.innerHTML="<strong>Neuro:</strong> I’m not confident I have a standard V1 guide for that. Try NeuroNode, Grid 3, Eye-Gaze, NeuroStrip, UNO Touch or mounting, or contact Support for anything more specific."}
  log.appendChild(a);log.scrollTop=log.scrollHeight;
  a.querySelectorAll(".neuro-open-guide").forEach(b=>b.addEventListener("click",()=>openPanel(b.dataset.key)));
}
document.getElementById("neuroSend")?.addEventListener("click",()=>{const i=document.getElementById("neuroInput");neuroReply(i.value);i.value=""});
document.getElementById("neuroInput")?.addEventListener("keydown",e=>{if(e.key==="Enter"){neuroReply(e.target.value);e.target.value=""}});
document.querySelectorAll(".neuro-suggest").forEach(b=>b.addEventListener("click",()=>neuroReply(b.dataset.neuroQ)));
function scrollToNeuro(){document.getElementById("ask-neuro")?.scrollIntoView({behavior:"smooth"});setTimeout(()=>document.getElementById("neuroInput")?.focus(),450)}
document.getElementById("askNeuroTop")?.addEventListener("click",scrollToNeuro);
document.getElementById("askNeuroHero")?.addEventListener("click",scrollToNeuro);
document.getElementById("floatingNeuro")?.addEventListener("click",scrollToNeuro);

// First-visit Neuro tour
const tour=document.getElementById("tour"),tourText=document.getElementById("tourText"),tourProgress=document.getElementById("tourProgress"),tourNext=document.getElementById("tourNext"),tourBack=document.getElementById("tourBack");
const tourSteps=[
  "I’ll show you how to use the Control Bionics Support Hub.",
  "If something isn’t working, start with Quick Fixes. These cover common frontline issues before you need to contact Support.",
  "Choose your product for setup, troubleshooting, guides and official resources.",
  "You can also ask me a simple question. In V1 I route approved predefined support flows and escalate anything I can’t confidently match."
];
let tourIndex=0;
function renderTour(){tourText.textContent=tourSteps[tourIndex];tourProgress.textContent=`${tourIndex+1} of ${tourSteps.length}`;tourBack.disabled=tourIndex===0;tourNext.textContent=tourIndex===tourSteps.length-1?"Start exploring":"Next"}
function openTour(){tourIndex=0;renderTour();tour.classList.add("open");tour.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
function closeTour(){tour.classList.remove("open");tour.setAttribute("aria-hidden","true");document.body.style.overflow="";try{localStorage.setItem("neuroTourSeen","1")}catch(e){}}
tourNext?.addEventListener("click",()=>{if(tourIndex<tourSteps.length-1){tourIndex++;renderTour()}else closeTour()});
tourBack?.addEventListener("click",()=>{if(tourIndex>0){tourIndex--;renderTour()}});
document.getElementById("tourClose")?.addEventListener("click",closeTour);
document.getElementById("startTourBtn")?.addEventListener("click",openTour);
document.getElementById("meetNeuroBtn")?.addEventListener("click",openTour);
try{if(!localStorage.getItem("neuroTourSeen"))setTimeout(openTour,700)}catch(e){}
