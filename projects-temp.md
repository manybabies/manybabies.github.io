---
layout: page
title: Projects
subtitle: Pulled live from Airtable
---


{% for item in site.data.airtable %}
  <div class="panel panel-default">
    {% if item.logopath %}<img src="{{ item.logopath }}" alt="{{ item.project }} logo">{% endif %}
    <h4>{{ item.project }}: {{ item.description }}</h4>
    <p><strong>Leads:</strong> {% for lead in item.leads %}{{ lead }}{% unless forloop.last %}, {% endunless %}{% endfor %}</p>
    {% if item.website %}<a href="https://{{ item.website }}">Visit site →</a>{% endif %}
  </div>
{% endfor %}
