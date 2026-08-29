---
layout: page
title: MB1B
subtitle: Infant-directed Speech Preference in Bilingual Infants
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
          <li><i>17 participating labs collected data in 7 countries</i></li>
          <li><i>333 bilingual infants tested (in addition to 384 monolingual infants from MB1 sample)</i></li>
          <li><i>38 authors on</i> <a href="https://doi.org/10.1177/2515245920974622" target="_blank"><b>AMPPS</b></a> <i>publication</i></li>
        </ul>
      </div>
    </div>
  </div>
</div>

***

<p><img style="float: right;" src="/assets/img/eyetracking_unicph_2yo_3_300px.jpg">
In this project we used the diversity of bilingual infant experiences to explore the impact of different types of linguistic experience on infants’ Infant Directed Speech (IDS) preference over Adult Directed Speech (ADS).  We compared lab-matched samples of 333 bilingual and 384 monolingual infants’ preference for North-American English IDS, tested in 17 labs in 7 countries. Those infants were tested in two age groups: 6–9 months and 12–15 months.</p>

<p>We found that bilingual and monolingual infants preferred IDS to ADS, and did not differ in terms of the overall magnitude of this preference. However, amongst bilingual infants who were acquiring North-American English (NAE) as a native language, greater exposure to NAE was associated with a stronger IDS preference, extending the previous finding from MB1 that monolinguals learning NAE as a native language showed a stronger preference than infants unexposed to NAE.</p>

<img style="float: right;" src="/assets/img/mb1b_plot1_lq_replace.jpg">

<p>Together, our findings indicate that IDS preference likely makes a similar contribution to monolingual and bilingual development, and that infants are exquisitely sensitive to the nature and frequency of different types of language input in their early environments.</p>


***
## Links
* **Materials, Protocols, and Documentation**: [MB1B-OSF](https://osf.io/zauhq/).
* **Data and code**: [MB1B-GitHub](https://github.com/manybabies/mb1b-analysis-public).
* **Listserv**: [join here](https://groups.google.com/forum/#!forum/manybabies-bilingual).
* **News**: [MB1B-news]({{site.baseurl}}/tags/#MB1B).


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
## MB1B Contributors
> NOTE: Default table ordering is by contributor's first name. You can filter, group, and/or sort entries by any field.

<iframe class="airtable-embed" src="https://airtable.com/embed/appRoqMKzcK3NsXt4/shrPpO5NIi9yLdp87?backgroundColor=blueDusty&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>


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
