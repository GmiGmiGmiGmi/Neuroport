// Control Bionics Support V1.3 — static / no API
const CONFIG = {
  // Replace this with the real support mailbox before publishing.
  supportEmail: "Support.au@controlbionics.com"
};

const SECTIONS = {
  neuronode: {
    icon: "🧠", eyebrow: "NEURONODE & AAC", title: "NeuroNode & AAC Support",
    description: "Guided help for common NeuroNode connection, power, status-light, setup and AAC access questions.",
    issues: [
      { title:"NeuroNode won't connect", desc:"Bluetooth searching, reconnecting or Controller App connection issues.", flow:"nn-connect", tag:"COMMON" },
      { title:"What do the lights mean?", desc:"Understand blue, red, green and yellow status indications.", flow:"nn-lights", tag:"QUICK GUIDE" },
      { title:"NeuroNode Duo setup", desc:"Windows setup: power on, Controller App, placement, Grid 3 and start.", flow:"nn-setup", tag:"SETUP" },
      { title:"NeuroNode has no light / won't charge", desc:"Run basic power and charging checks before escalating.", flow:"nn-power", tag:"TROUBLESHOOT" },
      { title:"Activation not detected or unreliable", desc:"Check placement/electrode setup and separate activation from software connection issues.", flow:"nn-activation", tag:"COMMON" },
      { title:"Which electrode should I use?", desc:"Guided choice between non-adhesive, adhesive and cloth electrodes based on the approved placement guide.", flow:"nn-electrode-wizard", tag:"WIZARD" },
      { title:"Where should I place NeuroNode?", desc:"Choose face, shoulder, hand/arm or leg/foot and open the relevant visual placement examples.", flow:"nn-placement-wizard", tag:"VISUAL WIZARD" },
      { title:"Grid 3 doesn't respond", desc:"If NeuroNode connects but Grid 3 does not respond, check the Grid 3 switch connection.", flow:"grid-connect", tag:"GRID 3" },
      { title:"Electrode & muscle placement", desc:"Visual placement examples for facial, shoulder, leg, finger and wrist activation sites.", article:"nn-placement", tag:"VISUAL GUIDE" },
      { title:"Choose an electrode type", desc:"Compare non-adhesive, adhesive and cloth electrodes and when each is typically used.", article:"nn-electrode-types", tag:"GUIDE" },
      { title:"Prepare adhesive electrodes", desc:"Skin preparation and NeuroNode attachment for adhesive electrode use.", article:"nn-adhesive-prep", tag:"HOW TO" },
      { title:"Prepare cloth electrodes", desc:"Skin prep, leadwire connection and muscle/bone electrode positioning for facial muscles.", article:"nn-cloth-prep", tag:"HOW TO" },
      { title:"Fit band & non-adhesive electrode", desc:"Attach the non-adhesive electrode, bezel and NeuroNode band.", article:"nn-band", tag:"HOW TO" },
      { title:"NeuroNode accessories", desc:"Review common NeuroNode Duo trial accessories and return checklist items.", article:"nn-accessories", tag:"CHECKLIST" }
    ]
  },
  grid3: {
    icon:"🖥️", eyebrow:"GRID 3", title:"Grid 3 Support",
    description:"Frontline help for NeuroNode-to-Grid 3 switch connection and access configuration.",
    issues:[
      { title:"Connect NeuroNode to Grid 3", desc:"Menu → Settings → Access → Switches → Connection → Change Key.", flow:"grid-connect", tag:"COMMON" },
      { title:"Grid 3 not detecting NeuroNode", desc:"Separate a Grid 3 configuration issue from a NeuroNode connection issue.", flow:"grid-detect", tag:"TROUBLESHOOT" },
      { title:"NeuroNode works in Controller App only", desc:"Confirm activation and then check the Grid 3 access pathway.", flow:"grid-controller", tag:"DIAGNOSTIC" },
      { title:"Open Grid 3 during NeuroNode setup", desc:"See where Grid 3 sits in the standard NeuroNode Duo setup flow.", flow:"nn-setup", tag:"SETUP" }
    ]
  },
  neurostrip: {
    icon:"📈", eyebrow:"NEUROSTRIP", title:"NeuroStrip Help Centre",
    description:"Interactive first-line guidance based on the NeuroStrip User Guide, including setup, placement, connections, protocols, sessions, graphs, export and common troubleshooting.",
    issues:[
      { title:"Getting started", desc:"Start with setup, placement, connections, protocols, sessions or troubleshooting.", flow:"strip-start", tag:"START HERE" },
      { title:"NeuroStrip won't connect", desc:"Device not appearing, Scan for Devices / Discover, or Connect not completing.", flow:"strip-connect", tag:"COMMON" },
      { title:"Erratic / inaccurate EMG", desc:"Check skin preparation, patch adherence, alignment, charger test, reset and app restart.", flow:"strip-emg", tag:"TROUBLESHOOT" },
      { title:"Patch alignment & placement", desc:"Visual guidance for target-muscle selection and the six-step Patch Alignment Tool process.", article:"strip-placement", tag:"VISUAL GUIDE" },
      { title:"Create a new session", desc:"Connect devices, assign channels and body placements, then choose protocols.", article:"strip-session", tag:"HOW TO" },
      { title:"Protocols", desc:"Create, clone, edit and preview protocol activities, timing and visualisation settings.", article:"strip-protocols", tag:"HOW TO" },
      { title:"Session graph & controls", desc:"Live EMG, channel indicators, recruitment patterns, widgets, intervals and recording controls.", article:"strip-graph", tag:"GUIDE" },
      { title:"Export previous sessions", desc:"Open Patient Sessions and use the session actions menu for export options.", article:"strip-export", tag:"DATA" },
      { title:"Patient Manager", desc:"Clients, overview metrics, sessions, notes and performance measurements.", article:"strip-patient", tag:"GUIDE" },
      { title:"What is NeuroStrip?", desc:"General approved product overview for rehabilitation, sport science and related applications.", article:"strip-research", tag:"GENERAL" }
    ]
  },
  general: {
    icon:"◈", eyebrow:"CONTROL BIONICS", title:"General Enquiries",
    description:"Use this section when the customer does not know which product/support area they need.",
    issues:[
      { title:"I need a manual", desc:"Route to the correct product guide or quick-start information.", article:"manuals", tag:"RESOURCES" },
      { title:"I don't know which support area", desc:"A simple product triage to get the customer to the right section.", flow:"general-route", tag:"ROUTING" },
      { title:"Trial device help", desc:"Setup and return guidance can be surfaced from approved trial cards.", article:"trials", tag:"TRIALS" },
      { title:"Contact Support", desc:"Escalate a non-standard issue with a concise summary.", flow:"general-escalate", tag:"CONTACT" }
    ]
  }
};

