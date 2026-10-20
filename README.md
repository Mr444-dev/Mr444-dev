<a name="mr-top"></a>

<p align="center">
  <picture>
    <source media="(max-width: 640px)" srcset="docs/assets/profile-banner-mobile.svg">
    <img src="docs/assets/profile-banner.svg" alt="Games you can play. Code you can inspect. Unity, C# and .NET." width="100%">
  </picture>
</p>

<h1 align="center">Michael Rusinek</h1>
<p align="center"><strong>Software Engineer · Unity &amp; .NET</strong></p>

<p align="center">
  I build gameplay systems in <strong>Unity / C#</strong> and backend prototypes with <strong>.NET</strong>.<br>
  Co-created and shipped <strong>Humanity’s Last Stand</strong> — <strong>1,000+ downloads on Google Play</strong>.
</p>

<p align="center">
  <a href="https://portfolio.michaelrusinek.workers.dev/"><img src="docs/assets/button-portfolio.svg" alt="Portfolio and demos — explore projects, gameplay and technical case studies" width="200" height="44"></a>
  <a href="https://portfolio.michaelrusinek.workers.dev/cv/M_Rusinek_Software_Engineer.pdf"><img src="docs/assets/button-cv.svg" alt="Open my Software Engineer CV — PDF" width="144" height="44"></a>
  <a href="https://www.linkedin.com/in/michaelrusinek/"><img src="docs/assets/button-linkedin.svg" alt="Connect on LinkedIn" width="144" height="44"></a>
  <a href="mailto:michael.rusinek.contact@gmail.com"><img src="docs/assets/button-email.svg" alt="Email me" width="144" height="44"></a>
</p>

<p align="center">
  <strong>Open to Software Engineer, Unity Developer and C#/.NET roles</strong><br>
  Wrocław, Poland · <a href="https://portfolio.michaelrusinek.workers.dev/cv/">Both CV editions</a>
</p>

---

<p align="center">
  <a href="#mr-work">Selected work</a> ·
  <a href="#mr-skills">Skills</a> ·
  <a href="#mr-more">More projects</a> ·
  <a href="#mr-contact">Contact</a>
</p>

<a name="mr-work"></a>
<h2 align="center"><img src="docs/assets/icon-layers.svg" width="28" height="28" alt=""> Selected work</h2>

<p align="center">
  <a href="#mr-game">Released game</a> ·
  <a href="#mr-backend">Backend case study</a> ·
  <a href="#mr-swarm">Unity source</a>
</p>

<a name="mr-game"></a>

### <img src="docs/assets/icon-game.svg" width="28" height="28" alt=""> 01 · Humanity’s Last Stand

**Released Android game** · `Unity` `C#` · Two-person team

A 3D aerial-combat game with enemy encounters, aircraft progression and weapon upgrades — taken from idea to public release.

<p align="center">
  <a href="https://portfolio.michaelrusinek.workers.dev/work/humanitys-last-stand/#project-recording"><img src="docs/assets/humanitys-last-stand.jpg" alt="Actual Humanity’s Last Stand gameplay — select to watch the recording" width="720"></a>
</p>

- **My role:** primary responsibility for programming and gameplay; also game design, testing, store icons and descriptions, and release preparation. My teammate focused mainly on models and assets. We developed and published the game together.
- **Released:** **1,000+ downloads** on Google Play, as displayed on 16 October 2026. Known during development as *Pig Invasion*.

<p>
  <a href="https://portfolio.michaelrusinek.workers.dev/work/humanitys-last-stand/#project-recording"><img src="docs/assets/button-gameplay.svg" alt="Watch real gameplay" width="182" height="44"></a>
  <a href="https://portfolio.michaelrusinek.workers.dev/work/humanitys-last-stand/"><img src="docs/assets/button-case-study.svg" alt="Read the game case study" width="150" height="44"></a>
</p>
<p>
  <a href="https://play.google.com/store/apps/details?id=com.WPF.PigInvasion"><img src="docs/assets/google-play-badge.svg" alt="Get Humanity’s Last Stand on Google Play" width="180"></a>
</p>

---

<a name="mr-backend"></a>

### <img src="docs/assets/icon-server.svg" width="28" height="28" alt=""> 02 · Blackbox

**Backend reliability prototype** · `C#` `ASP.NET Core` `EF Core` `PostgreSQL` `Kafka` `Docker`

What happens when a database transaction succeeds, but publishing its event fails? Blackbox explores that boundary in an order workflow using a **transactional outbox** and a Kafka worker.

- **Implementation:** workflow state and outbox records commit together; a worker claims pending records and publishes them to Kafka.
- **Evidence:** a public case study with code excerpts, a transaction diagram, failure scenarios and a dated test record. The repository is private.

