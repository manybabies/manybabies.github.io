---
layout: page
title: MB-Demographics
subtitle: Standard demographics for MB projects
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
        <h2 style="color:{{ current_project.color }}; text-shadow: 0px 0px 7px #7F7F7F;">Project Overview</h2>
        <ul>
          <li><i>Status:</i> <code>{{ current_project.status }}</code></li>
          <li><i>Template forms available on <a href="https://osf.io/nqc92/" target="_blank"><b>OSF</b></a></i></li>
          <li><i>We are continuing to work on translating & adapting template forms (contact Project Leads for more information or to help!)</i></li>
          <li><i>24 authors on</i> <a href="https://doi.org/10.1037/dev0001623" target="_blank"><b>Developmental Psychology</b></a> <i>publication</i></li>
          <li><i>14 authors on</i> <a href="https://doi.org/10.1080/15248372.2024.2431106" target="_blank"><b>Journal of Cognition and Development</b></a> <i>"Tools of the Trade" publication</i></li>
          <li><i><b>IMPACT</b>: Two leading developmental journals, </i><b><a href="https://onlinelibrary.wiley.com/page/journal/14677687/homepage/forauthors.html#categories" target="_blank">Developmental Science</a></b><i> and </i><b><a href="https://doi.org/10.1111/infa.70003" target="_blank">Infancy</a></b><i>, have  modified their demographic reporting requirements based on the recommendations laid out in the MB-Demographics publications</i></li>
        </ul>
      </div>
    </div>
  </div>
</div>

***

In this project, we present a framework to standardize demographic reporting for early child development (birth to 3 years of age), focusing on six core sociodemographic construct categories: biological information, gestational status, health status, community of descent, caregiving environment, and socioeconomic status. For each category, we discuss potential constructs and measurement items and provide guidance for their use and adaptation to diverse contexts. These items are stored in an [open repository of context-adapted questionnaires](https://osf.io/nqc92/) that provide a consistent approach to obtaining and reporting demographic information so that these data can be archived and shared in a more standardized format. <br>

<div>
  <div class="container" style="width:90%; margin:0 auto;">
    <div class="row">
      <div class="col-sm-12" align=center>
        <img src="/assets/img/demographics_figure2.png"><br>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12" align=left>
        <p style="font-size:14px; "><b>Figure 1.</b> A figure from <a href="https://doi.org/10.1037/dev0001623" target="_blank">Singh, Barokova, Baumgartner, et. al (2024)</a>.</p>
      </div>
    </div>
  </div>
</div>

***
## Links
* **Listserv**: [join here](https://mailman.stanford.edu/mailman/listinfo/manybabies-demographics)
* **OSF**: [main project](https://osf.io/tc7hy/), [form repository](https://osf.io/nqc92/)

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
## MB-Demographics Contributors
> NOTE: Default table ordering is by contributor's first name. You can filter, group, and/or sort entries by any field.

<iframe class="airtable-embed" src="https://airtable.com/embed/appRoqMKzcK3NsXt4/shrm0mXHFQb47ODDP?backgroundColor=blueDusty&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

***
## Publications

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