const ARTICLES = {
  "nn-placement": { area:"NeuroNode & AAC", title:"Electrode & muscle placement guide", summary:"Visual examples of common NeuroNode placement sites for EMG or movement access.", image:"assets/electrode-2.jpg", body:`<h3>Placement examples</h3><p>The supplied placement guide illustrates common examples including forehead flexion / eyebrow raise, smile, shoulder shrug, toe point / heel raise, leg adduction, leg abduction, finger flexion and wrist flexion.</p><p>Facial examples shown in the guide use the Leadwire Adapter Base. Placement should be selected for the intended activation and according to the user's established setup.</p><h3>Need electrode selection help?</h3><p>Open <strong>Choose an electrode type</strong> for the guide's distinction between non-adhesive, adhesive and cloth electrodes.</p>` },
  "nn-electrode-types": { area:"NeuroNode & AAC", title:"Choose an electrode type", summary:"Use the supplied guidance to choose between non-adhesive, adhesive and cloth electrodes.", image:"assets/electrode-3.jpg", body:`<h3>Non-adhesive electrodes</h3><p>Typically used with the bezel and strap on body parts that can be wrapped, such as the wrist, arms, thighs and ankle. The guide identifies these for EMG activation.</p><h3>Adhesive electrodes</h3><p>Useful on areas that are difficult to wrap with a strap, such as the thumb, shoulders or abdomen. The guide also notes they can be attached to clothing or material such as a headband for spatial movements.</p><h3>Cloth electrodes</h3><p>Typically used on facial muscles such as the eyebrows and cheeks. Skin preparation is required, and three leadwires connect the electrodes to the NeuroNode through the lapel / leadwire base.</p><h3>Spatial mode</h3><p>The guide notes that an electrode is not usually required for Spatial activation of the upper and lower limbs.</p>` },
  "nn-band": { area:"NeuroNode & AAC", title:"Band, bezel & non-adhesive electrode", summary:"Visual steps for attaching a non-adhesive electrode and fitting the NeuroNode band through the bezel.", image:"assets/electrode-4.jpg", body:`<h3>Attach the electrode</h3><p>For EMG use, click the non-adhesive electrode onto the base of the NeuroNode, then click the NeuroNode into the bezel face.</p><h3>Fit the band</h3><p>Snap the NeuroNode Bezel onto the NeuroNode and feed the NeuroNode Band through the bezel openings. Set the desired tightness and secure the hook-and-loop fasteners at each end.</p>` },
  "nn-adhesive-prep": { area:"NeuroNode & AAC", title:"Adhesive electrode preparation", summary:"Prepare the skin, position the adhesive electrode on the active muscle, then attach the NeuroNode.", image:"assets/electrode-5.jpg", body:`<h3>1. Clean the area</h3><p>Clean the intended placement area with an alcohol wipe.</p><h3>2. Prepare the skin</h3><p>Use the supplied skin-preparation wipe as shown in the guide.</p><h3>3. Position and attach</h3><p>Place the adhesive electrode over the active muscle and click the NeuroNode into the electrode.</p>` },
  "nn-cloth-prep": { area:"NeuroNode & AAC", title:"Cloth electrode preparation", summary:"Prepare facial placement sites, connect the three leadwires and position muscle and reference electrodes as shown in the guide.", image:"assets/electrode-6.jpg", body:`<h3>1. Prepare the skin</h3><p>Clean the area with an alcohol wipe, then use the skin-preparation wipe.</p><h3>2. Connect the leadwires</h3><p>Connect the leadwires and attach them to the individual cloth electrodes.</p><h3>3. Position electrodes</h3><p>The guide instructs placing the two electrodes with white wires on the muscle and the electrode with the black wire on bone, then clicking the NeuroNode onto the lapel / leadwire base.</p>` },
  "nn-accessories": { area:"NeuroNode & AAC", title:"NeuroNode Duo accessories", summary:"A quick visual checklist for common NeuroNode Duo trial equipment.", image:"assets/page_23.png", body:`<h3>Common items</h3><ul><li>NeuroNode Duo device</li><li>Device charger</li><li>NeuroNode</li><li>NeuroNode charging plate</li><li>NeuroNode charging cord</li><li>Accessories bag</li></ul><p>Use the approved trial checklist when confirming what was sent and what should be returned.</p>` },
  "strip-placement": { area:"NeuroStrip", title:"EMG placement & patch alignment", summary:"Choose a target muscle that can respond to a contraction command, then use the Patch Alignment Tool to align the NeuroStrip with the patch electrodes.", image:"assets/strip_p9.jpg", body:`<h3>Target muscle</h3><p>The chosen target muscle should respond, at least minimally, to a command to contract and should return to rest in a timely manner. The guide notes that the muscle does not need to function at optimal levels.</p><h3>Patch alignment</h3><ol><li>Remove the key-hole liner from the top of the NeuroStrip patch.</li><li>Place the patch in the base of the Patch Alignment Tool.</li><li>Fit the top of the tool onto the base so it is flush and snug.</li><li>Insert the NeuroStrip into the outline and press it down to adhere to the patch.</li><li>Remove the joined NeuroStrip and patch from the tool.</li><li>Remove the bottom liner, adhere to the body, and apply overdressing to the tail section only.</li></ol>` },
  "strip-session": { area:"NeuroStrip", title:"Create a new NeuroStrip session", summary:"Connect available devices, confirm channel and body placement assignments, then select the protocols for the session.", image:"assets/strip_p21.jpg", body:`<h3>1. Confirm device connections</h3><p>Use Scan for Devices to find available NeuroStrip devices. A green Connected status confirms the device is ready.</p><h3>2. Confirm channels and placement</h3><p>Assign each active channel to a connected NeuroStrip and choose the body placement. Unused channels can remain Unassigned.</p><h3>3. Select protocols</h3><p>Search for a protocol by name or ID, select the required protocol cards, confirm the sequence, and continue.</p>` },
  "strip-protocols": { area:"NeuroStrip", title:"Protocols", summary:"Create a new protocol or clone/edit an existing one, configure activities and graph settings, then preview before saving.", image:"assets/strip_p17.jpg", body:`<h3>Protocol library</h3><p>Open the Protocols tab to create a New Protocol, Clone an existing one, or Edit it.</p><h3>Create protocol</h3><p>Add exercise details and tags, select muscle channels, build the activity timeline, then configure visualisation settings such as graph scale, target line and target-line condition.</p><h3>Preview</h3><p>The Preview tab shows activities, repetitions, sets, timing, selected muscle channels and expected activation pattern. Use playback controls to confirm the session behaviour before saving.</p>` },
  "strip-graph": { area:"NeuroStrip", title:"Session graph & controls", summary:"Use the recording screen to view live EMG, channel readings and recruitment patterns, and control what is shown during the session.", image:"assets/strip_p24.jpg", body:`<h3>Recording screen</h3><p>The EMG chart displays live muscle activity. Channel indicators show assigned channels, colour, selected muscle placement and current reading. Recruitment Patterns provides a body-map view.</p><h3>Widget controls</h3><p>Choose whether to display live readings, accelerometer information, raw X/Y/Z, the EMG chart and body heatmap. Audio can beep when the target line is reached.</p><h3>During a protocol</h3><p>The display shows the active phase, repetition count and Go intervals. Session controls allow notes, skipping a phase, pausing or stopping the recording.</p>` },
  "strip-export": { area:"NeuroStrip", title:"Export previous sessions", summary:"Open a client's Sessions tab, locate the session and use the actions menu next to it to access export options.", image:"assets/strip_p13.jpg", body:`<h3>Previous sessions</h3><p>Open the client profile and select the Sessions tab. Double-click a session to open it.</p><h3>Export</h3><p>Select the dots next to the relevant session to open the available session actions and export options.</p>` },
  "strip-patient": { area:"NeuroStrip", title:"Patient Manager", summary:"Manage clients and review overview metrics, session history, notes and measurements from the NeuroStrip application.", image:"assets/strip_p12.jpg", body:`<h3>Client dashboard</h3><p>The Clients tab supports searching/filtering records, creating a client, opening an existing profile and starting a new session.</p><h3>Overview metrics</h3><p>The Overview can display amplitude metrics, distribution metrics and iEMG metrics for placements.</p><h3>Other tabs</h3><p>Sessions contains past sessions and export actions. Notes stores searchable client notes. Measurements tracks saved performance results, latest and best results, delta, trend graph and history.</p>` },
  "strip-research": { area:"NeuroStrip", title:"What is NeuroStrip?", summary:"NeuroStrip measures and records surface EMG and accelerometer data and supports multiple connected devices in a single session.", image:"assets/strip_p4.jpg", body:`<h3>Approved product overview</h3><p>NeuroStrip provides insight into muscle activation and intent through bio-electric signals. The guide describes high-fidelity sensing of surface electromyography (sEMG) and accelerometer data.</p><p>The application can connect and analyse multiple devices in a single session, record and review sessions, and support customised analysis across areas including rehabilitation, sport science, wearables and medical technology.</p><h3>Boundary</h3><p>This frontline platform should explain documented product functionality, but should not generate diagnosis, treatment recommendations or unsupported clinical conclusions.</p>` },
  manuals: { area:"General Enquiries", title:"Manuals & quick-start guides", summary:"The trial cards already contain QR-linked quick-start and information resources for multiple Control Bionics products.", image:"assets/page_21.png", body:`<h3>V1 behaviour</h3><p>Select a product and operating system, then present the correct approved guide. For this prototype, the NeuroNode Duo Windows easy-read setup guide is included as an example.</p><p>As more guides are approved, add them to the assets folder and link them through the knowledge entries in <strong>app.js</strong>.</p>` },
  trials: { area:"General Enquiries", title:"Trial device guidance", summary:"The same platform can support customers from initial setup through to the return checklist.", image:"assets/page_23.png", body:`<h3>Possible trial journey</h3><ol><li>Identify the trial device.</li><li>Show the correct setup card.</li><li>Surface common troubleshooting during the trial.</li><li>At the end, show the correct accessories return checklist.</li></ol><p>This reduces the need to repeatedly resend the same setup and return instructions.</p>` }
};

