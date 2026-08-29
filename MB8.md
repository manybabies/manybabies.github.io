---
layout: page
title: MB8
subtitle: Screen Use
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
          <li><i>Subscribe to the <a href="{{ site.data.global.listserv.mb8 }}" target="_blank"><b>MB8 listserv</b></a> and/or <a href="mailto:{{ site.data.global.contact.mb8 }}"><b>email us</b></a> to get involved!</i></li>
        </ul>
      </div>
    </div>
  </div>
</div>

***

<ul>
  <li><h3>Missed the launch events? View the <a href="https://drive.google.com/file/d/1MpXhiy4F3SVQG4-woO7j-7AUu3Qva-_9/view?usp=sharing" target="_blank">recording</a> and <a href="https://docs.google.com/presentation/d/1rR_bGjyWZ0UOvftkOBEFCU4ZYrrdlDAg/edit?pli=1" target="_blank">slides</a></h3></li>
  <li><h3><a href="https://calendar.app.google/w5kU1mFNAH1CwyHk6" target="_blank">Book a meeting</a> to discuss the project with a project lead</h3></li>
</ul>


<p>Young children begin interacting with digital media within the first months of life, yet research on early digital media use remains limited in scope and comparability. Existing evidence is overwhelmingly based on WEIRD populations (<i>Western, Educated, Industrialized, Rich,</i> and <i>Democratic</i>; see <a href="https://doi.org/10.21428/e2759450.8e9a83b0" target="_blank">Henrich, 2024</a>) / Minority world, leaving major gaps in our understanding of how very young children engage with digital media in non-WEIRD contexts, where cultural norms, economic conditions, and caregiving practices may differ substantially. This lack of global diversity limits the generalizability of existing findings and makes it difficult to understand how contextual factors shape the relationship between digital media use and child development. Moreover, the use of diverse, non-standardized assessment tools further hinders meaningful comparisons across studies and countries.</p>
<p>The MB8 project addresses these gaps by examining cross-country variation in young children's digital media use and investigating how early media experiences relate to language and socio-emotional development across diverse cultural and socioeconomic contexts. By adopting a common methodology and standardized measures, MB8 aims to establish a unified and accessible approach to data collection that will benefit researchers studying child media use as well as developmental scientists more broadly.</p>
<p>The study will recruit families of children aged 6 to 36 months using a common research protocol translated and culturally adapted across participating countries. Parents will complete a standardized online survey incorporating validated measures of children's digital media experiences, including media quality, joint media engagement with caregivers, and parental attitudes and motivations regarding media use (Media Assessment Questionnaire v2; <a href="https://nyu.databrary.org/volume/1785" target="_blank">Barr et al., 2024</a>), as well as family characteristics (<a href="https://doi.org/10.1037/dev0001623" target="_blank">Singh et al., 2024</a>), children's language development (MacArthur-Bates Communicative Development Inventory; <a href="https://doi.org/10.2307/1166093" target="_blank">Fenson et al., 1994</a>), and socio-emotional development (BITSEA; <a href="https://doi.org/10.1093/jpepsy/jsh017" target="_blank">Briggs-Gowan & Carter, 2004</a>). The use of shared procedures and validated instruments across sites will enable direct comparisons across diverse cultural and socioeconomic settings.</p>
<p>Beyond documenting children's digital media use globally, MB8 seeks to address several fundamental questions: How much screen media are young children exposed to across countries? How do family characteristics, cultural practices, and national contexts shape children's digital environments? Which aspects of media use—such as co-viewing with caregivers, parental motivations, and media content—are consistently associated with developmental outcomes across cultures, and which are context-specific? Addressing these questions is essential for moving beyond simplistic measures of "screen time" toward a more nuanced understanding of children's digital media experiences.
Ultimately, MB8 will establish an enduring international research infrastructure and an openly accessible scientific resource for the developmental science community. By generating a comprehensive global evidence base on young children's digital media experiences, the project aims to support more equitable, culturally informed, and evidence-based recommendations for families, practitioners, and policymakers worldwide.</p>

<div>
  <div class="container" style="width:90%; margin:0 auto;">
    <div class="row">
      <div class="col-sm-12" align=left>
        <h4>Project timeline and status <i>(updated mid-2026)</i></h4>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12" align=center>
        <img src="/assets/img/mb8-timeline.png"><br>
      </div>
    </div>
  </div>
</div>

<p>MB8 comprises nearly 400 members and more than 150 data collection sites across approximately 60 countries. The project continues to expand its international network, with a particular focus on increasing representation from currently underrepresented regions. Researchers and research teams from countries not yet represented in MB8 are warmly encouraged to join the project!</p>

<div>
  <div class="container" style="width:90%; margin:0 auto;" align="center">
    <img src="/assets/img/mb8-map.png"> 
  </div>
</div>

***
## Links
* <h4><a href="https://smu.az1.qualtrics.com/jfe/form/SV_d5a87KG6gnkJ5mS" target="_blank">MB8 Collaboration Agreement</a></h4>
* **Listserv**: [subscribe here]({{ site.data.global.listserv.mb8 }}) *(click on "for access, try joining the group")*

*** 
## Project Leads
* **General Contact: [{{ site.data.global.contact.mb8 }}](mailto:{{ site.data.global.contact.mb8 }})**
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
## MB8 Contributors

We encourage everyone who is interested in the project to subscribe to the MB8 listserv and email the Project Leads ([{{ site.data.global.contact.mb8 }}](mailto:{{ site.data.global.contact.mb8 }})) to indicate your interest. Please note that access to infants/an infant lab is **NOT** a prerequisite.

> NOTE: Default table ordering is by contributor's first name. You can filter, group, and/or sort entries by any field.

<iframe class="airtable-embed" src="https://airtable.com/embed/appRoqMKzcK3NsXt4/shrQWLYa04PNMzACC?viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

> Project contributors can update/add info to the contributor list/MB Dashboard using <a href="{{ site.data.global.link.dashboard-form }}" target="_blank"><b>this form</b></a> 

