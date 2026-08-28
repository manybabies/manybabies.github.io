---
layout: page
title: MB1-Africa
subtitle: Infant-Directed Speech Preference in African Infants
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
          <li><i>8 participating labs collected data in 8 countries</i></li>
          <li><i>260 infants tested</i></li>
          <li><i>38 authors on</i> <a href="https://doi.org/10.1111/desc.70242" target="_blank"><b>Developmental Science</b></a> <i>publication</i></li>
        </ul>
      </div> <!-- div class col8 -->
    </div> <!-- row -->
  </div> <!-- box -->
</div> <!-- container -->

***

<div class="flourish-embed" data-src="visualisation/2488103" style="float: right;" data-url="https://flo.uri.sh/visualisation/2488103/embed"><script src="https://public.flourish.studio/resources/embed.js"></script></div>

Infants show a preference for infant-directed speech (IDS) over adult-directed speech (ADS). This preference has been linked to infants’ language processing and word learning in experimental settings, and also correlates with later language outcomes. Recently, the cross-cultural consistency of infants’ IDS preference was confirmed by one of our other ManyBabies projects (<a href="{{site.baseurl}}/MB1/"><b>MB1</b></a>). However, data from this study were primarily from North American and European countries. MB1-Africa addresses this issue via a large-scale, multi-site study of African infants between the ages of 3-15 months. We investigate whether this understudied population shows a preference for IDS over ADS, and if so, whether the magnitude of their preference differs from estimates from other populations. The project is currently in progress. Please contact the leaders for more information.


***
## Links  
* **Materials, Protocols, and Documentation**: [MB1A-OSF](https://osf.io/jgr79/).  
* **Data and code**: [MB1-Africa-GitHub](https://github.com/manybabies/mb1-africa)
* **Listserv**: [join here](https://mailman.stanford.edu/mailman/listinfo/manybabies-africa)
* **Slack**: [MB workspace](https://join.slack.com/t/manybabies/shared_invite/zt-1frvx4ulh-b7ge7X6DY8Yl4HgBW1xBXQ) (*join the **#mb1africa-general** channel*)
* **MB1**: [main project page]({{site.baseurl}}/MB1/)

***
## Project Leads
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
## MB1-Africa Contributors

We encourage everyone who is interested in the project to contact the Project Leads (see above) or fill out the [**MB Sign-Up Form**]({{site.baseurl}}/get_involved/). Please note that access to infants/an infant lab is **NOT** a prerequisite.

> NOTE: Default table ordering is by contributor's first name. You can filter, group, and/or sort entries by any field.

<iframe class="airtable-embed" src="https://airtable.com/embed/appRoqMKzcK3NsXt4/shr4PCGtQxZjd2SUm?backgroundColor=blueDusty&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>


***
## Publication

{% assign pubs = site.data.publications | where: "project", page.project_id %}
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