const FLOWS = {
  "nn-connect": {
    area:"NeuroNode & AAC", title:"NeuroNode won't connect", intro:"We'll run the standard connection checks first and only escalate if they fail.",
    steps:[
      { title:"What is the NeuroNode doing?", copy:"Choose the closest status. This helps route the next check.", image:"assets/page_37.png", caption:"Reference: NeuroNode status light guide.", options:[
        {label:"🔵 Flashing blue", next:1, note:"Blue flashing / Bluetooth searching"},
        {label:"🔴 Red light", next:1, note:"Red error state"},
        {label:"No light", jump:"nn-power"},
        {label:"I'm not sure", next:1, note:"Status light unclear"}
      ]},
      { title:"Perform a Bluetooth reset / scrub", copy:"If the Controller App is available, use the app reset method. The manual method can be used when needed.", bullets:["Close the NeuroNode Controller App if using the manual method.","Forget/delete NeuroNode from Bluetooth settings if present.","Turn Bluetooth off on the Windows or iOS device.","Use the supplied push pin to press and hold the reset button.","Release when the light changes to rapid blue flashing.","Wait for the blue flashing to stop, then turn Bluetooth back on and reconnect."], image:"assets/page_39.png", caption:"Reference: approved Bluetooth Reset / Scrub trial card.", options:[
        {label:"✓ It connected", resolve:"Bluetooth reset restored the connection."},
        {label:"Still not connecting", next:2, note:"Bluetooth reset completed — unresolved"}
      ]},
      { title:"Check the NeuroNode Controller App", copy:"Open the Controller App, shake the NeuroNode to wake it, then select Connect to NeuroNode.", image:"assets/page_21.png", caption:"Reference: NeuroNode Duo Windows setup guide.", options:[
        {label:"Controller App connects", jump:"grid-detect", note:"Controller App connection successful"},
        {label:"Controller App cannot find it", escalate:"Controller App cannot find NeuroNode after Bluetooth reset"},
        {label:"It connected after this", resolve:"Controller App reconnection restored communication."}
      ]}
    ]
  },
  "nn-lights": {
    area:"NeuroNode & AAC", title:"NeuroNode status lights", intro:"A quick reference for the common NeuroNode signal indicators.",
    steps:[{ title:"Choose the light colour", copy:"The trial-card guide describes the following status indicators.", image:"assets/page_37.png", caption:"Reference: NeuroNode Signal Indicators.", options:[
      {label:"🔵 Blue", message:"Blue indicates the NeuroNode is searching for a Bluetooth connection and will return to standby if none is found.", next:1},
      {label:"🔴 Red", message:"Red indicates an error state. Use the approved Reset/Bluetooth Scrub process or contact support if it persists.", jump:"nn-connect"},
      {label:"🟢 Green", message:"Green indicates an EMG/spatial signal has been detected and counted as a switch.", resolve:"Status light explanation completed."},
      {label:"🟡 Yellow", message:"Yellow indicates low battery; recharging is recommended.", resolve:"Status light explanation completed."}
    ]},{ title:"Blue means Bluetooth searching", copy:"If the device is not reconnecting, continue into the standard Bluetooth reset / scrub flow.", image:"assets/page_39.png", caption:"Bluetooth Reset / Scrub", options:[{label:"Start reset steps", jump:"nn-connect"},{label:"That's all I needed", resolve:"Status light explanation completed."}]}]
  },
  "nn-setup": {
    area:"NeuroNode & AAC", title:"NeuroNode Duo setup — Windows", intro:"A simple five-step setup based on the existing Easy Read trial card.",
    steps:[
      {title:"Turn on the device",copy:"Press and hold the power button until the screen lights up.",image:"assets/page_21.png",options:[{label:"Next",next:1}]},
      {title:"Open NeuroNode Controller",copy:"Open the NeuroNode Controller App, shake to wake the NeuroNode and connect to NeuroNode.",image:"assets/page_21.png",options:[{label:"Next",next:2}]},
      {title:"Place the NeuroNode",copy:"Place the NeuroNode on the designated area on the user using the approved setup/placement guidance.",image:"assets/page_21.png",options:[{label:"Next",next:3}]},
      {title:"Open Grid 3",copy:"Open Grid 3 or the relevant AAC software.",image:"assets/page_21.png",options:[{label:"Next",next:4}]},
      {title:"Get started",copy:"For advanced NeuroNode settings, refer to the approved Quick Start Guide.",image:"assets/page_21.png",options:[{label:"Done",resolve:"NeuroNode Duo setup guide completed."}]}
    ]
  },
  "nn-power": {
    area:"NeuroNode & AAC", title:"NeuroNode has no light", intro:"Run basic power checks before treating this as a device fault.",
    steps:[{title:"Check charging and power",copy:"Confirm the charging plate/cable/charger and wall outlet have power, and make sure the NeuroNode is seated correctly.",bullets:["Try a known-working power outlet.","Inspect the cable and charger for obvious damage.","Confirm the charging plate is connected correctly."],options:[{label:"It powers on now",resolve:"Power/charging check restored operation."},{label:"Still no light",escalate:"No LED response after standard power and charging checks"}]}]
  },
  "grid-connect": {
    area:"Grid 3", title:"Connect NeuroNode to Grid 3", intro:"Set the NeuroNode as the switch connection used by Grid 3 scanning mode.",
    steps:[
      {title:"Open Switch settings",copy:"In Grid 3, go to Menu → Settings → Access → Switches.",image:"assets/page_34.png",caption:"Reference: Grid 3 connection trial card.",options:[{label:"Next",next:1}]},
      {title:"Choose Connection",copy:"In Switches, choose Connection, then select Change Key.",image:"assets/page_34.png",options:[{label:"Next",next:2}]},
      {title:"Activate NeuroNode",copy:"Use the NeuroNode to make a selection, then press OK. Press OK once more to save the changes.",image:"assets/page_34.png",options:[{label:"✓ Grid 3 responds now",resolve:"Grid 3 switch connection configured successfully."},{label:"Grid 3 still doesn't respond",jump:"grid-detect",note:"Grid 3 connection settings completed — unresolved"}]}
    ]
  },
  "grid-detect": {
    area:"Grid 3", title:"Grid 3 is not detecting NeuroNode", intro:"First determine whether the problem is NeuroNode communication or Grid 3 configuration.",
    steps:[{title:"Does NeuroNode work in the Controller App?",copy:"Open NeuroNode Controller and confirm whether the NeuroNode connects and activation is detected.",image:"assets/page_21.png",options:[{label:"Yes — Controller App works",next:1,note:"NeuroNode functional in Controller App"},{label:"No — Controller App doesn't work",jump:"nn-connect",note:"NeuroNode not working in Controller App"}]},{title:"Recheck Grid 3 switch connection",copy:"Go to Menu → Settings → Access → Switches → Connection → Change Key. Activate NeuroNode and save with OK.",image:"assets/page_34.png",options:[{label:"✓ Working now",resolve:"Grid 3 connection was corrected."},{label:"Still not working",escalate:"NeuroNode works in Controller App but Grid 3 remains unresponsive after switch configuration"}]}]
  },
  "grid-controller": { area:"Grid 3", title:"Controller App works, Grid 3 does not", intro:"This usually points the frontline check toward Grid 3 access configuration.", steps:[{title:"Confirm Grid 3 switch connection",copy:"Use the documented Switches → Connection → Change Key pathway and activate NeuroNode once to assign the key.",image:"assets/page_34.png",options:[{label:"Working now",resolve:"Grid 3 access connection corrected."},{label:"Still not working",escalate:"Controller App detects NeuroNode but Grid 3 remains unresponsive"}]}] },

  "nn-electrode-wizard": { area:"NeuroNode & AAC", title:"Which electrode should I use?", intro:"A short decision guide based on the supplied electrode placement guide.", steps:[
    {title:"Where are you placing the NeuroNode?",copy:"Choose the closest placement situation.",image:"assets/electrode-3.jpg",options:[
      {label:"Facial muscle (eyebrow / cheek)",next:1,note:"Facial placement selected"},
      {label:"Area that can be comfortably wrapped (wrist / arm / thigh / ankle)",next:2,note:"Wrappable limb placement selected"},
      {label:"Area difficult to wrap (thumb / shoulder / abdomen)",next:3,note:"Difficult-to-wrap placement selected"},
      {label:"Spatial activation on upper/lower limb",next:4,note:"Spatial activation selected"}
    ]},
    {title:"Cloth electrodes",copy:"The supplied guide says cloth electrodes are typically used for facial muscles such as eyebrows and cheeks. Skin preparation is required and three leadwires connect the electrodes to the NeuroNode through the leadwire/lapel base.",image:"assets/electrode-6.jpg",options:[{label:"Show preparation guide",article:"nn-cloth-prep"},{label:"I need a different option",next:0}]},
    {title:"Non-adhesive electrode",copy:"The supplied guide says non-adhesive electrodes are typically used with the bezel and strap on body parts that can be wrapped, including the wrist, arms, thighs and ankle.",image:"assets/electrode-4.jpg",options:[{label:"Show band & bezel fitting",article:"nn-band"},{label:"I need a different option",next:0}]},
    {title:"Adhesive electrode",copy:"The supplied guide says adhesive electrodes can be used on areas that are difficult to wrap with a strap, including the thumb, shoulders and abdomen.",image:"assets/electrode-5.jpg",options:[{label:"Show adhesive preparation",article:"nn-adhesive-prep"},{label:"I need a different option",next:0}]},
    {title:"Spatial activation",copy:"The supplied guide notes that an electrode is not usually required for Spatial activation of the upper and lower limbs.",image:"assets/electrode-3.jpg",options:[{label:"That answers it",resolve:"Electrode requirement clarified for Spatial activation."},{label:"I need placement guidance",jump:"nn-placement-wizard"}]}
  ]},
  "nn-placement-wizard": { area:"NeuroNode & AAC", title:"NeuroNode placement guide", intro:"Choose an activation area and view the approved visual examples from the placement guide.", steps:[
    {title:"Which area are you using?",copy:"These are examples from the supplied Control Bionics placement guide.",image:"assets/electrode-2.jpg",options:[
      {label:"Face",next:1},{label:"Shoulder",next:2},{label:"Arm / hand",next:3},{label:"Leg / foot",next:4}
    ]},
    {title:"Face placement examples",copy:"The guide shows forehead flexion / eyebrow raise and smile examples using the Leadwire Adapter Base.",image:"assets/electrode-2.jpg",options:[{label:"Open electrode-type guide",jump:"nn-electrode-wizard"},{label:"Back to body area",next:0}]},
    {title:"Shoulder placement example",copy:"The guide shows shoulder shrug placement, singular or in unison.",image:"assets/electrode-2.jpg",options:[{label:"Open electrode-type guide",jump:"nn-electrode-wizard"},{label:"Back to body area",next:0}]},
    {title:"Arm / hand placement examples",copy:"The guide shows finger flexion and wrist flexion examples.",image:"assets/electrode-2.jpg",options:[{label:"Open electrode-type guide",jump:"nn-electrode-wizard"},{label:"Back to body area",next:0}]},
    {title:"Leg / foot placement examples",copy:"The guide shows leg adduction, leg abduction and toe point / heel raise examples.",image:"assets/electrode-2.jpg",options:[{label:"Open electrode-type guide",jump:"nn-electrode-wizard"},{label:"Back to body area",next:0}]}
  ]},
  "nn-activation": { area:"NeuroNode & AAC", title:"NeuroNode activation problem", intro:"Check whether the issue is signal/placement related or a software connection issue.", steps:[
    {title:"Does NeuroNode connect in the Controller App?",copy:"This first separates connection from activation/placement.",image:"assets/page_21.png",options:[{label:"Yes, it connects",next:1,note:"Controller App connection confirmed"},{label:"No, it does not connect",jump:"nn-connect"}]},
    {title:"Is activation being detected?",copy:"If the NeuroNode is connected but activation is not being detected reliably, review the approved placement and electrode setup before treating it as a software issue.",image:"assets/electrode-2.jpg",options:[{label:"I need placement help",jump:"nn-placement-wizard"},{label:"I need electrode help",jump:"nn-electrode-wizard"},{label:"Placement/electrode already checked",escalate:"NeuroNode connects but activation remains absent or unreliable after approved placement/electrode checks"}]}
  ]},
  "strip-start": { area:"NeuroStrip", title:"NeuroStrip help", intro:"Choose the closest task or problem. Guidance below is based on the supplied NeuroStrip User Guide.", steps:[{title:"What do you need help with?",copy:"Choose a common first-line topic.",image:"assets/strip_p4.jpg",options:[{label:"Device won't connect",jump:"strip-connect"},{label:"Erratic / inaccurate EMG",jump:"strip-emg"},{label:"Patch alignment / placement",article:"strip-placement"},{label:"Create a new session",article:"strip-session"},{label:"Protocols",article:"strip-protocols"},{label:"Session graph",article:"strip-graph"},{label:"Export a session",article:"strip-export"},{label:"Patient Manager",article:"strip-patient"},{label:"What is NeuroStrip?",article:"strip-research"},{label:"Something else",escalate:"NeuroStrip enquiry outside the current approved V1 knowledge base"}]}] },
  "strip-connect": { area:"NeuroStrip", title:"NeuroStrip won't connect", intro:"Use the documented Connections-screen checks before escalating.", steps:[
    {title:"Is the device awake and broadcasting?",copy:"Before opening or refreshing Connections, wake the NeuroStrip. Devices must be in BLE broadcast mode (flashing blue) to be discovered.",image:"assets/strip_p16.jpg",caption:"Connections screen: devices can be scanned and assigned to channels.",options:[{label:"Yes — flashing blue",next:1,note:"Device awake / BLE broadcast confirmed"},{label:"Not sure / no",message:"Wake the device, then return to Connections and continue with Scan for Devices / Discover.",next:1,note:"Device wake/broadcast step performed"}]},
    {title:"Scan / Discover again",copy:"If the device did not appear when Connections loaded, select Scan for Devices / Discover to search again.",image:"assets/strip_p25.jpg",caption:"Troubleshooting guidance from the NeuroStrip User Guide.",options:[{label:"Device appears now",next:2,note:"Device discovered after scan"},{label:"Still not listed",escalate:"NeuroStrip does not appear after waking device and running Discover / Scan for Devices"}]},
    {title:"Select Connect",copy:"If the device is listed but does not connect immediately, the guide notes that selecting Connect once or twice may be required.",image:"assets/strip_p25.jpg",options:[{label:"✓ Connected",resolve:"NeuroStrip connection established."},{label:"Still won't connect",escalate:"NeuroStrip remains listed but will not connect after retrying Connect"}]}
  ] },
  "strip-emg": { area:"NeuroStrip", title:"Erratic / inaccurate sEMG readings", intro:"Run the documented physical-medium and device checks in order.", steps:[
    {title:"Check skin preparation and patch adherence",copy:"Ensure good skin preparation and that the NeuroStrip patch is adhering well. Apply overdressing so there is adequate pressure on the tail section.",bullets:["Apply overdressing to the tail section only, or to the entirety of the NeuroStrip as documented.","Avoid applying overdressing to the tail and flexible mid-section at the same time, as the guide warns this could damage the mid-section."],image:"assets/strip_p25.jpg",options:[{label:"Checked — readings fixed",resolve:"Patch adherence / skin-preparation check resolved the readings."},{label:"Still erratic",next:1,note:"Skin preparation and adherence checked"}]},
    {title:"Check NeuroStrip-to-patch alignment",copy:"Poor alignment between the NeuroStrip electrodes and patch electrodes can cause inaccurate readings. The Patch Alignment Tool is intended to reduce alignment problems.",image:"assets/strip_p9.jpg",options:[{label:"Realigned — fixed",resolve:"Patch alignment resolved the readings."},{label:"Still erratic",next:2,note:"Electrode/patch alignment checked"}]},
    {title:"Run the charger near-zero test",copy:"Place the connected NeuroStrip into the charger. The guide states that the graph should read near 0 μV in the cradle. A near-zero result suggests the device is working and the issue is likely with the physical medium.",image:"assets/strip_p25.jpg",options:[{label:"Near 0 μV in charger",next:3,note:"Charger test near 0 μV — likely physical-medium issue"},{label:"Not near 0 μV",next:3,note:"Charger near-zero test did not behave as expected"}]},
    {title:"Hard reset the NeuroStrip",copy:"Use the pin tool in the kit. Insert it into the pinhole on top of the NeuroStrip head and hold the button for three seconds to reset the device.",image:"assets/strip_p25.jpg",options:[{label:"Reset — fixed",resolve:"Hard reset resolved the NeuroStrip readings."},{label:"Still erratic",next:4,note:"Three-second hard reset completed"}]},
    {title:"Restart the NeuroStrip Application",copy:"As the final documented troubleshooting step, restart the NeuroStrip Application.",image:"assets/strip_p25.jpg",options:[{label:"✓ Fixed after restart",resolve:"Application restart resolved the issue."},{label:"Still not fixed",escalate:"Erratic / inaccurate sEMG persists after skin/adherence, alignment, charger test, hard reset and app restart"}]}
  ] },
  "general-route": { area:"General Enquiries", title:"Find the right support area", intro:"Choose what the customer is using or asking about.", steps:[{title:"Which area is this about?",copy:"Select the closest option.",options:[{label:"NeuroNode / AAC",jump:"nn-connect"},{label:"Grid 3",jump:"grid-connect"},{label:"NeuroStrip",jump:"strip-start"},{label:"Not sure",escalate:"General enquiry cannot be routed from current information"}]}] },
  "general-escalate": { area:"General Enquiries", title:"Contact Support", intro:"Use this for a question that is not covered by the current frontline knowledge base.", steps:[{title:"Escalate the enquiry",copy:"The platform will generate a basic summary for Support.",options:[{label:"Prepare support summary",escalate:"General enquiry requires human support"}]}] }
};

