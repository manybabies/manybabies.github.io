---
layout: page
title: MB3-NIRS
subtitle: Rule Learning using NIRS
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

In this ongoing project, we extend the [**MB3**]({{site.baseurl}}/MB3/) investigation on the ability to learn and to apply rules by adding a non-invasive brain imaging technique to the experimental design: near-infrared spectroscopy (NIRS). <img style="float: right;" src="/assets/img/nirs_1_300px.jpeg"> With this addition, we may be able to identify neural correlates that inform whether and to what extent rules' processing and learning are abstract, rule-based, and/or language specific. We may also be able to explore the time course of learning, thereby adjudicating between statistical mechanisms requiring extended time for sampling and faster symbolic mechanisms.

NIRS is a relatively new imaging technique. Variation across instruments, analysis pipelines, and laboratories is wide and standardization is currently lacking. Using NIRS in this large-scale collaborative project will provide us with the unique opportunity to discuss and solve some of these issues in a global network of experts in developmental research and brain imaging.

***
## Links
<!-- * **Materials, Protocols, and Documentation**: [MB1B-OSF](https://osf.io/zauhq/).
* **Data and code**: [MB1B-GitHub](https://github.com/manybabies/mb1b-analysis-public). -->
* **Listserv**: [email Judit Gervain](mailto:judit.gervain@parisdescartes.fr) to subscribe *(subject: MB3N listserv)*
* **Slack workspace**: [join](https://join.slack.com/t/mb3nirs/shared_invite/zt-1opm3wjvb-Hk5cO2ZDciUhWyuJfeunQQ)

***
## Project Lead
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
## MB3-NIRS Contributors

We encourage everyone who is interested in the project to contact the Project Lead (see above) or fill out the [**MB Sign-Up Form**]({{site.baseurl}}/get_involved/). Please note that access to infants/infant lab is **NOT** a prerequisite.

> NOTE: Default table ordering is by contributor's first name. You can filter, group, and/or sort entries by any field.

<iframe class="airtable-embed" src="https://airtable.com/embed/appRoqMKzcK3NsXt4/shrGEVnIg50ssHlRq?backgroundColor=blueDusty&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

> Project contributors can update/add info to the contributor list/MB Dashboard using <a href="{{ site.data.global.link.dashboard-form }}" target="_blank"><b>this form</b></a> 


<!-- ### Publication -->
