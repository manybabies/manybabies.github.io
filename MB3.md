---
layout: page
title: MB3
subtitle: Rule Learning
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
          <li><i><a href="https://osf.io/preprints/psyarxiv/ghrdt_v2" target="_blank">Stage 2 Registered Report</a> accepted for publication at</i> <b>Developmental Science</b></li>
        </ul>
      </div>
    </div>
  </div>
</div>

***

<img style="float: right;" src="/assets/img/BLL1_300px.jpg">
In this ongoing project we investigate an ability that lies at the heart of cognition: to learn and to apply rules. We ask whether infants (from 5 to 12 months-old) can learn abstract algebraic rules over patterned syllable sequences and generalize those rules to novel syllable sequences. Despite the large research effort on the topic, questions remain about the robustness of the core finding, as many studies failed to find significant learning effects. We believe that a multi-lab approach with a large and diverse sample of infants has the potential to uncover whether and to what extent this core cognitive ability is available in young infants and how it varies across age and different developmental circumstances.


***
## Links
* **Materials, Protocols, and Documentation**: <a href="https://osf.io/kqu9v/" target="_blank">MB3-OSF</a>, <a href="https://docs.google.com/document/d/1b-ZaJpbVzvN_fUApXlZkZiT9jxGUYRhHbAC1qOucufo/edit?usp=sharing" target="_blank">MB3 Lab Manual</a>, <a href="https://docs.google.com/document/d/e/2PACX-1vQyE0mPU3fKkRTd8OoP6P3iNNsaCvNdUvE2yXqGr4wC_hkRqJmZuu4s-Adgfh781NfmD4pI_8DgpgzA/pub" target="_blank">MB3 Collaboration Agreement</a>
* **Data and code**: <a href="https://github.com/manybabies/mb3-rules" target="_blank">MB3-GitHub</a>
* **Listserv**: <a href="https://groups.google.com/a/manybabies.org/g/mb3-list" target="_blank">join here</a> *(click on “for access, try joining the group”)*
* **Slack**: <a href="{{ site.data.global.link.slack-invite }}" target="_blank">MB workspace</a> (*join the #mb3-general channel*)


***
## Leads
* [**Ingmar Visser**](https://www.uva.nl/profiel/v/i/i.visser/i.visser.html?cb), *University of Amsterdam, Netherlands* [[email]](mailto:i.visser@uva.nl) 
* [**Claartje Levelt**](https://www.universiteitleiden.nl/en/staffmembers/claartje-levelt#tab-1), *Leiden University, Netherlands* [[email]](mailto:c.c.levelt@hum.leidenuniv.nl) 
* [**Melanie Soderstrom**](https://home.cc.umanitoba.ca/~soderstr/), *University of Manitoba, Canada* [[email]](mailto:M_Soderstrom@umanitoba.ca)
* [**Andreea Geambasu**](https://www.universiteitleiden.nl/en/staffmembers/andreea-geambasu#tab-1), *Leiden University, Netherlands* [[email]](mailto:a.geambasu@hum.leidenuniv.nl)


***
## MB3 Contributors

> NOTE: Default table ordering is by contributor's last name. You can filter, group, and/or sort entries by any field.

<iframe class="airtable-embed" src="https://airtable.com/embed/appRoqMKzcK3NsXt4/shr6IWs4XnRyp0DAu?viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>


***
## Publication

{% assign pubs = site.data.publications | where: "project", page.title %}
{% for pub in pubs %} <!--- loop over pubs for specified project -->
  <div class="container">
    <div class="row">
      <div class="col-sm-2" align="center">
        <a href="https://{{pub.website }}"><img src="{{ pub.logoPath }}" alt="{{ pub.project}} logo" width="70" style="margin-top:4px;"></a>        
      </div>
      <div class="col-sm-10">
        {{ pub.authorsCondensed }} ({{ pub.year }}). <b>{{pub.title}}</b>. <i>{{pub.journal}}</i>, <i>{{pub.volume}}</i>({{ pub.issue }}), {{ pub.pages }}. <a href="{{ pub.journalLink }}" target="_blank">{{ pub.journalLink}}</a>
        <details>
          <summary><code>View full author list</code></summary> <!--- expandable author list with orcids -->
          <div style="margin-left: 2em;">
            {% for author in pub.authors %}
              {% if author.orcid %}
                {{ author.name }} <a href="{{ author.orcid }}"><img src="/assets/img/orcid.png" height="15"></a> 
              {% else %}
                {{ author.name }}
              {% endif %}{% unless forloop.last %}<br> {% endunless %}
            {% endfor %}
          </div>
        </details>
      </div>
    </div>
  </div>  
{% endfor %}

***
## Spin-off Projects

<ul>
  {% assign spinoffs = site.data.airtable | where: "type", "Spin-off" | where: "mainProject", page.title %}
  {% for spinoff in spinoffs %} <!--- loop over spinoff projects -->
    <li><img src="{{ spinoff.logoPath }}" alt="{{ spinoff.project}} logo" width="20"> <b><a href="https://{{spinoff.website }}">{{spinoff.project}}</a>: {{ spinoff.description }} </b></li>
  {% endfor %}
  {% assign secondary = site.data.airtable | where: "type", "Secondary analysis" | where: "mainProject", page.title %}
  {% for item in secondary %} <!--- loop over secondary projects -->
    <li><img src="{{ item.logoPath }}" alt="{{ item.project}} logo" width="20"> <b><a href="https://{{item.website }}">{{item.project}}</a>: {{ item.description }} </b></li>
  {% endfor %}
</ul>