let currentSection = null;
let currentFlowId = null;
let currentStep = 0;
let caseNotes = [];

const views = ["homeView","sectionView","flowView","articleView","escalateView"];
const byId = id => document.getElementById(id);
function showView(id){ views.forEach(v=>byId(v).classList.toggle("active",v===id)); window.scrollTo({top:0,behavior:"smooth"}); }

function openSection(id){
  currentSection=id; const s=SECTIONS[id];
  byId("sectionIcon").textContent=s.icon; byId("sectionEyebrow").textContent=s.eyebrow; byId("sectionTitle").textContent=s.title; byId("sectionDescription").textContent=s.description;
  const grid=byId("issueGrid"); grid.innerHTML="";
  s.issues.forEach(i=>{ const b=document.createElement("button"); b.className="issue-card"; b.type="button"; b.innerHTML=`<div class="tag">${i.tag}</div><h3>${i.title}</h3><p>${i.desc}</p>`; b.addEventListener("click",()=> i.flow ? startFlow(i.flow) : openArticle(i.article)); grid.appendChild(b); });
  showView("sectionView");
}

function startFlow(id){ currentFlowId=id; currentStep=0; caseNotes=[]; renderFlow(); showView("flowView"); }
function renderFlow(){
  const f=FLOWS[currentFlowId], step=f.steps[currentStep];
  byId("flowArea").textContent=f.area.toUpperCase(); byId("flowTitle").textContent=f.title; byId("flowIntro").textContent=f.intro;
  byId("progressBar").style.width=`${Math.max(8,((currentStep+1)/f.steps.length)*100)}%`;
  let html=`<div class="step-number">STEP ${currentStep+1} OF ${f.steps.length}</div><div class="step-title">${step.title}</div><div class="step-copy">${step.message ? `<strong>${step.message}</strong><br><br>` : ""}${step.copy||""}</div>`;
  if(step.bullets) html+=`<ul class="check-list">${step.bullets.map(x=>`<li>✓ ${x}</li>`).join("")}</ul>`;
  byId("flowContent").innerHTML=html;
  const v=byId("visualContent"); v.innerHTML=step.image ? `<img src="${step.image}" alt="Visual support guide"><p>${step.caption||"Approved visual guide used as reference."}</p>` : `<div style="padding:44px 16px"><div style="font-size:44px">↳</div><h3>Guided support</h3><p>This step does not require a visual yet. Add an approved image later if helpful.</p></div>`;
  const actions=byId("flowActions"); actions.innerHTML="";
  (step.options||[]).forEach((o,idx)=>{ const b=document.createElement("button"); b.type="button"; b.textContent=o.label; if(idx===0)b.classList.add("primary"); b.addEventListener("click",()=>handleOption(o)); actions.appendChild(b); });
}

