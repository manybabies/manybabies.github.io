---
layout: page
title: Projects
subtitle: Pulled live from Airtable
---

<div class="row">
{% for item in site.data.airtable %}
  <h3>{{ item.project }}</h3>
  <p>{% for lead in item.leads %}{{ lead }}{% unless forloop.last %}, {% endunless %}{% endfor %}</p>
{% endfor %}
</div>


{% for item in site.data.airtable %}
  <div class="panel panel-default">
    {% if item.logo %}<img src="{{ item.logo }}" alt="{{ item.project }} logo">{% endif %}
    <h4>{{ item.project }}: {{ item.title }}</h4>
    <p>{{ item.description }}</p>
    <p><strong>Leads:</strong> {% for lead in item.leads %}{{ lead }}{% unless forloop.last %}, {% endunless %}{% endfor %}</p>
    {% if item.website %}<a href="https://{{ item.website }}">Visit site →</a>{% endif %}
  </div>
{% endfor %}
