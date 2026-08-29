---
layout: page
title: MB3P
subtitle: Measuring Pupil Dilation with Rule Learning
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


## A violation-of-expectation paradigm building on the main MB3 study

<p>Description to come!</p>


***
## Links
* **Listserv**: [join here](https://groups.google.com/a/manybabies.org/g/mb3p-list)
* **Materials, Protocols, and Documentation**: <a href="https://docs.google.com/document/d/1b-ZaJpbVzvN_fUApXlZkZiT9jxGUYRhHbAC1qOucufo/edit?usp=sharing" target="_blank">MB3 lab manual</a>
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
## MB3P Contributors

We encourage everyone who is interested in the project to contact a Project Lead and/or subscribe to the MB3P listserv *(see above)*. Please note that access to infants/an infant lab is **NOT** a prerequisite.

> NOTE: Default table ordering is by contributor's first name. You can filter, group, and/or sort entries by any field.

Contributor Table Coming Soon!

> Project contributors can update/add info to the contributor list/MB Dashboard using <a href="{{ site.data.global.link.dashboard-form }}" target="_blank"><b>this form</b></a> 


<!-- ### Publications -->
