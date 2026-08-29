---
layout: page
title: MB5
subtitle: The Hunter & Ames Model of Infant Looking Preference
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
          <li><i><a href="https://doi.org/10.31234/osf.io/ck3vd" target="_blank">Stage 1 Registered Report</a> given 'In Principle Acceptance' at</i> <b>Nature Human Behaviour</b></li>
          <li><i>Labs interested in collecting data for MB5 should fill out the</i> <b><a href="https://airtable.com/appRoqMKzcK3NsXt4/pag99dsjlXiM24ZnB/form" target="_blank">MB5 Lab Sign-Up Form</a></b></li>
        </ul>
      </div>
    </div>
  </div>
</div>

***

<p>Familiarity and novelty effects are the cornerstone of many infant behavioral methods (e.g., habituation, head-turn preference, preferential looking / looking-while-listening, eye tracking). In this ongoing project we investigate <a href="https://psycnet.apa.org/record/1988-98065-003" target="_blank"><b>Hunter and Ames’ (1988)</b></a> model of infants’ preference for familiar and novel stimuli. We aim to empirically test whether infant age, task difficulty, and familiarization time interact to predict the direction of infants’ preference for familiar vs. novel stimuli. By comprehensively testing the Hunter and Ames model, we will solidify our foundational understanding of infant curiosity and provide the most comprehensive, global picture of the early foundations of infant cognition to date.</p>

<div>
  <div class="container" style="width:90%; margin:0 auto;">
    <div class="row">
      <div class="col-sm-12" align=center>
        <img src="/assets/img/mb5-hunter-ames-fig.png"><br>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12" align=left>
        <p style="font-size:14px; "><b>Figure 1.</b> This figure (adapted from <a href="https://doi.org/10.1111/desc.12341" target="_blank">Bergmann and Cristia, 2016</a>) depicts <a href="https://psycnet.apa.org/record/1988-98065-003" target="_blank">Hunter & Ames’</a> model of infant looking to familiar (plotted up) and novel (plotted down) stimuli at different levels of pre-test familiarization time (shown on the x-axis; Figure 1). The dashed line indicates equal preference for familiar and novel stimuli. The grey line represents the model’s prediction for older infants, and the black line for younger infants. The “lower complexity” and “higher complexity” arrows indicate how the proposed relation between age and familiarization time might shift with variation in stimulus complexity (i.e., the current operationalization of task difficulty).</p>
      </div>
    </div>
  </div>
</div>

***
## Links
* **<a href="https://manybabies.org/mb5-manual/" target="_blank">MB5 LAB MANUAL</a>**
* **<a href="{{site.baseurl}}/mb5-tracker/" target="_blank">MB5 PROJECT TRACKER</a>**
* **Materials and Documentation**: <a href="https://osf.io/g3udp/" target="_blank">MB5-OSF</a>, <a href="https://docs.google.com/document/d/e/2PACX-1vQsLk557N0kBYSLtx9-bvtIkIiUD8H-zY0GqN3u64cQITwK4c85Xv82n6vzZzZcIBPVGPUobeQCCeqk/pub" target="_blank">MB5 Collaboration Agreement</a>
* **Listserv**: <a href="https://groups.google.com/a/manybabies.org/g/mb5-list" target="_blank">join here</a> *(click on “for access, try joining the group”)*
* **Slack group**: <a href="{{ site.data.global.link.slack-invite }}" target="_blank">MB workspace</a> (*join the #mb5-general channel*)

***
## Project Leads
<ul>
  {% for lead in current_project.leads %}
    <li>
      {% if lead.orcid %}
        <b><a href="{{ lead.site }}" target="_blank">{{ lead.name }}</a></b>, <i>{{ lead.institution }}</i> <a href="{{ lead.orcid }}" target="_blank"><img src="/assets/img/orcid.png" height="15"></a> <a href="mailto:{{ lead.email }}">[email]</a>
      {% else %}
        <b><a href="{{ lead.site }}" target="_blank">{{ lead.name }}</a></b>, <i>{{ lead.institution }}</i> <a href="mailto:{{ lead.email }}">[email]</a>
      {% endif %}{% unless forloop.last %}<br> {% endunless %}
    </li>
  {% endfor %}
</ul>

***
## MB5 Contributors

We encourage everyone who is interested in the project to subscribe to the MB5 listserv and/or email the Project Leads ([{{ site.data.global.contact.mb5 }}](mailto:{{ site.data.global.contact.mb5 }})) to indicate your interest. To add your name to this list of contributors, fill out the [MB Dashboard form]({{ site.data.global.link.dashboard-form }}). Please note that access to infants/an infant lab is **NOT** a prerequisite.

> NOTE: Default table ordering is by contributor's first name. You can filter, group, and/or sort entries by any field.

<iframe class="airtable-embed" src="https://airtable.com/embed/appRoqMKzcK3NsXt4/shrvySdkb1lUnlWLv?backgroundColor=blueDusty&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

> Project contributors can update/add info to the contributor list/MB Dashboard using <a href="{{ site.data.global.link.dashboard-form }}" target="_blank"><b>this form</b></a> 

***
## Funding
<p>MB5 is supported by an <a href="https://award.einsteinfoundation.de/award-winners-finalists/recipients-2021/manybabies5" target="_blank">Early Career Award</a> from the <a href="https://www.einsteinfoundation.de/index.php?id=1&L=1" target="_blank">Einstein Foundation Berlin</a>.</p>

<iframe  align="center" width="725" height="408" src="https://www.youtube.com/embed/gTYf-5k69LE" title="ManyBabies 5: Einstein Foundation Early Career Award" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
> Credit/© Einstein Foundation Berlin/2470 Media GmbH

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

***
## Spin-off Projects
<ul>
  {% assign spinoffs = site.data.airtable | where: "type", "Spin-off" | where: "mainProject", page.title %}
  {% for spinoff in spinoffs %} <!--- loop over spinoff projects -->
    <li><img src="{{ spinoff.logoPath }}" alt="{{ spinoff.project}} logo" width="20"> <b><a href="https://{{spinoff.website }}">{{spinoff.project}}</a>: {{ spinoff.description }} </b></li>
  {% endfor %}
  {% assign secondary = site.data.airtable | where: "type", "Secondary analysis" | where: "mainProject", page.title %}
  {% for item in secondary %} <!--- loop over secondary projects -->
    <li><img src="{{ item.logoPath }}" alt="{{ item.project}} logo" width="20"> <b><a href="https://{{item.website }}">{{item.project}}</a>: {{ item.description }} </b></li>
  {% endfor %}
</ul>

