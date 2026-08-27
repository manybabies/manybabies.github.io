---
layout: page
title: MB2
subtitle: Theory of Mind in Infancy
---

{% assign current_project = site.data.airtable | where: "project", page.title | first %}

***

<div class="container">
  <div class="box-gray" style="box-shadow: -10px 10px {{current_project.color}};">
    <div class="row justify-content-around">
      <div class="col-lg-4" align="center">
        <br>
        <img src="{{ current_project.logoPath}}" width="150">
      </div>
      <div class="col-lg-8" align="left">
        <h2 style="color:{{current_project.color}};">Project Overview</h2>
        <ul>
          <li><i>Status:</i> <code>{{ current_project.status}}</code></li>
          <li><i><a href="https://doi.org/10.31234/osf.io/x4jbm" target="_blank">Stage 1 Registered Report</a> given 'In Principle Acceptance' at</i> <b>Child Development</b></li>
        </ul>
      </div>
    </div>
  </div>
</div>

***

<p> In this project, we investigate a fundamental feature of human social cognition: Theory of Mind (ToM), the ability to ascribe mental states to agents. One of the central tests for ToM is the false belief task, which requires participants to predict an agent’s action based on her/his (mis)representation of the world. Using a false belief task implemented through 3D-animated videos, we examine whether toddlers (18- to 27-month-olds) and adults show anticipatory looking indicating false belief ascription to another agent. Our team includes the authors of the original studies as well as researchers who conducted previous replication attempts. Our consortium brings together scholars from a wide range of theoretical perspectives. </p>

<div>
  <div class="container" style="width:90%; margin:0 auto;">
    <div class="row">
      <div class="col-sm-12" align=center>
        <img src="/assets/img/MB2_design300px.png" alt="MB2 design" style="width:50%"><br>
      </div>
    </div>
  </div>
</div>

***

### Phase 1: Knowledge / Ignorance (completed): 
In a first step, we examined whether toddlers’ and adults’ anticipatory looks show that they distinguish between two basic forms of epistemic states: knowledge and ignorance. Adults (n = 703) clearly differentiated between those conditions and showed more anticipatory looking towards the target location in the knowledge than in the ignorance condition. Surprisingly, in toddlers (n = 521) this pattern was flipped: They showed more anticipatory looks towards the target location in the ignorance condition (see Figure 1).

<div>
  <div class="container" style="width:90%; margin:0 auto;">
    <div class="row">
      <div class="col-sm-12" align=center>
        <img src="/assets/img/mb2-phase1.png" alt="mb2-phase 1 results"><br>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12" align=left>
        <p style="font-size:14px; "><b>Figure 1.</b> First look and proportion differential looking score (DLS) for toddlers and adults during familiarization and test phase..</p>
      </div>
    </div>
  </div>
</div>


***

### Phase 2: Knowledge / Ignorance Adaption (ongoing):
The next step for toddlers will now be to investigate more systematically the source of the puzzling findings and clarify whether they indicate competence or mere performance limitations.
 
***

### Phase 3: False Belief in Adults (ongoing):
For adults, we will now move on to probe whether their spontaneous action anticipation is also sensitive to more complex kinds of epistemic states, such as true and false beliefs.


Following the anticipatory looking studies, we hope to continue the project with other measures such as Violation of Expectation, and interactive tasks.


