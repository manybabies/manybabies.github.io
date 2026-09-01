---
layout: page
title: MB5-Meta
subtitle: A systematic review of infant looking time preferences for novel vs. familiar visual stimuli
---

{% assign current_project = site.data.airtable | where: "project", page.title | first %}

***

<div class="container">
  <div class="box-gray" style="box-shadow: -10px 10px {{ current_project.color }};">
    <div class="row justify-content-around">
      <div class="col-lg-4" align="center">
        <br>
        <img src="{{ current_project.logoPath }}" width="150" style="margin-bottom:20px;">
      </div>
      <div class="col-lg-8" align="left">
        <h2 style="color:{{ current_project.color }};">Project Overview</h2>
        <ul>
          <li><i>Status:</i> <code>{{ current_project.status }}</code></li>
        </ul>
      </div>
    </div>
  </div>
</div>

***

<p>The main goal of the current meta-analysis is to evaluate the degree to which predictions stemming from models of infant novelty preference are reflected in infant visual processing. This will facilitate two main research goals. The first is to characterize the overall strength and prevalence of novelty and familiarity effects in studies measuring infants’ visual preference for familiar and novel stimuli. The second is to use the meta-analytic sample to assess the reliability of effects of familiarization time, task difficulty, and infant age on novelty and familiarity effects in such studies. Beyond addressing these research questions, this meta-analysis will also create benchmarks for future studies and make it easier for researchers to interpret and contextualize their effects within the broader infant literature.</p>

***
## Links
* **Materials, Protocols, and Documentation**: <a href="https://osf.io/63zpu/" target="_blank">MB5-Meta OSF project</a>, <a href="https://osf.io/25rxu" target="_blank">Preregistration</a>
* **Slack channel**: <a href="{{ site.data.global.link.slack-invite }}" target="_blank">MB workspace</a> (*join the #mb5-meta channel*)

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
## MB5-Meta Contributors

We encourage everyone who is interested in the project to contact the Project Leads (see above) or fill out the [**MB Sign-Up Form**]({{site.baseurl}}/get_involved/). Please note that access to infants/infant lab is **NOT** a prerequisite.

> NOTE: Default table ordering is by contributor's first name. You can filter, group, and/or sort entries by any field.

<iframe class="airtable-embed" src="https://airtable.com/embed/appRoqMKzcK3NsXt4/shrMDsGUiAv0MWyIg?backgroundColor=blueDusty&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

> Project contributors can update/add info to the contributor list/MB Dashboard using <a href="{{ site.data.global.link.dashboard-form }}" target="_blank"><b>this form</b></a> 


<!--
***
## Publication

-->

***
## Funding
* MB5 is supported by an <a href="https://award.einsteinfoundation.de/award-winners-finalists/recipients-2021/manybabies5" target="_blank">Early Career Award</a> from the <a href="https://www.einsteinfoundation.de/index.php?id=1&L=1" target="_blank">Einstein Foundation Berlin</a>
