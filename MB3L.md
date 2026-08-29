---
layout: page
title: MB3L
subtitle: Longitudinal Language Follow-up
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

The MB3L follow-up project will investigate the relationship between infants’ rule learning abilities and their later developing language acquisition skills in a longitudinal design. Therefore, participating labs will assess language abilities at 24 to 30 months of age using the CDI. We are for example interested in the extent to which rule learning abilities predict later grammar skills, whether this relationship changes with age, and if certain characteristics of the first language the infants are exposed to (e.g., like complexity) lead to any systematic differences in the strength of this relationship.

***
## Links
* **Preregistration**: <a href="https://osf.io/hfqkc" target="_blank">Link</a>
* **MB3**: [main project page]({{site.baseurl}}/MB3/)

***
## Leads
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
## MB3L Contributors

We encourage everyone who is interested in the project to contact Project Lead [Anna Exner](mailto:anna.exner@posteo.de). Please note that access to infants/an infant lab is **NOT** a prerequisite.

> NOTE: Default table ordering is by contributor's first name. You can filter, group, and/or sort entries by any field.

<iframe class="airtable-embed" src="https://airtable.com/embed/appRoqMKzcK3NsXt4/shrME545okYQ7D917?backgroundColor=blueDusty&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

> Project contributors can update/add info to the contributor list/MB Dashboard using <a href="{{ site.data.global.link.dashboard-form }}" target="_blank"><b>this form</b></a> 
