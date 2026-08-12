---
layout: page
title: Projects
subtitle: Pulled live from Airtable
---

{% assign sorted_projects = site.data.airtable | sort: "project" %}
{% for item in sorted_projects %}
  <div class="panel panel-default">
    {% if item.logopath %}<img src="{{ item.logopath }}" alt="{{ item.project }} logo" width="75" height="75">{% endif %}
    <h4>{{ item.project }}: {{ item.description }}</h4>
    <p><strong>Leads:</strong> {% for lead in item.leads %}{{ lead }}{% unless forloop.last %}, {% endunless %}{% endfor %}</p>
    {% if item.website %}<a href="https://{{ item.website }}">Visit site →</a>{% endif %}
    <br>
    <br>
  </div>
{% endfor %}
