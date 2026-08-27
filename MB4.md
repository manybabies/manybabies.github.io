---
layout: page
title: MB4
subtitle: Social Evaluation
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
          <li><i>37 participating labs collected data in 18 countries on 5 continents</i></li>
          <li><i>1018 babies tested</i></li>
          <li><i>94 authors on</i> <a href="https://doi.org/10.1111/desc.13581" target="_blank"><b>Developmental Science</b></a> <i>publication</i></li>
        </ul>
      </div>
    </div>
  </div>
</div>

***

<p>In this project we investigate a fundamental aspect of human nature: evaluating others’ actions as praiseworthy or blameworthy. We do so in a closely coordinated, multi-laboratory, standardized study aimed at replicating the helping/hindering finding reported by <a href="https://doi.org/10.1038/nature06288" target="_blank">Hamlin, Wynn, & Bloom, 2007</a>. Using a video-taped version of the original <a href="https://www.youtube.com/watch?v=anCaGBsBOxM" target="_blank">puppet show</a>, labs from around the world collected data from infants between the ages of 5.5 and 10.5 months.</p>

<div>
  <div class="container" style="width:90%; margin:0 auto;">
    <div class="row">
      <div class="col-sm-12" align=center>
        <img src="/assets/img/mb4_site_300px.png" alt="MB4 stimuli" style="width:50%"><br>
      </div>
    </div>
  </div>
</div>


***
## Links
* **Project website**: [check it out](https://sites.google.com/view/manybabies4/home)
* **Documentation and protocols**: [MB4-OSF](https://osf.io/xe2pj/)
* **Materials, Data, and Code**: [MB4 resources](https://osf.io/kr8tx/resources)
* **GitHub repository**: [MB4-GitHub](https://github.com/manybabies/mb4-analysis)
* **Listserv**: [join here](https://groups.google.com/a/manybabies.org/g/mb4-list)
* **Slack**: [MB workspace]({{ site.data.global.link.slack-invite }}) (*join the #mb4-general channel*)


***
## Project Leads
* [**Kelsey Lucca**](https://isearch.asu.edu/profile/3521043), *Arizona State University, United States* [[email]](mailto:kelsey.lucca@asu.edu)
* [**Francis Yuen**](https://cic.psych.ubc.ca/), *University of British Columbia, Canada* [[email]](mailto:francis.yuen@psych.ubc.ca)
* [**Kiley Hamlin**](https://psych.ubc.ca/profile/kiley-hamlin/), *University of British Columbia, Canada* [[email]](mailto:kiley.hamlin@psych.ubc.ca)


***
## MB4 Contributors

> NOTE: Default table ordering is by author order in the Stage 2 publication. You can filter, group, and/or sort entries by any field.

<iframe class="airtable-embed" src="https://airtable.com/embed/appRoqMKzcK3NsXt4/shrjWmcCgjlVcKO7k?viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>


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
        {{ pub.authorsCondensed }} ({{ pub.year }}). <b>{{pub.title}}</b>. <i>{{pub.journal}}</i>, <i>{{pub.issue}}</i>({{ pub.issue }}), {{ pub.pages }}. <a href="{{ pub.journalLink }}" target="_blank">{{ pub.journalLink}}</a>
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
