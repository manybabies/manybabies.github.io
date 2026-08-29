---
layout: page
title: MB1-Demo
subtitle: Analysis of supplemental demographic variables
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
        </ul>
      </div>
    </div>
  </div>
</div>

***

The ManyBabies 1 project provides an unique opportunity not only to take stock of the field and discover how our methods and approaches differ, but to begin to understand the factors that make these effects so difficult to measure. In this ongoing exploratory project, we plan to analyze additional variables collected alongside the main MB1 project, consisting of a wide range of 'lab factors' that researchers believe may impact either whether a baby fusses out of a study (e.g., Research Assistant having beard), or whether they truly attend to stimuli (and thus produce an expected effect in the study).

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
## Links
* **Materials, Protocols, and Documentation**: [OSF](https://osf.io/ryzmb/).
* **Preregistration**: [OSF](https://osf.io/puxbg/)
<br>

***
## Contributors

> We encourage everyone who is interested in the project to contact the Project Lead (see above).

> Please note that access to infants/infant lab is **NOT** a prerequisite.