***
## Links
* **Materials, Protocols, and Documentation**: <a href="https://osf.io/jmuvd/" target="_blank">MB2-OSF</a>, <a href="https://docs.google.com/document/d/1xAw_EbmvRl1Rj3iAVASazyb4HPxoECfvKaf_7zfFi0o/edit?usp=sharing" target="_blank">MB2 Lab Manual</a>, <a href="https://docs.google.com/document/d/e/2PACX-1vTnk1Gl6yjtOTCcuEo01B-dEphM4cv852jymrMekurJ0A2TEYU87otWClkMsyCq_vS959vbyEm7xrs7/pub" target="_blank">MB2 Collaboration Agreement</a>
* **Data and code**: <a href="https://github.com/manybabies/mb2-analysis" target="_blank">MB2-GitHub</a>
* **Listserv**: <a href="https://groups.google.com/a/manybabies.org/g/mb2-list" target="_blank">join here</a> *(click on “for access, try joining the group”)*
* **Slack**: <a href="{{ site.data.global.link.slack-invite }}" target="_blank">MB workspace</a> (*join the #mb2-general channel*)


***
## Project Leads
* [**Tobias Schuwerk**](https://www.en.cas.uni-muenchen.de/rir/junior_rir/previous_junior_rir/schuhwerk_tobias/index.html), *Ludwig Maximilian University of Munich, Germany* [[email]](mailto:Tobias.Schuwerk@psy.lmu.de)
* [**Dora Kampis**](https://psychology.ku.dk/staff/academic_staff/?pure=en%2Fpersons%2Fdora-kampis(94aa17eb-739f-486e-a280-4a76aa4d38a7).html), *University of Copenhagen, Denmark* [[email]](mailto:dk@psy.ku.dk)
* [**Hannes Rakoczy**](https://www.psych.uni-goettingen.de/en/development/team/rakoczy-hannes), *University of Göttingen, Germany* [[email]](mailto:hrakocz@uni-goettingen.de)
* [**Michael Frank**](https://web.stanford.edu/~mcfrank/), *Stanford University, United States* [[email]](mcfrank@stanford.edu)


***
## MB2 Contributors

> NOTE: Default table ordering is by author order in the Stage 2 manuscript. You can filter, group, and/or sort entries by any field.

<iframe class="airtable-embed" src="https://airtable.com/embed/appRoqMKzcK3NsXt4/shreuAIHoALQreq3G?viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>


***
## Publication

{% assign pubs = site.data.publications | where: "project", page.title %}
{% for pub in pubs %} <!--- loop over pubs for specified project -->
  <div class="container">
    <div class="row">
      <div class="col-sm-2" align="center">
        <a href="https://{{pub.website }}"><img src="{{ pub.logoPath }}" alt="{{ pub.project}} logo" width="70" style="margin-top:4px;"></a>        
      </div>
      <div class="col-sm-10">
        {{ pub.authorsCondensed }} ({{ pub.year }}). <b>{{pub.title}}</b>. <i>{{pub.journal}}</i>, <i>{{pub.volume}}</i>({{ pub.issue }}), {{ pub.pages }}. <a href="{{ pub.journalLink }}" target="_blank">{{ pub.journalLink}}</a>
        <details>
          <summary><code>View full author list</code></summary> <!--- expandable author list with orcids -->
          <div style="margin-left: 2em;">
            {% for author in pub.authors %}
              {% if author.orcid %}
                {{ author.name }} <a href="{{ author.orcid }}"><img src="/assets/img/orcid.png" height="15"></a> 
              {% else %}
                {{ author.name }}
              {% endif %}{% unless forloop.last %}<br> {% endunless %}
            {% endfor %}
          </div>
        </details>
      </div>
    </div>
  </div>  
{% endfor %}


***
## Funding
* MB2 is supported by a grant from [Deutsche Forschungsgemeinschaft](https://www.dfg.de/en/index.jsp)


***
## Spin-off Projects

<ul>
  {% assign spinoffs = site.data.airtable | where: "type", "Spin-off" | where: "mainProject", page.title %}
  {% for spinoff in spinoffs %} <!--- loop over spinoff projects -->
    <li><img src="{{ spinoff.logoPath }}" alt="{{ spinoff.project}} logo" width="20"> <b><a href="https://{{spinoff.website }}">{{spinoff.project}}</a>: {{ spinoff.description }} </b></li>
  {% endfor %}
  {% assign secondary = site.data.airtable | where: "type", "Secondary analysis" | where: "mainProject", page.title %}
  {% for item in secondary %} <!--- loop over spinoff projects -->
    <li><img src="{{ item.logoPath }}" alt="{{ item.project}} logo" width="20"> <b><a href="https://{{item.website }}">{{item.project}}</a>: {{ item.description }} </b></li>
  {% endfor %}
</ul>
