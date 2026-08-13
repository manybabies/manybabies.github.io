---
layout: page
title: Projects
subtitle: Pulled live from Airtable
---

{% for item in site.data.airtable %}
  <div class="panel panel-default">
    <br>
    {% if item.logopath %}<img src="{{ item.logopath }}" alt="{{ item.project }} logo" width="75" height="75">{% endif %}
    <h4>{{ item.project }}: {{ item.description }}</h4>
    <p><strong>Leads:</strong> {% for lead in item.leads %}{{ lead }}{% unless forloop.last %}, {% endunless %}{% endfor %}</p>
    {% if item.website %}<a href="https://{{ item.website }}">Visit site →</a>{% endif %}
    <br>
    <br>
  </div>
{% endfor %}


{% assign mb1n = site.data.airtable | where: "project", "MB1N" | first %}
{% if mb1n %}
  <a href="https://{{ mb1n.website }}">Visit MB1N →</a>
{% endif %}

{% assign spinoffs = site.data.airtable | where: "type", "Spin-off" | where: "mainproject", "MB1" %}
{% for item in spinoffs %}
  <h4>{{ item.project }}: {{ item.description }}</h4>
{% endfor %}
