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
    title:"NeuroStrip Support Centre",
    body:`<div class="ns-hero-panel">
        <img class="panel-image" src="assets/neurostrip-sensor.jpg" alt="NeuroStrip sensor">
        <div>
          <span class="panel-kicker">COMPLETE PRODUCT SUPPORT</span>
          <p><strong>NeuroStrip</strong> measures surface electromyography (sEMG) and device movement data. The application can connect multiple devices in one session for recording, review and analysis.</p>
          <div class="ns-facts">
            <span><strong>54 × 32 × 3 mm</strong><small>Dimensions</small></span>
            <span><strong>4 g</strong><small>With electrode patch</small></span>
            <span><strong>Up to 4</strong><small>Connected simultaneously</small></span>
            <span><strong>4 hours</strong><small>Continuous use (guide spec)</small></span>
          </div>
        </div>
      </div>

      <h3 class="panel-section-title">Start here</h3>
      <div class="choice-grid ns-choice-grid">
        <button class="choice" data-jump="ns-quickstart">1. Quick start & charging</button>
        <button class="choice" data-jump="ns-skinprep">2. Skin preparation</button>
        <button class="choice" data-jump="ns-placement">3. EMG placement</button>
        <button class="choice" data-jump="ns-patch">4. Patch alignment</button>
        <button class="choice" data-jump="ns-connect">5. Connect NeuroStrip</button>
        <button class="choice" data-jump="ns-patient">6. Patient Manager</button>
        <button class="choice" data-jump="ns-protocol">7. Create / edit protocols</button>
        <button class="choice" data-jump="ns-session">8. Start a session</button>
        <button class="choice" data-jump="ns-graph">9. Session graph & controls</button>
        <button class="choice" data-jump="ns-export">10. Review & export data</button>
        <button class="choice" data-jump="ns-signal">11. Troubleshooting</button>
        <button class="choice" data-jump="ns-dysphagia">12. Dysphagia resources</button>
      </div>

      <h3 class="panel-section-title">Reference materials</h3>
      <div class="resource-downloads">
        <a href="assets/neurostrip-user-guide.pdf" target="_blank">NeuroStrip User Guide ↗</a>
        <a href="assets/neurostrip-guide.pdf" target="_blank">NeuroStrip Product / Quick Guides ↗</a>
        <a href="assets/neurostrip-skin-prep.pdf" target="_blank">Skin Preparation Guide ↗</a>
        <a href="assets/neurostrip-dysphagia.pdf" target="_blank">Dysphagia 2-Pager ↗</a>
        <a href="assets/neurostrip-guide-video.mp4" target="_blank">NeuroStrip Guide Video ▶</a>
        <a href="assets/neurostrip-demo-video.mov" target="_blank">NeuroStrip Demonstration Video ▶</a>
      </div>

      <div class="callout warning"><strong>Support scope:</strong> these instructions explain product operation and the supplied Control Bionics workflows. Clinical interpretation, diagnosis and treatment decisions remain with appropriately qualified professionals.</div>`
  },

  "ns-quickstart": {
    title:"NeuroStrip — Quick start & charging",
    body:`<div class="step-stack">
      <div class="step-card"><b>1</b><div><h4>Charge before the session</h4><p>Place each NeuroStrip correctly into the Power Management Pod. The supplied quick-start material recommends charging for at least <strong>2 hours</strong> before a session.</p></div></div>
      <div class="step-card"><b>2</b><div><h4>Confirm the Pod is charging</h4><p>Check the charging-light indicators. The quick-start guide describes flashing lights while charging and a constant green indication when charged. Re-seat a NeuroStrip if it is not positioned correctly in the slot.</p></div></div>
      <div class="step-card"><b>3</b><div><h4>Connect power</h4><p>Connect the Power Management Pod to its USB-C charger / wall power as supplied.</p></div></div>
      <div class="step-card"><b>4</b><div><h4>Prepare the computer or tablet</h4><p>Confirm the required wireless connections are enabled. NeuroStrip communicates with the application over Bluetooth Low Energy (BLE).</p></div></div>
      <div class="step-card"><b>5</b><div><h4>Open the NeuroStrip application</h4><p>Sign in, then use the main dashboard to access Clients, Protocols and Connections.</p></div></div>
    </div>
    <div class="callout"><strong>Hardware reference:</strong> 54 mm × 32 mm × 3 mm; 4 g with electrode patch; up to four NeuroStrips can be connected simultaneously. The supplied product guide lists 4 hours continuous battery use.</div>`
  },

  "ns-skinprep": {
    title:"NeuroStrip — Skin preparation",
    body:`<p>Good skin preparation improves electrode contact and helps produce clearer, more repeatable sEMG readings.</p>
      <div class="step-stack">
        <div class="step-card"><b>1</b><div><h4>Locate the target muscle</h4><p>Identify the intended muscle and the direction of its fibres before preparing the skin.</p></div></div>
        <div class="step-card"><b>2</b><div><h4>Shave if required</h4><p>If hair will interfere with electrode contact or adhesion, shave the target area.</p></div></div>
        <div class="step-card"><b>3</b><div><h4>Clean and abrade</h4><p>Use an alcohol wipe to clean and abrade the skin, then allow the area to <strong>dry completely</strong>.</p></div></div>
        <div class="step-card"><b>4</b><div><h4>Conductive solution</h4><p>Wipe or spray the conductive solution onto the skin as described in the supplied skin-preparation guide, then allow the area to <strong>dry completely</strong>.</p></div></div>
        <div class="step-card"><b>5</b><div><h4>Apply the patch</h4><p>Proceed to patch alignment and placement only after the prepared skin is dry.</p></div></div>
      </div>
      <div class="resource-downloads"><a href="assets/neurostrip-skin-prep.pdf" target="_blank">Open the supplied Skin Preparation Guide ↗</a></div>`
  },

  "ns-placement": {
    title:"NeuroStrip — EMG placement",
    body:`<p>The selected target muscle should respond, at least minimally, to a command to contract and should return to a resting state in a timely manner. The muscle does not need to function at an optimal level for NeuroStrip to detect activity.</p>
      <h3 class="panel-section-title">General placement rules</h3>
      <ol>
        <li>Place NeuroStrip over the intended active muscle rather than over a tendon or joint.</li>
        <li>Align the NeuroStrip with the direction of the muscle fibres.</li>
        <li>Maintain consistent placement between repeated sessions when comparing data.</li>
        <li>Press the electrode patch firmly onto prepared, dry skin.</li>
        <li>Use the supplied alignment tool so the NeuroStrip contacts align consistently with the patch.</li>
      </ol>
      <h3 class="panel-section-title">Examples in the supplied placement guide</h3>
      <div class="placement-grid">
        <span><strong>Biceps brachii</strong><small>Middle of the muscle; align with muscle direction.</small></span>
        <span><strong>Triceps</strong><small>Back of upper arm.</small></span>
        <span><strong>Quadriceps</strong><small>Over the main muscle area.</small></span>
        <span><strong>Hamstrings</strong><small>Back of thigh.</small></span>
        <span><strong>Gastrocnemius</strong><small>Calf muscle; avoid the Achilles tendon.</small></span>
        <span><strong>Rectus abdominis</strong><small>Horizontal orientation described in the supplied guide.</small></span>
        <span><strong>Obliques</strong><small>Slight-angle placement described in the supplied guide.</small></span>
      </div>
      <div class="callout">For repeatable measurements, document the site and reproduce the same placement as closely as possible in future sessions.</div>`
  },

  "ns-patch": {
    title:"NeuroStrip — Patch alignment",
    body:`<p>The NeuroStrip kit includes a Patch Alignment Tool to align the device with the electrode targets on the patch.</p>
      <div class="step-stack">
        <div class="step-card"><b>1</b><div><h4>Remove the key-hole liner</h4><p>Remove the key-hole liner from the top of the NeuroStrip patch.</p></div></div>
        <div class="step-card"><b>2</b><div><h4>Place patch in the base</h4><p>Place the patch into the base of the Patch Alignment Tool.</p></div></div>
        <div class="step-card"><b>3</b><div><h4>Fit the top of the tool</h4><p>With the patch inserted, place the top of the tool onto the base. Make sure it is a flush, snug fit.</p></div></div>
        <div class="step-card"><b>4</b><div><h4>Insert NeuroStrip</h4><p>Insert NeuroStrip into the tool outline and press it down so it adheres to the patch.</p></div></div>
        <div class="step-card"><b>5</b><div><h4>Remove device and patch</h4><p>Remove the joined NeuroStrip and patch from the alignment tool.</p></div></div>
        <div class="step-card"><b>6</b><div><h4>Apply to the body</h4><p>Remove the bottom liner, adhere the assembly to the prepared target area, and apply the overdressing to the <strong>tail section only</strong> as directed in the supplied guide.</p></div></div>
      </div>`
  },

  "ns-connect": {
    title:"NeuroStrip — Connections",
    body:`<ol>
        <li>Make sure the NeuroStrip is charged and awake.</li>
        <li>Open the NeuroStrip application and sign in.</li>
        <li>Open <strong>Connections</strong> from the main dashboard.</li>
        <li>Start device discovery / scanning.</li>
        <li>Identify the required NeuroStrip and select it to connect.</li>
        <li>Repeat for additional devices; the supplied product material states that up to <strong>4 NeuroStrips</strong> can be connected simultaneously.</li>
        <li>When creating the session, assign each connected device to the intended channel / muscle placement.</li>
        <li>Leave channels that are not being used as <strong>Unassigned</strong>.</li>
      </ol>
      <div class="callout"><strong>If the device is not found:</strong> confirm charge, Bluetooth, wake the NeuroStrip, scan again, and restart the application before escalating.</div>`
  },

  "ns-patient": {
    title:"NeuroStrip — Patient Manager",
    body:`<p>The application dashboard is used to manage clients and protocols.</p>
      <h3 class="panel-section-title">Clients tab</h3>
      <ol>
        <li>Search or filter existing patient/client records.</li>
        <li>Switch between active and archived records where available.</li>
        <li>Select <strong>New Patient</strong> to create a new record.</li>
        <li>Open an existing patient card to review the patient overview.</li>
        <li>Use the patient profile to access sessions, notes and measurements.</li>
        <li>A new session can also be started directly from the relevant patient card.</li>
      </ol>
      <h3 class="panel-section-title">Protocols tab</h3>
      <p>Search and filter protocols, create a new protocol, review protocol details, or use the actions menu to manage existing protocols.</p>`
  },

  "ns-protocol": {
    title:"NeuroStrip — Create and edit protocols",
    body:`<ol>
        <li>Open the <strong>Protocols</strong> tab.</li>
        <li>Select <strong>New Protocol</strong>, or open / clone an existing protocol where appropriate.</li>
        <li>Enter the protocol and activity details.</li>
        <li>Select the required muscle channels for each exercise/activity.</li>
        <li>Configure the activity timeline, repetitions, sets and intervals.</li>
        <li>Configure available visual feedback such as graph scale, target lines / conditions, audible alerts and line visibility.</li>
        <li>Use the <strong>Preview</strong> tab before saving. The preview shows activity order, repetitions, sets, timing and expected activation patterns.</li>
        <li>Use the preview playback controls to confirm timing, repetition count, intervals and visual feedback.</li>
        <li>Select <strong>Save</strong> to apply the changes, or Cancel to exit without saving.</li>
      </ol>`
  },

  "ns-session": {
    title:"NeuroStrip — Start a session",
    body:`<div class="step-stack">
      <div class="step-card"><b>1</b><div><h4>Select the client</h4><p>Open the required client/patient and choose to start a new session.</p></div></div>
      <div class="step-card"><b>2</b><div><h4>Connect devices</h4><p>Confirm the NeuroStrips required for the session are connected.</p></div></div>
      <div class="step-card"><b>3</b><div><h4>Assign channels</h4><p>Assign each device to the intended channel and muscle placement. Leave unused channels Unassigned.</p></div></div>
      <div class="step-card"><b>4</b><div><h4>Select protocol(s)</h4><p>Select a protocol using its checkbox, then choose Next. Search by protocol name or ID if needed. Selected protocols appear in the sequence in which they will run.</p></div></div>
      <div class="step-card"><b>5</b><div><h4>Check the recording screen</h4><p>Confirm the EMG chart, channel indicators and muscle placements before recording.</p></div></div>
      <div class="step-card"><b>6</b><div><h4>Start recording</h4><p>Select <strong>Start Recording</strong>. Follow the active protocol and repetition sequence while monitoring the live data.</p></div></div>
    </div>`
  },

  "ns-graph": {
    title:"NeuroStrip — Session graph & controls",
    body:`<p>The Session Recording screen displays live muscle activity and gives the operator control over the active session.</p>
      <div class="feature-list">
        <div><strong>EMG Chart</strong><span>Live muscle activity for active channels.</span></div>
        <div><strong>Channel indicators</strong><span>Assigned channel, colour, muscle placement and current reading. Select indicators to show/hide individual EMG traces.</span></div>
        <div><strong>Recruitment Patterns</strong><span>Body-map visualisation for reviewing recruitment patterns.</span></div>
        <div><strong>Widget controls</strong><span>Choose visible elements including live readings, accelerometer data, raw X/Y/Z data, EMG chart and body heatmap.</span></div>
        <div><strong>Audio</strong><span>When enabled, the supplied guide describes a beep when the target line is reached.</span></div>
        <div><strong>Active protocol</strong><span>Shows the current activity / phase.</span></div>
        <div><strong>Repetition counter</strong><span>Tracks completed repetitions.</span></div>
        <div><strong>Go intervals</strong><span>Green shaded chart areas indicate when the user should perform the activity.</span></div>
        <div><strong>Session controls</strong><span>Take notes, skip a phase, pause the session or stop recording.</span></div>
      </div>`
  },

  "ns-export": {
    title:"NeuroStrip — Review, save & export",
    body:`<ol>
        <li>Open the relevant client/patient profile.</li>
        <li>Open the <strong>Sessions</strong> area and locate the required recorded session.</li>
        <li>Open the session to review the saved graph, notes and available session information.</li>
        <li>Use the session actions menu for the available report / export options.</li>
        <li>The supplied NeuroStrip product material describes downloadable <strong>PDF reports</strong> and data via <strong>CSV</strong>.</li>
        <li>Keep exported files associated with the correct patient/session according to your organisation's data-handling procedures.</li>
      </ol>`
  },

  "ns-signal": {
    title:"NeuroStrip — Troubleshooting bad / erratic sEMG",
    body:`<div class="trouble-flow">
      <div><b>01</b><strong>Skin</strong><span>Confirm the skin was prepared correctly and is completely dry.</span></div>
      <div><b>02</b><strong>Placement</strong><span>Confirm the device is over the intended muscle and aligned with muscle direction.</span></div>
      <div><b>03</b><strong>Patch contact</strong><span>Confirm the patch is fully adhered and the NeuroStrip-to-patch contacts are aligned.</span></div>
      <div><b>04</b><strong>Alignment tool</strong><span>Re-fit using the Patch Alignment Tool if alignment is uncertain.</span></div>
      <div><b>05</b><strong>Connection</strong><span>Confirm the correct NeuroStrip is connected and assigned to the intended channel.</span></div>
      <div><b>06</b><strong>Re-test</strong><span>Ask for a controlled contraction and relaxation of the target muscle and observe the live trace.</span></div>
      <div><b>07</b><strong>Restart</strong><span>Restart the application and reconnect the device if the reading remains abnormal.</span></div>
      <div><b>08</b><strong>Escalate</strong><span>If standard checks do not resolve the problem, contact Control Bionics Support rather than continuing unsupported troubleshooting.</span></div>
      </div>
      <div class="callout warning">sEMG is sensitive to placement, contact quality, motion and environmental interference. Use consistent preparation and placement when comparing sessions.</div>`
  },

  "ns-dysphagia": {
    title:"NeuroStrip — Dysphagia resources",
    body:`<p>The supplied dysphagia material describes surface EMG biofeedback as real-time visual feedback of swallowing-muscle activation. It describes use of submental muscle signals to visualise timing, duration and amplitude of contraction.</p>
      <h3 class="panel-section-title">Examples listed in the supplied material</h3>
      <div class="placement-grid">
        <span><strong>Swallow strength training</strong><small>Effortful swallow; Masako manoeuvre.</small></span>
        <span><strong>Timing & coordination</strong><small>Practice of swallow timing and coordination.</small></span>
        <span><strong>Airway protection</strong><small>Supraglottic swallow; Mendelsohn manoeuvre.</small></span>
        <span><strong>Rehabilitation</strong><small>Post-stroke and head-and-neck cancer recovery examples are listed.</small></span>
        <span><strong>Assessment / comparison</strong><small>Baseline assessment and pre/post-intervention comparison are listed.</small></span>
        <span><strong>Research & education</strong><small>Research, data collection, clinical education and training are listed.</small></span>
      </div>
      <div class="resource-downloads"><a href="assets/neurostrip-dysphagia.pdf" target="_blank">Open supplied Dysphagia 2-Pager ↗</a></div>
      <div class="callout warning"><strong>Clinical scope:</strong> this hub presents the supplied product information. Dysphagia assessment and rehabilitation require appropriate clinical expertise and local clinical governance.</div>`
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
  {terms:["skin prep","skin preparation","shave","abrade","conductive spray"],key:"ns-skinprep",reply:"I can walk you through the NeuroStrip skin-preparation sequence step by step."},
  {terms:["patch alignment","alignment tool","key-hole liner"],key:"ns-patch",reply:"I can show the six-step NeuroStrip patch-alignment workflow."},
  {terms:["patient manager","new patient","client record"],key:"ns-patient",reply:"I can show you how the NeuroStrip Patient Manager is organised."},
  {terms:["session graph","recruitment","target line","repetition","heatmap"],key:"ns-graph",reply:"I can explain the live session graph, widgets and recording controls."},
  {terms:["dysphagia","swallow","swallowing"],key:"ns-dysphagia",reply:"I can open the supplied NeuroStrip dysphagia support information and use cases."},
  {terms:["charge neurostrip","neurostrip charging","power management pod"],key:"ns-quickstart",reply:"I can walk you through NeuroStrip charging and the quick-start checks."},
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
const neroIdleStates=["happy","curious","focused","proud"];
let neroIdleIndex=0, neroBusy=false;
function setNeroState(state){
  const img=document.getElementById("neroCompanionImg");
  if(!img)return;
  if(state==="general"){img.src="assets/nero-transparent.png";img.classList.add("transparent-nero");}
  else{img.src=`assets/nero-${state}.jpg`;img.classList.remove("transparent-nero");}
}
setInterval(()=>{if(!neroBusy){setNeroState(neroIdleStates[neroIdleIndex%neroIdleStates.length]);neroIdleIndex++;}},4500);

function neuroReply(text){
  const q=text.trim().toLowerCase(); if(!q)return;
  neroBusy=true; setNeroState("thinking");
  const log=document.getElementById("neuroChat");
  const u=document.createElement("div");u.className="neuro-msg user";u.textContent=text;log.appendChild(u);
  let best=null,score=0;
  neuroRoutes.forEach(r=>{let s=0;r.terms.forEach(t=>{if(q.includes(t))s+=t.length});if(s>score){score=s;best=r}});
  const a=document.createElement("div");a.className="neuro-msg assistant";
  if(best){a.innerHTML=`<strong>Nero:</strong> ${best.reply} <button class="text-link neuro-open-guide" data-key="${best.key}" type="button">Open guide →</button>`}
  else{a.innerHTML="<strong>Nero:</strong> I’m not confident I have a standard V1 guide for that. Try NeuroNode, Grid 3, Eye-Gaze, NeuroStrip, UNO Touch or mounting, or contact Support for anything more specific."}
  setTimeout(()=>{
    log.appendChild(a);log.scrollTop=log.scrollHeight;
    setNeroState(best ? (Math.random()>.5?"excited":"proud") : "curious");
    neroBusy=false;
    a.querySelectorAll(".neuro-open-guide").forEach(b=>b.addEventListener("click",()=>openPanel(b.dataset.key)));
  },650);
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
