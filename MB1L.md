---
layout: page
title: MB1L
subtitle: Longitudinal Vocabulary Follow-up
---

{% assign current_project = site.data.airtable | where: "project", page.title | first %}

***

<div class="container">
  <div class="box-gray" style="box-shadow: -10px 10px {{current_project.color}};">
    <div class="row justify-content-around">
      <div class="col-lg-4" align="center">
        <br>
        <img src="{{ current_project.logoPath}}" width="150">
      </div>
      <div class="col-lg-8" align="left">
        <h2 style="color:{{current_project.color}};">Project Overview</h2>
        <ul>
          <li><i>Status:</i> <code>{{ current_project.status}}</code></li>
          <li><i>21 participating labs collected data in 14 countries</i></li>
          <li><i>467 babies tested and 668 CDIs collected</i></li>
          <li><i>45 authors on</i> <b>Journal of Child Language</b> <i>article</i></li>
        </ul>
      </div>
    </div>
  </div>
</div>

***

In this project we explored whether early preference for Infant Directed Speech (IDS) is linked to later vocabulary size. For instance, does preference for IDS predictx infants' vocabulary? Does the relation between IDS preference and vocabulary size change over development? And are there any systematic differences in the strength of this relationship across language communities? 

Infants’ preference for IDS was tested as part of the [**MB1**]({{site.baseurl}}/MB1) project, and follow-up CDI data was collected from a subsample of this dataset at 18 and 24 months of age.

A total of 341 (18 months) and 327 (24 months) infants were tested across 21 laboratories. In neither preregistered analyses with North American and UK English, nor exploratory analyses with a larger sample was there a relation between IDS preference and later vocabulary. In the manuscript, we discuss the implications of this finding in light of recent work suggesting that IDS preference measured in the laboratory has low test-retest reliability ([**MB1T**]({{site.baseurl}}/MB1T)).


***
## Links
* **Materials, Protocols, and Documentation**: [MB1L-OSF](https://osf.io/2qamd/).
* **Data and code**: to be released.
* **Listserv**: [join here](https://groups.google.com/u/1/g/mb1-cdi-follow-up).
* **News**: [MB1L-news]({{site.baseurl}}/tags/#MB1L).


***
## Project Lead
<ul>
  {% for lead in current_project.leads %}
    <li>
      {% if lead.orcid %}
        <b><a href="{{ lead.site }}" target="_blank">{{ lead.name }}</a></b>, <i>{{ lead.institution }}</i> <a href="{{ lead.orcid }}" target="_blank"><img src="/assets/img/orcid.png" height="15"></a> <a href="mailto:{{ lead.email }}">[email]</a>
      {% else %}
        {{ lead.name }}, <i>{{ lead.institution }}</i>
      {% endif %}{% unless forloop.last %}<br> {% endunless %}
    </li>
  {% endfor %}
</ul>

***
## Contributors
> NOTE: Default table ordering is by contributor's first name. You can filter, group, and/or sort entries by any field.

<iframe class="airtable-embed" src="https://airtable.com/embed/appRoqMKzcK3NsXt4/shrVSj85N0OkDVT6k?backgroundColor=blueDusty&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

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
