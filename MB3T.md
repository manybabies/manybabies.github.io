---
layout: page
title: MB3T
subtitle: Test-Retest Follow-up
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

In this ongoing project we aim to investigate the test-retest reliability of the methods that have been used to investigate abstract rule learning in infancy during [**ManyBabies3**]({{site.baseurl}}/MB3/). Therefore, participating labs will test babies twice within a certain time interval. Additionally, we are interested in questions regarding the robustness of reliability estimates across different methods (head-turn preference procedure, central fixation, or eye tracking) and over development.


***
## Links
* **Listserv:** [subscribe](https://groups.google.com/g/mb3t)
* **Preregistration:** [OSF](https://osf.io/ma8z5)
* **Lab manual:** [link](https://docs.google.com/document/d/1lSn2U7gT7v-k0_HLlzoyzsdQiLAgJlDd/edit?usp=sharing&ouid=109835695047974693970&rtpof=true&sd=true)
* **MB3**: [main project page]({{site.baseurl}}/MB3/)


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
## MB3T Contributors

We encourage everyone who is interested in the project to contact Project Lead [Anna Exner](mailto:anna.exner@posteo.de). Please note that access to infants/an infant lab is **NOT** a prerequisite.

> NOTE: Default table ordering is by contributor's first name. You can filter, group, and/or sort entries by any field.

<iframe class="airtable-embed" src="https://airtable.com/embed/appRoqMKzcK3NsXt4/shrjxn6krXcLJO5jk?backgroundColor=blueDusty&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

> Project contributors can update/add info to the contributor list/MB Dashboard using <a href="{{ site.data.global.link.dashboard-form }}" target="_blank"><b>this form</b></a> 
