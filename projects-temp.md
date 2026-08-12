---
layout: page
title: Projects
subtitle: Pulled live from Airtable
---

<div class="row">
{% for item in site.data.airtable %}
  <h3>{{ item.project }}</h3>
  {% for lead in item.leads %}{{ lead }}{% unless forloop.last %}, {% endunless %}{% endfor %}
  <br>
{% endfor %}
</div>