<p>
  <a href="https://portfolio.michaelrusinek.workers.dev/notes/transactional-outbox/"><img src="docs/assets/button-backend.svg" alt="Read the backend reliability case study" width="210" height="44"></a>
</p>

<details>
<summary><strong>Technical review · transaction boundary, tests and current limits</strong></summary>

- **Concurrency:** the worker claims PostgreSQL rows with `FOR UPDATE SKIP LOCKED`.
- **Failure window:** the article traces what happens between Kafka acknowledgement and database commit. The current Inbox recognizes the same Kafka offset; logical-event deduplication and exactly-once business effects remain open work.
- **Recorded verification:** the **14 October 2026** local run reports **71 unit tests, 6 PostgreSQL integration tests and 32 Playwright API scenarios passing**. These are functional checks, not load tests or production-availability measurements.

</details>

---

<a name="mr-swarm"></a>

### <img src="docs/assets/icon-nodes.svg" width="28" height="28" alt=""> 03 · Flying AI Swarm

**Unity prototype · public walkthrough** · `C#` `Jobs` `Burst` `Spatial Hashing`

Flying-agent behaviour built around **flocking, formation strategies, state machines and reusable object pools**.

- **Engineering focus:** a Burst-compiled `IJobParallelFor` evaluates nearby agents through spatial hashing; the system manages native buffers and schedules jobs.
- **Source access:** the full Unity repository remains private while redistribution rights for bundled third-party plugins are checked.

<p>
  <a href="https://portfolio.michaelrusinek.workers.dev/work/flying-ai-swarm/"><img src="docs/assets/button-walkthrough.svg" alt="Read the public Flying AI Swarm technical walkthrough" width="202" height="44"></a>
</p>

<details>
<summary><strong>Technical scope · performance evidence</strong></summary>

The public walkthrough discusses the system design. Reproducible frame-time and allocation captures are still needed before quoting performance results. The complete source is not linked while bundled plugin redistribution rights are being reviewed.</details>

---

<p align="center"><a href="#mr-top">↑ Back to top</a></p>

<a name="mr-skills"></a>
<h2 align="center"><img src="docs/assets/icon-code.svg" width="28" height="28" alt=""> What I work with</h2>

<p align="center">
  <strong>Gameplay &amp; tooling</strong><br>
  C# · Unity · gameplay implementation · state machines<br>
  Formation strategies · object pooling · editor tooling
</p>

<p align="center">
  <strong>Backend &amp; data</strong><br>
  ASP.NET Core · EF Core · PostgreSQL · SQL transactions<br>
  Kafka · outbox/inbox boundaries · retry behaviour
</p>

<p align="center">
  <strong>Verification &amp; delivery</strong><br>
  xUnit · PostgreSQL integration tests · Playwright API tests<br>
  Git · Docker Compose · Android release preparation
</p>

<a name="mr-more"></a>
<h2 align="center"><img src="docs/assets/icon-layers.svg" width="28" height="28" alt=""> More to explore</h2>

- [**Shared AR Workshop**](https://github.com/Mr444-dev/shared-ar-workshop) — Unity/C# AR prototype with a Node.js room relay and a recorded two-browser walkthrough. Physical-device AR validation is pending.
- [**ProcureScope**](https://github.com/Mr444-dev/ProcureScope) — Python/PostgreSQL data pipeline with source-response archiving, record validation, dbt models and Airflow scheduling.

<details>
<summary><strong>Simulation & tooling experiments</strong></summary>

- [**Blackhole Simulation**](https://portfolio.michaelrusinek.workers.dev/work/blackhole-simulation/) — gravitational-visualization experiment with a real project recording.
- [**PathDrawer**](https://portfolio.michaelrusinek.workers.dev/work/pathdrawer/) — Unity trajectory-visualization tool presented through a project capture; the original source is unavailable.

</details>

---

<a name="mr-contact"></a>
<h2 align="center">Let’s build something useful.</h2>

<p align="center">
  Looking for an engineer who can connect gameplay, systems and delivery?<br>
  <strong>I’m open to a conversation about your team.</strong>
</p>

<p align="center">
  <a href="mailto:michael.rusinek.contact@gmail.com"><img src="docs/assets/button-email.svg" alt="Email me about an opportunity" width="144" height="44"></a>
  <a href="https://portfolio.michaelrusinek.workers.dev/cv/M_Rusinek_Game_Systems.pdf"><img src="docs/assets/button-game-cv.svg" alt="Open my Game and Systems CV — PDF" width="178" height="44"></a>
</p>

<p align="center">
  <a href="https://portfolio.michaelrusinek.workers.dev/">Portfolio — projects, demos &amp; CV</a><br>
  <a href="mailto:michael.rusinek.contact@gmail.com">michael.rusinek.contact@gmail.com</a>
</p>

<p align="center"><a href="#mr-top">↑ Back to top</a></p>
