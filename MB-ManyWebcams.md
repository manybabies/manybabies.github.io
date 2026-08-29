---
layout: page
title: MB-ManyWebcams
subtitle: Web-based Eye Tracking for Infant Studies
---

{% assign current_project = site.data.airtable | where: "project", page.title | first %}

***

<div class="container">
  <div class="box-gray" style="box-shadow: -10px 10px {{ current_project.color }};">
    <div class="row justify-content-around">
      <div class="col-lg-4" align="center">
        <br>
        <img src="{{ current_project.logoPath }}" width="150">
      </div>
      <div class="col-lg-8" align="left">
        <h2 style="color:{{ current_project.color }};">Project Overview</h2>
        <ul>
          <li><i>Status:</i> <code>{{ current_project.status }}</code></li>
          <li><i>16 participating labs collected data</i></li>
          <li><i>125 toddlers tested remotely via webcam</i></li>
          <li><i>33 authors on</i> <a href="https://doi.org/10.1111/infa.12564" target="_blank"><b>Infancy</b></a> <i>publication</i></li>
        </ul>
      </div>
    </div>
  </div>
</div>

***

In this multi-lab methodological project, we try to validate an open source, web-based, eye-tracking method for research on cognitive development in young children. More specifically, we evaluate whether this method, which is based on WebGazer.js [(Papoutsaki et al., 2016)](http://cs.brown.edu/people/apapouts/papers/ijcai2016webgazer.pdf) and jsPsych [(de Leeuw, 2015)](https://link.springer.com/article/10.3758%2Fs13428-014-0458-y), is comparable to lab-based eye-tracking. 
Therefore, we aim to replicate findings of an in-lab paradigm of the [ManyBabies2]({{site.baseurl}}/MB2/) project, which revealed spontaneous goal-directed action anticipation in toddlers using commercial eye-tracking systems [(Schuwerk, Kampis et al., 2021)](https://psyarxiv.com/x4jbm/).
<br>

<div class="container">
   <div class="row justify-content-around">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <img src="/assets/img/manywebcams1.png" height="300">
            <h5>A toddler participating in the task, with her point-of-gaze depicted as a blue dot</h5>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <img src="/assets/img/manywebcams_AOIs.jpg" height="300">
            <h5>Example areas of interest (AOIs) used during the anticipatory period to distinguish looks to the "Target" region (where the chaser will reappear according to their action goal) and the "Distractor" region (covering the other tunnel exit and it's surroundings)</h5>
        </div>
    </div>
</div>

***
## Links
* **Notion site for contributors**: [check it out](https://lmutom.notion.site/ManyWebcams-Overview-24e47023e9dd47fea40c1a3a472c5138).
* **Materials, Protocols, and Documentation**: [Google Drive](https://drive.google.com/drive/folders/1U33JTq1CH9sxqM1sBfGtnaAxpMNU_RLx).
* **Pre-registration**: [OSF](https://osf.io/smya4)
* **Listserv**: [join here](https://lists.lrz.de/mailman/listinfo/online_mb2) or contact [Tobias Schuwerk](mailto:tobias.schuwerk@psy.lmu.de)
* **Slack**: Please email any of the members of the leadership team to get a Join invitation
* **News**: [MB-ManyWebcams news]({{site.baseurl}}/tags/#MB-ManyWebcams)

***
## Project Leads
<ul>
  {% for lead in current_project.leads %}
    <li>
      {% if lead.orcid %}
        <b><a href="{{ lead.site }}" target="_blank">{{ lead.name }}</a></b>, <i>{{ lead.institution }}</i> <a href="{{ lead.orcid }}" target="_blank"><img src="/assets/img/orcid.png" height="15"></a> <a href="mailto:{{ lead.email }}">[email]</a>
      {% else %}
        <b><a href="{{ lead.site }}" target="_blank">{{ lead.name }}</a></b>, <i>{{ lead.institution }}</i> 
      {% endif %}{% unless forloop.last %}<br> {% endunless %}
    </li>
  {% endfor %}
</ul>

***
## MB-ManyWebcams Contributors
> NOTE: Default table ordering is by contributor's first name. You can filter, group, and/or sort entries by any field.

<iframe class="airtable-embed" src="https://airtable.com/embed/appRoqMKzcK3NsXt4/shraJPjkGnaqP724e?backgroundColor=blueDusty&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>


## Publication

{% assign pubs = site.data.publications | where: "project", page.title %}
{% for pub in pubs %} <!--- loop over pubs for specified project -->
  <div class="container">
    <div class="row">
      <div class="col-sm-2" align="center">
        <a href="https://{{pub.website }}"><img src="{{ pub.logoPath }}" alt="{{ pub.project}} logo" width="70" style="margin-top:4px;"></a>        
      </div>
      <div class="col-sm-10">
        {{ pub.authorsCondensed }} ({{ pub.year }}). <b>{{pub.title}}</b>. <i>{{pub.journal}}</i>, <i>{{pub.issue}}</i>({{ pub.issue }}), {{ pub.pages }}. <a href="{{ pub.journalLink }}" target="_blank">{{ pub.journalLink}}</a>
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