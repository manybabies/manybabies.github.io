---
layout: page
title: MB4E
subtitle: Exploring Links Between Infants’ Social Evaluations, Facial Expressions, and Posture
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
          <li><i>If you have any ideas or suggestions, please do not hesitate to reach out to us and join as a collaborator!</i></li>
        </ul>
      </div>
    </div>
  </div>
</div>

***

The goal of this project is to measure infants’ emotional responses (e.g. positive/negative affect) to the helping/hindering events in [**MB4**]({{site.baseurl}}/MB4/). We aim to understand the relation between infants' affect and social preferences (e.g. similar to <a href="https://bpspsychub.onlinelibrary.wiley.com/doi/full/10.1111/bjdp.12232" target="_blank">Steckler et al., 2017</a>). We plan to analyze infants' facial expressions (e.g., positive/negative affect) and other observable responses (e.g., posture, following <a href="https://www.frontiersin.org/articles/10.3389/fpsyg.2015.00858/full" target="_blank">Hepach et al., 2015</a> while viewing the MB4 habituation videos. In addition to theoretical contributions, we aim to identify new methodological tools that can be used at scale to store, share, and analyze infant video data. We also seek to explore and validate innovative and scalable ways to code variables that previously relied solely on human coding (e.g., facial expression and posture).


***
## Links
* **Materials, Protocols, and Documentation**: [MB4E OSF](https://osf.io/b5x8s/)
* **Listserv**: [join here](https://groups.google.com/a/manybabies.org/g/mb4e-list)
* **MB4**: [main project page]({{site.baseurl}}/MB4/)


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
## MB4E Contributors

We encourage everyone who is interested in the project to contact the Project Leads (see above). Please note that access to infants/an infant lab is **NOT** a prerequisite.

> NOTE: Default table ordering is by contributor's first name. You can filter, group, and/or sort entries by any field.

<iframe class="airtable-embed" src="https://airtable.com/embed/appRoqMKzcK3NsXt4/shrw0y0f9tucYd4DM?backgroundColor=blueDusty&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

> Project contributors can update/add info to the contributor list/MB Dashboard using <a href="{{ site.data.global.link.dashboard-form }}" target="_blank"><b>this form</b></a> 