function handleOption(o){
  if(o.note) caseNotes.push(o.note);
  if(o.message) caseNotes.push(o.message);
  if(o.resolve){ caseNotes.push("Resolved: "+o.resolve); showResolution(o.resolve); return; }
  if(o.escalate){ caseNotes.push(o.escalate); openEscalation(o.escalate); return; }
  if(o.jump){ startFlow(o.jump); return; }
  if(o.article){ openArticle(o.article); return; }
  if(Number.isInteger(o.next)){ currentStep=o.next; renderFlow(); }
}

function feedbackMarkup(){ return `<div class="feedback-box"><span>Did this solve your problem?</span><button type="button" data-feedback="yes">👍 Yes</button><button type="button" data-feedback="no">👎 No</button><div class="feedback-msg" aria-live="polite"></div></div>`; }
function wireFeedback(scope){ scope.querySelectorAll("[data-feedback]").forEach(b=>b.addEventListener("click",()=>{ const msg=scope.querySelector(".feedback-msg"); if(b.dataset.feedback==="yes") msg.textContent="Thanks — this helps identify which self-service guides are working."; else msg.textContent="Thanks — if the problem remains unresolved, use the Support escalation pathway."; })); }

function showResolution(text){
  byId("flowContent").innerHTML=`<div class="step-number">RESOLVED</div><div class="step-title">✓ Issue resolved</div><div class="step-copy">${text}</div>${feedbackMarkup()}`;
  wireFeedback(byId("flowContent"));
  byId("progressBar").style.width="100%"; byId("visualContent").innerHTML=`<div style="padding:44px 16px"><div style="font-size:48px">✓</div><h3>Frontline support complete</h3><p>No human support is required unless the issue returns or the customer has another question.</p></div>`;
  byId("flowActions").innerHTML=""; const b=document.createElement("button"); b.className="primary"; b.textContent="Back to support home"; b.addEventListener("click",()=>showView("homeView")); byId("flowActions").appendChild(b);
}

