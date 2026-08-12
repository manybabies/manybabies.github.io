---
layout: page
title: Projects
subtitle: Pulled live from Airtable
---

<div class="row">
{% for item in site.data.airtable %}
  <h3>{{ item.project }}</h3>
  <ul>
  {% for lead in item.leads %}
    <li>{{ lead }}</li>
  {% endfor %}
  </ul>
  <br>
{% endfor %}
</div>
