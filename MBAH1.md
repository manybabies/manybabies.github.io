---
layout: page
title: MBAH 1
subtitle: Looking-While-Listening
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

#### We've created a <a href="https://forms.gle/zvdKriur7GK9UYkq6" target="_blank">Google form</a> to estimate the diversity of languages we will potentially be able to represent with this project. Please fill out this form if you're interested in collecting data in your language!

<p>In this multi-language project, we aim to investigate children’s recognition of familiar words across various ages and languages, using an online adaptation of the Looking-While-Listening paradigm (<a href="https://www.researchgate.net/profile/Virginia-Marchman/publication/267179424_Looking-while-listening_184_Looking_while_listening_Using_eye_movements_to_monitor_spoken_language_comprehension_by_infants_and_young_children/links/554cb9840cf29752ee7f587f/Looking-while-listening-184-Looking-while-listening-Using-eye-movements-to-monitor-spoken-language-comprehension-by-infants-and-young-children.pdf" target="_blank">Fernald et al., 2008</a>; also known as Intermodal Preferential Looking Paradigm - IPLP: <a href="https://doi.org/10.1017/S030500090001271X" target="_blank">Golinkoff et al., 1987</a>; <a href="https://doi.org/10.1177/1745691613484936" target="_blank">2013</a>). As the project name suggests, our goal is to implement this paradigm using a remote method, E-Babylab (<a href="https://doi.org/10.3758/s13428-023-02200-7" target="_blank">Lo et al., 2024</a>), designed to test children from their home. With this project, we aim to replicate previous robust findings of the age effect on word recognition, across multiple languages, and to provide greater clarity to the relationship between children’s eye-tracking measures and parental reports of children's word knowledge. Our approach will help build a more inclusive model of studying infant word recognition, and to develop more resource-friendly adaptations for cross-linguistic research.</p>

***
## Links
* <a href="https://docs.google.com/document/d/1Pz_wOyQ5E-sQ7Gp6KYXfcbDAzKpqFZctELJFxvOFDpI/edit?usp=sharing" target="_blank"><b>MBAH1-LWL Collaboration Agreement</b></a>
* **Materials protocols and documentation**: <a href="https://osf.io/kjguq/overview" target="_blank">MBAH1-LWL OSF protocol pages</a> 
* **Listserv**: [subscribe]({{ site.data.global.listserv.mbah1 }}) *(click on "for access, try joining here")*
* **Slack**: join <i><b><a href="https://stanford.enterprise.slack.com/archives/C0BBXD0L0F3" target="_blank">#mbah1-lwl-general</a></b></i> channel in the MB workspace

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
## MBAH1 Contributors

We encourage everyone who is interested in the project to subscribe to the listserv (see above) and/or contact the Project Leads ([{{ site.data.global.contact.mbah1 }}](mailto:{{ site.data.global.contact.mbah1 }})). To add your name to the list of contributors, fill out the [MB Dashboard form]({{ site.data.global.link.dashboard-form }}). Please note that access to infants/an infant lab is **NOT** a prerequisite.
> Contributor list coming soon!

<!-- > NOTE: Default table ordering is by contributor's first name. You can filter, group, and/or sort entries by any field. -->

> <a href="{{ site.data.global.link.dashboard-form }}" target="_blank"><b>Update/add yourself to the contributor list/MB Dashboard</b></a>

<!-- ### Publication -->