function openArticle(id){ const a=ARTICLES[id]; byId("articleArea").textContent=a.area.toUpperCase(); byId("articleTitle").textContent=a.title; byId("articleSummary").textContent=a.summary; byId("articleBody").innerHTML=`<div class="article-body">${a.body}</div>${feedbackMarkup()}`; wireFeedback(byId("articleBody")); byId("articleVisual").innerHTML=a.image?`<img src="${a.image}" alt="Reference guide"><div class="caption">Visual reference from the existing Control Bionics trial-card material.</div>`:""; showView("articleView"); }

function openEscalation(reason){
  const flow=FLOWS[currentFlowId]; const summary=`Area: ${flow?.area||"General"}\nIssue: ${flow?.title||"General enquiry"}\n\nTroubleshooting / information captured:\n${caseNotes.length?caseNotes.map(x=>"• "+x).join("\n"):"• Standard V1 frontline pathway completed"}\n\nEscalation reason:\n${reason}\n\nResult: Unresolved — human support recommended.`;
  byId("caseSummary").textContent=summary; byId("caseSummary").dataset.raw=summary; showView("escalateView");
}

function performSearch(){
  const q=byId("globalSearch").value.trim().toLowerCase(); const box=byId("searchResults"); if(!q){box.classList.remove("show");return;}
  const candidates=[];
  Object.entries(FLOWS).forEach(([id,f])=>candidates.push({type:"flow",id,title:f.title,desc:f.intro,hay:(f.title+" "+f.intro+" "+f.area).toLowerCase()}));
  Object.entries(ARTICLES).forEach(([id,a])=>candidates.push({type:"article",id,title:a.title,desc:a.summary,hay:(a.title+" "+a.summary+" "+a.area).toLowerCase()}));
  const words=q.split(/\s+/).filter(w=>w.length>2); let scored=candidates.map(c=>({...c,score:words.reduce((n,w)=>n+(c.hay.includes(w)?1:0),0)})).filter(c=>c.score>0).sort((a,b)=>b.score-a.score).slice(0,6);
  // Simple intent shortcuts for the most common support language.
  if(q.includes("flashing blue")||q.includes("won't connect")||q.includes("wont connect")||q.includes("bluetooth")) scored=[{type:"flow",id:"nn-connect",title:"NeuroNode won't connect",desc:"Run Bluetooth reset / scrub and Controller App checks",score:99},...scored.filter(x=>x.id!=="nn-connect")];
  if(q.includes("grid")&&(q.includes("detect")||q.includes("respond")||q.includes("switch"))) scored=[{type:"flow",id:"grid-detect",title:"Grid 3 is not detecting NeuroNode",desc:"Check Controller App first, then Grid 3 switch configuration",score:99},...scored.filter(x=>x.id!=="grid-detect")];
  if(q.includes("neurostrip")&&(q.includes("connect")||q.includes("discover")||q.includes("scan"))) scored=[{type:"flow",id:"strip-connect",title:"NeuroStrip won't connect",desc:"Wake the device, Discover / Scan for Devices, then retry Connect",score:99},...scored.filter(x=>x.id!=="strip-connect")];
  if((q.includes("emg")||q.includes("semg"))&&(q.includes("erratic")||q.includes("inaccurate")||q.includes("reading"))) scored=[{type:"flow",id:"strip-emg",title:"Erratic / inaccurate sEMG readings",desc:"Check adherence, alignment, charger near-zero test, reset and app restart",score:99},...scored.filter(x=>x.id!=="strip-emg")];
  if((q.includes("neurostrip")||q.includes("patch"))&&(q.includes("placement")||q.includes("alignment")||q.includes("patch"))) scored=[{type:"article",id:"strip-placement",title:"NeuroStrip patch alignment & placement",desc:"Visual six-step patch alignment guide",score:98},...scored.filter(x=>x.id!=="strip-placement")];
  if((q.includes("neuronode")||q.includes("electrode")||q.includes("muscle"))&&q.includes("placement")) scored=[{type:"article",id:"nn-placement",title:"NeuroNode electrode & muscle placement",desc:"Visual examples for common activation sites",score:99},...scored.filter(x=>x.id!=="nn-placement")];
  if(q.includes("cloth electrode")) scored=[{type:"article",id:"nn-cloth-prep",title:"Cloth electrode preparation",desc:"Skin prep, leadwires and electrode positioning",score:99},...scored.filter(x=>x.id!=="nn-cloth-prep")];
  if(q.includes("adhesive electrode")) scored=[{type:"article",id:"nn-adhesive-prep",title:"Adhesive electrode preparation",desc:"Skin prep and active-muscle placement",score:99},...scored.filter(x=>x.id!=="nn-adhesive-prep")];
  if(q.includes("which electrode")||q.includes("electrode should")||q.includes("electrode type")) scored=[{type:"flow",id:"nn-electrode-wizard",title:"Which electrode should I use?",desc:"Guided electrode selection",score:100},...scored.filter(x=>x.id!=="nn-electrode-wizard")];
  if(q.includes("activation")&&(q.includes("not")||q.includes("unreliable")||q.includes("detect"))) scored=[{type:"flow",id:"nn-activation",title:"NeuroNode activation problem",desc:"Separate connection from placement/electrode issues",score:100},...scored.filter(x=>x.id!=="nn-activation")];
  if(q.includes("non-adhesive")||q.includes("bezel")||q.includes("neuronode band")) scored=[{type:"article",id:"nn-band",title:"Band, bezel & non-adhesive electrode",desc:"Visual fitting guide",score:99},...scored.filter(x=>x.id!=="nn-band")];
  if(q.includes("export")&&q.includes("session")) scored=[{type:"article",id:"strip-export",title:"Export previous NeuroStrip sessions",desc:"Open Sessions and use the session actions menu",score:98},...scored.filter(x=>x.id!=="strip-export")];
  box.innerHTML=""; box.classList.add("show");
  if(!scored.length){ const b=document.createElement("button");b.className="search-result";b.innerHTML="<strong>No exact V1 match</strong><span>Open General Enquiries to route this question.</span>";b.addEventListener("click",()=>openSection("general"));box.appendChild(b);return;}
  scored.slice(0,5).forEach(r=>{ const b=document.createElement("button");b.className="search-result";b.innerHTML=`<strong>${r.title}</strong><span>${r.desc}</span>`;b.addEventListener("click",()=>r.type==="flow"?startFlow(r.id):openArticle(r.id));box.appendChild(b); });
}

