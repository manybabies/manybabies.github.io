---
layout: page
title: MB4P
subtitle: Postural responses during social evaluation
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
        </ul>
      </div>
    </div>
  </div>
</div>

***

<p>This project seeks to explore the relationship between infants’ postural responses and their subsequent behaviour (e.g. choice of helper/hinderer) in the main MB4 study. </p>

<p>More info coming soon!</p> 

<!--
***
### Links
* **Documentation and protocols**: [MB4I-OSF](https://osf.io/qy2zr/)
* **Listserv**: [join](https://groups.google.com/a/manybabies.org/g/mb4i-list)
* **Preregistration**: [OSF](https://doi.org/10.17605/OSF.IO/RAQ4X)
* **BCCCD 2023 Poster**: [link](https://osf.io/jp532)
* **MB4**: [main project page]({{site.baseurl}}/MB4/)
-->

***
## Project Leads
<ul>
  {% for lead in current_project.leads %}
    <li>
      {% if lead.orcid %}
        <b><a href="{{ lead.site }}" target="_blank">{{ lead.name }}</a></b>, <i>{{ lead.institution }}</i> <a href="{{ lead.orcid }}" target="_blank"><img src="/assets/img/orcid.png" height="15"></a> <a href="mailto:{{ lead.email }}">[email]</a>
      {% else %}
        {{ lead.name }}, <i>{{ lead.institution }}</i>
      {% endif %}{% unless forloop.last %}<br> {% endunless %}
    </li>
  {% endfor %}
</ul>

***
## MB4P Contributors

We encourage everyone who is interested in the project to contact the Project Leads (see above). Please note that access to infants/an infant lab is **NOT** a prerequisite.

> NOTE: Default table ordering is by contributor's first name. You can filter, group, and/or sort entries by any field.

Contributor table coming soon!

> Project contributors can update/add info to the contributor list/MB Dashboard using <a href="{{ site.data.global.link.dashboard-form }}" target="_blank"><b>this form</b></a> 

