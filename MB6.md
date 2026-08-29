---
layout: page
title: MB6
subtitle: Neonatal and Early Imitation
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
        <h2 style="color:{{ current_project.color }}; text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff;">Project Overview</h2>
        <ul>
          <li><i>Status:</i> <code>{{ current_project.status }}</code></li>
          <li><i>Subscribe to the <a href="https://groups.google.com/a/manybabies.org/g/mb6-list" target="_blank"><b>MB6 listserv</b></a> to get involved!</i></li>
        </ul>
      </div>
    </div>
  </div>
</div>

***

<p>In a seminal study, <a href="https://www.science.org/doi/10.1126/science.198.4312.75" target="_blank">Meltzoff and Moore (1977)</a> reported that neonates aged 12-21 days imitated the gestures of tongue protrusion, mouth opening and lip pursing, as well as sequential finger movement. This discovery transformed developmental science by suggesting that imitation, a skill that is crucial for human survival and foundational for later development, is available soon after birth. Despite its influence on theories, attempts to replicate and extend these findings have been mixed; some report successful replications of this landmark finding, whereas others find no evidence of early imitation. As such, questions remain about the generalizability of Meltzoff and Moore’s (1977) core findings, and about the sources of variation across labs (e.g., methodology, infant state, culture) that may account for these apparently contradictory findings. As a first step of addressing this ongoing debate, we will explore whether neonates (14 - 28 days) and young infants (39 - 46 days) match tongue protrusion and mouth opening behaviours, using a cross-target approach in a multi-laboratory conceptual replication of Meltzoff and Moore (1977).</p>

***
## Links
* **Documentation**: <a href="https://docs.google.com/document/d/1-elw5r6U9yfv_lTmwbYTfa9ldMlNdPfrYTxqQ95daBs/edit?usp=sharing" target="_blank">MB6 Collaboration Agreement</a>
* **Listserv**: [subscribe here](https://groups.google.com/a/manybabies.org/g/mb6-list) *(click on "for access, try joining the group")*
* **Slack**: <a href="{{ site.data.global.link.slack-invite }}" target="_blank">MB workspace</a> (*join the **#mb6-general** channel*)
* **Initial planning workshops**: [Workshop 1](https://www.youtube.com/watch?v=SIwvMydZUwA), [Workshop 2](https://www.youtube.com/watch?v=61muVqg7mnI)

*** 
## Project Leads
* **General Contact: [{{ site.data.global.contact.mb6 }}](mailto:{{ site.data.global.contact.mb6 }})**
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
## MB6 Contributors

We encourage everyone who is interested in the project to subscribe to the MB6 listserv and/or email the Project Leads ([{{ site.data.global.contact.mb6 }}](mailto:{{ site.data.global.contact.mb6 }})) to indicate your interest. Please note that access to infants/an infant lab is **NOT** a prerequisite.

> NOTE: Default table ordering is by contributor's first name. You can filter, group, and/or sort entries by any field.

<iframe class="airtable-embed" src="https://airtable.com/embed/appRoqMKzcK3NsXt4/shrlM3zLzNYw3ZvYL?backgroundColor=blueDusty&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

> Project contributors can update/add info to the contributor list/MB Dashboard using <a href="{{ site.data.global.link.dashboard-form }}" target="_blank"><b>this form</b></a> 