---
layout: page
title: MB1
subtitle: page for testing stuff out
---

{% assign current_project = site.data.airtable | where: "project", page.title | first %}

## Project Leads
<!--
<ul>
  {% assign leads = current_project | where: "type", "Spin-off" | where: "mainProject", page.title %}
  {% for spinoff in spinoffs %} <!--- loop over spinoff projects 
    <li><img src="{{ spinoff.logoPath }}" alt="{{ spinoff.project}} logo" width="20"> <b><a href="https://{{spinoff.website }}">{{spinoff.project}}</a>: {{ spinoff.description }} </b></li>
  {% endfor %}
  {% assign secondary = site.data.airtable | where: "type", "Secondary analysis" | where: "mainProject", page.title %}
  {% for item in secondary %} <!--- loop over secondary projects 
    <li><img src="{{ item.logoPath }}" alt="{{ item.project}} logo" width="20"> <b><a href="https://{{item.website }}">{{item.project}}</a>: {{ item.description }} </b></li>
  {% endfor %}
</ul>
-->


{% for lead in current_project.leads %}
  {% if lead.orcid %}
    {{ lead.name }}, {{ lead.institution }} <a href="{{ lead.orcid }}"><img src="/assets/img/orcid.png" height="15"></a> 
  {% else %}
    {{ lead.name }}
  {% endif %}{% unless forloop.last %}<br> {% endunless %}
{% endfor %}