---
layout: page
title: MB5
subtitle: page for testing stuff out
---

{% assign current_project = site.data.airtable | where: "project", page.title | first %}
{% assign pubs = site.data.publications | where: "project", page.title %}


<div class="container">
  <div class="box-overview" style="box-shadow: -10px 10px {{ current_project.color }};">
    <div class="row justify-content-around">
      <div class="col-lg-4" align="center">
        <br>
        <img src="{{ current_project.logoPath }}" width="150" style="margin-bottom:20px;">
      </div>
      <div class="col-lg-8" align="left" style="margin-top:10px;">
        <p class="overview"><img src="/assets/img/status.png" class="overview-icon"> <b>Status: <code>{{ current_project.status }}</code></b></p>
        <p class="overview"><img src="/assets/img/email.png" class="overview-icon"> <b>Contact: <a href="mailto:{{ current_project.contact }}"><code>{{ current_project.contact }}</code></a></b></p>
        {% if current_project.nTested %}
          <p class="overview"><img src="/assets/img/people.png" class="overview-icon"> <b>{{ current_project.nTested }} babies</b> tested by <b>{{current_project.labs }} labs</b></p>
        {% endif %}
        {% for pub in pubs %} <!--- loop over pubs for specified project -->
          <p class="overview"><img src="/assets/img/paper.png" class="overview-icon"> {{ pub.nAuthors }} authors from {{ pub.nCountries }} countries on <i>{{pub.journal}}</i> publication</p>
        {% endif %}
      </div>
    </div>
  </div>
</div>