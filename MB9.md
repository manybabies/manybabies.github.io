---
layout: page
title: MB9
subtitle: Perceptual Specialization
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
          <li><i>Subscribe to the <a href="{{ site.data.global.listserv.mb9 }}" target="_blank"><b>MB9 listserv</b></a> and/or <a href="mailto:{{ site.data.global.contact.mb9 }}"><b>email us</b></a> to get involved!</i></li>
        </ul>
      </div>
    </div>
  </div>
</div>

***

<h3>If you are interested in contributing to MB9, please fill out this short <a href="https://docs.google.com/forms/d/e/1FAIpQLSdMQrExnzwueePJ1e7LYrj724TB19Qr39biCYauHxp1hnhgNg/viewform" target="_blank">interest form</a>!</h3>

<p>Perceptual specialization is the process by which an individual builds expertise for differentiating among stimuli most familiar to them and demonstrates reduced capability for differentiating stimuli of unfamiliar categories (e.g., unfamiliar-race faces, non-native languages). Infants raised within racially homogenous (i.e., Monoracial) contexts narrow or fine-tune their perceptual sensitivities for familiar-race faces between 3 and 12 months of age (e.g., <a href="https://doi.org/10.1111/j.1467-9280.2006.01679.x" target="_blank">Bar-Haim et al., 2006</a>; <a href="https://doi.org/10.1080/15250000709336871" target="_blank">Kelly et al., 2007</a>); this finding is often described as the “own-race bias” or “other-race effect.” However, prior studies indicate that Multiracial infants and infants raised in racially diverse contexts likely develop distinct face perception strategies relative to Monoracial infants raised in racially homogenous contexts (e.g., <a href="https://doi.org/10.1002/dev.21527" target="_blank">Ellis et al., 2017</a>; <a href="https://doi.org/10.1111/j.1467-7687.2012.01170.x" target="_blank">Gaither et al., 2012</a>; <a href="https://doi.org/10.1002/dev.21783" target="_blank">Tham et al., 2019</a>). Current developmental neuroscience frameworks propose that perceptual narrowing reflects experience-dependent tuning of neural systems for face processing, with ethnically diverse exposure modulating the emergence of own-race perceptual specialization in infancy (<a href="https://doi.org/10.1016/j.jecp.2024.105889" target="_blank">Xiao et al., 2024</a>; <a href="https://doi.org/10.1016/j.cobeha.2020.05.005" target="_blank">Pascalis et al., 2020</a>; <a href="https://doi.org/10.1111/bjop.12582" target="_blank">Damon et al., 2023</a>).</p> 

<p>We aim to replicate and extend previous face perception studies by investigating the extent to which perceptual specialization for familiar-race faces develops similarly in Multiracial/Multiethnic contexts and Monoracial/Monoethnic contexts. Multiracial individuals represent one of the fastest-growing demographic groups (e.g. U.S. Census Bureau, 2021), which means that an increasing number of infants are developing within Multiracial families and diverse communities. Characterizing perceptual development in these contexts is essential for building a representative account of early face processing. The primary task will measure behavioral looking time (e.g., Visual Paired Comparison, Habituation), with dwell time towards novel relative to familiar exemplar as the primary dependent variable. To maximize participation and meaningfulness of data collection, we aim to offer a task compatible across multiple recording platforms as well as scalable amounts of data collected from each participant. Additional contribution opportunities to this study include face dataset development, demographic and experience questionnaires, data analysis, and manuscript writing. Developing spin-off projects such as testing including perceptual specialization for languages or using other methods such as EEG/ERP or fNIRS are also welcome.</p>

***
## Links
* <b><a href="https://docs.google.com/document/d/1UPKZLpH-pyW2SY7rydJ1E1KjKN3Mx5LmhsxSxL7FojI/edit?usp=sharing" target="_blank">MB9 COLLABORATION AGREEMENT</a></b>
* **Listserv**: [subscribe here]({{ site.data.global.listserv.mb9 }}) *(click on "for access, try joining the group")*
* **Slack**: <a href="{{ site.data.global.link.slack-invite }}" target="_blank">MB workspace</a> (*join the **#mb9-general** channel*)

*** 
## Project Leads
* **General Contact: [{{ site.data.global.contact.mb9 }}](mailto:{{ site.data.global.contact.mb9 }})**
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
## MB9 Contributors

We encourage everyone who is interested in the project to subscribe to the MB9 listserv and/or email the Project Leads ([{{ site.data.global.contact.mb9 }}](mailto:{{ site.data.global.contact.mb9 }})) to indicate your interest. Please note that access to infants/an infant lab is **NOT** a prerequisite.

> NOTE: Default table ordering is by contributor's first name. You can filter, group, and/or sort entries by any field.

<iframe class="airtable-embed" src="https://airtable.com/embed/appRoqMKzcK3NsXt4/shrSaTZYMaTXgjKJx?viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

> Project contributors can update/add info to the MB Dashboard using <a href="{{ site.data.global.link.dashboard-form }}" target="_blank"><b>this form</b></a> 

