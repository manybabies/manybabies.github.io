---
layout: page
title: MB5N
subtitle: Naturalistic Interactions
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

<p>We are developing an add-on project to <b><a href="{{site.baseurl}}/MB5">MB5</a></b> that will examine the relationship between infants’ performance in the main MB5 experiment and naturalistic interaction behaviors of the caregiver and infant. Our project has two parts, (1) a parent survey about the infant’s novelty-seeking behaviors and caregiver support for novelty exploration, and (2) a parent-child interaction study examining how infants and caregivers interact when playing with familiar and novel toys, using a brief in-lab play session. </p>

***
## Links
* **Contact**: [**{{ site.data.global.contact.mb5n }}**](mailto:{{ site.data.global.contact.mb5n }})
* **Listserv**: <a href="https://groups.google.com/a/manybabies.org/g/mb5n-list" target="_blank">join here</a> *(click on “for access, try joining the group”)*
* **Slack group**: <a href="{{ site.data.global.link.slack-invite }}" target="_blank">MB workspace</a> (*join the #mb5-naturalistic channel*)
* **MB5**: [main project page]({{site.baseurl}}/MB5/)

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
## MB5N Contributors

We encourage everyone who is interested in the project to subscribe to the MB5N listserv and/or email the Project Leads ([{{ site.data.global.contact.mb5n }}](mailto:{{ site.data.global.contact.mb5n }})) to indicate your interest. To add your name to this list of contributors, fill out the [MB Dashboard form]({{ site.data.global.link.dashboard-form }}). Please note that access to infants/an infant lab is **NOT** a prerequisite.

>Contributor table coming soon!

<!--
> NOTE: Default table ordering is by contributor's first name. You can filter, group, and/or sort entries by any field.

<iframe class="airtable-embed" src="" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

> Project contributors can update/add info to the contributor list/MB Dashboard using <a href="{{ site.data.global.link.dashboard-form }}" target="_blank"><b>this form</b></a> 

-->

<!--
***
### Publication
-->