byId("searchBtn").addEventListener("click",performSearch); byId("globalSearch").addEventListener("keydown",e=>{if(e.key==="Enter")performSearch();});
document.querySelectorAll("[data-section]").forEach(b=>b.addEventListener("click",()=>openSection(b.dataset.section)));
document.querySelectorAll("[data-flow]").forEach(b=>b.addEventListener("click",()=>startFlow(b.dataset.flow)));
byId("homeBtn").addEventListener("click",()=>showView("homeView")); byId("sectionBack").addEventListener("click",()=>showView("homeView")); byId("flowBack").addEventListener("click",()=>currentSection?openSection(currentSection):showView("homeView")); byId("articleBack").addEventListener("click",()=>currentSection?openSection(currentSection):showView("homeView")); byId("escalateBack").addEventListener("click",()=>showView("flowView")); byId("restartFlow").addEventListener("click",()=>startFlow(currentFlowId));
byId("copySummary").addEventListener("click",async()=>{ try{await navigator.clipboard.writeText(byId("caseSummary").dataset.raw);byId("copyStatus").textContent="Summary copied."}catch{byId("copyStatus").textContent="Copy is blocked in this browser. Select the summary text manually."} });
byId("emailSupport").addEventListener("click",()=>{ const raw=byId("caseSummary").dataset.raw||""; if(CONFIG.supportEmail==="REPLACE_WITH_SUPPORT_EMAIL"){alert("Before publishing, replace CONFIG.supportEmail in app.js with the Control Bionics support mailbox.");return;} window.location.href=`mailto:${encodeURIComponent(CONFIG.supportEmail)}?subject=${encodeURIComponent("Control Bionics Support Escalation")}&body=${encodeURIComponent(raw)}`; });
