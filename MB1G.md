---
layout: page
title: MB1G
subtitle: The Development of Gaze Following in Monolingual and Bilingual Infants
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
          <li><i>11 participating labs collected data in 8 countries</i></li>
          <li><i>322 infants tested</i></li>
          <li><i>27 authors on</i> <a href="https://doi.org/10.1111/infa.12360" target="_blank"><b>Infancy</b></a> <i>publication</i></li>
        </ul>
      </div>
    </div>
  </div>
</div>

***

<p>In this project we investigated the development of gaze following in monolingual and bilingual infants. Sensitivity to cues such as eye gaze might be particularly important for bilingual infants, as they encounter less consistency between words and objects than monolinguals, and do not always have access to the same word learning heuristics (e.g., <a href="https://en.wikipedia.org/wiki/Mutual_exclusivity_(psychology)" target="_blank">mutual exclusivity</a>).</p>

<p><img style="float: right;" src="/assets/img/mb1g_paradigm_300px.jpg">
To test the hypothesis that bilingual experience would lead to a more pronounced ability to follow another’s gaze, we tested a total of 93 6–9 month-old and 229 12–15 month-old monolingual and bilingual infants (from 11 labs in 8 countries) in a gaze-following paradigm developed by <a href="https://doi.org/10.1016/j.cub.2008.03.059" target="_blank">Senju and Csibra (2008)</a>. Monolingual and bilingual infants showed similar gaze-following abilities, and both groups showed age-related improvements in speed, accuracy, frequency and duration of fixations.</p>

<img src="/assets/img/mb1g_first_freq_look.jpg">

<p>Unexpectedly, bilinguals tended to make more frequent fixations to onscreen objects, whether or not they were cued by the actor.</p>

<img src="/assets/img/mb1g_dur_freq.jpg">

<p>Our findings suggest that gaze sensitivity is a fundamental aspect of development that is robust to variation in language exposure.</p>


***
## Links
* **Materials, Protocols, and Documentation**: [MB1G-OSF](https://osf.io/2ey3k/).
* **Data and code**: [MB1G-GitHub](https://github.com/kristabh/gaze-following-analysis).
* **News**: [MB1G-news]({{site.baseurl}}/tags/#MB1G).


***
## Project Lead
* [**Krista Byers-Heinlein**](https://www.concordia.ca/artsci/psychology/faculty.html?fpid=krista-byers-heinlein), *Concordia University, Canada* [[email]](mailto:k.byers@concordia.ca)


***
## MB1G Contributors
> NOTE: Default table ordering is by contributor's first name. You can filter, group, and/or sort entries by any field.

<iframe class="airtable-embed" src="https://airtable.com/embed/appRoqMKzcK3NsXt4/shrXqhLQPBDJYLANb?backgroundColor=blueDusty&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

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

