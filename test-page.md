---
layout: page
title: MB1
subtitle: page for testing stuff out
---

{% assign current_project = site.data.airtable | where: "project", page.title | first %}

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