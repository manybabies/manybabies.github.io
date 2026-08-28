---
layout: page
title: MB1
subtitle: page for testing stuff out
---

{% assign current_project = site.data.airtable | where: "project", page.title | first %}

## Project Leads

{% for lead in current_project.leads %}
  {% if lead.orcid %}
    {{ lead.name }}, {{ lead.institution }} <a href="{{ lead.orcid }}"><img src="/assets/img/orcid.png" height="15"></a> 
  {% else %}
    {{ lead.name }}
  {% endif %}{% unless forloop.last %}<br> {% endunless %}
{% endfor %}